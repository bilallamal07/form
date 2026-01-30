/**
 * GOOGLE APPS SCRIPT - Formulaire Automatisation
 *
 * Ce script :
 * 1. Reçoit les données du formulaire HTML
 * 2. Enregistre dans Google Sheets
 * 3. Envoie un email de notification
 *
 * INSTALLATION :
 * 1. Allez sur https://script.google.com
 * 2. Nouveau projet
 * 3. Copiez ce code
 * 4. Configurez les variables ci-dessous
 * 5. Déployez comme Web App
 */

// ====== CONFIGURATION (À MODIFIER) ======

// Votre email pour recevoir les notifications
const VOTRE_EMAIL = "votre-email@exemple.com";

// ID de votre Google Sheet (trouvez-le dans l'URL de votre feuille)
// URL exemple: https://docs.google.com/spreadsheets/d/XXXXX_ID_ICI_XXXXX/edit
const SHEET_ID = "VOTRE_SHEET_ID_ICI";

// Nom de l'onglet dans votre Google Sheet
const SHEET_NAME = "Demandes";

// ====== FIN DE LA CONFIGURATION ======


/**
 * Fonction principale - Gère les requêtes POST du formulaire
 */
function doPost(e) {
  try {
    // Parse les données du formulaire
    const data = JSON.parse(e.postData.contents);

    // Validation basique
    if (!data.nom || !data.email || !data.tache || !data.temps) {
      return createResponse(false, "Tous les champs sont requis");
    }

    // Validation email
    if (!isValidEmail(data.email)) {
      return createResponse(false, "Email invalide");
    }

    // Enregistrer dans Google Sheets
    saveToSheet(data);

    // Envoyer l'email de notification
    sendNotificationEmail(data);

    // Retourner succès
    return createResponse(true, "Demande envoyée avec succès !");

  } catch (error) {
    console.error("Erreur:", error);
    return createResponse(false, "Erreur serveur: " + error.message);
  }
}

/**
 * Teste le script (utilisez Run > testScript dans l'éditeur)
 */
function testScript() {
  const testData = {
    nom: "Test Client",
    email: "test@exemple.com",
    tache: "Test de la tâche d'automatisation",
    temps: "5 heures"
  };

  saveToSheet(testData);
  sendNotificationEmail(testData);

  Logger.log("✅ Test réussi ! Vérifiez votre Google Sheet et votre email.");
}

/**
 * Enregistre les données dans Google Sheets
 */
function saveToSheet(data) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Si la feuille n'existe pas, la créer
    if (!sheet) {
      const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      const newSheet = spreadsheet.insertSheet(SHEET_NAME);

      // Ajouter les en-têtes
      newSheet.appendRow(["Date", "Nom", "Email", "Tâche", "Temps par semaine"]);

      // Formater les en-têtes
      const headerRange = newSheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#667eea");
      headerRange.setFontColor("#ffffff");
    }

    const targetSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Ajouter la nouvelle ligne
    targetSheet.appendRow([
      new Date().toLocaleString("fr-FR"),
      data.nom,
      data.email,
      data.tache,
      data.temps
    ]);

    Logger.log("✅ Données enregistrées dans Google Sheets");

  } catch (error) {
    console.error("Erreur lors de l'enregistrement:", error);
    throw new Error("Impossible d'enregistrer dans Google Sheets");
  }
}

/**
 * Envoie un email de notification
 */
function sendNotificationEmail(data) {
  try {
    const sujet = "🔔 Nouvelle demande d'automatisation - " + data.nom;

    const message = `
Nouvelle demande d'automatisation reçue !

📋 DÉTAILS DU CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nom : ${data.nom}
📧 Email : ${data.email}

⏱️ TÂCHE À AUTOMATISER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.tache}

⏰ Temps passé par semaine : ${data.temps}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Voir toutes les demandes :
https://docs.google.com/spreadsheets/d/${SHEET_ID}

✉️ Répondre au client :
mailto:${data.email}
    `;

    // Envoyer l'email
    MailApp.sendEmail({
      to: VOTRE_EMAIL,
      subject: sujet,
      body: message
    });

    Logger.log("✅ Email de notification envoyé");

  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    // Ne pas bloquer si l'email échoue
  }
}

/**
 * Validation de l'email
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Crée une réponse JSON pour le formulaire
 */
function createResponse(success, message) {
  const response = {
    success: success,
    message: message,
    timestamp: new Date().toISOString()
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Gère les requêtes GET (pour tester l'URL)
 */
function doGet() {
  return ContentService.createTextOutput(
    "✅ Le script fonctionne ! Utilisez POST pour soumettre des données."
  );
}
