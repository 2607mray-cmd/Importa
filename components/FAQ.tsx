import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do you provide samples?",
    answer: "Yes, samples can be provided for serious bulk buyers so you can check quality before placing a large order."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity is generally 30–50 kg, depending on the grade and packaging required."
  },
  {
    question: "Do you deliver outside West Bengal?",
    answer: "Yes, we ship all over India. We have reliable transport partners for timely delivery to Bihar, UP, Jharkhand, and other states."
  },
  {
    question: "Can you create custom blends?",
    answer: "Absolutely. We offer blend customization based on your specific taste requirements (strength, color, aroma) and budget."
  },
  {
    question: "Do you provide GST bill?",
    answer: "Yes, GST invoicing is available for all wholesale transactions."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-tea-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center text-tea-900 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-tea-700' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-tea-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div 
                className={`px-5 pb-5 text-gray-600 leading-relaxed transition-all duration-300 ${openIndex === index ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;