
import fs from 'fs';
import path from 'path';

const routes = [
    '', // Home
    'about-us',
    'contact-us',
    'locations',
    'blog',
    'services/private-label-tea',
    'products/ctc-tea',
    'products/tea-dust',
    'products/orthodox-leaf',
    'wholesale-supply/siliguri-tea-supplier',
    'wholesale-supply/kolkata-tea-supplier',
    'wholesale-supply/assam-tea-supplier',
    'wholesale-supply/darjeeling-tea-supplier',
    'wholesale-supply/tea-wholesaler-patna-bihar',
    'wholesale-supply/tea-supplier-ranchi-jharkhand',
    'wholesale-supply/wholesale-tea-supplier-delhi',
    'wholesale-supply/tea-wholesaler-mumbai',
    'wholesale-supply/tea-supplier-bangalore',
    'wholesale-supply/tea-wholesaler-jaipur-rajasthan',
    'wholesale-supply/tea-supplier-lucknow-up',
    'wholesale-supply/tea-wholesaler-chennai',
    'wholesale-supply/tea-supplier-hyderabad',
    'wholesale-supply/tea-wholesaler-pune',
    'wholesale-supply/tea-supplier-surat-gujarat',
    'wholesale-supply/tea-wholesaler-muzaffarpur',
    'wholesale-supply/tea-supplier-dhanbad',
    'wholesale-supply/tea-wholesaler-indore-mp',
    'wholesale-supply/tea-supplier-nagpur',
    'blog/wholesale-tea-markets-india',
    'blog/choose-ctc-tea',
    'blog/siliguri-tea-market',
    'blog/darjeeling-tea-flush-guide',
    'blog/start-tea-brand-india',
    'blog/assam-vs-darjeeling',
    'blog/identify-good-tea',
    'blog/ctc-tea-grades',
    'blog/buy-tea-from-siliguri',
    'blog/private-label-tea-guide',
    'blog/future-tea-ecommerce-india',
    'blog/price-wholesale-tea-competitively',
    'blog/challenges-opportunities-indian-tea-export',
    'blog/sustainable-tea-farming-wholesale',
    'blog/technology-modern-tea-trading',
    'product/black-ctc-tea',
    'product/rajni-gold',
    'product/begam-gold',
    'product/saavan-tea',
    'product/priya-gold',
    'product/sabnam-gold',
    'product/nepal-high-grown',
    'product/tea-dust-hotel-special',
    'product/darjeeling-orthodox',
    'product/assam-granules-tea',
    'product/private-label-packaging',
    'product/tea-bags-bulk',
    'privacy-policy',
    'terms-of-service'
];

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

console.log('--- Generating Static Routes for GitHub Pages SEO ---');

routes.forEach(route => {
    if (route === '') return;
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
    console.log(`Verified: /${route}`);
});

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

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemapContent); // Keep source in sync too

console.log('--- Static Routes & Sitemap Completed Successfully ---');
