import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products onProductSelect={handleProductSelect} />
        <Gallery />
        <Contact selectedProduct={selectedProduct} />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;