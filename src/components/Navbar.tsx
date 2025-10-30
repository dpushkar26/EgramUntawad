import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-yellow-500/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-gray-900 font-bold text-lg">GP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-yellow-400 leading-tight">
                ग्रामपंचायत उंटावद 
              </span>
              <span className="text-sm text-yellow-300/90 font-medium">
                 ता. शिरपूर जि. धुळे
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold transition-all duration-300 group ${
                  isActiveLink(link.path)
                    ? 'text-yellow-400'
                    : 'text-yellow-300 hover:text-yellow-400'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
                    isActiveLink(link.path) ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4">
              <Link to="/admin">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Admin
                </Button>
              </Link>
              <Link to="/client">
                <Button 
                  size="sm" 
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                >
                  Client Portal
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-yellow-400/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-yellow-500/20 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-semibold transition-all duration-300 py-3 px-4 rounded-lg ${
                  isActiveLink(link.path)
                    ? 'text-yellow-400 bg-yellow-400/10 border-l-4 border-yellow-400'
                    : 'text-yellow-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 space-y-3 border-t border-yellow-500/20 mt-2">
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-semibold"
                >
                  Admin Portal
                </Button>
              </Link>
              <Link to="/client" onClick={() => setIsOpen(false)}>
                <Button 
                  size="sm" 
                  className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-semibold"
                >
                  Client Portal
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;