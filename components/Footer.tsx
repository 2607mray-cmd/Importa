import React from "react";
import { CONTACT_INFO, BUSINESS_DETAILS } from "../constants";
import Logo from "./Logo";

interface FooterProps {
    onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: string, targetId?: string) => {
    e.preventDefault();
    if (view === 'home') {
        onNavigate('home');
        setTimeout(() => {
            if (targetId) {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
    } else {
        onNavigate(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tea-900 text-tea-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-10" variant="light" />
              <span className="text-xl font-bold font-serif text-white leading-tight">
                Manish Tea<br/>Traders
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
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'home')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'products')} className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-white transition-colors">Tea Blog</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'locations')} className="hover:text-white transition-colors">Service Areas</a></li>
            </ul>
          </div>
          
          {/* Products Links */}
           <div>
            <h3 className="text-white font-semibold mb-4">Tea Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'products')} className="hover:text-white transition-colors">CTC Tea</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'products')} className="hover:text-white transition-colors">Assam Tea</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'products')} className="hover:text-white transition-colors">Darjeeling Tea</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'home', 'products')} className="hover:text-white transition-colors">Private Label</a></li>
            </ul>
          </div>

          {/* Contact (Footer Version) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.city}, {CONTACT_INFO.state}</li>
              <li>Pin - {CONTACT_INFO.zip}</li>
              <li className="pt-2">
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-tea-400 font-bold hover:text-white block mb-1">
                  {CONTACT_INFO.displayPhone}
                </a>
              </li>
              <li>
                 <a 
                    href={CONTACT_INFO.whatsappChannel} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-[#25D366] hover:text-white transition-colors font-medium"
                 >
                    Join WhatsApp Channel →
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