import React from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;