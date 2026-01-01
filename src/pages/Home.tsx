
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import StickyMobileFooter from "../components/StickyMobileFooter";
import SEO from "../components/SEO";
import BackToTop from "../components/BackToTop";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";

// Lazy load heavy components for performance
const Gallery = React.lazy(() => import("../components/Gallery"));
const FAQ = React.lazy(() => import("../components/FAQ"));
const Reviews = React.lazy(() => import("../components/Reviews"));

// Loading Fallback
const LoadingFallback = () => (
    <div className="py-20 flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tea-600"></div>
    </div>
);

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleProductSelect = (productName: string) => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col font-sans pb-16 md:pb-0">
            <Navbar />

            <main className="flex-grow">
                <SEO
                    title="Wholesale Tea Supplier in Siliguri | CTC, Dust & Assam Tea | Manish Tea Traders"
                    description="Buy garden-fresh CTC and Dust tea directly from Siliguri. Serving West Bengal, Bihar & UP since 2004. Get today's wholesale price list."
                    canonicalUrl="https://teatraders.info/"
                    schema={{
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WholesaleStore",
                                "name": "Manish Tea Traders",
                                "image": "https://teatraders.info/logo.png",
                                "priceRange": "₹₹",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Ganga Nagar, Mahananda Para",
                                    "addressLocality": "Siliguri",
                                    "addressRegion": "WB",
                                    "postalCode": "734005",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 26.7271,
                                    "longitude": 88.3953
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "09:00",
                                    "closes": "20:00"
                                },
                                "telephone": "+917001958588"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://teatraders.info"
                                    }
                                ]
                            }
                        ]
                    }}
                />
                <Hero />
                <About />
                <Products
                    onProductSelect={handleProductSelect}
                    onNavigateToBlog={() => navigate('/blog')}
                />
                <Suspense fallback={<LoadingFallback />}>
                    <Gallery />
                </Suspense>

                <div id="contact">
                    <Contact selectedProduct="" />
                </div>

                <Suspense fallback={<LoadingFallback />}>
                    <Reviews />
                    <FAQ />
                </Suspense>
                <Newsletter />
            </main>

            <Footer />
            <WhatsAppButton />
            <BackToTop />
            <StickyMobileFooter />
        </div>
    );
};

export default Home;
