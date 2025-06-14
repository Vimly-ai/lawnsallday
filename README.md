# Lawns All Day - Professional Lawn Care Services Website

Professional website for Lawns All Day, serving the Treasure Valley area in Idaho with comprehensive lawn care services.

## 🌱 Overview

This is a modern, responsive website built with Astro and Tailwind CSS for Lawns All Day, a lawn care service company operating in Boise, Meridian, Eagle, Nampa, and surrounding areas.

### Key Features
- ⚡ Fast, static site generation with Astro
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 📞 Click-to-call functionality
- 📧 Contact form integration
- 🗺️ Location-specific landing pages
- 🔍 SEO optimized
- 🚀 Netlify-ready deployment

## 📋 Services Offered

- Lawn Mowing
- Landscaping
- Tree Trimming
- Sprinkler Repair
- Fertilization
- Weed Control

## 📍 Service Areas

- Boise
- Meridian
- Eagle
- Nampa
- Caldwell
- Star
- Middleton
- Kuna

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vimly-ai/lawnsallday.git
cd lawnsallday
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
lawnsallday/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ServiceLayout.astro
│   │   └── LocationLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services.astro
│   │   ├── [service pages].astro
│   │   └── [location pages].astro
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── netlify.toml
```

## 🎨 Customization

### Adding Your Logo
Place your logo files in the `public/images/` directory:
- `lawns-all-day-logo.png` - Main logo
- `lawns-all-day-3d.png` - 3D decorative version

### Updating Contact Information
Contact information is located throughout the site. Primary locations:
- Phone: (208) 989-8378
- Email: info@lawnsallday.com

To update, search and replace these values in all `.astro` files.

### Colors
The site uses a green color scheme defined in `tailwind.config.mjs`. Main colors:
- Primary Green: `#10b981`
- Dark Green: `#059669`
- Light Green: `#f0f9f4`

## 🚀 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Deploy with these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

The `netlify.toml` file includes optimized settings for deployment.

### Environment Variables
No environment variables are required for basic deployment.

## 📱 Contact Information

- **Phone**: (208) 989-8378
- **Email**: info@lawnsallday.com
- **Service Area**: Treasure Valley, Idaho

## 🛠️ Technologies Used

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Netlify](https://netlify.com) - Hosting platform

## 📄 License

© 2024 Lawns All Day. All rights reserved.

---

**Need lawn care services?** Visit [lawnsallday.com](https://lawnsallday.com) or call (208) 989-8378 for a free quote!
