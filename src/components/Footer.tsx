import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-card border-t border-border pt-10 md:pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-gradient mb-3 md:mb-4 tracking-widest">
            EXALTER
          </h3>
          <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
            Your one-stop shop for premium car accessories. Drive in style, arrive in confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-xs md:text-sm text-muted-foreground">
            {["Home", "Products", "Categories", "About"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-heading text-base md:text-lg font-semibold mb-3 md:mb-4">Categories</h4>
          <ul className="space-y-2 font-body text-xs md:text-sm text-muted-foreground">
            {["Interior", "Exterior", "Lighting", "Electronics"].map((c) => (
              <li key={c}>
                <a href="#categories" className="hover:text-primary transition-colors">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h4>
          <ul className="space-y-2 md:space-y-3 font-body text-xs md:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>123 Gear St, Motor City</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              (555) 092-EXALTER
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              hello@exalter.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © 2025 Exalter. All rights reserved.
        </p>
        <div className="h-1 w-20 bg-gradient-primary rounded-full" />
      </div>
    </div>
  </footer>
);

export default Footer;
