import React from "react";
import { Leaf } from "lucide-react";
import { CONTACT_INFO, BUSINESS_DETAILS } from "../constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-tea-900 text-tea-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-tea-400" />
              <span className="text-xl font-bold font-serif text-white">
                Manish Tea Traders
              </span>
            </div>
            <p className="text-sm text-tea-200 leading-relaxed max-w-xs">
              Your trusted partner for wholesale tea in West Bengal. Providing quality CTC, Orthodox, and Blended teas since {BUSINESS_DETAILS.established}.
            </p>
            <div className="pt-2">
              <span className="text-xs bg-tea-800 px-2 py-1 rounded text-tea-300">GST: {BUSINESS_DETAILS.gst}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" onClick={(e) => handleLinkClick(e, '#products')} className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a></li>
              <li className="pt-2 border-t border-tea-800 mt-2">
                <a href="https://www.indiamart.com/manishteatraders/profile.html?srsltid=AfmBOoqgwwWBuN8JEM3NukGYhk7XDjVAEHFpRxIhnIBg4aCD7NxQvbYA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Indiamart Profile</a>
              </li>
              <li>
                <a href="https://www.justdial.com/Siliguri/Manish-Tea-Traders/9999PX353-X353-200611214039-I3G9_BZDET" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Justdial Listing</a>
              </li>
            </ul>
          </div>

          {/* Contact (Footer Version) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Find Us</h3>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.city}, {CONTACT_INFO.state}</li>
              <li>Pin - {CONTACT_INFO.zip}</li>
              <li className="pt-2">
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-tea-400 font-bold hover:text-white">
                  {CONTACT_INFO.displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tea-800 pt-8 text-center text-xs text-tea-400">
          <p>© {currentYear} Manish Tea Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;