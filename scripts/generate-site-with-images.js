const fs = require('fs');
const path = require('path');

// Image mappings for each service type
const serviceImageMap = {
  'lawn-mowing-and-edging': [
    '/images/services/lawn-mowing-1.jpg',
    '/images/services/lawn-mowing-2.jpg',
    '/images/services/lawn-mowing-3.jpg'
  ],
  'fertilization-and-weed-control': [
    '/images/services/fertilization-1.jpg',
    '/images/services/fertilization-2.jpg',
    '/images/services/healthy-lawn.jpg'
  ],
  'trimming-and-blowing': [
    '/images/services/trimming-1.jpg',
    '/images/services/hedge-trimming.jpg',
    '/images/services/cleanup.jpg'
  ],
  'tree-and-bush-trimming': [
    '/images/services/tree-trimming-1.jpg',
    '/images/services/tree-trimming-2.jpg',
    '/images/services/pruning.jpg'
  ],
  'sprinkler-repair-and-maintenance': [
    '/images/services/sprinkler-1.jpg',
    '/images/services/sprinkler-2.jpg',
    '/images/services/irrigation.jpg'
  ],
  'sprinkler-system-installation': [
    '/images/services/sprinkler-install-1.jpg',
    '/images/services/sprinkler-install-2.jpg',
    '/images/services/irrigation-system.jpg'
  ],
  'overseeding-and-lawn-repair': [
    '/images/services/overseeding-1.jpg',
    '/images/services/lawn-repair.jpg',
    '/images/services/grass-seed.jpg'
  ],
  'landscaping-services-near-me': [
    '/images/services/landscaping-1.jpg',
    '/images/services/landscaping-2.jpg',
    '/images/services/landscaping-3.jpg'
  ],
  'mulch-and-bark-delivery-and-placement': [
    '/images/services/mulch-1.jpg',
    '/images/services/mulch-2.jpg',
    '/images/services/bark-installation.jpg'
  ],
  'hardscaping-near-me': [
    '/images/services/hardscaping-1.jpg',
    '/images/services/paver-patio.jpg',
    '/images/services/retaining-wall.jpg'
  ],
  // Default images for other services
  'default': [
    '/images/services/lawn-care-general-1.jpg',
    '/images/services/lawn-care-general-2.jpg'
  ]
};

// Location image mappings
const locationImageMap = {
  'nampa': ['/images/locations/nampa-1.jpg', '/images/locations/nampa-2.jpg'],
  'meridian': ['/images/locations/meridian-1.jpg', '/images/locations/meridian-2.jpg'],
  'boise': ['/images/locations/boise-1.jpg', '/images/locations/boise-2.jpg'],
  'eagle': ['/images/locations/eagle-1.jpg', '/images/locations/eagle-2.jpg'],
  'kuna': ['/images/locations/kuna-1.jpg', '/images/locations/kuna-2.jpg'],
  'caldwell': ['/images/locations/caldwell-1.jpg', '/images/locations/caldwell-2.jpg']
};

// Parse CSV manually
function parseCSV(content) {
  const lines = content.split('\n').filter(line => line.trim());
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    values.push(current.trim());
    
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    return row;
  });
}

// Read and parse the CSV file
function readCSV() {
  const csvPath = path.join(__dirname, '..', 'AI_Ranking_Local_Page_Content_Generated_Pages.csv');
  
  if (!fs.existsSync(csvPath)) {
    console.error('❌ CSV file not found! Please add AI_Ranking_Local_Page_Content_Generated_Pages.csv to the root directory.');
    process.exit(1);
  }
  
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  return parseCSV(csvContent);
}

// Create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Get images for a specific service
function getServiceImagesString(serviceSlug) {
  const images = serviceImageMap[serviceSlug] || serviceImageMap['default'];
  return JSON.stringify(images);
}

// Get images for a specific location
function getLocationImagesString(locationSlug) {
  const images = locationImageMap[locationSlug] || ['/images/locations/idaho-landscape-1.jpg', '/images/locations/idaho-landscape-2.jpg'];
  return JSON.stringify(images);
}

// Generate individual service-location page
function generateServiceLocationPage(data) {
  const { 
    Location: location,
    Service: service,
    'Target URL Slug': urlSlug,
    'Generated Title Tag': titleTag,
    'Generated Meta Description': metaDescription,
    'Generated Intro Paragraph': introParagraph,
    'Generated H2 - 1': h2_1,
    'Generated H2 - 2': h2_2,
    'Generated Schema Markup (JSON-LD)': schemaMarkup
  } = data;
  
  const [locationSlug, serviceSlug] = urlSlug.split('/');
  
  // Clean up the schema markup
  let schema = schemaMarkup;
  try {
    schema = schema.replace(/^"|"$/g, '').replace(/""/g, '"');
    JSON.parse(schema);
  } catch (e) {
    console.warn(`⚠️  Invalid schema for ${urlSlug}, using default`);
    schema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service} in ${location}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Lawns All Day",
        "telephone": "12089898378",
        "email": "Brad@lawnsallday.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6424 E Sherryanna Ln",
          "addressLocality": "Nampa",
          "addressRegion": "Idaho",
          "postalCode": "83687",
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": location
      },
      "description": metaDescription
    });
  }
  
  const pageContent = `---
import Layout from '../../layouts/Layout.astro';
import ServiceHero from '../../components/service/ServiceHero.astro';
import ServiceFeatures from '../../components/service/ServiceFeatures.astro';
import LocationInfo from '../../components/LocationInfo.astro';
import CTASection from '../../components/CTASection.astro';
import RelatedServices from '../../components/RelatedServices.astro';

const location = "${location}";
const locationSlug = "${locationSlug}";
const service = "${service}";
const serviceSlug = "${serviceSlug}";

// Service and location images
const serviceImages = ${getServiceImagesString(serviceSlug)};
const locationImages = ${getLocationImagesString(locationSlug)};
const heroImage = serviceImages[0] || '/images/hero/hero-services.jpg';

// Features for this service
const features = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind. We carry comprehensive liability coverage.",
    icon: "✓"
  },
  {
    title: "Expert Technicians",
    description: "Our team has years of experience providing ${service.toLowerCase()} in ${location}.",
    icon: "👨‍🔧"
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with a 100% satisfaction guarantee on all services.",
    icon: "⭐"
  },
  {
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with no hidden fees. Free quotes available.",
    icon: "💰"
  },
  {
    title: "Eco-Friendly Options",
    description: "Environmentally responsible practices and products available upon request.",
    icon: "🌱"
  },
  {
    title: "Flexible Scheduling",
    description: "Weekly, bi-weekly, or monthly service plans to fit your needs and budget.",
    icon: "📅"
  }
];

// Location highlights
const locationHighlights = [
  "Same-day service available in most areas",
  "Serving residential and commercial properties",
  "Family-owned and operated since 2015",
  "Local experts who understand ${location}'s climate",
  "Trusted by hundreds of ${location} homeowners"
];

// Related services
const relatedServices = [
  {
    name: "Lawn Mowing & Edging",
    slug: "lawn-mowing-and-edging",
    description: "Professional lawn mowing with precise edging for a manicured look."
  },
  {
    name: "Fertilization & Weed Control",
    slug: "fertilization-and-weed-control",
    description: "Custom treatment plans to keep your lawn healthy and weed-free."
  },
  {
    name: "Sprinkler Repair",
    slug: "sprinkler-repair-and-maintenance",
    description: "Fast, efficient sprinkler system repairs and maintenance."
  },
  {
    name: "Tree & Bush Trimming",
    slug: "tree-and-bush-trimming",
    description: "Expert pruning and shaping for healthy, beautiful plants."
  },
  {
    name: "Landscaping Services",
    slug: "landscaping-services-near-me",
    description: "Complete landscaping design and installation services."
  },
  {
    name: "Mulch Installation",
    slug: "mulch-and-bark-delivery-and-placement",
    description: "Premium mulch delivery and professional installation."
  }
];

// Schema markup
const schema = ${schema};
---

<Layout 
  title="${titleTag}"
  description="${metaDescription}"
  schema={schema}
>
  <ServiceHero 
    title="${service} in ${location}"
    subtitle="${metaDescription}"
    location={location}
    image={heroImage}
  />
  
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          ${introParagraph}
        </p>
        
        <!-- Service Images Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {serviceImages.map((image, index) => (
            <img 
              src={image} 
              alt={\`${service} service in ${location} - Image \${index + 1}\`}
              class="rounded-lg shadow-lg w-full h-64 object-cover hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
        
        <h2 class="text-3xl font-bold mb-6 text-gray-900">${h2_1}</h2>
        
        <div class="prose prose-lg max-w-none text-gray-700">
          <p class="mb-4">
            When it comes to ${service.toLowerCase()} in ${location}, Lawns All Day stands out as the trusted choice for homeowners and businesses alike. Our commitment to excellence, combined with years of local experience, ensures that every project meets the highest standards of quality and professionalism.
          </p>
          
          <ul class="space-y-3 my-6">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span><strong>Local Expertise:</strong> We understand the unique challenges and opportunities of maintaining lawns in ${location}'s climate.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span><strong>Professional Equipment:</strong> We use commercial-grade tools and equipment for superior results.</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span><strong>Reliable Service:</strong> Count on us for consistent, dependable service you can trust.</span>
            </li>
          </ul>
        </div>
        
        <h2 class="text-3xl font-bold mb-6 text-gray-900 mt-12">${h2_2}</h2>
        
        <div class="prose prose-lg max-w-none text-gray-700">
          <p class="mb-4">
            Our systematic approach to ${service.toLowerCase()} ensures consistent, high-quality results for every client in ${location}. Here's what you can expect when you choose Lawns All Day:
          </p>
          
          <ol class="space-y-4 my-6">
            <li><strong>Initial Consultation:</strong> We assess your property and discuss your specific needs and goals.</li>
            <li><strong>Customized Plan:</strong> We develop a tailored service plan that fits your property and budget.</li>
            <li><strong>Professional Execution:</strong> Our trained technicians perform the work with attention to detail.</li>
            <li><strong>Quality Check:</strong> We ensure every aspect meets our high standards before considering the job complete.</li>
            <li><strong>Follow-Up:</strong> We check in to ensure your complete satisfaction and address any concerns.</li>
          </ol>
        </div>
        
        <!-- Location Images -->
        <div class="mt-12">
          <h3 class="text-2xl font-bold mb-6 text-gray-900">Serving ${location} with Pride</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locationImages.map((image, index) => (
              <img 
                src={image} 
                alt={\`${location} landscape - Image \${index + 1}\`}
                class="rounded-lg shadow-lg w-full h-48 object-cover hover:shadow-xl transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <ServiceFeatures features={features} title="Why Choose Lawns All Day for ${service}?" />
  
  <LocationInfo 
    location={location}
    description="Lawns All Day has been proudly serving ${location} with professional lawn care and landscaping services. Our local team understands the unique needs of properties in our area, from soil conditions to weather patterns. We're committed to helping ${location} residents and businesses maintain beautiful, healthy outdoor spaces year-round."
    highlights={locationHighlights}
  />
  
  <RelatedServices 
    services={relatedServices}
    currentService={serviceSlug}
    location={location}
  />
  
  <CTASection 
    title="Ready to Get Started with ${service}?"
    subtitle="Get your free quote today and see why ${location} trusts Lawns All Day!"
  />
</Layout>`;
  
  return pageContent;
}

// Main generation function
async function generateSite() {
  console.log('🚀 Starting site generation with real images...\n');
  
  // Read CSV data
  const data = readCSV();
  console.log(`📊 Found ${data.length} service-location combinations\n`);
  
  // Create directories and generate pages
  let generatedPages = 0;
  
  data.forEach(row => {
    const [locationSlug, serviceSlug] = row['Target URL Slug'].split('/');
    const locationDir = path.join(__dirname, '..', 'src', 'pages', locationSlug);
    
    // Create location directory
    ensureDirectoryExists(locationDir);
    
    // Generate page
    const pagePath = path.join(locationDir, `${serviceSlug}.astro`);
    const pageContent = generateServiceLocationPage(row);
    fs.writeFileSync(pagePath, pageContent);
    generatedPages++;
    
    if (generatedPages % 10 === 0) {
      console.log(`✅ Generated ${generatedPages} pages...`);
    }
  });
  
  console.log(`\n✅ Generated ${generatedPages} service-location pages with real images`);
  console.log('\n💡 Next steps:');
  console.log('   1. Run the download-images.sh script to fetch all images');
  console.log('   2. Run `npm run build` to build the site');
  console.log('   3. Run `npm run preview` to preview locally');
  console.log('   4. Deploy to Netlify!');
}

// Run the generator
generateSite().catch(console.error);