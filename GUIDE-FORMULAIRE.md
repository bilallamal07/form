# 📋 Guide du Formulaire d'Automatisation Client

## 📌 Vue d'ensemble

Ce workflow n8n crée un formulaire web en français qui :
- ✅ Collecte les demandes d'automatisation des clients
- 💾 Enregistre automatiquement dans Google Sheets
- 📧 Envoie un email de confirmation au client

## 🎯 Ce que le formulaire collecte

1. **Nom complet** - Nom du client
2. **Adresse email** - Pour le contacter
3. **Quelle tâche prend le plus de temps ?** - Description détaillée de la tâche
4. **Temps passé par semaine** - Estimation du temps (ex: "5 heures")

---

## 🚀 Installation Étape par Étape

### Étape 1 : Importer le Workflow

1. Ouvrez votre interface n8n
2. Cliquez sur le bouton **"+"** pour créer un nouveau workflow
3. Cliquez sur le menu (3 points) → **"Import from File"**
4. Sélectionnez le fichier : `formulaire-automatisation-client.json`

### Étape 2 : Configurer Google Sheets

#### 2.1 Créer la feuille Google Sheets

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille nommée **"Demandes Automatisation"**
3. Ajoutez les en-têtes suivants dans la première ligne (A1 à E1) :
   ```
   Date | Nom | Email | Tâche | Temps par semaine
   ```

#### 2.2 Connecter Google Sheets à n8n

1. Dans n8n, cliquez sur le nœud **"Enregistrer dans Google Sheets"**
2. Cliquez sur **"Select Credential"**
3. Choisissez **"Create New"** → **"Google Sheets OAuth2 API"**
4. Suivez les instructions pour autoriser n8n à accéder à Google Sheets
5. Une fois connecté, sélectionnez :
   - **Document** : "Demandes Automatisation"
   - **Sheet** : "Sheet1" (ou le nom de votre feuille)

### Étape 3 : Configurer l'Email

#### 3.1 Configuration SMTP

Vous avez besoin d'un compte SMTP. Options recommandées :

**Option A - Gmail** (Gratuit)
1. Utilisez votre compte Gmail
2. Activez "App Password" dans les paramètres Google
3. Utilisez ces paramètres :
   - Host : `smtp.gmail.com`
   - Port : `465`
   - Secure : `SSL/TLS`
   - User : votre-email@gmail.com
   - Password : votre-app-password

**Option B - SendGrid** (Gratuit jusqu'à 100 emails/jour)
1. Créez un compte sur [SendGrid](https://sendgrid.com)
2. Générez une API Key
3. Utilisez ces paramètres :
   - Host : `smtp.sendgrid.net`
   - Port : `587`
   - Secure : `STARTTLS`
   - User : `apikey`
   - Password : votre-api-key

#### 3.2 Configurer le nœud Email

1. Cliquez sur le nœud **"Envoyer Email de Confirmation"**
2. Cliquez sur **"Select Credential"** → **"Create New"** → **"SMTP"**
3. Entrez vos informations SMTP
4. Dans le paramètre **"From Email"**, remplacez par votre email :
   ```
   Votre Nom <votre-email@domaine.com>
   ```

### Étape 4 : Activer le Workflow

1. Cliquez sur le bouton **"Active"** en haut à droite
2. Le workflow est maintenant activé ! ✅

---

## 🌐 Obtenir l'URL du Formulaire

### URL de Production

1. Cliquez sur le nœud **"Formulaire Client"**
2. En bas, vous verrez l'URL de production :
   ```
   https://votre-instance.app.n8n.cloud/form/formulaire-client
   ```
3. **C'est cette URL que vous partagez avec vos clients !**

### URL de Test

Pour tester avant de partager :
1. Dans le nœud Form Trigger, vous verrez aussi une URL de test
2. Utilisez-la pour faire des tests sans activer le workflow

---

## 🧪 Tester le Workflow

### Test Complet

1. Ouvrez l'URL du formulaire dans votre navigateur
2. Remplissez le formulaire avec des données de test :
   - Nom : "Test Client"
   - Email : votre-email-test@exemple.com
   - Tâche : "Je copie-colle des données dans Excel toute la journée"
   - Temps : "5 heures par semaine"
3. Soumettez le formulaire

### Vérification

✅ **Vérifiez que :**
1. Le message de confirmation s'affiche : "✅ Merci ! Nous avons bien reçu votre demande..."
2. Une nouvelle ligne apparaît dans votre Google Sheet
3. Vous recevez un email de confirmation

---

## 🎨 Personnalisation

### Modifier le Texte du Formulaire

Dans le nœud **"Formulaire Client"**, vous pouvez modifier :

1. **Titre** (`formTitle`) :
   ```
   Automatisez votre tâche répétitive
   ```

2. **Description** (`formDescription`) :
   ```html
   <p>Dites-nous simplement : <strong>Quelle tâche vous mange le plus de temps chaque semaine ?</strong></p>
   <p>On vous l'automatise dès cette semaine pour vous.</p>
   ```

3. **Message de confirmation** :
   Dans `options` → `formSubmittedText` :
   ```
   ✅ Merci ! Nous avons bien reçu votre demande.

   Nous vous contacterons dans les 24h pour discuter de l'automatisation de votre tâche.
   ```

### Modifier l'Email de Confirmation

Dans le nœud **"Envoyer Email de Confirmation"**, modifiez :

1. **Sujet** (`subject`)
2. **Message** (`message`) - Vous pouvez utiliser du HTML pour un meilleur design

---

## 📊 Structure des Données Google Sheets

Chaque soumission créera une ligne avec :

| Date | Nom | Email | Tâche | Temps par semaine |
|------|-----|-------|-------|-------------------|
| 2026-01-29T10:30:00Z | Jean Dupont | jean@exemple.fr | Copier-coller des données... | 5 heures |

---

## 🔒 Sécurité et Confidentialité

### Recommandations

1. **HTTPS** : n8n cloud utilise HTTPS par défaut ✅
2. **Validation** : Tous les champs sont requis pour éviter les soumissions vides
3. **Email valide** : Le champ email vérifie automatiquement le format

### Authentification (Optionnel)

Si vous voulez protéger le formulaire avec un mot de passe :

1. Dans le nœud "Formulaire Client"
2. Paramètre `authentication` → Sélectionnez **"Basic Auth"**
3. Créez un credential avec username/password

---

## 🐛 Dépannage

### Le formulaire ne s'affiche pas

- ✅ Vérifiez que le workflow est **actif** (bouton Active en haut)
- ✅ Vérifiez l'URL (copiez-la depuis le nœud Form Trigger)

### Les données ne s'enregistrent pas dans Google Sheets

- ✅ Vérifiez la connexion OAuth2 Google
- ✅ Vérifiez que la feuille existe avec les bons en-têtes
- ✅ Regardez les logs d'exécution dans n8n

### L'email ne part pas

- ✅ Vérifiez vos credentials SMTP
- ✅ Testez avec Gmail App Password d'abord (plus simple)
- ✅ Vérifiez que l'email "From" est valide

### Voir les erreurs

1. Allez dans **Executions** (menu de gauche)
2. Cliquez sur l'exécution qui a échoué
3. Regardez les détails de l'erreur

---

## 📈 Améliorations Futures (Optionnel)

Voici des idées pour enrichir le workflow :

### 1. Notification Slack
Ajoutez un nœud Slack pour être notifié instantanément :
- Cherchez le nœud "Slack"
- Connectez-le après Google Sheets
- Configurez pour envoyer dans un canal #leads

### 2. CRM Integration
Ajoutez automatiquement le lead dans votre CRM :
- Airtable
- HubSpot
- Pipedrive
- Notion

### 3. Calcul de ROI Automatique
Ajoutez un nœud Code pour calculer le ROI potentiel :
```javascript
// Convertir "5 heures" en nombre
const heuresTexte = $input.item.json["Temps passé par semaine"];
const heures = parseFloat(heuresTexte);

// Calcul ROI (ex: 50€/heure)
const roi = heures * 50 * 4; // Par mois

return { roi, heures };
```

### 4. Email HTML Stylisé
Remplacez l'email texte par un email HTML avec votre branding

---

## 📞 Support

Si vous avez des questions :
1. Consultez la [documentation n8n](https://docs.n8n.io)
2. Testez avec l'URL de test d'abord
3. Regardez les logs d'exécution pour déboguer

---

## ✅ Checklist Finale

Avant de partager le formulaire :

- [ ] Workflow importé et actif
- [ ] Google Sheets connecté et testé
- [ ] Email SMTP configuré et testé
- [ ] Test complet effectué (soumission → Sheet → Email)
- [ ] Textes personnalisés à votre image
- [ ] URL de production copiée et prête à partager

---

🎉 **Félicitations ! Votre formulaire est prêt à recevoir des demandes d'automatisation !**
