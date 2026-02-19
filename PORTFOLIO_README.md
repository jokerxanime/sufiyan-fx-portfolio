# Sufiyan FX - Video Editing Portfolio

A clean, professional video editing portfolio website with dark/cinematic design.

## 🎨 Features

- ✅ Dark/Cinematic Theme with Cyan Accents
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Smooth Animations & Transitions
- ✅ Video Showcase with Modal Player
- ✅ Project Filtering by Category
- ✅ Services Section
- ✅ Client Testimonials
- ✅ Skills & Experience Display
- ✅ Contact Form with Social Links
- ✅ SEO Optimized

## 📝 How to Customize Your Portfolio

All content can be edited in one simple file: `/app/frontend/src/portfolio-content.js`

### Step 1: Update Personal Information
```javascript
personal: {
  name: "Your Name",
  tagline: "Your Professional Title",
  description: "Your tagline/description",
  email: "your@email.com",
  phone: "+1 (555) 123-4567", // Optional
}
```

### Step 2: Update Social Media Links
```javascript
social: [
  { platform: "YouTube", url: "YOUR_YOUTUBE_URL", icon: "youtube" },
  { platform: "Instagram", url: "YOUR_INSTAGRAM_URL", icon: "instagram" },
  // ... add more social links
]
```

### Step 3: Add Your Projects
```javascript
projects: [
  {
    id: 1,
    title: "Your Project Title",
    category: "YouTube Content", // or "Social Media", "Podcast", "Commercial"
    description: "Project description",
    thumbnail: "URL_TO_THUMBNAIL_IMAGE",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    views: "100K+",
    duration: "10 min"
  },
  // Add more projects...
]
```

### Step 4: Update Services
Edit the `services` array to reflect what you offer.

### Step 5: Add Client Testimonials
Replace placeholder testimonials with real client feedback.

### Step 6: Update About Section
Edit your bio, experience, skills, and statistics.

## 🚀 Getting Started

### Development
The website is already running at: `http://localhost:3000`

### Making Changes
1. Edit `/app/frontend/src/portfolio-content.js`
2. Save the file
3. The website will automatically reload with your changes

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── portfolio-content.js  # ⭐ EDIT THIS FILE FOR CONTENT
│   │   ├── App.js
│   │   └── index.js
│   └── public/
└── backend/
    └── server.py            # FastAPI backend (ready for database integration)
```

## 🎥 Adding Your Videos

### YouTube Videos
1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the embed URL (format: `https://www.youtube.com/embed/VIDEO_ID`)
4. Paste it in the `videoUrl` field in `portfolio-content.js`

### Video Thumbnails
- Use high-quality thumbnails (1280x720 or 1920x1080)
- Host on image services like:
  - Your own website
  - Imgur
  - Cloudinary
  - AWS S3

## 🎨 Design Customization

### Colors
The cyan accent color is defined throughout the components. To change it:
- Search for `#00d9ff` in all component files
- Replace with your preferred color

### Fonts
Current font: **Inter**
- To change: Edit `/app/frontend/src/index.css`

## 📧 Contact Form

The contact form currently logs to console. To make it functional:
1. Add backend API endpoint in `/app/backend/server.py`
2. Update form submission in `/app/frontend/src/components/Contact.jsx`

## 🌐 Deployment

Ready to deploy! The portfolio is production-ready.

### Recommended Platforms
- Vercel (Frontend)
- Netlify (Frontend)
- Railway (Full-stack)
- AWS/DigitalOcean (Full control)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Tech Stack

- **Frontend**: React 19, TailwindCSS, Shadcn/ui
- **Backend**: FastAPI, MongoDB (ready for integration)
- **Styling**: TailwindCSS with custom dark theme
- **Icons**: Lucide React

## 💡 Tips

1. **High-Quality Images**: Use professional, high-resolution images
2. **Video Loading**: Keep video files optimized for web
3. **SEO**: Add meta tags in `public/index.html`
4. **Performance**: Optimize images before uploading
5. **Testing**: Test on mobile devices

## 📞 Support

For questions or issues, refer to the component files or documentation.

## 📄 License

This portfolio is customized for Sufiyan FX.

---

**Built with ❤️ and creativity**
