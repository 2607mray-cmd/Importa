
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/BackToTop'; // We intentionally misuse BackToTop as a scroll restorer or create a new one. 
// Actually, standard router scroll restoration is better, but let's keep it simple.

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductCategory from './pages/products/ProductCategory';
import ProductDetail from './pages/products/ProductDetail';
import PrivateLabelPage from './pages/services/PrivateLabelPage';
import LocationPage from './pages/locations/LocationPage';
import LocationsIndex from './pages/locations/LocationsIndex';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';
import NotFound from './pages/NotFound';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// ScrollToTop component that listens to route changes
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Only scroll if no hash
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <ScrollToTopOnNavigate />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />

                {/* Product Silos */}
                <Route path="/products/:slug" element={<ProductCategory />} />
                <Route path="/product/:slug" element={<ProductDetail />} />

                {/* Services */}
                <Route path="/services/private-label-tea" element={<PrivateLabelPage />} />

                {/* Location Hubs */}
                <Route path="/locations" element={<LocationsIndex />} />
                <Route path="/wholesale-supply/:slug" element={<LocationPage />} />

                {/* Blog Routes */}
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* 404 Handling - Critical for SEO */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HelmetProvider>
    );
};

export default App;