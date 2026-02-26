import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Home, User, Briefcase, FileText, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Our Approach", path: "/approach", icon: FileText },
  { name: "For Parents", path: "/parents", icon: Users },
  { name: "Contact", path: "/contact", icon: Heart },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cosmic-700/20"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center ${isScrolled ? 'justify-between' : 'justify-between'} h-20 relative`}>
          {/* Logo - Always visible */}
          <Link to="/" className="flex items-center gap-3 group z-10">
            <img 
              src="/logo.png" 
              alt="Willow Child Development Center" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Show regular nav when not scrolled, tubelight when scrolled */}
          {!isScrolled ? (
            <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                    location.pathname === link.path
                      ? "text-cosmic-700"
                      : "text-cosmic-700/80 hover:text-cosmic-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <NavBar 
                items={navLinks.map(link => ({
                  name: link.name,
                  url: link.path,
                  icon: link.icon
                }))}
                className="relative top-0 mb-0"
              />
            </div>
          )}

          {/* CTA Button - Only show when scrolled */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:flex items-center gap-4 z-10"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-4 h-4" />
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cosmic-700/20 transition-colors text-cosmic-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-cosmic-700/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2 text-lg font-medium transition-colors hover:text-cosmic-700 ${
                      location.pathname === link.path
                        ? "text-cosmic-700"
                        : "text-cosmic-700/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                  <Link to="/contact">
                    <Phone className="w-4 h-4" />
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
