import React from "react";
import { PRODUCTS } from "../constants";
import { ArrowRight } from "lucide-react";

interface ProductsProps {
  onProductSelect: (productName: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductSelect }) => {
  const handleRequestSample = (e: React.MouseEvent<HTMLAnchorElement>, productName: string) => {
    e.preventDefault();
    onProductSelect(productName);
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
    <section id="products" className="py-20 bg-tea-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl">
            Our Premium Tea Collection
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From strong CTC for tea stalls to delicate Orthodox leaves for premium cafes. 
            Available in bulk (25kg/35kg) and retail packs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-tea-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md z-10">
                    {product.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded uppercase tracking-wider border border-white/30">
                      {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-tea-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-xs text-gray-500 font-medium uppercase">Wholesale Rate</span>
                     <span className="font-bold text-tea-800">{product.priceRange}</span>
                  </div>
                  <a 
                    href="#contact"
                    onClick={(e) => handleRequestSample(e, product.name)}
                    className="block w-full text-center bg-tea-50 hover:bg-tea-600 hover:text-white text-tea-700 font-semibold py-3 rounded-lg transition-all border border-tea-200 hover:border-tea-600 flex items-center justify-center gap-2 group-hover:bg-tea-600 group-hover:text-white group-hover:border-tea-600"
                  >
                    Request Sample <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-tea-100 text-center">
            <h3 className="text-2xl font-bold text-tea-900 mb-2">Need a Custom Blend?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer blend customization based on liquor strength, colour, aroma, and your budget range.
            </p>
            <a 
                href="#contact" 
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tea-800 hover:bg-tea-900 shadow-md transition-all hover:-translate-y-0.5"
            >
                Contact for Custom Orders
            </a>
        </div>
      </div>
    </section>
  );
};

export default Products;