import ReactGA from "react-ga4";

// Replace with your GA4 Measurement ID
export const GA_MEASUREMENT_ID = "G-51CXM4KKZ2";

// Replace with your Webhook URL (e.g., Formspree, Make.com, etc.)
export const TRACKING_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzEw_HlIkYpef7B7RziiFWoaFpR_m7jtKRUnwIZUFGKyUZu9nS9zoB74JQLa_GOd17D/exec";

export const initGA = () => {
    if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXX")) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
    }
};

export const trackWhatsAppClick = async (location: string) => {
    const timestamp = new Date().toLocaleString();
    const pagePath = window.location.pathname;

    // 1. Track in GA4
    if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXX")) {
        ReactGA.event({
            category: "WhatsApp",
            action: "Click",
            label: location,
            value: 1,
            nonInteraction: false,
        });
    }

    // 2. Silent Webhook Notification
    if (TRACKING_WEBHOOK_URL) {
        try {
            await fetch(TRACKING_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    event: "WhatsApp Click",
                    location: location,
                    page: pagePath,
                    timestamp: timestamp,
                    userAgent: navigator.userAgent
                }),
            });
        } catch (error) {
            console.error("Silent tracking failed", error);
        }
    }
};
