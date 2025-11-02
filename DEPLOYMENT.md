# JTKM.ch - Deployment Guide

## 🚀 Deploying to Netlify (FREE)

This guide will walk you through deploying your website to Netlify and connecting your GoDaddy domain.

---

## STEP 1: Prepare Your Files

All your website files are ready in this folder:

```
jtkm-website/
├── index.html              (Main website)
├── design-tokens.css       (Design system)
├── styles.css              (Styles)
├── script.js               (Animations & interactions)
├── admin/
│   ├── index.html          (Admin login)
│   └── dashboard.html      (Admin dashboard)
├── robots.txt              (SEO - create this)
├── sitemap.xml             (SEO - create this)
└── site.webmanifest        (PWA - create this)
```

---

## STEP 2: Create a Netlify Account

1. Go to **https://www.netlify.com**
2. Click **"Sign Up"** (top right)
3. Choose **"Email"** (easiest option)
4. Enter your email and create a password
5. Verify your email
6. You're in! No credit card needed.

---

## STEP 3: Deploy Your Website

### Option A: Drag & Drop (Easiest for Beginners)

1. **Log into Netlify**
2. **Click "Add new site"** → "Deploy manually"
3. **Drag and drop** your entire website folder into the drop zone
4. **Wait 30-60 seconds** while Netlify uploads and publishes
5. **Done!** Your site is live at a temporary URL like: `https://random-name-12345.netlify.app`

### Option B: GitHub (Recommended for Updates)

1. **Create a GitHub account** (https://github.com)
2. **Create a new repository** (name it "jtkm-website")
3. **Upload all your files** to the repository
4. **Back in Netlify:** Click "Add new site" → "Import an existing project"
5. **Connect to GitHub** and select your repository
6. **Click "Deploy site"**

**Benefit:** Every time you update your GitHub files, Netlify automatically updates your website!

---

## STEP 4: Connect Your GoDaddy Domain (jtkm.ch)

### Part A: Get Netlify DNS Information

1. In Netlify, click on your site
2. Go to **"Domain settings"** (left sidebar)
3. Click **"Add custom domain"**
4. Type **jtkm.ch** and click "Verify"
5. Click **"Add domain"**
6. Netlify will show you DNS records to add

### Part B: Update GoDaddy DNS Settings

1. **Log into GoDaddy** (https://godaddy.com)
2. **Go to:** "My Products" → Find "jtkm.ch" → Click "DNS"
3. **You'll see a list of DNS records**

#### Add these records:

**Record 1: A Record (for root domain)**
- Type: `A`
- Name: `@`
- Value: `75.2.60.5` (Netlify's IP - check Netlify for current IP)
- TTL: `600`

**Record 2: CNAME Record (for www)**
- Type: `CNAME`
- Name: `www`
- Value: `YOUR-SITE-NAME.netlify.app` (replace with your actual Netlify URL)
- TTL: `600`

4. **Click "Save"** after adding each record
5. **Wait 1-24 hours** for DNS to propagate (usually 1-4 hours)

### Part C: Enable HTTPS in Netlify

1. Back in Netlify → "Domain settings"
2. Scroll to **"HTTPS"**
3. Click **"Verify DNS configuration"**
4. Once verified, click **"Provision certificate"**
5. **Wait 5-10 minutes** for SSL to activate
6. **Done!** Your site is now live at https://jtkm.ch

---

## STEP 5: Configure Redirects (Optional but Recommended)

Create a file called `_redirects` in your website folder:

```
# Redirect www to non-www
https://www.jtkm.ch/* https://jtkm.ch/:splat 301!

# Redirect HTTP to HTTPS
http://jtkm.ch/* https://jtkm.ch/:splat 301!
```

Upload this file to Netlify and it will automatically handle redirects.

---

## STEP 6: Set Up Form Handling (Contact Form)

Netlify provides FREE form handling!

1. In your `index.html`, find the contact form
2. Add `netlify` attribute to the `<form>` tag:

```html
<form id="contact-form" netlify>
```

3. **Deploy the updated file**
4. **Go to:** Netlify Dashboard → "Forms"
5. **View submissions** here whenever someone contacts you!

**Email Notifications:**
- Go to: "Site settings" → "Forms" → "Form notifications"
- Add your email to receive notifications when forms are submitted

---

## STEP 7: Set Up Analytics (Optional - FREE with Plausible)

Your site already includes Plausible Analytics code!

1. **Sign up at** https://plausible.io
2. **Add your domain:** jtkm.ch
3. **Get your tracking code** (already included in your site!)
4. **Done!** View analytics in your Plausible dashboard

---

## STEP 8: Admin Panel Setup

**IMPORTANT:** Change the default admin password!

1. **Open** `admin/index.html`
2. **Find line 105:** (the ADMIN_CREDENTIALS section)
3. **Change the password** from `jtkm2025` to something secure

```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'YOUR_SECURE_PASSWORD_HERE' // Change this!
};
```

4. **Save and re-deploy**

**Access your admin panel at:** https://jtkm.ch/admin

---

## TROUBLESHOOTING

### Website not loading after DNS setup?
- **Wait longer** - DNS can take up to 24 hours
- **Check DNS propagation:** https://dnschecker.org
- **Clear your browser cache:** Ctrl+Shift+Delete (Chrome) or Cmd+Shift+Delete (Mac)

### SSL certificate not working?
- **Wait 10-15 minutes** after adding domain
- **Verify DNS** is pointing correctly
- **Re-provision certificate** in Netlify settings

### Contact form not working?
- Make sure you added the `netlify` attribute to the form
- Check "Forms" tab in Netlify dashboard
- Look for error messages in browser console (F12)

### Can't log into admin?
- Check you're using the correct username/password
- Make sure you deployed the latest version
- Clear browser cache and try again

---

## UPDATING YOUR WEBSITE

### If you used Drag & Drop:
1. Make changes to your local files
2. Go to Netlify → "Deploys" tab
3. Drag and drop your updated folder
4. New version goes live in 30-60 seconds!

### If you used GitHub:
1. Make changes to your local files
2. Commit and push to GitHub
3. Netlify automatically deploys the update!
4. Check "Deploys" tab to see progress

---

## COST BREAKDOWN

- ✅ **Netlify Hosting:** FREE forever
- ✅ **SSL Certificate:** FREE (included)
- ✅ **Form Handling:** FREE (100 submissions/month)
- ✅ **Bandwidth:** FREE (100GB/month)
- ✅ **Domain (jtkm.ch):** $15-20/year (you already have this)

**Total Monthly Cost: $0** 🎉

---

## BACKUP & SECURITY

### Regular Backups:
1. Go to Netlify → "Deploys" → "Production deploys"
2. Click **"Download deploy"** to save a backup
3. Store in Google Drive or Dropbox

### Recommended Schedule:
- Backup **before major changes**
- Backup **monthly** for peace of mind

---

## NEED HELP?

### Netlify Support:
- Documentation: https://docs.netlify.com
- Community Forum: https://answers.netlify.com

### DNS/Domain Support:
- GoDaddy Support: https://www.godaddy.com/help

### Your Website Issues:
- Check browser console (F12 → Console tab)
- Look for error messages
- Test in different browsers

---

## NEXT STEPS

1. ✅ Deploy to Netlify
2. ✅ Connect GoDaddy domain
3. ✅ Enable HTTPS
4. ✅ Change admin password
5. ✅ Test contact form
6. ✅ Set up analytics
7. ✅ Create regular backups

**Congratulations! Your website is live!** 🚀

Visit: https://jtkm.ch
Admin: https://jtkm.ch/admin

---

## MAINTENANCE CHECKLIST

### Weekly:
- [ ] Check form submissions
- [ ] Review analytics
- [ ] Test site speed

### Monthly:
- [ ] Update content as needed
- [ ] Download backup
- [ ] Check for broken links

### Yearly:
- [ ] Renew domain (GoDaddy will remind you)
- [ ] Review and update content
- [ ] Update password

---

**Questions?** Refer to this guide or reach out for support!
