import React from "react";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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
    <section id="home" className="relative min-h-screen flex flex-col justify-start pt-24 pb-20 md:pt-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2574&auto=format&fit=crop"
          alt="Lush Green Tea Garden Landscape in Darjeeling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-tea-500/90 text-white text-sm font-semibold mb-6 backdrop-blur-sm shadow-lg border border-tea-400/30">
          ★ Top Rated Wholesale Supplier
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight drop-shadow-lg">
          Premium Wholesale Tea <br />
          <span className="text-tea-300">Supplier in Siliguri</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-100 mb-8 leading-relaxed font-light">
          Fresh, consistent-quality tea delivered at competitive wholesale rates for retailers, distributors, hotels, cafés, and bulk buyers. <br className="hidden md:block"/> CTC • Assam • Nepal • Loose Tea
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="bg-tea-600 hover:bg-tea-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Today’s Price List <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-tea-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            WhatsApp Us Directly <MessageCircle className="h-5 w-5 text-green-600" />
          </a>
        </div>

        {/* Verification Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center bg-white/10 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/10 inline-flex mx-auto">
            <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-blue-400 fill-blue-400/20" /> 
                <span className="drop-shadow-sm">Justdial Verified</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-green-400 fill-green-400/20" /> 
                <span className="drop-shadow-sm">IndiaMART Verified</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-yellow-400 fill-yellow-400/20" />
                <span className="drop-shadow-sm">FSSAI Registered</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;