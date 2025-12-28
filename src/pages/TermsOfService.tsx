import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <SEO
                    title="Terms of Service | Manish Tea Traders"
                    description="Terms of Service for wholesale purchases from Manish Tea Traders, Siliguri."
                    canonicalUrl="https://teatraders.info/terms-of-service"
                />
                <div className="max-w-3xl mx-auto prose prose-tea">
                    <h1>Terms of Service</h1>
                    <p>Last Updated: December 28, 2024</p>

                    <h2>1. Wholesale Orders</h2>
                    <p>Manish Tea Traders primarily deals in B2B wholesale supply. The minimum order quantity (MOQ) typically applies per our current catalog listings (usually 30kg per grade).</p>

                    <h2>2. Pricing and Payment</h2>
                    <p>All prices quoted are ex-siliguri warehouse unless stated otherwise. Prices are subject to market fluctuations based on tea auction rates. Payment terms must be agreed upon prior to dispatch. We accept RTGS/NEFT and UPI.</p>

                    <h2>3. Shipping and Delivery</h2>
                    <p>We ship via standard transport carriers (Road/Rail). Transit times are estimates. We are not liable for delays caused by the transporter or force majeure events. Goods travel at buyer's risk unless insured.</p>

                    <h2>4. Returns and Quality Claims</h2>
                    <p>Tea is a perishable agricultural commodity. We recommend requesting samples before placing bulk orders. Quality claims must be reported within 24 hours of receipt of goods with photographic evidence.</p>

                    <h2>5. Jurisdiction</h2>
                    <p>All disputes are subject to the exclusive jurisdiction of the courts in Siliguri, West Bengal.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
