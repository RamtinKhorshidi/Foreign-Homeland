/**
 * socialLinks
 * -----------------------------------------------------------------------------
 * Maps actor/crew IDs to their respective Instagram profiles.
 * 
 * Purpose:
 * This data is used within the `openModal` function to append a "Follow on Instagram" 
 * button to the biography modal if a link exists for that person.
 * 
 * Design Decision:
 * Keeping social links separate from the main actor data allows for easier 
 * updates and maintains a clean separation of biographical content and 
 * external social media handles.
 */
const socialLinks = {
    'reza': 'https://www.instagram.com/rami.momti?igsh=MWJ0angzazgzNGh5Nw==',       // Ramtin
    'sara': 'https://www.instagram.com/masoumi.zara?igsh=dnc5aTFnd2l3NDA5',         // Zahra
    'jamshid': 'https://www.instagram.com/mostafa.alamdri?igsh=b3U5N2FuMWhhcG1p',   // Mostafa
    'ahmad': 'https://www.instagram.com/arash.minhas?igsh=aWpvN2FuNTlhY3o5',        // Arash
    'soheila': 'https://www.instagram.com/safoura20?igsh=MTEyZTdzOHdrcHY4cQ==',     // Safoura
    'jim': 'https://www.instagram.com/rick.koy?igsh=MXd5cXdjMTMzY3A5ZQ==',          // Rick Koy
    'susan': 'https://www.instagram.com/firstlakegirl?igsh=MWxqYXN1dTFoMmhkdQ==',   // Alexandra Scott
    'cameron': 'https://www.instagram.com/cameron.ga.ross?igsh=YjBhZDFwYTBiMW5r',   // Cameron Ross
    'redi': 'https://www.instagram.com/redizyka?igsh=MTZhaDExNTJqZHhwdQ==',         // Redi Zyka
    'armin': 'https://www.instagram.com/armin.productions?igsh=c2pqbWs2NWZ5YWh2',   // Armin
    'sepidar': 'https://www.instagram.com/sepidar.artist?igsh=bm5ibm1odWV0aGV4',    // Sepidar
    'romin': 'https://www.instagram.com/amali_aspects?igsh=ZTE1b213OHoweG1q'        // Ramin/Romin
};
