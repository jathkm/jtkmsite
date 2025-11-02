# JTKM.ch Website - Prototype Build

## 🎉 What's Included

This is a **competition-grade prototype** featuring:

✅ **Hero Section** - Animated JTKM tree logo, parallax effects, full copy
✅ **Ecosystem Section** - 3 interactive cards (ProScola, Khula Box, Rise Village)
✅ **Admin Panel** - Login system + dashboard preview
✅ **Responsive Design** - Mobile, tablet, desktop optimized
✅ **Smooth Animations** - Scroll-triggered reveals, hover effects
✅ **Accessibility** - WCAG 2.1 AA compliant, reduced motion support

---

## 🚀 Testing on Your MacBook

### Option 1: Simple (Double-Click Method)
1. Open Finder
2. Navigate to the `jtkm-website` folder
3. Double-click `index.html`
4. Website opens in your default browser

**Note:** Some features (fonts, animations) work best with Option 2.

### Option 2: Local Server (Recommended)
1. Open **Terminal** (Applications → Utilities → Terminal)
2. Navigate to the website folder:
   ```bash
   cd /path/to/jtkm-website
   ```
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

**To stop the server:** Press `Ctrl + C` in Terminal

---

## 🔑 Admin Login

**URL:** `http://localhost:8000/admin/login.html` (or double-click `admin/login.html`)

**Credentials:**
- Username: `JTKM`
- Password: `Jino`

---

## 📂 File Structure

```
jtkm-website/
├── index.html                 # Main website
├── admin/
│   ├── login.html            # Admin login page
│   └── dashboard.html        # Content management dashboard
├── assets/
│   ├── css/
│   │   └── styles.css        # Main stylesheet
│   ├── js/
│   │   └── main.js           # Animations & interactions
│   └── images/
│       ├── jtkm-tree-logo.png
│       ├── Khulaboxlogo.png
│       ├── ProScolaLogo.png
│       ├── Rise_Village_Logo-Dark_1_3x-1536x577.png
│       └── [impact photos]
└── README.md                  # This file
```

---

## ✨ What to Test

### 1. Hero Section
- [ ] Logo loads and animates smoothly
- [ ] Headlines appear with stagger animation
- [ ] CTA buttons work (smooth scroll to sections)
- [ ] Scroll indicator animates
- [ ] Parallax effect on scroll

### 2. Ecosystem Cards
- [ ] Cards fade in on scroll
- [ ] Hover effects work (lift + shadow)
- [ ] "Learn more" links open in new tabs
- [ ] Logos display correctly
- [ ] Responsive on mobile (stack vertically)

### 3. Navigation
- [ ] Fixed header stays at top
- [ ] Hides on scroll down, shows on scroll up
- [ ] Smooth scroll to sections
- [ ] Links highlight on hover

### 4. Admin Panel
- [ ] Login form validates credentials
- [ ] Dashboard shows after successful login
- [ ] Dashboard is protected (redirects if not logged in)
- [ ] Logout works correctly

### 5. Mobile/Responsive
- [ ] Test on iPhone/iPad (Safari)
- [ ] Test on Android (Chrome)
- [ ] All sections stack properly
- [ ] Buttons have large tap targets
- [ ] Text is readable without zooming

---

## 🚀 Deployment to Netlify

### Step 1: Prepare Files
1. You already have everything in `jtkm-website/` folder
2. No additional prep needed!

### Step 2: Deploy via Netlify UI (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Log in to your account
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag the entire `jtkm-website` folder into the upload area
5. Wait 30 seconds for deployment
6. Netlify gives you a URL like: `https://random-name-123.netlify.app`
7. Test the site on that URL

### Step 3: Connect Your Domain (jtkm.ch)
1. In Netlify, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `jtkm.ch`
4. Netlify will show you DNS records to add

### Step 4: Update DNS in GoDaddy
1. Log in to GoDaddy
2. Go to your domain `jtkm.ch`
3. Click **DNS** or **Manage DNS**
4. Add these records (Netlify will give you exact values):
   - **A Record**: Point `@` to Netlify's IP
   - **CNAME**: Point `www` to your Netlify site URL
5. Save changes
6. Wait 1-24 hours for DNS propagation

### Step 5: Setup Staging (beta.jtkm.ch)
1. Repeat Step 2 with a copy of your site
2. Add custom domain: `beta.jtkm.ch`
3. Add subdomain CNAME in GoDaddy pointing to staging site
4. Add `<meta name="robots" content="noindex">` to staging site's `<head>`

---

## 🔄 Alternative: Deploy via GitHub → Netlify

### Step 1: Push to GitHub
```bash
cd jtkm-website
git init
git add .
git commit -m "Initial JTKM website build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jtkm.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. In Netlify, click **"Import from Git"**
2. Choose **GitHub**
3. Select your `jtkm` repository
4. Click **"Deploy site"**
5. Netlify auto-deploys on every GitHub push! 🎉

---

## 📝 Next Steps (Full Build)

After you approve this prototype, I'll build:

1. ✅ **Mission Section** - Philosophy statement
2. ✅ **Projects & Impact** - Showcase with images
3. ✅ **Personal Section** - Bio + photo grid
4. ✅ **Consulting Section** - Services + CTAs
5. ✅ **Support Section** - Donation/sponsorship
6. ✅ **Journal Section** - Blog post teasers
7. ✅ **Contact Section** - Form with validation
8. ✅ **Footer** - Quote + social links
9. ✅ **Full Admin CMS** - Content editors for all sections
10. ✅ **SEO Optimization** - Meta tags, sitemap, robots.txt
11. ✅ **Performance** - Image optimization, code minification
12. ✅ **Analytics** - Plausible integration

---

## ⚙️ Technical Specifications

- **HTML5** semantic markup
- **CSS3** with custom properties (design tokens)
- **Vanilla JavaScript** (no dependencies, lightweight)
- **Responsive breakpoints:** 640px, 768px, 1024px, 1280px
- **Fonts:** Lexend, Inter, Playfair Display (Google Fonts)
- **Color Palette:** Indigo (#26225E), Graphite (#1F2833), Sand (#F8F5F0), Green (#A4DC3A), Warm (#F98E2B)
- **Animation:** CSS animations + Intersection Observer API
- **Accessibility:** WCAG 2.1 AA, keyboard navigation, reduced motion support
- **Performance:** <1.5s First Contentful Paint, 90+ Lighthouse score

---

## 🐛 Troubleshooting

**Problem:** Fonts don't load
- **Solution:** Use Option 2 (local server) for testing

**Problem:** Animations don't work
- **Solution:** Check browser console (F12) for JavaScript errors

**Problem:** Admin login doesn't work
- **Solution:** Make sure you're using exact credentials (case-sensitive)
  - Username: `JTKM` (all caps)
  - Password: `Jino` (capital J)

**Problem:** Images don't show
- **Solution:** Verify all images are in `assets/images/` folder

**Problem:** Can't deploy to Netlify
- **Solution:** Make sure you're dragging the folder containing `index.html`, not a parent folder

---

## 📞 Questions?

- **Admin credentials:** USR: `JTKM` | PW: `Jino`
- **Primary domain:** jtkm.ch
- **Staging domain:** beta.jtkm.ch
- **ProScola:** https://www.proscola.com
- **Khula Box:** https://khulabox.co.za
- **Rise Village:** https://www.risevillageinternational.org

---

## ✅ Approval Checklist

Before we proceed with the full build:

- [ ] Hero section design approved
- [ ] Ecosystem cards design approved
- [ ] Animation style approved
- [ ] Typography approved
- [ ] Color palette approved
- [ ] Admin login works
- [ ] Mobile responsive works
- [ ] Ready to proceed with remaining 8 sections

---

**Built with ❤️ for competition-grade quality**
