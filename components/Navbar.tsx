import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // Approximate navbar height to offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, "#")} className="flex items-center space-x-2">
            <div className="bg-tea-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span
              className={`text-xl font-bold font-serif ${isScrolled ? "text-tea-900" : "text-white"
                }`}
            >
              Manish Tea Traders
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium hover:text-tea-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white shadow-sm"
                  }`}
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
              className={`p-2 rounded-md ${isScrolled ? "text-gray-700" : "text-white"
                }`}
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
                onClick={(e) => handleNavClick(e, item.href)}
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