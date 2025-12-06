import React, { useEffect } from 'react';
import { SEOProps } from '../types';

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl, schema }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Keywords (Optional)
    if (keywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Canonical
    if (canonicalUrl) {
         let linkCanonical = document.querySelector('link[rel="canonical"]');
         if (!linkCanonical) {
             linkCanonical = document.createElement('link');
             linkCanonical.setAttribute('rel', 'canonical');
             document.head.appendChild(linkCanonical);
         }
         linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Inject JSON-LD Schema
    if (schema) {
        let scriptSchema = document.getElementById('json-ld-schema');
        if (!scriptSchema) {
            scriptSchema = document.createElement('script');
            scriptSchema.id = 'json-ld-schema';
            scriptSchema.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptSchema);
        }
        scriptSchema.textContent = JSON.stringify(schema);
    }

  }, [title, description, keywords, canonicalUrl, schema]);

  return null;
};

export default SEO;