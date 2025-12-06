import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO } from "../constants";
import Logo from "./Logo";

interface NavbarProps {
  onNavigate: (view: string, id?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.type === 'view') {
        // Switch Page View
        onNavigate(item.viewName || 'home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Anchor Link (If on home, scroll. If not, go home then scroll)
        onNavigate('home');
        
        // Timeout to allow render
        setTimeout(() => {
             const targetId = item.href.split('#')[1];
             if (targetId) {
                const element = document.getElementById(targetId);
                if (element) {
                    const navHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navHeight;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
             } else {
                 window.scrollTo({ top: 0, behavior: "smooth" });
             }
        }, 100);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo(0,0); }} className="flex items-center space-x-3 group">
            {/* Increased logo size here */}
            <Logo className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" variant="dark" />
            <span className="text-xl font-bold font-serif text-tea-900 leading-tight">
              Manish Tea<br/><span className="text-tea-600">Traders</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-tea-600 hover:bg-tea-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tea-600 hover:bg-tea-50"
              >
                {item.label}
              </a>
            ))}
             <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="block w-full text-center mt-4 bg-tea-600 text-white py-3 rounded-lg font-semibold"
            >
              Call Us: {CONTACT_INFO.displayPhone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;