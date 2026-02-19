/**
 * ⚡ QUICK EDIT GUIDE - SUFIYAN FX PORTFOLIO
 * 
 * This file shows you exactly what to edit and where.
 * Follow the steps below to customize your portfolio.
 */

// ============================================
// 📍 STEP 1: EDIT YOUR INFORMATION
// File: /app/frontend/src/portfolio-content.js
// ============================================

/*
1. UPDATE YOUR NAME & CONTACT:
   - Line 13-17: Change name, tagline, email, phone

2. UPDATE SOCIAL MEDIA LINKS:
   - Line 23-45: Replace with your actual social media URLs

3. UPDATE FEATURED REEL:
   - Line 57: Replace "YOUR_VIDEO_ID" with your YouTube video ID
   - Line 59: Replace thumbnail with your video thumbnail URL

4. ADD YOUR PROJECTS:
   - Line 68-92: Replace placeholder projects with your real work
   - Add more projects by copying the project object structure
   - Each project needs: title, category, description, thumbnail, videoUrl

5. UPDATE SERVICES:
   - Line 106-147: Customize services you offer
   - Edit titles, descriptions, and features

6. ADD TESTIMONIALS:
   - Line 154-178: Replace with real client testimonials
   - Include client name, role, and feedback

7. UPDATE ABOUT SECTION:
   - Line 185: Your bio/description
   - Line 186: Your personal story
   - Line 191-198: Your skills and proficiency levels
   - Line 202-207: Your statistics (projects, clients, experience, views)
*/

// ============================================
// 📍 STEP 2: HOW TO GET VIDEO EMBED URLs
// ============================================

/*
YOUTUBE:
1. Go to your YouTube video
2. Click "Share" button below the video
3. Click "Embed"
4. Copy the URL from src="..." (looks like: https://www.youtube.com/embed/VIDEO_ID)
5. Paste in videoUrl field

VIMEO:
1. Go to your Vimeo video
2. Click the share button
3. Copy the embed URL (looks like: https://player.vimeo.com/video/VIDEO_ID)
4. Paste in videoUrl field
*/

// ============================================
// 📍 STEP 3: WHERE TO HOST IMAGES
// ============================================

/*
FOR THUMBNAILS & IMAGES:
- Option 1: Use Imgur (free, easy) - imgur.com
- Option 2: Use Cloudinary (free tier) - cloudinary.com
- Option 3: Use your own hosting/domain

RECOMMENDED IMAGE SIZES:
- Project Thumbnails: 1280x720px (16:9 ratio)
- About Image: 800x800px (square)
- Testimonial Avatars: Auto-generated (current setup)
*/

// ============================================
// 📍 STEP 4: CUSTOMIZE COLORS
// ============================================

/*
CURRENT ACCENT COLOR: Cyan (#00d9ff)

TO CHANGE COLOR:
1. Open all files in /app/frontend/src/components/
2. Find & Replace "#00d9ff" with your preferred color
3. Example colors:
   - Orange: #ff6b35
   - Purple: #9b59b6
   - Green: #2ecc71
   - Red: #e74c3c
   - Gold: #f39c12
*/

// ============================================
// 📍 STEP 5: TEST YOUR CHANGES
// ============================================

/*
AFTER EDITING:
1. Save the portfolio-content.js file
2. Website auto-reloads at http://localhost:3000
3. Check all sections:
   ✓ Hero section shows your name
   ✓ Projects display correctly
   ✓ Videos play when clicked
   ✓ Contact info is correct
   ✓ Social links work
*/

// ============================================
// 📍 COMMON ISSUES & SOLUTIONS
// ============================================

/*
ISSUE: Video not playing
SOLUTION: Make sure videoUrl is an embed URL (contains /embed/)

ISSUE: Image not showing
SOLUTION: Check image URL is publicly accessible and correct

ISSUE: Page not updating
SOLUTION: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

ISSUE: Broken layout
SOLUTION: Check you didn't remove any commas or brackets in portfolio-content.js
*/

// ============================================
// 📍 NEED HELP?
// ============================================

/*
1. Check /app/PORTFOLIO_README.md for detailed documentation
2. Review portfolio-content.js comments
3. All content is in ONE file: portfolio-content.js
*/

export default {
  message: "This is just a guide file. Edit /app/frontend/src/portfolio-content.js to customize your portfolio!"
};
