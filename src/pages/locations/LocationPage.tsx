
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import SEO from '../../components/SEO';
import { LOCATION_PAGES } from '../../constants';

import StickyMobileFooter from '../../components/StickyMobileFooter';

const LocationPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find content from constants based on slug
    // We assume slug in route is like "wholesale-supply/:region/:city?" but for now let's use the simple constant map
    // The constant map has slugs like "siliguri-tea-supplier".
    // I need to adapt the router to match these or find by slug.

    const locationData = LOCATION_PAGES.find(p => p.slug === slug);

    if (!locationData) {
        // Fallback or 404
        return <Navigate to="/locations" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <SEO
                    title={locationData.title}
                    description={locationData.metaDescription}
                    canonicalUrl={`https://teatraders.info/wholesale-supply/${slug}`}
                    image="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9"
                    schema={[{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://teatraders.info/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Service Areas",
                            "item": "https://teatraders.info/locations"
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": locationData.city,
                            "item": `https://teatraders.info/wholesale-supply/${slug}`
                        }]
                    }]}
                />

                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="mb-8">
                        <Link to="/locations" className="text-tea-600 hover:underline text-sm mb-4 inline-block">← Back to Service Areas</Link>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-tea-900 mb-4">{locationData.heading}</h1>
                        <div className="h-1 w-20 bg-tea-500 rounded"></div>
                    </div>

                    <div className="prose prose-lg prose-tea max-w-none mb-12" dangerouslySetInnerHTML={{ __html: locationData.content }}></div>

                    <div className="bg-tea-50 border border-tea-100 rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-tea-900 mb-4">Need Tea Supply in {locationData.city}?</h2>
                        <p className="text-gray-700 mb-6">
                            We dispatch regularly to {locationData.city}. Contact us for current rates and transport details.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+919434308958" className="bg-tea-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-tea-700 transition-colors">
                                Call Now
                            </a>
                            <a href="https://wa.me/919434308958?text=Hi,%20I%20need%20wholesale%20rates%20for%20delivery%20in%20your%20area" className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                    {/* FAQ Section for SEO Density */}
                    <div className="mb-12 border-t border-gray-100 pt-10">
                        <h3 className="text-2xl font-serif font-bold text-tea-900 mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Do you deliver to {locationData.city}?</h4>
                                <p className="text-gray-600 text-sm">Yes, we deliver to {locationData.city} via our network of transport partners (Road/Rail). Delivery usually takes 3-5 days from Siliguri.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">What is the minimum order quantity (MOQ)?</h4>
                                <p className="text-gray-600 text-sm">Our MOQ for wholesale orders is just 30 kg (one sack). You can mix different grades in your first order to test quality.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Can I get a GST bill?</h4>
                                <p className="text-gray-600 text-sm">Absolutely. We are a registered business and provide full GST billing for all interstate shipments to {locationData.city}.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
            <WhatsAppButton />
            <StickyMobileFooter />
        </div>
    );
};

export default LocationPage;
