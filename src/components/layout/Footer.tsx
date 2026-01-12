import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-willow-900 text-cream-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-willow-500 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-cream-50">Willow</span>
                <span className="text-xs text-willow-300">Child Development Center</span>
              </div>
            </Link>
            <p className="text-willow-300 text-sm leading-relaxed">
              Empowering children to thrive, one step at a time. We support children with speech, developmental, and learning needs through compassionate therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Our Approach", "For Parents", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-").replace("our-", "").replace("us", "about").replace("for-", "")}`}
                    className="text-willow-300 hover:text-cream-50 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Speech & Hearing Therapy", "Occupational Therapy", "Special Education"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-willow-300 hover:text-cream-50 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-willow-400 flex-shrink-0 mt-0.5" />
                <span className="text-willow-300 text-sm">
                  16, Thomas Layout, Sarjapur Main Road, Carmelaram, Bangalore - 560035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-willow-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-willow-300 hover:text-cream-50 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-willow-400 flex-shrink-0" />
                <a href="mailto:hello@willowcenter.in" className="text-willow-300 hover:text-cream-50 transition-colors text-sm">
                  hello@willowcenter.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-willow-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-willow-400 text-sm">
              © {new Date().getFullYear()} Willow Child Development & Rehabilitation Center. All rights reserved.
            </p>
            <p className="text-willow-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-coral-500 fill-coral-500" /> for every child
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
