
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import SEO from '../../components/SEO';
import { BLOG_POSTS } from '../../constants';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="bg-white min-h-screen pt-8 pb-16">
                    <SEO
                        title={`${post.title} | Manish Tea Traders Blog`}
                        description={post.excerpt}
                        keywords={post.keywords || ''}
                        canonicalUrl={`https://teatraders.info/blog/${post.slug}`}
                        image={post.imageUrl}
                        schema={{
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "image": post.imageUrl,
                            "datePublished": new Date(post.date).toISOString(),
                            "dateModified": new Date(post.date).toISOString(), // Assuming modified same as published for now
                            "author": {
                                "@type": "Person",
                                "name": post.author,
                                "url": "https://teatraders.info/about-us"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Manish Tea Traders",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://teatraders.info/logo.png"
                                }
                            }
                        }}
                    />
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link to="/blog" className="flex items-center text-tea-600 mb-8 hover:underline text-sm font-medium">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                        </Link>

                        <figure className="mb-8">
                            <img
                                src={post.imageUrl}
                                srcSet={`
                                    ${post.imageUrl.replace('&w=1200', '&w=600')} 600w,
                                    ${post.imageUrl.replace('&w=1200', '&w=1200')} 1200w
                                `}
                                sizes="(max-width: 768px) 100vw, 800px"
                                alt={post.title}
                                className="w-full h-64 md:h-[400px] object-cover rounded-2xl shadow-lg"
                                width="800"
                                height="400"
                            />
                        </figure>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center text-gray-500 text-sm mb-8 space-x-6 border-b border-gray-100 pb-6">
                            <div className="flex items-center text-gray-600 font-medium">
                                <Calendar className="h-4 w-4 mr-2 text-tea-500" />
                                {post.date}
                            </div>
                            <div className="flex items-center text-gray-600 font-medium">
                                <User className="h-4 w-4 mr-2 text-tea-500" />
                                {post.author}
                            </div>
                        </div>

                        <article
                            className="prose prose-lg prose-tea max-w-none text-gray-800 leading-normal"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        >
                            {/* Content rendered from HTML string */}
                        </article>

                        {/* Call to Action Box */}
                        <div className="mt-16 p-8 bg-tea-50 rounded-2xl border border-tea-100 text-center">
                            <h3 className="font-serif font-bold text-2xl text-tea-900 mb-3">Interested in Wholesale Tea?</h3>
                            <p className="text-gray-700 mb-6 max-w-lg mx-auto">We supply premium quality tea directly from Siliguri. Get a custom quote for your business today.</p>
                            <a
                                href="/contact-us"
                                className="inline-block bg-tea-600 text-white px-8 py-3 rounded-full font-bold hover:bg-tea-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Contact Sales Team
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BlogPost;
