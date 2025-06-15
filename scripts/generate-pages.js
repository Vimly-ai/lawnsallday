import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Read the CSV file
const csvContent = fs.readFileSync('./AI_Ranking_Local_Page_Content_Generated_Pages.csv', 'utf-8');
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

// Create location-service page template
const createLocationServicePage = (record) => {
  const { Location, Service, 'Target URL Slug': slug, 'Generated Title Tag': title, 
          'Generated Meta Description': description, 'Generated Intro Paragraph': intro,
          'Generated H2 - 1': h2_1, 'Generated H2 - 2': h2_2, 
          'Generated Schema Markup (JSON-LD)': schema } = record;
  
  const locationSlug = Location.toLowerCase().replace(/,.*/, '').trim().replace(/\s+/g, '-');
  const serviceSlug = slug.split('/')[1];
  
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ServiceHero from '../../components/ServiceHero.astro';
import ServiceContent from '../../components/ServiceContent.astro';
import RelatedServices from '../../components/RelatedServices.astro';
import CTA from '../../components/CTA.astro';

const pageData = {
  location: "${Location}",
  service: "${Service}",
  title: "${title.replace(/"/g, '\\"')}",
  description: "${description.replace(/"/g, '\\"')}",
  intro: "${intro.replace(/"/g, '\\"')}",
  h2_1: "${h2_1.replace(/"/g, '\\"')}",
  h2_2: "${h2_2.replace(/"/g, '\\"')}",
  schema: ${schema}
};
---

<BaseLayout
  title={pageData.title}
  description={pageData.description}
  schema={pageData.schema}
>
  <ServiceHero 
    service={pageData.service}
    location={pageData.location}
    intro={pageData.intro}
  />
  <ServiceContent 
    h2_1={pageData.h2_1}
    h2_2={pageData.h2_2}
    service={pageData.service}
    location={pageData.location}
  />
  <RelatedServices 
    currentService={pageData.service}
    location={pageData.location}
  />
  <CTA />
</BaseLayout>`;
};

// Process each record
records.forEach((record) => {
  if (record['Status / Timestamp'] === 'Generated') {
    const slug = record['Target URL Slug'];
    const [locationSlug, serviceSlug] = slug.split('/');
    
    // Create directory structure
    const dirPath = path.join('./src/pages', locationSlug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Write the page file
    const pageContent = createLocationServicePage(record);
    const filePath = path.join(dirPath, `${serviceSlug}.astro`);
    fs.writeFileSync(filePath, pageContent);
    
    console.log(`Created: ${filePath}`);
  }
});

// Create location hub pages
const locations = [...new Set(records.map(r => r.Location))];
locations.forEach(location => {
  const locationSlug = location.toLowerCase().replace(/,.*/, '').trim().replace(/\s+/g, '-');
  const locationServices = records.filter(r => r.Location === location);
  
  const hubPageContent = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import LocationHero from '../../components/LocationHero.astro';
import ServiceGrid from '../../components/ServiceGrid.astro';
import CTA from '../../components/CTA.astro';

const location = "${location}";
const services = ${JSON.stringify(locationServices.map(s => ({
  name: s.Service,
  slug: s['Target URL Slug']
})))};
---

<BaseLayout
  title="Lawn Care & Landscaping Services in ${location} | Lawns All Day"
  description="Professional lawn care, landscaping, and maintenance services in ${location}. Free quotes for all services. Call (208) 989-8378!"
>
  <LocationHero location={location} />
  <ServiceGrid services={services} location={location} />
  <CTA />
</BaseLayout>`;
  
  const filePath = path.join('./src/pages/locations', `${locationSlug}.astro`);
  fs.writeFileSync(filePath, hubPageContent);
  console.log(`Created location hub: ${filePath}`);
});

console.log('\n✅ Page generation complete!');
