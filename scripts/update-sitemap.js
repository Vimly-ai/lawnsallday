import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse CSV data
const csvContent = fs.readFileSync(path.join(__dirname, '../AI Ranking Local Page Content  Generated Pages.csv'), 'utf-8');
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://lawnsallday.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Main pages
  const mainPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
  ];

  // Location hub pages
  const locations = ['nampa', 'meridian', 'boise', 'eagle', 'kuna', 'caldwell'];
  locations.forEach(location => {
    mainPages.push({
      loc: `/locations/${location}-idaho`,
      priority: '0.9',
      changefreq: 'weekly'
    });
  });

  // Service hub pages
  const services = [
    'lawn-mowing-and-edging',
    'fertilization-and-weed-control',
    'sprinkler-system-installation',
    'landscaping-services-near-me',
    'tree-and-bush-trimming'
  ];
  services.forEach(service => {
    mainPages.push({
      loc: `/services/${service}`,
      priority: '0.9',
      changefreq: 'weekly'
    });
  });

  // Add main pages to sitemap
  mainPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add service-location pages
  records.forEach(record => {
    sitemap += `  <url>
    <loc>${baseUrl}/${record['Target URL Slug']}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  sitemap += '</urlset>';

  return sitemap;
}

// Update sitemap
const sitemapContent = generateSitemap();
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapContent);
console.log('✅ Sitemap updated successfully!');