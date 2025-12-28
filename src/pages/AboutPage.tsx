
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import StickyMobileFooter from "../components/StickyMobileFooter";

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <SEO
                    title="About Manish Tea Traders | Heritage & Sourcing | Siliguri Tea Wholesaler"
                    description="Learn about our journey from a small tea shop to a major wholesale supplier in Siliguri. Direct sourcing from Assam & Darjeeling gardens."
                    canonicalUrl="https://teatraders.info/about-us"
                    image="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1200"
                    schema={{
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "AboutPage",
                                "mainEntity": {
                                    "@type": "WholesaleStore",
                                    "name": "Manish Tea Traders",
                                    "foundingDate": "2004",
                                    "founder": {
                                        "@type": "Person",
                                        "name": "Jaleshwar Ray"
                                    },
                                    "description": "Premium wholesale tea supplier based in Siliguri, West Bengal.",
                                    "areaServed": ["West Bengal", "Bihar", "Uttar Pradesh", "Jharkhand"],
                                    "knowsAbout": ["Tea Tasting", "Tea Blending", "Wholesale Distribution"]
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://teatraders.info"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "About Us",
                                        "item": "https://teatraders.info/about-us"
                                    }
                                ]
                            }
                        ]
                    }}
                />
                <About />
            </main>
            <Footer />
            <WhatsAppButton />
            <StickyMobileFooter />
        </div>
    );
};

export default AboutPage;
