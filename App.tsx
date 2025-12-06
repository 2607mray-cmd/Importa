import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyMobileFooter from "./components/StickyMobileFooter";
import SEO from "./components/SEO";
import BackToTop from "./components/BackToTop";
import Newsletter from "./components/Newsletter";

// Lazy load heavy components for performance
const Gallery = React.lazy(() => import("./components/Gallery"));
const FAQ = React.lazy(() => import("./components/FAQ"));
const Reviews = React.lazy(() => import("./components/Reviews"));
const Blog = React.lazy(() => import("./components/Blog"));
const Locations = React.lazy(() => import("./components/Locations"));

// Define Views
type ViewType = 'home' | 'blog' | 'locations';

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tea-600"></div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [viewId, setViewId] = useState<string | undefined>(undefined); // slug for blog or location
  const [subView, setSubView] = useState<'list' | 'detail'>('list');

  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleNavigation = (view: string, id?: string) => {
    if (view === 'home') {
        setCurrentView('home');
        setViewId(undefined);
        setSubView('list');
    } else if (view === 'blog') {
        setCurrentView('blog');
        if (id) {
            setViewId(id);
            setSubView('detail');
        } else {
            setViewId(undefined);
            setSubView('list');
        }
    } else if (view === 'locations') {
        setCurrentView('locations');
        if (id) {
            setViewId(id);
            setSubView('detail');
        } else {
            setViewId(undefined);
            setSubView('list');
        }
    }
  };

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
    if (currentView !== 'home') {
        handleNavigation('home');
        // Wait for render then scroll
        setTimeout(() => {
             document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans pb-16 md:pb-0">
      <Navbar onNavigate={handleNavigation} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
             <>
                <SEO 
                    title="Manish Tea Traders | Wholesale Tea Supplier in Siliguri | CTC & Assam Tea"
                    description="Manish Tea Traders – leading tea wholesaler in Siliguri offering CTC tea, Assam tea, Nepal tea & dust tea at wholesale prices. Fresh stock, bulk supply, fast delivery."
                    schema={{
                        "@context": "https://schema.org",
                        "@type": "WholesaleStore",
                        "name": "Manish Tea Traders",
                        "description": "Leading tea wholesaler in Siliguri offering CTC, Assam, and Nepal tea.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Ganga Nagar, Mahananda Para",
                            "addressLocality": "Siliguri",
                            "addressRegion": "West Bengal",
                            "postalCode": "734005",
                            "addressCountry": "IN"
                        },
                        "telephone": "+919434308958"
                    }}
                />
                <Hero />
                <About />
                <Products 
                    onProductSelect={handleProductSelect} 
                    onNavigateToBlog={() => handleNavigation('blog')}
                />
                <Suspense fallback={<LoadingFallback />}>
                    <Gallery />
                </Suspense>
                
                <Contact selectedProduct={selectedProduct} />
                
                <Suspense fallback={<LoadingFallback />}>
                   <Reviews />
                   <FAQ />
                </Suspense>
                <Newsletter />
             </>
        )}

        {currentView === 'blog' && (
            <Suspense fallback={<LoadingFallback />}>
                <Blog 
                    view={subView} 
                    postId={viewId} 
                    onPostClick={(slug) => handleNavigation('blog', slug)}
                    onBack={() => handleNavigation('blog')}
                />
            </Suspense>
        )}

        {currentView === 'locations' && (
            <Suspense fallback={<LoadingFallback />}>
                <Locations 
                    view={subView} 
                    locationSlug={viewId} 
                    onLocationClick={(slug) => handleNavigation('locations', slug)}
                    onBack={() => handleNavigation('locations')}
                />
            </Suspense>
        )}
      </main>

      <Footer onNavigate={(view) => handleNavigation(view)} />
      <WhatsAppButton />
      <BackToTop />
      <StickyMobileFooter />
    </div>
  );
};

export default App;