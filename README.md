# Lawns All Day - Professional Lawn Care & Landscaping Website

A high-performance, SEO-optimized website for Lawns All Day, serving the Treasure Valley region of Idaho with professional lawn care and landscaping services.

## 🌱 Overview

This website is built with Astro, Tailwind CSS, and TypeScript, featuring:
- 139 total pages with location and service-specific content
- Advanced SEO optimization with schema markup
- Mobile-responsive design
- Fast page loads with optimized images
- Structured data for local business
- Comprehensive sitemap

## 🛠️ Tech Stack

- **Framework**: Astro 4.4.0
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5.3.3
- **Deployment**: Netlify
- **SEO**: Schema.org structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

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

3. Generate all service-location pages:
```bash
npm run generate
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
lawnsallday/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SEO.astro
│   │   ├── ServiceHero.astro
│   │   ├── LocationHero.astro
│   │   └── ...
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Route pages
│   │   ├── index.astro   # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services.astro
│   │   ├── locations/    # Location hub pages
│   │   ├── services/     # Service hub pages
│   │   └── [service-location pages]
│   └── styles/           # Global styles
├── public/              # Static assets
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/             # Build scripts
│   ├── generate-site.js # Page generator
│   └── update-sitemap.js
└── AI Ranking Local Page Content  Generated Pages.csv
```

## 🌐 Site Structure

### Service Areas (6 locations)
- Nampa, Idaho
- Meridian, Idaho
- Boise, Idaho
- Eagle, Idaho
- Kuna, Idaho
- Caldwell, Idaho

### Services (19 types)
- Lawn mowing and edging
- Fertilization and weed control
- Sprinkler system installation
- Landscaping services
- Tree and bush trimming
- Property management services
- And 13 more specialized services

### Page Types
1. **Homepage** - Main landing page
2. **Service Hub Pages** - Overview of each service type
3. **Location Hub Pages** - Overview of services in each city
4. **Service-Location Pages** - Specific service in specific location (114 pages)

## 🔧 Development

### Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run generate` | Generate all service-location pages |
| `npm run astro` | Run Astro CLI commands |

### Adding New Pages

1. Add page data to the CSV file
2. Run `npm run generate` to create the pages
3. Run `npm run build` to test the production build

### Image Requirements

Add these images to `/public/images/`:
- `lawns-all-day-logo.png` - Company logo
- `lawns-all-day-3d.png` - 3D emblem/badge

Add service images to `/public/images/services/`:
- `lawn-mowing-and-edging.jpg`
- `fertilization-and-weed-control.jpg`
- `sprinkler-system-installation.jpg`
- `landscaping-services.jpg`
- `tree-and-bush-trimming.jpg`

Add location images to `/public/images/locations/`:
- `nampa-idaho.jpg`
- `meridian-idaho.jpg`
- `boise-idaho.jpg`
- `eagle-idaho.jpg`
- `kuna-idaho.jpg`
- `caldwell-idaho.jpg`

## 🚀 Deployment

The site is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The `netlify.toml` file includes:
- Proper headers for security
- Caching rules for performance
- Redirect rules

## 📍 SEO Features

- **Schema.org Markup**: LocalBusiness and Service schemas
- **Meta Tags**: Optimized title and description for each page
- **Canonical URLs**: Proper canonical tags
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Configured for search engines
- **Local SEO**: Location-specific content with zip codes
- **Mobile Optimization**: Responsive design

## 📧 Contact Information

- **Phone**: (208) 989-8378
- **Email**: Brad@lawnsallday.com
- **Address**: 6424 E Sherryanna Ln, Nampa, ID 83687

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ by [Vimly AI](https://vimly.ai)