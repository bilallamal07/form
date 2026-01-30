# 🎯 Guide Installation Formulaire GRATUIT
## Email + Google Sheets + Design HTML

**Ce que vous allez obtenir :**
- ✅ Formulaire HTML avec votre design actuel
- ✅ Accessible en ligne (URL publique)
- ✅ Email automatique à chaque soumission
- ✅ Données sauvegardées dans Google Sheets
- ✅ **100% GRATUIT** (pas de carte bancaire nécessaire)

**Temps d'installation : 20-30 minutes**

---

## 📋 Ce dont vous avez besoin

- [x] Un compte Google (Gmail)
- [x] Un compte GitHub (gratuit)
- [x] Les 2 fichiers créés :
  - `formulaire-en-ligne.html`
  - `google-apps-script.js`

---

## 🚀 ÉTAPE 1 : Créer votre Google Sheet

### 1.1 Créer la feuille

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Cliquez sur **"+ Vide"** pour créer une nouvelle feuille
3. Nommez-la : **"Demandes Automatisation"**

### 1.2 Préparer la structure

1. Dans la première ligne (A1 à E1), entrez ces en-têtes :
   ```
   Date | Nom | Email | Tâche | Temps par semaine
   ```

2. Sélectionnez la ligne 1
3. Format → Texte en gras
4. Remplissage → Couleur de fond (choisissez une couleur)

### 1.3 Récupérer l'ID de la feuille

Dans l'URL de votre Google Sheet, copiez l'ID :
```
https://docs.google.com/spreadsheets/d/[COPIEZ_CET_ID_ICI]/edit
```

**Exemple :**
```
https://docs.google.com/spreadsheets/d/1AbC2DeFgHiJkLmNoPqRsTuVwXyZ/edit
```
→ L'ID est : `1AbC2DeFgHiJkLmNoPqRsTuVwXyZ`

📝 **Notez cet ID quelque part !**

---

## 🛠️ ÉTAPE 2 : Configurer Google Apps Script

### 2.1 Créer le projet Apps Script

1. Allez sur [script.google.com](https://script.google.com)
2. Cliquez sur **"+ Nouveau projet"**
3. Un éditeur s'ouvre avec du code par défaut

### 2.2 Copier le script

1. **Supprimez** tout le code par défaut dans l'éditeur
2. Ouvrez le fichier `google-apps-script.js`
3. **Copiez tout le contenu**
4. **Collez-le** dans l'éditeur Google Apps Script

### 2.3 Configurer les variables

Dans le script, trouvez ces lignes (tout en haut) :

```javascript
// Votre email pour recevoir les notifications
const VOTRE_EMAIL = "votre-email@exemple.com";

// ID de votre Google Sheet
const SHEET_ID = "VOTRE_SHEET_ID_ICI";
```

**Modifiez :**
1. Remplacez `votre-email@exemple.com` par **votre vrai email**
2. Remplacez `VOTRE_SHEET_ID_ICI` par **l'ID que vous avez copié à l'étape 1.3**

**Exemple :**
```javascript
const VOTRE_EMAIL = "monnom@gmail.com";
const SHEET_ID = "1AbC2DeFgHiJkLmNoPqRsTuVwXyZ";
```

### 2.4 Nommer le projet

1. En haut à gauche, cliquez sur **"Projet sans titre"**
2. Nommez-le : **"Formulaire Automatisation"**
3. Cliquez sur **"Renommer"**

### 2.5 Enregistrer

Cliquez sur l'icône **💾 Enregistrer** (ou Ctrl+S / Cmd+S)

---

## 🧪 ÉTAPE 3 : Tester le script

### 3.1 Autoriser l'accès

1. En haut, sélectionnez la fonction : **`testScript`**
2. Cliquez sur **▶️ Exécuter**
3. Une fenêtre apparaît : **"Autorisation requise"**
4. Cliquez sur **"Examiner les autorisations"**
5. Choisissez votre compte Google
6. **⚠️ Vous verrez : "Google n'a pas vérifié cette application"**
   - C'est normal ! C'est votre propre script
7. Cliquez sur **"Paramètres avancés"**
8. Cliquez sur **"Accéder à [nom du projet] (non sécurisé)"**
9. Cliquez sur **"Autoriser"**

### 3.2 Vérifier le test

1. Attendez quelques secondes
2. ✅ **Vérifiez votre Google Sheet** : Une ligne de test doit apparaître
3. ✅ **Vérifiez votre email** : Vous devriez avoir reçu un email

**Si ça fonctionne, bravo ! Continuez.**

**Si ça ne fonctionne pas :**
- Vérifiez que l'ID de la feuille est correct
- Vérifiez que votre email est correct
- Regardez les logs : Vue → Logs

---

## 🌐 ÉTAPE 4 : Déployer comme Web App

### 4.1 Créer le déploiement

1. En haut à droite, cliquez sur **"Déployer"** → **"Nouveau déploiement"**
2. Cliquez sur l'icône ⚙️ à gauche
3. Sélectionnez **"Application Web"**

### 4.2 Configurer le déploiement

Remplissez les champs :

1. **Description :** `Version 1 - Formulaire`
2. **Exécuter en tant que :** `Moi (votre-email@gmail.com)`
3. **Qui a accès :** **⚠️ IMPORTANT** → Sélectionnez **"Tout le monde"**

### 4.3 Déployer

1. Cliquez sur **"Déployer"**
2. Une popup s'ouvre avec **l'URL de votre Web App**
3. **📋 COPIEZ CETTE URL !** Elle ressemble à :
   ```
   https://script.google.com/macros/s/AKfycbz...../exec
   ```

📝 **Sauvegardez cette URL précieusement !**

---

## 🎨 ÉTAPE 5 : Configurer le formulaire HTML

### 5.1 Ouvrir le fichier HTML

1. Ouvrez le fichier `formulaire-en-ligne.html` dans un éditeur de texte
   - **Windows :** Clic droit → Ouvrir avec → Bloc-notes
   - **Mac :** Clic droit → Ouvrir avec → TextEdit
   - **Mieux :** VS Code, Sublime Text, ou Notepad++

### 5.2 Insérer l'URL du script

Trouvez cette ligne (vers la ligne 330) :

```javascript
const GOOGLE_SCRIPT_URL = "VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI";
```

**Remplacez** par l'URL que vous avez copiée à l'étape 4.3 :

```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz...../exec";
```

### 5.3 Enregistrer

Enregistrez le fichier (Ctrl+S / Cmd+S)

---

## 🚀 ÉTAPE 6 : Héberger le formulaire GRATUITEMENT

Maintenant, rendons votre formulaire accessible en ligne !

### Option A : GitHub Pages (Recommandé - Plus professionnel)

#### 6.1 Créer un compte GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"Sign up"**
3. Créez votre compte (gratuit)

#### 6.2 Créer un nouveau repository

1. Une fois connecté, cliquez sur **"+"** en haut à droite → **"New repository"**
2. Remplissez :
   - **Repository name :** `formulaire-automatisation`
   - **Description :** `Formulaire de demande d'automatisation`
   - **Public** (cochez cette option)
   - **✓ Add a README file** (cochez)
3. Cliquez sur **"Create repository"**

#### 6.3 Uploader le formulaire

1. Dans votre repository, cliquez sur **"Add file"** → **"Upload files"**
2. Glissez-déposez le fichier `formulaire-en-ligne.html`
3. **⚠️ IMPORTANT :** Renommez-le en **`index.html`** (bouton rename)
4. Cliquez sur **"Commit changes"**

#### 6.4 Activer GitHub Pages

1. Allez dans **"Settings"** (en haut)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous **"Source"**, sélectionnez **"Deploy from a branch"**
4. Sous **"Branch"**, sélectionnez **"main"** et **/root**
5. Cliquez sur **"Save"**

#### 6.5 Obtenir votre URL

Après 1-2 minutes, rechargez la page.

Vous verrez :
```
✓ Your site is live at https://votre-username.github.io/formulaire-automatisation/
```

**🎉 C'est votre URL publique ! Partagez-la avec vos clients !**

---

### Option B : Netlify Drop (Alternative simple)

Si GitHub vous semble complexe :

1. Allez sur [drop.netlify.com](https://app.netlify.com/drop)
2. **Glissez-déposez** directement le fichier `formulaire-en-ligne.html`
3. Netlify génère automatiquement une URL publique
4. **Gratuit et instantané !**

---

## ✅ ÉTAPE 7 : Tester le formulaire en ligne

### 7.1 Ouvrir le formulaire

1. Allez sur votre URL (GitHub Pages ou Netlify)
2. Le formulaire doit s'afficher avec votre design

### 7.2 Faire un test complet

Remplissez le formulaire avec des données de test :
- **Nom :** Test Client
- **Email :** votre-email@gmail.com
- **Tâche :** "Test du formulaire automatisé"
- **Temps :** "2 heures"

Cliquez sur **"Envoyer ma demande"**

### 7.3 Vérifier que tout fonctionne

✅ **Vérifiez 3 choses :**

1. **Message de succès** s'affiche sur la page
2. **Google Sheet** : Une nouvelle ligne avec vos données de test
3. **Email** : Vous avez reçu un email de notification

**Si les 3 ✅ fonctionnent → PARFAIT ! Vous êtes prêt !**

---

## 🎯 ÉTAPE 8 : Partager votre formulaire

Maintenant que tout fonctionne, partagez votre formulaire !

### Où partager l'URL ?

1. **Site web** : Ajoutez un bouton "Automatisez maintenant"
2. **Email** : Dans votre signature ou vos campagnes
3. **Réseaux sociaux** : LinkedIn, Facebook, Instagram
4. **WhatsApp / SMS** : Pour vos contacts directs
5. **QR Code** : Générez un QR code sur [qr-code-generator.com](https://www.qr-code-generator.com)

---

## 📊 Suivre vos demandes

### Dans Google Sheets

Toutes les demandes s'ajoutent automatiquement dans votre feuille :
- Triez par date
- Filtrez par temps passé
- Calculez le ROI potentiel

### Par Email

Chaque soumission vous envoie un email avec :
- Nom et email du client
- Description de la tâche
- Temps passé
- Lien direct vers Google Sheets
- Lien pour répondre au client

---

## 🎨 Personnalisation (Optionnel)

### Modifier les couleurs du formulaire

Dans `formulaire-en-ligne.html`, trouvez ces lignes :

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Changez les couleurs avec un [générateur de gradient](https://cssgradient.io)

### Modifier les textes

Changez :
- Le titre : ligne ~266
- La description : lignes ~268-272
- Le message de succès : lignes ~352-356

### Ajouter votre logo

Ajoutez avant le `<h1>` :
```html
<img src="URL_DE_VOTRE_LOGO" alt="Logo" style="max-width: 150px; margin-bottom: 20px;">
```

---

## 🐛 Dépannage

### Problème : Le formulaire ne s'envoie pas

**Solutions :**
1. Vérifiez que l'URL du Google Apps Script est correcte dans le HTML
2. Ouvrez la Console du navigateur (F12) pour voir les erreurs
3. Vérifiez que le script est bien déployé comme "Tout le monde" peut accéder

### Problème : Pas de données dans Google Sheets

**Solutions :**
1. Vérifiez l'ID de la feuille dans le script
2. Vérifiez que le nom de l'onglet est "Demandes"
3. Testez la fonction `testScript` dans Apps Script

### Problème : Pas d'email reçu

**Solutions :**
1. Vérifiez votre email dans le script
2. Regardez dans vos spams
3. Testez avec `testScript` dans Apps Script

### Problème : GitHub Pages ne fonctionne pas

**Solutions :**
1. Attendez 2-3 minutes après activation
2. Vérifiez que le fichier s'appelle bien `index.html`
3. Vérifiez que le repository est Public

---

## 💡 Astuces Pro

### 1. Nom de domaine personnalisé (Optionnel)

Au lieu de `username.github.io`, utilisez `votredomaine.com` :
- Achetez un domaine sur Namecheap (10€/an)
- Configurez dans GitHub Pages Settings

### 2. Captcha anti-spam (Optionnel)

Ajoutez Google reCAPTCHA v3 :
1. [reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Créez une clé pour votre site
3. Ajoutez le code dans votre HTML

### 3. Notifications Slack/Discord

Modifiez le Google Apps Script pour envoyer aussi sur Slack :
```javascript
// Ajoutez dans sendNotificationEmail()
UrlFetchApp.fetch('VOTRE_WEBHOOK_SLACK', {
  method: 'post',
  payload: JSON.stringify({text: message})
});
```

---

## 📋 Checklist Finale

Avant de partager avec vos clients :

- [ ] Google Sheet créé avec en-têtes
- [ ] Google Apps Script configuré et testé
- [ ] Script déployé comme Web App (accès "Tout le monde")
- [ ] URL du script ajoutée dans le HTML
- [ ] Formulaire hébergé sur GitHub Pages ou Netlify
- [ ] Test complet effectué (submit → sheet → email)
- [ ] URL du formulaire notée et sauvegardée
- [ ] Design personnalisé si souhaité

---

## 🎉 Félicitations !

Vous avez maintenant :
- ✅ Un formulaire professionnel en ligne
- ✅ Accessible 24/7 via une URL publique
- ✅ Email automatique à chaque demande
- ✅ Sauvegarde dans Google Sheets
- ✅ **100% GRATUIT**

**Coût total : 0€**
**Temps d'installation : 20-30 minutes**

---

## 📞 Besoin d'aide ?

Si vous êtes bloqué :

1. **Vérifiez chaque étape** dans l'ordre
2. **Testez d'abord** avec `testScript` dans Apps Script
3. **Regardez les logs** : Vue → Logs dans Apps Script
4. **Consultez la Console** du navigateur (F12) pour erreurs JavaScript

---

## 🚀 Prochaines Étapes

Une fois que vous recevez des demandes :

1. **Répondez rapidement** (dans les 24h)
2. **Qualifiez les leads** dans votre Google Sheet
3. **Calculez le ROI** pour chaque client
4. **Proposez vos services** d'automatisation

Bonne chance ! 🎯
