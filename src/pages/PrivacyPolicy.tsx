import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <SEO
                    title="Privacy Policy | Manish Tea Traders"
                    description="Privacy Policy for Manish Tea Traders. How we comply with Indian laws and protect your data."
                    canonicalUrl="https://teatraders.info/privacy-policy"
                />
                <div className="max-w-3xl mx-auto prose prose-tea">
                    <h1>Privacy Policy</h1>
                    <p>Last Updated: December 28, 2024</p>

                    <h2>1. Introduction</h2>
                    <p>Manish Tea Traders ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or order wholesale tea from us.</p>

                    <h2>2. Information We Collect</h2>
                    <p>We collect information necessary to process your wholesale orders and improve our service, including:</p>
                    <ul>
                        <li>Name and Business Name</li>
                        <li>Contact Information (Phone Number, Email Address)</li>
                        <li>Shipping and Billing Address</li>
                        <li>GST Number (for tax invoicing)</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use your data to:</p>
                    <ul>
                        <li>Process and deliver your tea orders.</li>
                        <li>Generate GST-compliant invoices.</li>
                        <li>Communicate with you regarding order status via WhatsApp or Phone.</li>
                        <li>Send periodic updates about new tea harvest rates (only if you opt-in).</li>
                    </ul>

                    <h2>4. Data Sharing</h2>
                    <p>We do not sell your personal data. We share data only with:</p>
                    <ul>
                        <li>Logistics Partners (e.g., VRL, Safexpress) for delivery purposes.</li>
                        <li>Legal authorities if required by Indian Law.</li>
                    </ul>

                    <h2>5. Contact Us</h2>
                    <p>If you have questions about this policy, contact us at +91 94343 08958 or visit our office in Siliguri.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
