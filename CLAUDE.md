# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**"Automatisez votre business"** - French-language client automation intake form system with two implementation approaches:

1. **n8n Workflow** (`formulaire-automatisation-client.json`) - Self-hosted or cloud n8n automation
2. **Google Apps Script + HTML** (`google-apps-script.js` + `formulaire-en-ligne.html`) - Free, standalone solution

Both collect client automation requests and send them to Google Sheets with email notifications.

**Target Users:** French-speaking automation consultants, freelancers, and agencies collecting client leads.

## Languages & Stack

- **Primary Languages:** JavaScript (Google Apps Script), HTML/CSS, JSON (n8n workflows)
- **Platforms:** Google Apps Script, n8n, GitHub Pages/Netlify
- **Integrations:** Google Sheets API, Gmail/SMTP, n8n Form Trigger
- **All content is in French** - maintain French for all user-facing text

## Architecture

### Two Deployment Paths

**Path 1: n8n Workflow**
```
n8n Form Trigger → Google Sheets (append row) → Email confirmation node
```
- Configuration via n8n UI
- OAuth2 for Google Sheets
- SMTP credentials for email
- Workflow lives in `formulaire-automatisation-client.json`

**Path 2: Google Apps Script (Free)**
```
HTML Form → Google Apps Script (doPost) → Google Sheets + MailApp
```
- `formulaire-en-ligne.html` - Client-side form with fetch() POST
- `google-apps-script.js` - Server-side handler deployed as Web App
- No auth needed (public Web App deployment)
- Free tier only (no n8n required)

### Key Configuration Points

**Google Apps Script:**
- `VOTRE_EMAIL` - Notification recipient email (line 20)
- `SHEET_ID` - Google Sheets ID from URL (line 24)
- `SHEET_NAME` - Tab name, defaults to "Demandes" (line 27)

**HTML Form:**
- `GOOGLE_SCRIPT_URL` - Deployed Web App URL (around line 330 in `formulaire-en-ligne.html`)

**n8n Workflow:**
- Form fields defined in node parameters
- Google Sheets OAuth2 credentials
- SMTP credentials for email node

## Form Data Structure

Collected fields (consistent across both implementations):
- **Nom complet** (Full name) - Text, required
- **Adresse email** - Email, required, validated
- **Quelle tâche prend le plus de temps ?** - Textarea, required
- **Temps passé par semaine** - Text (e.g., "5 heures"), required

Google Sheets columns:
```
Date | Nom | Email | Tâche | Temps par semaine
```

## Testing Commands

### Google Apps Script Testing
```javascript
// In Apps Script editor, select function dropdown and run:
testScript()
// Check: Console logs, Google Sheets, and email inbox
```

### HTML Form Local Preview
```bash
# Open in browser to preview design only (won't submit)
open apercu-formulaire.html
```

### n8n Workflow Testing
```
1. Import JSON via n8n UI
2. Configure credentials (Google Sheets OAuth2, SMTP)
3. Activate workflow
4. Open Form URL (n8n provides this)
5. Submit test data
6. Check execution logs in n8n
```

## Common Development Tasks

### Modifying Form Fields

**For Google Apps Script:**
1. Update HTML form inputs in `formulaire-en-ligne.html`
2. Update `saveToSheet()` data array in `google-apps-script.js` (line 107)
3. Update sheet headers if adding columns (line 95)

**For n8n:**
1. Edit workflow JSON `formFields.values` array
2. Update Google Sheets node field mappings
3. Re-import or update workflow in n8n UI

### Changing Email Template

**Google Apps Script:**
- Modify `sendNotificationEmail()` function (lines 126-166 in `google-apps-script.js`)
- Email uses plain text with emoji formatting

**n8n:**
- Edit the "Send Email" node parameters in the workflow
- Supports HTML email templates

### Customizing Form Design

**HTML/CSS location:** `formulaire-en-ligne.html`
- Gradient colors: CSS `background: linear-gradient(...)` around line 80-90
- Form title: `<h1>` around line 266
- Success message: JavaScript around lines 352-356
- All styling is inline in `<style>` tag

## Deployment

### Google Apps Script Deployment
```
1. Create new project at script.google.com
2. Paste google-apps-script.js code
3. Configure VOTRE_EMAIL and SHEET_ID
4. Deploy → New deployment → Web App
5. Execute as: "Me"
6. Who has access: "Anyone" (critical for public forms)
7. Copy deployment URL
8. Paste URL into formulaire-en-ligne.html GOOGLE_SCRIPT_URL constant
```

### HTML Form Hosting (Free Options)
```bash
# Option A: GitHub Pages
# 1. Rename formulaire-en-ligne.html → index.html
# 2. Push to GitHub repo
# 3. Enable Pages in repo Settings → Pages

# Option B: Netlify Drop
# 1. Visit app.netlify.com/drop
# 2. Drag and drop formulaire-en-ligne.html
# 3. Get instant URL
```

### n8n Deployment
```
1. n8n UI → Import from File → formulaire-automatisation-client.json
2. Configure OAuth2 Google Sheets credential
3. Configure SMTP credential
4. Activate workflow
5. Copy form URL from Form Trigger node
```

## Security Considerations

- **Google Apps Script:** Deployed as public Web App, accepts POST from any origin
- **Input validation:** Email format checked via regex in `isValidEmail()`
- **Required fields:** Validated on client (HTML) and server (Apps Script doPost)
- **No authentication:** Forms are intentionally public for lead generation
- **Credentials:** Never commit real SHEET_ID or email addresses to version control
- **CORS:** Apps Script handles CORS automatically for Web Apps

## File Descriptions

| File | Purpose |
|------|---------|
| `formulaire-automatisation-client.json` | n8n workflow definition (import-ready) |
| `google-apps-script.js` | Server-side handler for HTML form (paste into script.google.com) |
| `formulaire-en-ligne.html` | Client-side form with inline CSS/JS (standalone, hostable) |
| `apercu-formulaire.html` | Preview-only version for design testing (no backend) |
| `README.md` | Main documentation for Google Apps Script approach |
| `README-PROJET.md` | Documentation for n8n workflow approach |
| `GUIDE-INSTALLATION-GRATUIT.md` | Step-by-step setup guide for free Google Apps Script solution |
| `GUIDE-FORMULAIRE.md` | Setup guide for n8n workflow |
| `pitch-simple.md` | Marketing/sales pitch document |

## Important Notes

### Language
- All user-facing text must remain in French
- Code comments can be in French or English
- Form labels, placeholders, error messages are in French

### User Workflow
This is a lead generation tool, not a transaction system:
1. Potential client fills form describing time-consuming task
2. Form data → Google Sheets (CRM-like tracking)
3. Email notification → consultant
4. Consultant manually follows up with client

### Modification Philosophy
- Keep forms simple (4 fields only) to maximize completion rates
- Maintain mobile-responsive design
- Preserve gradient aesthetic (modern, professional look)
- Don't add authentication/login (friction for lead gen)

### Version Control
- Don't commit configured versions with real credentials
- Keep template variables like `VOTRE_EMAIL`, `SHEET_ID`, `GOOGLE_SCRIPT_URL` as placeholders
- Document configuration in markdown guides instead

## Troubleshooting

### "Script not found" errors
- Check `GOOGLE_SCRIPT_URL` matches deployed Web App URL exactly
- Ensure script deployed with "Anyone" access, not "Me only"

### Data not appearing in Google Sheets
- Verify `SHEET_ID` is correct (from Sheet URL)
- Check sheet tab name matches `SHEET_NAME` constant ("Demandes")
- Run `testScript()` in Apps Script editor to diagnose

### No email received
- Verify `VOTRE_EMAIL` is correct
- Check spam folder
- Gmail API may be disabled - ensure MailApp has permissions
- Run `testScript()` to test email independently

### Form submission fails (HTTP errors)
- Open browser DevTools (F12) → Console tab
- Look for CORS errors (shouldn't happen with Apps Script)
- Check Network tab for failed POST requests
- Verify Apps Script is deployed and URL is current

### n8n workflow not executing
- Check workflow is "Active" (toggle in top right)
- Verify Google Sheets OAuth2 is connected (click credentials)
- Test SMTP credentials separately
- Check n8n execution logs for error details
