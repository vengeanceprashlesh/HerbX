const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await hre.ethers.provider.getBalance(deployer.address)).toString());

  // Deploy HerbTraceability contract
  const HerbTraceability = await hre.ethers.getContractFactory("HerbTraceability");
  const herbTraceability = await HerbTraceability.deploy(deployer.address);

  await herbTraceability.waitForDeployment();

  const contractAddress = await herbTraceability.getAddress();
  console.log("HerbTraceability deployed to:", contractAddress);

  // Save deployment information
  const deploymentInfo = {
    network: hre.network.name,
    contractAddress: contractAddress,
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    blockNumber: await hre.ethers.provider.getBlockNumber()
  };

  console.log("Deployment Info:", deploymentInfo);

  // Verify contract on testnet (if not local)
  if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
    console.log("Waiting for block confirmations...");
    await herbTraceability.deploymentTransaction().wait(5);
    
    try {
      await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: [deployer.address],
      });
    } catch (e) {
      console.log("Verification failed:", e.message);
    }
  }

  return {
    contract: herbTraceability,
    address: contractAddress
  };
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
