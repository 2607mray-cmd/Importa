
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Package, CheckCircle, TrendingUp } from 'lucide-react';

const PrivateLabelPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <SEO
                    title="Private Label Tea Packaging Services India | Start Your Tea Brand"
                    description="Launch your own tea brand with our Private Label services. We handle sourcing, blending, and packaging. Low MOQ for startups."
                    canonicalUrl="https://teatraders.info/services/private-label-tea/"
                    image="https://images.unsplash.com/photo-1567922045116-2a00fae2ed03"
                    schema={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Private Label Tea Packaging",
                        "provider": {
                            "@type": "WholesaleStore",
                            "name": "Manish Tea Traders",
                            "image": "https://teatraders.info/logo.png"
                        },
                        "serviceType": "Co-packing and Private Labeling",
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "description": "End-to-end private label tea manufacturing service including sourcing, blending, and custom packaging.",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock"
                        }
                    }}
                />

                {/* Hero Section */}
                <section className="relative py-24 flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=2000&auto=format&fit=crop"
                            alt="Tea Packaging Factory"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block bg-tea-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-lg border border-tea-400">
                            For Startups & Brands
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md">
                            Launch Your Own <span className="text-tea-400">Tea Brand</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Comprehensive private label tea packaging services. We handle sourcing, blending, and packing—so you can focus on selling.
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                            className="bg-white text-tea-900 font-bold px-8 py-4 rounded-xl hover:bg-tea-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <Package className="h-5 w-5 text-tea-600" />
                            Get A Quote
                        </a>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-tea-900 mb-6">How It Works</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="shrink-0 bg-tea-100 p-3 rounded-lg h-fit">
                                        <span className="text-xl font-bold text-tea-800">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Blend</h3>
                                        <p className="text-gray-600">Select from our catalogue of CTC, Dust, or Orthodox teas. We can create custom blends (e.g., Hotel Blend, Premium Household Blend) to match your target price.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 bg-tea-100 p-3 rounded-lg h-fit">
                                        <span className="text-xl font-bold text-tea-800">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Select Packaging</h3>
                                        <p className="text-gray-600">Identify your packaging format: Stand-up Pouches, Box Pack, or Jars. We support sizes from 50g to 1kg.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 bg-tea-100 p-3 rounded-lg h-fit">
                                        <span className="text-xl font-bold text-tea-800">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">We Pack & Ship</h3>
                                        <p className="text-gray-600">Once your design is printed, we handle the filling and sealing. The finished product is shipped directly to your warehouse ready for retail.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-6">Why Partner With Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Low Minimum Order Quantity (MOQ) for startups",
                                    "FSSAI Compliant Facility",
                                    "In-house Blending Expert",
                                    "Transparent Pricing Model"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-2">Ready to discuss details?</h4>
                                <p className="text-gray-600 text-sm mb-4">Call us to discuss MOQs and printing costs.</p>
                                <Link to="/contact-us" className="text-tea-600 font-bold hover:underline">Contact Sales →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PrivateLabelPage;
