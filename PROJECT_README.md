# Sufiyan FX - Video Editing Portfolio

> A professional, cinematic portfolio website for video editors specializing in YouTube and social media content.

🌐 **Live Demo:** [Your deployed URL here]

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0a/00d9ff?text=Sufiyan+FX+Portfolio)

---

## ✨ Features

- 🎨 **Dark/Cinematic Theme** with cyan accents
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎬 **Video Showcase** with modal player
- 🔍 **Project Filtering** by category
- ⚡ **Smooth Animations** and transitions
- 📧 **Contact Form** with social links
- 🎯 **SEO Optimized** structure
- 🚀 **Fast Performance** with optimized assets

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- Yarn package manager

### Installation

1. **Extract the project files**
2. **Install dependencies:**
   ```bash
   cd frontend
   yarn install
   ```

3. **Start development server:**
   ```bash
   yarn start
   ```

4. **Open browser:**
   - Navigate to `http://localhost:3000`

---

## 📝 Customize Your Portfolio

All content is managed in **ONE FILE**: `/frontend/src/portfolio-content.js`

### What to Update:

1. **Personal Information** (name, email, phone)
2. **Social Media Links** (YouTube, Instagram, Twitter, LinkedIn)
3. **Featured Reel** (video URL and thumbnail)
4. **Projects** (your actual work with videos)
5. **Services** (what you offer)
6. **Testimonials** (client reviews)
7. **About Section** (bio, skills, experience)

📚 **See:** `/CONTENT_CHECKLIST.md` for detailed guide

---

## 📁 Project Structure

```
sufiyan-fx-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── Portfolio.jsx
│   │   ├── portfolio-content.js  # ⭐ EDIT THIS
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── vercel.json                   # Vercel config
├── netlify.toml                  # Netlify config
├── DEPLOYMENT_GUIDE.md          # How to deploy
├── CONTENT_CHECKLIST.md         # Editing checklist
└── README.md                    # This file
```

---

## 🎨 Tech Stack

- **Framework:** React 19
- **Styling:** TailwindCSS
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Animations:** CSS Transitions
- **Build Tool:** Create React App

---

## 🚀 Deployment

Deploy to **Vercel** (Recommended) or **Netlify** in minutes!

### Quick Deploy to Vercel:
```bash
cd frontend
npx vercel
```

### Quick Deploy to Netlify:
```bash
cd frontend
yarn build
# Then drag & drop 'build' folder to netlify.com/drop
```

📚 **Full Guide:** See `/DEPLOYMENT_GUIDE.md`

---

## 📋 Scripts

```bash
# Development
yarn start          # Start dev server (http://localhost:3000)

# Production
yarn build          # Create production build
yarn test           # Run tests
```

---

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Sections

1. **Hero** - Name, tagline, CTA buttons
2. **Featured Reel** - Showcase your best work
3. **Projects** - Portfolio grid with filters
4. **Services** - What you offer
5. **Testimonials** - Client reviews
6. **About** - Your story, skills, stats
7. **Contact** - Form and social links
8. **Footer** - Copyright and links

---

## 🎨 Customization

### Change Colors:
1. Search for `#00d9ff` (current cyan)
2. Replace with your preferred color
3. Update in all component files

### Change Fonts:
1. Edit `/frontend/src/index.css`
2. Replace Google Fonts import
3. Update font-family values

### Modify Layout:
- Edit individual component files in `/frontend/src/components/`

---

## 📦 Dependencies

### Main:
- react: ^19.0.0
- react-dom: ^19.0.0
- react-router-dom: ^7.5.1
- axios: ^1.8.4

### UI Components:
- @radix-ui/* (various)
- lucide-react: ^0.507.0
- tailwindcss: ^3.4.17

**Full list:** See `frontend/package.json`

---

## 🔧 Configuration

### Vercel:
- Config in `/vercel.json`
- Auto-detects React app
- Handles SPA routing

### Netlify:
- Config in `/netlify.toml`
- Build settings included
- Redirect rules configured

---

## 📊 Performance

- ⚡ Lighthouse Score: 90+
- 🎯 Fast load times
- 📱 Mobile optimized
- 🖼️ Lazy image loading ready

---

## 🐛 Troubleshooting

### Common Issues:

**Build fails:**
- Check Node version (18.x+)
- Run `yarn install` again
- Clear cache: `yarn cache clean`

**Styles not loading:**
- Verify TailwindCSS config
- Check import in index.css

**Videos not playing:**
- Use embed URLs (youtube.com/embed/ID)
- Check video privacy settings

---

## 📚 Documentation Files

- 📖 `DEPLOYMENT_GUIDE.md` - How to deploy
- ✅ `CONTENT_CHECKLIST.md` - What to customize
- ⚡ `QUICK_EDIT_GUIDE.js` - Quick reference
- 📘 `PORTFOLIO_README.md` - Detailed docs

---

## 💡 Tips

1. **Use High-Quality Assets** - Professional images & videos
2. **Optimize Images** - Compress before uploading
3. **Test Thoroughly** - Check all links and videos
4. **Mobile First** - Test on actual devices
5. **Update Regularly** - Keep portfolio fresh

---

## 🎓 Need Help?

Check the documentation files:
- Detailed guide: `/PORTFOLIO_README.md`
- Quick reference: `/QUICK_EDIT_GUIDE.js`
- Editing checklist: `/CONTENT_CHECKLIST.md`
- Deployment: `/DEPLOYMENT_GUIDE.md`

---

## 📄 License

This project is customized for **Sufiyan FX**.
Feel free to modify for personal use.

---

## 🙏 Credits

- Design: Custom dark/cinematic theme
- UI Components: Shadcn/ui
- Icons: Lucide React
- Fonts: Google Fonts (Inter)

---

## 📞 Contact

**Sufiyan FX**
- 🌐 Website: [Your deployed site]
- 📧 Email: [Your email from portfolio-content.js]
- 💼 Portfolio: [Your portfolio URL]

---

**Built with ❤️ and creativity**

🚀 **Ready to deploy?** See `/DEPLOYMENT_GUIDE.md`
