# 🚀 Formulaire d'Automatisation Client - n8n

## 📋 Description

Formulaire web automatisé en français pour collecter les demandes d'automatisation de tâches de vos clients potentiels.

**Message principal du formulaire :**
> *"Dites-moi simplement : Quelle tâche vous mange le plus de temps chaque semaine ? On vous l'automatise dès cette semaine pour vous."*

---

## 📦 Contenu du Projet

### 1️⃣ `formulaire-automatisation-client.json`
**Workflow n8n prêt à l'emploi** contenant :
- ✅ Formulaire web avec 4 champs en français
- ✅ Enregistrement automatique dans Google Sheets
- ✅ Email de confirmation au client

### 2️⃣ `GUIDE-FORMULAIRE.md`
**Guide complet d'installation** avec :
- Instructions étape par étape
- Configuration Google Sheets
- Configuration SMTP/Email
- Tests et débogage
- Personnalisation
- Dépannage

### 3️⃣ `apercu-formulaire.html`
**Aperçu visuel du formulaire** :
- Design moderne et responsive
- Testez l'apparence avant l'import
- Ouvrez dans un navigateur pour voir le rendu

---

## ⚡ Installation Rapide

### Prérequis
- [ ] Compte n8n (cloud ou self-hosted)
- [ ] Compte Google (pour Google Sheets)
- [ ] Compte email SMTP (Gmail, SendGrid, etc.)

### 3 Étapes

1. **Importer le workflow**
   ```
   n8n → Import from File → formulaire-automatisation-client.json
   ```

2. **Configurer**
   - Connecter Google Sheets OAuth2
   - Configurer credentials SMTP
   - Personnaliser les textes

3. **Activer**
   - Cliquer sur "Active"
   - Copier l'URL du formulaire
   - Partager avec vos clients !

📖 **Voir le guide complet :** `GUIDE-FORMULAIRE.md`

---

## 🎯 Données Collectées

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| **Nom complet** | Texte | ✅ | Nom du client |
| **Adresse email** | Email | ✅ | Pour le contacter |
| **Quelle tâche prend le plus de temps ?** | Textarea | ✅ | Description détaillée |
| **Temps passé par semaine** | Texte | ✅ | Estimation (ex: "5 heures") |

---

## 🔄 Workflow

```
┌─────────────────────┐
│  Formulaire Client  │  ← Client remplit le formulaire
│  (Form Trigger)     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Google Sheets      │  ← Données sauvegardées
│  (Append Row)       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Email Confirmation │  ← Client reçoit confirmation
│  (Send Email)       │
└─────────────────────┘
```

---

## 🌐 URL du Formulaire

Après activation, vous obtiendrez une URL comme :
```
https://votre-instance.app.n8n.cloud/form/formulaire-client
```

**Partagez cette URL** sur :
- 🌐 Votre site web
- 📱 Réseaux sociaux
- 📧 Campagnes email
- 💬 WhatsApp/SMS

---

## 🎨 Personnalisation

### Textes Modifiables

**Dans le workflow :**
- Titre du formulaire
- Description
- Labels des champs
- Placeholders
- Message de confirmation
- Contenu de l'email

**Voir le guide complet pour les détails**

---

## 📊 Google Sheets - Structure

Créez une feuille avec ces colonnes :

```
| Date | Nom | Email | Tâche | Temps par semaine |
```

Chaque soumission ajoute automatiquement une ligne.

---

## 📧 Email de Confirmation (Exemple)

```
Bonjour [Nom],

Nous avons bien reçu votre demande d'automatisation !

📋 Tâche à automatiser :
[Description de la tâche]

⏱️ Temps actuellement passé : [Temps]

Notre équipe va analyser votre demande et vous contacter
dans les 24 heures pour :
✅ Comprendre en détail votre processus actuel
✅ Vous proposer une solution d'automatisation adaptée
✅ Commencer l'automatisation dès cette semaine

À très bientôt !

L'équipe Automatisation
```

---

## 🔒 Sécurité

✅ **Inclus par défaut :**
- HTTPS (sur n8n cloud)
- Validation des champs requis
- Validation du format email
- Protection contre les soumissions vides

🔐 **Optionnel :**
- Authentification Basic Auth
- CAPTCHA (ajoutez un nœud)
- Rate limiting (configuration n8n)

---

## 🧪 Test

### Avant de partager :

1. ✅ Ouvrir l'aperçu : `apercu-formulaire.html`
2. ✅ Activer le workflow dans n8n
3. ✅ Soumettre un test via l'URL n8n
4. ✅ Vérifier Google Sheets
5. ✅ Vérifier l'email reçu

---

## 🎯 Cas d'Usage

### Idéal pour :

1. **Agences d'automatisation**
   - Qualifier les leads
   - Comprendre les besoins
   - Prioriser les demandes

2. **Consultants freelance**
   - Recevoir des demandes
   - Estimer le temps gagné
   - Calculer le ROI

3. **Entreprises de services**
   - Identifier les pain points
   - Proposer des solutions
   - Générer des opportunités

---

## 📈 Améliorations Possibles

### Étendre le workflow :

1. **Notifications**
   - Slack
   - Discord
   - Telegram

2. **CRM**
   - Airtable
   - HubSpot
   - Notion
   - Pipedrive

3. **Analytics**
   - Google Analytics
   - Calcul ROI automatique
   - Statistiques des demandes

4. **Suivi**
   - Créer un ticket Trello/Asana
   - Planifier un appel Calendly
   - Envoyer un devis automatique

**Voir le guide pour plus d'idées**

---

## 🐛 Support

### Problèmes courants

1. **Formulaire ne s'affiche pas**
   → Vérifiez que le workflow est actif

2. **Données non enregistrées**
   → Vérifiez la connexion Google Sheets

3. **Email non reçu**
   → Vérifiez les credentials SMTP

📖 **Guide de dépannage complet :** `GUIDE-FORMULAIRE.md`

---

## 📚 Ressources

- [Documentation n8n](https://docs.n8n.io)
- [n8n Form Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/)
- [Google Sheets Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
- [Email Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailsend/)

---

## ✅ Checklist de Déploiement

Avant de partager le formulaire avec vos clients :

- [ ] Workflow importé dans n8n
- [ ] Google Sheets configuré avec en-têtes
- [ ] OAuth2 Google connecté et testé
- [ ] SMTP configuré et testé
- [ ] Textes personnalisés (titre, description, email)
- [ ] Email "From" personnalisé avec votre nom/domaine
- [ ] Test complet effectué (submit → sheet → email)
- [ ] Workflow activé (bouton "Active")
- [ ] URL copiée et sauvegardée
- [ ] Page de destination préparée (site web/landing page)

---

## 🎉 Prêt à Déployer !

Suivez le guide `GUIDE-FORMULAIRE.md` pour un déploiement pas à pas.

**Temps d'installation estimé :** 15-20 minutes

---

## 📞 Questions ?

1. Consultez `GUIDE-FORMULAIRE.md`
2. Testez avec `apercu-formulaire.html`
3. Vérifiez les logs d'exécution n8n
4. Consultez la documentation officielle n8n

---

**Créé avec ❤️ pour simplifier la collecte de demandes d'automatisation**
