
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import StickyMobileFooter from "../components/StickyMobileFooter";

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <SEO
                    title="Contact Us | Wholesale Tea Enquiries | Manish Tea Traders"
                    description="Contact Manish Tea Traders for bulk tea orders. Phone: +91 70019 58588. Visit us in Siliguri, West Bengal."
                    canonicalUrl="https://teatraders.info/contact-us"
                    image="https://teatraders.info/logo.png"
                />
                <Contact selectedProduct="" />
            </main>
            <Footer />
            <WhatsAppButton />
            <StickyMobileFooter />
        </div>
    );
};

export default ContactPage;
