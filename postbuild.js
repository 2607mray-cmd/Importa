
import fs from 'fs';
import path from 'path';

const routes = [
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
    'privacy-policy',
    'terms-of-service'
];

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

console.log('--- Generating Static Routes for GitHub Pages SEO ---');

routes.forEach(route => {
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
    console.log(`Verified: /${route}`);
});

console.log('--- Static Routes Completed Successfully ---');
