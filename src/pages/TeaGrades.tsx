import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { TeaGradingSystem } from '@/components/TeaGradeExplorer/TeaGradingSystem';

const TeaGradesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Tea Grading System Guide - Understanding Indian Tea Grades"
                description="Explore our comprehensive guide to Indian tea grading. Learn about Orthodox, CTC, and Specialty tea grades, leaf sizes, and brewing recommendations."
                canonicalUrl="https://teatraders.info/tea-grades"
            />
            <Navbar />
            <main className="pt-16">
                <TeaGradingSystem />
            </main>
            <Footer />
        </div>
    );
};

export default TeaGradesPage;
