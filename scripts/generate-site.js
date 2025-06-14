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

// Generate service-location combination page
function generateServiceLocationPage(record) {
  const locationSlug = record.Location.toLowerCase().replace(', idaho', '-idaho').replace(' ', '-');
  const serviceSlug = record.Service.toLowerCase().replace(/ /g, '-');
  
  const pageContent = `---
import Layout from '../layouts/Layout.astro';
import ServiceHero from '../components/ServiceHero.astro';
import CTASection from '../components/CTASection.astro';

const pageData = {
  title: "${record['Generated Title Tag']}",
  description: "${record['Generated Meta Description']}",
  service: "${record.Service}",
  location: "${record.Location}",
  slug: "${record['Target URL Slug']}",
  intro: "${record['Generated Intro Paragraph']}",
  h2_1: "${record['Generated H2 - 1']}",
  h2_2: "${record['Generated H2 - 2']}"
};

const schema = ${record['Generated Schema Markup (JSON-LD)']};
---

<Layout
  title={pageData.title}
  description={pageData.description}
  schema={schema}
  canonical={\`https://lawnsallday.com/\${pageData.slug}\`}
>
  <ServiceHero 
    service={pageData.service}
    location={pageData.location}
    intro={pageData.intro}
  />

  <main class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Service Details Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{pageData.h2_1}</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="prose prose-lg">
            <p class="text-gray-600">
              At Lawns All Day, we provide professional {pageData.service.toLowerCase()} services 
              throughout {pageData.location}. Our experienced team uses commercial-grade equipment 
              and proven techniques to deliver exceptional results for residential and commercial properties.
            </p>
            <ul class="space-y-2 mt-6">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Licensed & Insured Professionals
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Free Estimates & Competitive Pricing
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Serving All {pageData.location} Neighborhoods
              </li>
            </ul>
          </div>
          <div>
            <img 
              src={\`/images/services/\${serviceSlug}.jpg\`}
              alt={\`Professional \${pageData.service} services in \${pageData.location}\`}
              class="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      <!-- Service Areas Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{pageData.h2_2}</h2>
        <div class="bg-gray-50 rounded-lg p-8">
          <p class="text-lg text-gray-600 mb-6">
            We proudly serve all neighborhoods and areas throughout {pageData.location}. 
            Our local team understands the unique climate and conditions of the Treasure Valley, 
            ensuring optimal results for every property we service.
          </p>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="font-semibold text-gray-900 mb-3">Why Choose Local?</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Quick response times</li>
                <li>• Knowledge of local conditions</li>
                <li>• Investment in our community</li>
                <li>• Personalized service</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-3">Service Commitment</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• 100% Satisfaction Guarantee</li>
                <li>• Transparent Pricing</li>
                <li>• Reliable Scheduling</li>
                <li>• Professional Results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Services -->
      <section class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">More Services in {pageData.location}</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <a href="/{locationSlug}-lawn-mowing-and-edging" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 class="font-semibold text-gray-900 mb-2">Lawn Mowing & Edging</h4>
            <span class="text-sm text-green-600">Learn More →</span>
          </a>
          <a href="/{locationSlug}-fertilization-and-weed-control" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 class="font-semibold text-gray-900 mb-2">Fertilization & Weed Control</h4>
            <span class="text-sm text-green-600">Learn More →</span>
          </a>
          <a href="/{locationSlug}-landscaping-services-near-me" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 class="font-semibold text-gray-900 mb-2">Landscaping Services</h4>
            <span class="text-sm text-green-600">Learn More →</span>
          </a>
        </div>
      </section>
    </div>
  </main>

  <CTASection 
    service={pageData.service}
    location={pageData.location}
  />
</Layout>`;

  return {
    path: `src/pages/${record['Target URL Slug']}.astro`,
    content: pageContent
  };
}

// Generate all files
async function generateAllFiles() {
  const files = [];
  
  // Generate all service-location combination pages
  records.forEach(record => {
    files.push(generateServiceLocationPage(record));
  });
  
  // Create all files
  for (const file of files) {
    const dir = path.dirname(file.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(file.path, file.content);
    console.log(`✅ Generated: ${file.path}`);
  }
  
  console.log(`\n🎉 Successfully generated ${files.length} service-location pages!`);
}

// Run the generator
generateAllFiles().catch(console.error);