
import fs from 'fs';
import path from 'path';

// Helper to extract slugs from a specific section of the file
function extractSlugs(content, webSectionMarker, nextSectionMarker) {
    const start = content.indexOf(webSectionMarker);
    if (start === -1) return [];

    let end = content.length;
    if (nextSectionMarker) {
        const nextStart = content.indexOf(nextSectionMarker);
        if (nextStart !== -1) end = nextStart;
    }

    const section = content.substring(start, end);
    const slugRegex = /slug:\s*"([^"]+)"/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(section)) !== null) {
        slugs.push(match[1]);
    }
    return slugs;
}

// Read constants.ts
const constantsPath = path.resolve('src', 'constants.ts');
const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

// Extract dynamic routes
const productSlugs = extractSlugs(constantsContent, 'export const PRODUCTS', 'export const LOCATION_PAGES');
const locationSlugs = extractSlugs(constantsContent, 'export const LOCATION_PAGES', 'export const BLOG_POSTS');
const blogSlugs = extractSlugs(constantsContent, 'export const BLOG_POSTS', null); // Until end of file

console.log(`Found ${productSlugs.length} Products`);
console.log(`Found ${locationSlugs.length} Locations`);
console.log(`Found ${blogSlugs.length} Blog Posts`);

// Static Routes
const staticRoutes = [
    '', // Home
    'about-us',
    'contact-us',
    'locations',
    'blog',
    'services/private-label-tea',
    'privacy-policy',
    'terms-of-service',
    // Product Categories (Hardcoded as they rarely change)
    'products/ctc-tea',
    'products/tea-dust',
    'products/orthodox-leaf'
];

// Combine all routes
const routes = [
    ...staticRoutes,
    ...locationSlugs.map(slug => `wholesale-supply/${slug}`),
    ...blogSlugs.map(slug => `blog/${slug}`),
    ...productSlugs.map(slug => `product/${slug}`)
];

const distDir = path.resolve('dist');
// Ensure dist exists (if running without build, though unlikely)
if (!fs.existsSync(distDir)) {
    console.warn('Dist directory does not exist. Skipping index.html copy.');
}

const indexHtmlPath = path.join(distDir, 'index.html');
let indexHtml = '';
if (fs.existsSync(indexHtmlPath)) {
    indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
}

console.log('--- Generating Static Routes for GitHub Pages SEO ---');

routes.forEach(route => {
    if (route === '') return;
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }
    // Only write index.html if we have it
    if (indexHtml) {
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
    }
    // Optional: Log fewer lines to avoid clutter
    // console.log(`Verified: /${route}`); 
});

console.log(`Verified ${routes.length} routes.`);

console.log('--- Generating Sitemap.xml ---');

const domain = 'https://teatraders.info';
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
    const url = `${domain}/${route}${route ? '/' : ''}`;
    let priority = 0.8;
    if (route === '') priority = 1.0;
    if (route.startsWith('products/')) priority = 0.9;
    if (route.startsWith('product/')) priority = 0.85;
    if (route.startsWith('blog/')) priority = 0.7;
    if (route === 'privacy-policy' || route === 'terms-of-service') priority = 0.5;

    return `  <url>
    <loc>${url}</loc>
    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
}

// Determine public dir
const publicDir = path.resolve('public');
if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent); // Keep source in sync
}

console.log('--- Static Routes & Sitemap Completed Successfully ---');
