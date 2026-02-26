import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-cosmic-700 border-t border-cosmic-700/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Willow Child Development Center" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-cosmic-700/90 text-sm leading-relaxed">
              Empowering children to thrive, one step at a time. We support children with speech, developmental, and learning needs through compassionate therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cosmic-700 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Our Approach", "For Parents", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-").replace("our-", "").replace("us", "about").replace("for-", "")}`}
                    className="text-cosmic-700/80 hover:text-cosmic-700 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cosmic-700 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Speech & Hearing Therapy", "Occupational Therapy", "Special Education"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-cosmic-700/80 hover:text-cosmic-700 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cosmic-700 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cosmic-700 flex-shrink-0 mt-0.5" />
                <span className="text-cosmic-700/90 text-sm">
                  16, Thomas Layout, Sarjapur Main Road, Carmelaram, Bangalore - 560035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cosmic-700 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-cosmic-700/80 hover:text-cosmic-700 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cosmic-700 flex-shrink-0" />
                <a href="mailto:hello@willowcenter.in" className="text-cosmic-700/80 hover:text-cosmic-700 transition-colors text-sm">
                  hello@willowcenter.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cosmic-700/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cosmic-700/80 text-sm">
              © {new Date().getFullYear()} Willow Child Development & Rehabilitation Center. All rights reserved.
            </p>
            <p className="text-cosmic-700/80 text-sm flex items-center gap-1">
              Made with <Star className="w-4 h-4 text-cosmic-700" /> for every child
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
