// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title HerbTraceability
 * @dev Smart contract for tracking Ayurvedic herbs from collection to final product
 * @notice This contract enables complete traceability of herbs in the Ayurvedic supply chain
 */
contract HerbTraceability is Ownable, ReentrancyGuard {
    uint256 private _herbIdCounter;
    
    // Events
    event HerbRegistered(
        uint256 indexed herbId,
        address indexed farmer,
        string herbName,
        uint256 quantity,
        string location,
        uint256 timestamp
    );
    
    event HerbStatusUpdated(
        uint256 indexed herbId,
        address indexed updater,
        SupplyChainStage stage,
        string location,
        uint256 timestamp
    );
    
    event QualityTestAdded(
        uint256 indexed herbId,
        address indexed tester,
        bool passed,
        string testResults,
        uint256 timestamp
    );
    
    // Enums
    enum SupplyChainStage {
        COLLECTED,      // Herb collected by farmer/wildcrafter
        PROCESSED,      // Primary processing (cleaning, drying)
        TESTED,         // Quality testing completed
        TRANSPORTED,    // In transit to manufacturer
        MANUFACTURED,   // Incorporated into Ayurvedic formulation
        PACKAGED,       // Final product packaged
        DISTRIBUTED,    // Product distributed to retailers
        RETAIL          // Available for consumer purchase
    }
    
    // Structs
    struct Location {
        string latitude;
        string longitude;
        string address;
        string region;
    }
    
    struct QualityTest {
        address tester;
        bool passed;
        string testType;
        string results;
        string certificateHash;
        uint256 timestamp;
    }
    
    struct SupplyChainUpdate {
        address updater;
        SupplyChainStage stage;
        Location location;
        string description;
        uint256 timestamp;
    }
    
    struct Herb {
        uint256 id;
        address farmer;
        string name;
        string botanicalName;
        uint256 quantity;
        string unit; // kg, grams, pieces
        Location collectionLocation;
        uint256 collectionTimestamp;
        SupplyChainStage currentStage;
        bool isActive;
        string metadataURI; // IPFS hash for additional data
    }
    
    // Mappings
    mapping(uint256 => Herb) public herbs;
    mapping(uint256 => SupplyChainUpdate[]) public supplyChainHistory;
    mapping(uint256 => QualityTest[]) public qualityTests;
    mapping(address => bool) public authorizedUpdaters;
    mapping(address => uint256[]) public farmerHerbs;
    
    // Authorized roles
    mapping(address => bool) public qualityInspectors;
    mapping(address => bool) public manufacturers;
    mapping(address => bool) public distributors;
    
    constructor(address initialOwner) Ownable(initialOwner) {
        // Grant owner all permissions initially
        authorizedUpdaters[initialOwner] = true;
        qualityInspectors[initialOwner] = true;
        manufacturers[initialOwner] = true;
        distributors[initialOwner] = true;
    }
    
    // Modifiers
    modifier onlyAuthorizedUpdater() {
        require(authorizedUpdaters[msg.sender], "Not authorized to update");
        _;
    }
    
    modifier onlyQualityInspector() {
        require(qualityInspectors[msg.sender], "Not authorized quality inspector");
        _;
    }
    
    modifier validHerbId(uint256 herbId) {
        require(herbs[herbId].isActive, "Invalid or inactive herb ID");
        _;
    }
    
    /**
     * @dev Register a new herb batch in the system
     * @param _name Common name of the herb
     * @param _botanicalName Scientific name of the herb
     * @param _quantity Amount of herbs collected
     * @param _unit Unit of measurement (kg, grams, pieces)
     * @param _location Collection location details
     * @param _metadataURI IPFS hash containing additional metadata
     */
    function registerHerb(
        string memory _name,
        string memory _botanicalName,
        uint256 _quantity,
        string memory _unit,
        Location memory _location,
        string memory _metadataURI
    ) external nonReentrant returns (uint256) {
        require(bytes(_name).length > 0, "Herb name cannot be empty");
        require(_quantity > 0, "Quantity must be greater than 0");
        require(bytes(_location.latitude).length > 0, "Latitude required");
        require(bytes(_location.longitude).length > 0, "Longitude required");
        
        _herbIdCounter++;
        uint256 newHerbId = _herbIdCounter;
        
        herbs[newHerbId] = Herb({
            id: newHerbId,
            farmer: msg.sender,
            name: _name,
            botanicalName: _botanicalName,
            quantity: _quantity,
            unit: _unit,
            collectionLocation: _location,
            collectionTimestamp: block.timestamp,
            currentStage: SupplyChainStage.COLLECTED,
            isActive: true,
            metadataURI: _metadataURI
        });
        
        // Add initial supply chain entry
        supplyChainHistory[newHerbId].push(SupplyChainUpdate({
            updater: msg.sender,
            stage: SupplyChainStage.COLLECTED,
            location: _location,
            description: "Initial herb collection",
            timestamp: block.timestamp
        }));
        
        // Track farmer's herbs
        farmerHerbs[msg.sender].push(newHerbId);
        
        emit HerbRegistered(
            newHerbId,
            msg.sender,
            _name,
            _quantity,
            string(abi.encodePacked(_location.latitude, ",", _location.longitude)),
            block.timestamp
        );
        
        return newHerbId;
    }
    
    /**
     * @dev Update supply chain stage for a herb batch
     */
    function updateSupplyChainStage(
        uint256 _herbId,
        SupplyChainStage _newStage,
        Location memory _location,
        string memory _description
    ) external onlyAuthorizedUpdater validHerbId(_herbId) nonReentrant {
        require(_newStage > herbs[_herbId].currentStage, "Cannot move backwards in supply chain");
        
        herbs[_herbId].currentStage = _newStage;
        
        supplyChainHistory[_herbId].push(SupplyChainUpdate({
            updater: msg.sender,
            stage: _newStage,
            location: _location,
            description: _description,
            timestamp: block.timestamp
        }));
        
        emit HerbStatusUpdated(
            _herbId,
            msg.sender,
            _newStage,
            string(abi.encodePacked(_location.latitude, ",", _location.longitude)),
            block.timestamp
        );
    }
    
    /**
     * @dev Add quality test results for a herb batch
     */
    function addQualityTest(
        uint256 _herbId,
        bool _passed,
        string memory _testType,
        string memory _results,
        string memory _certificateHash
    ) external onlyQualityInspector validHerbId(_herbId) nonReentrant {
        qualityTests[_herbId].push(QualityTest({
            tester: msg.sender,
            passed: _passed,
            testType: _testType,
            results: _results,
            certificateHash: _certificateHash,
            timestamp: block.timestamp
        }));
        
        emit QualityTestAdded(_herbId, msg.sender, _passed, _results, block.timestamp);
    }
    
    /**
     * @dev Get complete herb information
     */
    function getHerb(uint256 _herbId) external view validHerbId(_herbId) returns (Herb memory) {
        return herbs[_herbId];
    }
    
    /**
     * @dev Get supply chain history for a herb
     */
    function getSupplyChainHistory(uint256 _herbId) external view validHerbId(_herbId) returns (SupplyChainUpdate[] memory) {
        return supplyChainHistory[_herbId];
    }
    
    /**
     * @dev Get quality test results for a herb
     */
    function getQualityTests(uint256 _herbId) external view validHerbId(_herbId) returns (QualityTest[] memory) {
        return qualityTests[_herbId];
    }
    
    /**
     * @dev Get all herbs registered by a farmer
     */
    function getFarmerHerbs(address _farmer) external view returns (uint256[] memory) {
        return farmerHerbs[_farmer];
    }
    
    /**
     * @dev Get current total number of herbs registered
     */
    function getTotalHerbs() external view returns (uint256) {
        return _herbIdCounter;
    }
    
    // Admin functions
    function addAuthorizedUpdater(address _updater) external onlyOwner {
        authorizedUpdaters[_updater] = true;
    }
    
    function removeAuthorizedUpdater(address _updater) external onlyOwner {
        authorizedUpdaters[_updater] = false;
    }
    
    function addQualityInspector(address _inspector) external onlyOwner {
        qualityInspectors[_inspector] = true;
    }
    
    function removeQualityInspector(address _inspector) external onlyOwner {
        qualityInspectors[_inspector] = false;
    }
    
    function addManufacturer(address _manufacturer) external onlyOwner {
        manufacturers[_manufacturer] = true;
    }
    
    function removeManufacturer(address _manufacturer) external onlyOwner {
        manufacturers[_manufacturer] = false;
    }
    
    function addDistributor(address _distributor) external onlyOwner {
        distributors[_distributor] = true;
    }
    
    function removeDistributor(address _distributor) external onlyOwner {
        distributors[_distributor] = false;
    }
}
