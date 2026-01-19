import React from "react";
import { ClipboardList } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://forms.gle/gpZAjNoz8QAriJMe8"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-tea-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
      aria-label="Request Tea Samples"
    >
      <ClipboardList className="h-8 w-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
        Request Tea Samples
      </span>
    </a>
  );
};

export default WhatsAppButton;