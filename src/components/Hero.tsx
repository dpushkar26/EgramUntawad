import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  // Background images for slideshow
  const backgroundImages = [
    "/gp.jpg",
    "/plantation.jpg",
    "/clean.jpg",
    "/meeting.jpg"
    // Add more images as needed
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Change image every 3 seconds for better transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentImageIndex(current => 
      current === backgroundImages.length - 1 ? 0 : current + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex(current => 
      current === 0 ? backgroundImages.length - 1 : current - 1
    );
  };

  return (
    <section className="relative text-primary-foreground py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background slideshow container */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </AnimatePresence>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Previous image"
      >
        <ArrowRight className="w-6 h-6 rotate-180" />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Next image"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Welcome to Our<br />
            <span className="text-yellow-400 drop-shadow-lg">Gram Panchayat Untawad</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed text-gray-100"
          >
            Empowering rural governance through digital transformation. Access services, stay informed, and connect with your community.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/services">
              <Button 
                size="lg" 
                className="group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;