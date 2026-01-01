
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../constants";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import WhatsAppButton from "../../components/WhatsAppButton";
import { ChevronLeft, ShoppingBag, ShieldCheck, Truck, Package, Info, ArrowRight } from "lucide-react";

const ProductDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const product = PRODUCTS.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-stone-50">
                <h1 className="text-2xl font-serif text-stone-800 mb-4">Product Not Found</h1>
                <Link to="/" className="text-tea-600 hover:underline flex items-center gap-2">
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
            <Navbar />

            <SEO
                title={`${product.name} | Wholesale Tea Supplier Siliguri`}
                description={product.description}
                canonicalUrl={`https://teatraders.info/product/${product.slug}/`}
                image={product.imageUrl}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": product.name,
                    "image": `https://teatraders.info${product.imageUrl}`,
                    "description": product.description,
                    "sku": product.sku,
                    "offers": {
                        "@type": "AggregateOffer",
                        "priceCurrency": "INR",
                        "lowPrice": product.priceRange.includes('₹') ? product.priceRange.split('–')[0].replace(/[^\d.]/g, '') : "130",
                        "availability": "https://schema.org/InStock",
                        "offerCount": "1"
                    }
                }}
            />

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-8 text-sm text-stone-500">
                        <Link to="/" className="hover:text-tea-600">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to={`/products/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-tea-600">{product.category}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-stone-800 font-medium">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Image Section */}
                        <div className="relative group">
                            <div className="aspect-square overflow-hidden rounded-3xl bg-white shadow-xl border border-stone-100">
                                <img
                                    src={product.imageUrl}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            {product.badge && (
                                <div className="absolute top-6 right-6 bg-tea-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10">
                                    {product.badge}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col">
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 bg-tea-100 text-tea-800 text-xs font-bold rounded-full uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4 leading-tight">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-2xl font-bold text-tea-800">{product.priceRange}</span>
                                <span className="text-stone-400 text-sm italic">(Wholesale Rates)</span>
                            </div>

                            <p className="text-stone-600 text-lg mb-8 leading-relaxed italic border-l-4 border-tea-200 pl-4">
                                "{product.description}"
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                                    <Package className="text-tea-600 mb-2" size={20} />
                                    <span className="text-xs text-stone-400 uppercase font-bold tracking-tighter">SKU</span>
                                    <span className="text-sm font-semibold text-stone-800">{product.sku}</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                                    <ShoppingBag className="text-tea-600 mb-2" size={20} />
                                    <span className="text-xs text-stone-400 uppercase font-bold tracking-tighter">MOQ</span>
                                    <span className="text-sm font-semibold text-stone-800">{product.moq}</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                                    <ShieldCheck className="text-tea-600 mb-2" size={20} />
                                    <span className="text-xs text-stone-400 uppercase font-bold tracking-tighter">Availability</span>
                                    <span className="text-sm font-semibold text-stone-800">{product.stockStatus}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <Link
                                    to="/contact-us"
                                    className="w-full flex items-center justify-center gap-2 bg-tea-700 hover:bg-tea-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
                                >
                                    Get Bulk Quotation <ArrowRight size={20} />
                                </Link>
                                <button
                                    onClick={() => navigate('/contact-us')}
                                    className="w-full flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-200 hover:border-tea-600 font-bold py-4 rounded-2xl transition-all"
                                >
                                    Request Samples
                                </button>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-t border-stone-200">
                                <div className="flex items-center gap-3">
                                    <div className="bg-tea-50 p-2 rounded-lg text-tea-700">
                                        <Truck size={20} />
                                    </div>
                                    <span className="text-sm font-medium text-stone-700">Pan India Delivery</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-tea-50 p-2 rounded-lg text-tea-700">
                                        <Info size={20} />
                                    </div>
                                    <span className="text-sm font-medium text-stone-700">Direct Estate Sourcing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Long Description and Specs */}
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Detailed Product Overview</h2>
                            <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed text-lg">
                                {product.longDescription}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                            <h3 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-4 flex items-center gap-2">
                                <Package className="text-tea-600" size={24} /> Technical Specs
                            </h3>
                            <dl className="space-y-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                                        <dt className="text-sm font-bold text-stone-400 uppercase tracking-widest">{key}</dt>
                                        <dd className="text-sm font-semibold text-stone-800">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Related Tea Collections</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(related => (
                                <Link
                                    key={related.id}
                                    to={`/product/${related.slug}`}
                                    className="bg-white p-4 rounded-2xl border border-stone-100 hover:shadow-lg transition-all"
                                >
                                    <img
                                        src={related.imageUrl}
                                        alt={related.name}
                                        className="w-full aspect-square object-cover rounded-xl mb-4"
                                    />
                                    <h4 className="font-bold text-stone-800">{related.name}</h4>
                                    <p className="text-xs text-stone-400 font-bold uppercase tracking-tighter mt-1">{related.category}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default ProductDetail;
