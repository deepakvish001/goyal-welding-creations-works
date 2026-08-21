import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import goyalLogo from "@/assets/goyal-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Rolling Shutters",
    "Warehouse Construction",
    "Automatic Rolling Shutters", 
    "Automatic Sliding Gates",
    "Industrial Solutions",
    "Maintenance Services"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={goyalLogo} alt="Goyal Welding Works" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-primary">Goyal Welding Works</h3>
                <p className="text-sm text-muted-foreground">You think We Create</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional industrial solutions with 20+ years of expertise. We provide superior quality rolling shutters, automatic gates, and warehouse construction services.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://wa.me/917007801235', '_blank')}
                className="bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('tel:+917007801235', '_blank')}
                className="bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-full transition-colors"
              >
                <Phone className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('mailto:rudransh2306@gmail.com', '_blank')}
                className="bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h5 className="font-medium text-primary mb-2">Why Choose Us?</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 3-Year Motor Warranty</li>
                <li>• 20+ Years Experience</li>
                <li>• Superior Quality Materials</li>
                <li>• Best-in-Class Service</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Near Tanishq Showroom</p>
                  <p className="text-muted-foreground">Narauli, Azamgarh</p>
                  <p className="text-muted-foreground">276001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="tel:+917007801235"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7007801235
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:rudransh2306@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  rudransh2306@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>© {currentYear} Goyal Welding Works. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-primary">❤️</span>
              <span>for industrial excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;