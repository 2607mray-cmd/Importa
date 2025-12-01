import React from "react";
import { Award, Truck, Coffee, Star, Target, Heart, Briefcase, FileText } from "lucide-react";
import { BUSINESS_DETAILS } from "../constants";

const features = [
  {
    icon: <Coffee className="h-8 w-8 text-tea-600" />,
    title: "Wide Range",
    desc: "CTC, Assam, Nepal, Orthodox, Dust & Premium Blends under one roof.",
  },
  {
    icon: <Award className="h-8 w-8 text-tea-600" />,
    title: "Fresh Stock",
    desc: "Directly sourced from Assam, Dooars & Darjeeling gardens for best freshness.",
  },
  {
    icon: <Truck className="h-8 w-8 text-tea-600" />,
    title: "Timely Delivery",
    desc: "Fast & reliable shipping across India for all wholesale orders.",
  },
  {
    icon: <Star className="h-8 w-8 text-tea-600" />,
    title: "Customer Rated",
    desc: "Rated 4.8/5 by customers. Trusted by retailers, wholesalers & HORECA.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start mb-20">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-tea-500 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
              Manish Tea Traders is a trusted wholesale tea supplier located in Siliguri, West Bengal. Established in {BUSINESS_DETAILS.established}.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the tea industry, we specialize in providing fresh, high-quality tea at honest and competitive wholesale prices. We work with retailers, distributors, hotels, cafés, and corporate buyers across India to ensure long-term business relationships.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-tea-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
                <div className="absolute -inset-4 bg-tea-100 rounded-xl transform rotate-2"></div>
                <img 
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=2574&auto=format&fit=crop" 
                alt="Tea tasting and selection at Manish Tea Traders"
                className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]" 
                />
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-tea-500 z-10">
                <p className="text-4xl font-bold text-tea-600 mb-2">4.8/5</p>
                <p className="text-gray-600 font-medium">Google Rating based on genuine customer reviews.</p>
                </div>
            </div>

            {/* Mission Card */}
            <div className="bg-tea-900 text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-tea-800 rounded-full opacity-50"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                        <Target className="h-6 w-6 text-tea-400" /> Our Mission
                    </h3>
                    <p className="text-tea-100 leading-relaxed mb-6">
                        To provide fresh, high-quality tea at honest and competitive wholesale prices, ensuring long-term relationships with our buyers.
                    </p>
                     <div className="flex items-center gap-2 text-tea-300 italic font-medium">
                        <Heart className="h-5 w-5" />
                        "Tea is our passion, delivering the right taste is our commitment."
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Company Factsheet */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-tea-700 text-white px-8 py-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <h3 className="text-xl font-bold">Company Factsheet</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-500 font-medium">Nature of Business</span>
                        <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.natureOfBusiness}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-500 font-medium">Proprietor / CEO</span>
                        <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.proprietor}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-500 font-medium">Year of Establishment</span>
                        <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.established}</span>
                    </div>
                </div>
                <div className="space-y-4">
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-500 font-medium">GST No.</span>
                        <span className="text-gray-900 font-bold text-right font-mono">{BUSINESS_DETAILS.gst}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-500 font-medium">Total Employees</span>
                        <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.employees}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-500 font-medium">Shipment Mode</span>
                        <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.shipmentMode}</span>
                    </div>
                </div>
            </div>
            <div className="bg-tea-50 px-8 py-4 border-t border-gray-200 text-sm text-gray-600 text-center">
                Payment Modes Accepted: <span className="font-medium text-tea-800">{BUSINESS_DETAILS.paymentMode}</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;