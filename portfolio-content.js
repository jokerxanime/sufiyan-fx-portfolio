/**
 * SUFIYAN FX - PORTFOLIO CONTENT
 * 
 * Edit this file to customize your portfolio content.
 * All sections are clearly labeled and easy to update.
 */

export const portfolioContent = {
  
  // ========================================
  // PERSONAL INFORMATION
  // ========================================
  personal: {
    name: "Sufiyan FX",
    tagline: "YouTube & Social Media Video Editor",
    description: "Crafting scroll-stopping content that turns views into engagement",
    email: "contact@sufiyanfx.com", // Update with your real email
    phone: "+1 (555) 123-4567", // Optional
  },

  // ========================================
  // SOCIAL MEDIA LINKS
  // ========================================
  social: [
    { 
      platform: "YouTube", 
      url: "https://youtube.com/@sufiyanfx", // Update with your YouTube channel
      icon: "youtube" 
    },
    { 
      platform: "Instagram", 
      url: "https://instagram.com/sufiyanfx", // Update with your Instagram
      icon: "instagram" 
    },
    { 
      platform: "Twitter", 
      url: "https://twitter.com/sufiyanfx", // Update with your Twitter/X
      icon: "twitter" 
    },
    { 
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/sufiyanfx", // Update with your LinkedIn
      icon: "linkedin" 
    }
  ],

  // ========================================
  // HERO SECTION
  // ========================================
  hero: {
    ctaText: "View My Work",
    ctaSecondary: "Get In Touch"
  },

  // ========================================
  // FEATURED REEL
  // ========================================
  featuredReel: {
    title: "Featured Reel 2025",
    // Replace with your actual YouTube/Vimeo embed URL
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    // Replace with your video thumbnail image
    thumbnail: "https://images.pexels.com/photos/8100060/pexels-photo-8100060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  // ========================================
  // PROJECTS / PORTFOLIO
  // Add your real projects here. You can add as many as you want.
  // ========================================
  projects: [
    {
      id: 1,
      title: "Project Title 1",
      category: "YouTube Content", // Options: "YouTube Content", "Social Media", "Podcast", "Commercial"
      description: "Brief description of this project and what makes it special",
      thumbnail: "https://via.placeholder.com/800x450/1a1a1a/00d9ff?text=Project+1", // Replace with your project thumbnail
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Replace with actual video
      views: "100K+", // Optional: view count
      duration: "10 min" // Optional: video duration
    },
    {
      id: 2,
      title: "Project Title 2",
      category: "Social Media",
      description: "Brief description of this project and what makes it special",
      thumbnail: "https://via.placeholder.com/800x450/1a1a1a/00d9ff?text=Project+2",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      views: "500K+",
      duration: "30 sec"
    },
    {
      id: 3,
      title: "Project Title 3",
      category: "YouTube Content",
      description: "Brief description of this project and what makes it special",
      thumbnail: "https://via.placeholder.com/800x450/1a1a1a/00d9ff?text=Project+3",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      views: "250K+",
      duration: "15 min"
    }
    // Add more projects as needed...
  ],

  // ========================================
  // PROJECT CATEGORIES
  // Categories for filtering projects
  // ========================================
  categories: ["All", "YouTube Content", "Social Media", "Podcast", "Commercial"],

  // ========================================
  // SERVICES
  // List the services you offer
  // ========================================
  services: [
    {
      id: 1,
      title: "YouTube Editing",
      description: "Full video editing with intros, outros, b-roll, transitions, and color grading",
      features: [
        "Color Correction",
        "Sound Design",
        "Motion Graphics",
        "Thumbnail Design"
      ]
    },
    {
      id: 2,
      title: "Short-Form Content",
      description: "Engaging TikTok, Reels, and Shorts optimized for social media algorithms",
      features: [
        "Quick Cuts",
        "Captions & Text",
        "Trending Effects",
        "Hook Optimization"
      ]
    },
    {
      id: 3,
      title: "Podcast Editing",
      description: "Audio and video podcast editing with multi-cam switching and graphics",
      features: [
        "Audio Cleanup",
        "Multi-Cam Sync",
        "Lower Thirds",
        "Chapter Markers"
      ]
    },
    {
      id: 4,
      title: "Content Strategy",
      description: "Consultation on content pacing, retention strategies, and audience engagement",
      features: [
        "Retention Analysis",
        "Pacing Advice",
        "Trend Research",
        "Format Optimization"
      ]
    }
  ],

  // ========================================
  // TESTIMONIALS
  // Add real client testimonials
  // ========================================
  testimonials: [
    {
      id: 1,
      name: "Client Name 1",
      role: "YouTube Creator (100K+ subs)", // Update with real client info
      content: "Add your client's testimonial here. What did they say about working with you?",
      avatar: "https://ui-avatars.com/api/?name=Client+1&background=00d9ff&color=000",
      rating: 5
    },
    {
      id: 2,
      name: "Client Name 2",
      role: "Content Creator",
      content: "Add your client's testimonial here. What did they say about working with you?",
      avatar: "https://ui-avatars.com/api/?name=Client+2&background=00d9ff&color=000",
      rating: 5
    },
    {
      id: 3,
      name: "Client Name 3",
      role: "Social Media Influencer",
      content: "Add your client's testimonial here. What did they say about working with you?",
      avatar: "https://ui-avatars.com/api/?name=Client+3&background=00d9ff&color=000",
      rating: 5
    }
  ],

  // ========================================
  // ABOUT SECTION
  // ========================================
  about: {
    title: "About Me",
    description: "I'm a professional video editor specializing in YouTube and social media content. With over 4 years of experience, I've helped content creators grow their channels and increase engagement through strategic editing and storytelling.",
    story: "Add your personal story here. How did you get started? What's your editing philosophy? What makes you unique?",
    // Replace with your professional photo
    image: "https://images.pexels.com/photos/8100060/pexels-photo-8100060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    
    // Your skills with proficiency levels (0-100)
    skills: [
      { name: "Adobe Premiere Pro", level: 95 },
      { name: "After Effects", level: 90 },
      { name: "DaVinci Resolve", level: 85 },
      { name: "Alight Motion", level: 92 },
      { name: "Color Grading", level: 90 },
      { name: "Sound Design", level: 85 },
      { name: "Motion Graphics", level: 88 }
    ],
    
    // Your statistics
    stats: [
      { label: "Projects Completed", value: "500+" }, // Update with your real numbers
      { label: "Happy Clients", value: "100+" },
      { label: "Years Experience", value: "4+" },
      { label: "Total Views Generated", value: "50M+" }
    ]
  },

  // ========================================
  // CONTACT SECTION
  // ========================================
  contact: {
    title: "Let's Create Something Amazing",
    description: "Ready to take your content to the next level? Let's discuss your project."
  }
};
