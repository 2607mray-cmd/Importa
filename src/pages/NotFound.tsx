import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-4 text-center">
                <SEO
                    title="Page Not Found | Manish Tea Traders"
                    description="The page you are looking for does not exist. Return to our homepage to browse premium wholesale teas."
                    noindex={true}
                    // No index for 404 pages
                    schema={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "404 Not Found"
                    }}
                />

                <div className="max-w-2xl mx-auto">
                    <div className="bg-tea-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <Search className="h-10 w-10 text-tea-600" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-tea-900 mb-6">
                        404: Page Not Found
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Oops! It seems the tea you are looking for has been sold out... or never existed.
                        Let's get you back to the fresh stock.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-tea-600 hover:bg-tea-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <Home className="h-5 w-5" />
                        Back to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
