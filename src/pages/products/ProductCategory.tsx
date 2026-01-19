
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import SEO from '../../components/SEO';
import StickyMobileFooter from '../../components/StickyMobileFooter';
import { PRODUCTS } from '../../data/products';

const CATEGORY_MAP: Record<string, { name: string, title: string, desc: string, filter: string[] }> = {
    'ctc-tea': {
        name: 'CTC Tea',
        title: 'Wholesale CTC Tea Suppliers | BP, OF & Blends',
        desc: 'Premium Assam and Dooars CTC tea aggregates. Available in loose sacks (30kg). Consistent blend for retailers.',
        filter: ['CTC', 'Blend']
    },
    'tea-dust': {
        name: 'Tea Dust',
        title: 'Tea Dust Wholesale for Hotels & Canteens',
        desc: 'Strong Red Tea Dust (PD) for hotels, chaiwalas and canteens. Rapid color release and high strength.',
        filter: ['Dust']
    },
    'orthodox-leaf': {
        name: 'Orthodox Leaf',
        title: 'Premium Orthodox & Darjeeling Leaf Tea',
        desc: 'High-grown Himalayan leaf tea. First flush, second flush and green tea for premium cafes and gifting.',
        filter: ['Orthodox']
    }
};

const ProductCategory: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const categoryData = slug ? CATEGORY_MAP[slug] : null;

    if (!categoryData) {
        return <Navigate to="/products/ctc-tea" replace />;
    }

    const products = PRODUCTS.filter(p => categoryData.filter.includes(p.category));

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <SEO
                    title={categoryData.title}
                    description={categoryData.desc}
                    canonicalUrl={`https://teatraders.info/products/${slug}/`}
                    image={`https://teatraders.info/images/products/${slug.replace('-', '_')}_user.jpg`} // Fallback guess or pick a good default
                    schema={[{
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": categoryData.title,
                        "description": categoryData.desc,
                        "url": window.location.href
                    }, {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://teatraders.info/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Products",
                            "item": "https://teatraders.info/home#products"
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": categoryData.name,
                            "item": window.location.href
                        }]
                    }]}
                />

                <div className="bg-tea-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="text-tea-600 font-bold tracking-wide uppercase text-sm">Wholesale Supply</span>
                        <h1 className="text-4xl font-serif font-bold text-tea-900 mt-2 mb-6">{categoryData.title}</h1>
                        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">{categoryData.desc}</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map(product => (
                            <div key={product.id} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.imageAlt}
                                        loading="lazy"
                                        width="400"
                                        height="300"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                                        {product.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{product.description}</p>

                                    <div className="space-y-3 pt-4 border-t border-gray-100">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">MOQ</span>
                                            <span className="font-semibold text-gray-900">{product.moq}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Price</span>
                                            <span className="font-bold text-tea-800">{product.priceRange}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            <Link to={`/product/${product.slug}/`} className="block w-full text-center bg-white text-gray-700 border border-gray-200 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                Details
                                            </Link>
                                            <a href="/contact-us" className="block w-full text-center bg-tea-600 text-white font-medium py-3 rounded-lg hover:bg-tea-700 transition-colors">
                                                Quote
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* B2B Content Block - Trust Signals */}
                    <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <h2 className="text-2xl font-bold font-serif text-tea-900 mb-6">Why Source {categoryData.name} From Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="font-bold text-lg mb-2">Direct Garden Access</h3>
                                <p className="text-gray-600 text-sm">We buy directly from auctions in Siliguri and Guwahati, ensuring you get fresh {categoryData.name.toLowerCase()} without middleman margins.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Consistent Blending</h3>
                                <p className="text-gray-600 text-sm">Our computerized blending ensures that your "Gold Blend" tastes the same in January as it does in June.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Logistics Support</h3>
                                <p className="text-gray-600 text-sm">We have tied up with transport carriers to deliver bulk sacks to Bihar, UP, and Jharkhand within 3-5 days.</p>
                            </div>
                        </div>

                        {/* Related Categories Widget */}
                        <div className="mt-12 pt-12 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Explore Other Tea Categories</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <a href="/products/ctc-tea" className="block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all">
                                    <span className="block font-bold text-tea-900">CTC Tea</span>
                                    <span className="text-xs text-gray-500">For Households</span>
                                </a>
                                <a href="/products/tea-dust" className="block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all">
                                    <span className="block font-bold text-tea-900">Tea Dust</span>
                                    <span className="text-xs text-gray-500">For Hotels</span>
                                </a>
                                <a href="/products/orthodox-leaf" className="block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all">
                                    <span className="block font-bold text-tea-900">Orthodox Leaf</span>
                                    <span className="text-xs text-gray-500">Premium</span>
                                </a>
                                <a href="/services/private-label-tea" className="block p-4 bg-white border border-gray-100 rounded-lg text-center hover:border-tea-500 hover:shadow-md transition-all">
                                    <span className="block font-bold text-tea-900">Private Label</span>
                                    <span className="text-xs text-gray-500">Custom Brand</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
            <StickyMobileFooter />
        </div>
    );
};

export default ProductCategory;
