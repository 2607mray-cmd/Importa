export interface Product {
  id: string;
  name: string;
  category: 'CTC' | 'Blend' | 'Orthodox' | 'Dust' | 'Green' | 'Loose' | 'Loose Tea' | 'Green Tea' | 'Tea Dust';
  description: string;
  longDescription: string;
  priceRange: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string; // e.g., "Best Seller", "New"
  sku: string;
  moq: string;
  stockStatus: string;
  specifications: Record<string, string>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  displayPhone: string;
  city: string;
  state: string;
  zip: string;
  mapEmbedUrl: string;
}