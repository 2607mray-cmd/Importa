import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlendCalculatorComponent from '@/components/BlendCalculator/BlendCalculatorComponent';
import SEO from '@/components/SEO';
import { useLocation } from 'react-router-dom';

const BlendCalculator = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Tea Blend Cost & Ratio Calculator | Manish Tea Traders B2B Utility"
                description="Calculate tea blend ratios, wholesale costs, and margins accurately. An essential tool for tea traders, blenders, and private label brands."
                canonicalUrl="https://teatraders.info/tea-blend-calculator/"
            />
            <Navbar />
            <div className="pt-16">
                <BlendCalculatorComponent />
            </div>
            <Footer />
        </div>
    );
};

export default BlendCalculator;
