'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        register: "Register Herbs",
        track: "Track Herbs",
        verify: "Verify QR",
        dashboard: "Dashboard",
      },
      // Common
      common: {
        submit: "Submit",
        cancel: "Cancel",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        yes: "Yes",
        no: "No",
      },
      // Home page
      home: {
        title: "Blockchain-Powered Herb Traceability",
        subtitle: "From farm to formulation, track every step of your Ayurvedic herbs with complete transparency and trust through blockchain technology.",
        cta: "Start Verification",
        features: {
          transparency: "Full Transparency",
          transparencyDesc: "Complete visibility from farm to final product",
          security: "Blockchain Security",
          securityDesc: "Immutable records secured by blockchain technology",
          compliance: "Regulatory Compliance",
          complianceDesc: "Meet AYUSH and international quality standards",
        }
      },
      // Verify page
      verify: {
        title: "Verify Herb Authenticity",
        subtitle: "Enter the Herb ID or scan the QR code to verify authenticity and trace the complete journey of your Ayurvedic herbs.",
        batchId: "Herb Batch ID",
        placeholder: "Enter Herb ID (e.g., 1)",
        button: "Verify Herb Batch",
        verifying: "Verifying on Blockchain...",
        success: {
          title: "Herb Verified Successfully!",
          subtitle: "This herb batch is authentic and traceable on the blockchain.",
        },
        failed: {
          title: "Verification Failed",
          subtitle: "The herb batch could not be verified. This could mean:",
          reasons: {
            invalid: "Invalid or incorrect Herb ID",
            notRegistered: "Herb batch not registered on blockchain",
            counterfeit: "Counterfeit or fraudulent product",
          }
        },
        error: {
          empty: "Please enter a Herb ID",
          notFound: "Herb batch not found or invalid",
          failed: "Failed to verify herb batch",
        },
        details: {
          herbDetails: "Herb Details",
          collectionInfo: "Collection Info",
          batchId: "Batch ID",
          name: "Name",
          scientificName: "Scientific Name",
          quantity: "Quantity",
          farmer: "Farmer",
          status: "Status",
          location: "Location",
          collectionDate: "Collection Date",
          blockchainHash: "Blockchain Hash",
          supplyChainJourney: "Supply Chain Journey",
          handledBy: "Handled by",
        },
        howItWorks: {
          title: "How Verification Works",
          step1: {
            title: "Scan QR Code",
            desc: "Scan the QR code on the product or enter the Herb ID manually"
          },
          step2: {
            title: "Blockchain Query",
            desc: "System queries the blockchain for authentic herb data"
          },
          step3: {
            title: "View Journey",
            desc: "See the complete traceability from farm to final product"
          }
        }
      },
      // Register page
      register: {
        title: "Register New Herb Batch",
        subtitle: "Add a new herb batch to the blockchain for complete traceability.",
        form: {
          herbName: "Herb Name",
          scientificName: "Scientific Name",
          quantity: "Quantity",
          unit: "Unit",
          farmerName: "Farmer Name",
          farmLocation: "Farm Location",
          collectionDate: "Collection Date",
          qualityGrade: "Quality Grade",
          certifications: "Certifications",
          submit: "Register on Blockchain",
          submitting: "Registering on Blockchain...",
        },
        success: "Herb batch registered successfully!",
        error: "Failed to register herb batch",
      },
      // Herbs tracking page
      herbs: {
        title: "Track Registered Herbs",
        subtitle: "Monitor all registered herb batches and their current status.",
        noHerbs: "No herb batches found",
        loadMore: "Load More",
        filters: {
          all: "All Status",
          collected: "Collected",
          processed: "Processed",
          tested: "Tested",
          transported: "Transported",
          manufactured: "Manufactured",
        }
      }
    },
  },
  hi: {
    translation: {
      // Navigation
      nav: {
        home: "होम",
        register: "जड़ी-बूटियाँ पंजीकृत करें",
        track: "जड़ी-बूटियों को ट्रैक करें",
        verify: "QR सत्यापित करें",
        dashboard: "डैशबोर्ड",
      },
      // Common
      common: {
        submit: "जमा करें",
        cancel: "रद्द करें",
        save: "सहेजें",
        delete: "हटाएं",
        edit: "संपादित करें",
        loading: "लोड हो रहा है...",
        error: "त्रुटि",
        success: "सफलता",
        yes: "हाँ",
        no: "नहीं",
      },
      // Home page
      home: {
        title: "ब्लॉकचेन-संचालित जड़ी-बूटी ट्रेसेबिलिटी",
        subtitle: "खेत से निर्माण तक, ब्लॉकचेन तकनीक के माध्यम से पूर्ण पारदर्शिता और विश्वास के साथ अपनी आयुर्वेदिक जड़ी-बूटियों के हर कदम को ट्रैक करें।",
        cta: "सत्यापन शुरू करें",
        features: {
          transparency: "पूर्ण पारदर्शिता",
          transparencyDesc: "खेत से अंतिम उत्पाद तक पूरी दृश्यता",
          security: "ब्लॉकचेन सुरक्षा",
          securityDesc: "ब्लॉकचेन तकनीक द्वारा सुरक्षित अपरिवर्तनीय रिकॉर्ड",
          compliance: "नियामक अनुपालन",
          complianceDesc: "आयुष और अंतर्राष्ट्रीय गुणवत्ता मानकों को पूरा करें",
        }
      },
      // Verify page
      verify: {
        title: "जड़ी-बूटी की प्रामाणिकता सत्यापित करें",
        subtitle: "प्रामाणिकता सत्यापित करने और अपनी आयुर्वेदिक जड़ी-बूटियों की पूरी यात्रा का पता लगाने के लिए जड़ी-बूटी ID दर्ज करें या QR कोड स्कैन करें।",
        batchId: "जड़ी-बूटी बैच ID",
        placeholder: "जड़ी-बूटी ID दर्ज करें (जैसे, 1)",
        button: "जड़ी-बूटी बैच सत्यापित करें",
        verifying: "ब्लॉकचेन पर सत्यापित कर रहे हैं...",
        success: {
          title: "जड़ी-बूटी सफलतापूर्वक सत्यापित!",
          subtitle: "यह जड़ी-बूटी बैच प्रामाणिक है और ब्लॉकचेन पर ट्रेसेबल है।",
        },
        failed: {
          title: "सत्यापन विफल",
          subtitle: "जड़ी-बूटी बैच सत्यापित नहीं हो सका। इसका मतलब हो सकता है:",
          reasons: {
            invalid: "अमान्य या गलत जड़ी-बूटी ID",
            notRegistered: "जड़ी-बूटी बैच ब्लॉकचेन पर पंजीकृत नहीं",
            counterfeit: "नकली या धोखाधड़ी वाला उत्पाद",
          }
        },
        error: {
          empty: "कृपया जड़ी-बूटी ID दर्ज करें",
          notFound: "जड़ी-बूटी बैच नहीं मिला या अमान्य",
          failed: "जड़ी-बूटी बैच सत्यापित करने में विफल",
        },
        details: {
          herbDetails: "जड़ी-बूटी विवरण",
          collectionInfo: "संग्रह की जानकारी",
          batchId: "बैच ID",
          name: "नाम",
          scientificName: "वैज्ञानिक नाम",
          quantity: "मात्रा",
          farmer: "किसान",
          status: "स्थिति",
          location: "स्थान",
          collectionDate: "संग्रह दिनांक",
          blockchainHash: "ब्लॉकचेन हैश",
          supplyChainJourney: "आपूर्ति श्रृंखला यात्रा",
          handledBy: "द्वारा संभाला गया",
        },
        howItWorks: {
          title: "सत्यापन कैसे काम करता है",
          step1: {
            title: "QR कोड स्कैन करें",
            desc: "उत्पाद पर QR कोड स्कैन करें या मैन्युअल रूप से जड़ी-बूटी ID दर्ज करें"
          },
          step2: {
            title: "ब्लॉकचेन क्वेरी",
            desc: "सिस्टम प्रामाणिक जड़ी-बूटी डेटा के लिए ब्लॉकचेन से पूछताछ करता है"
          },
          step3: {
            title: "यात्रा देखें",
            desc: "खेत से अंतिम उत्पाद तक पूर्ण ट्रेसेबिलिटी देखें"
          }
        }
      },
      // Register page
      register: {
        title: "नया जड़ी-बूटी बैच पंजीकृत करें",
        subtitle: "पूर्ण ट्रेसेबिलिटी के लिए ब्लॉकचेन पर एक नया जड़ी-बूटी बैच जोड़ें।",
        form: {
          herbName: "जड़ी-बूटी का नाम",
          scientificName: "वैज्ञानिक नाम",
          quantity: "मात्रा",
          unit: "इकाई",
          farmerName: "किसान का नाम",
          farmLocation: "खेत का स्थान",
          collectionDate: "संग्रह दिनांक",
          qualityGrade: "गुणवत्ता ग्रेड",
          certifications: "प्रमाणपत्र",
          submit: "ब्लॉकचेन पर पंजीकृत करें",
          submitting: "ब्लॉकचेन पर पंजीकृत कर रहे हैं...",
        },
        success: "जड़ी-बूटी बैच सफलतापूर्वक पंजीकृत!",
        error: "जड़ी-बूटी बैच पंजीकृत करने में विफल",
      },
      // Herbs tracking page
      herbs: {
        title: "पंजीकृत जड़ी-बूटियों को ट्रैक करें",
        subtitle: "सभी पंजीकृत जड़ी-बूटी बैचों और उनकी वर्तमान स्थिति की निगरानी करें।",
        noHerbs: "कोई जड़ी-बूटी बैच नहीं मिला",
        loadMore: "और लोड करें",
        filters: {
          all: "सभी स्थिति",
          collected: "एकत्रित",
          processed: "संसाधित",
          tested: "परीक्षित",
          transported: "परिवहन",
          manufactured: "निर्मित",
        }
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // default language
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
