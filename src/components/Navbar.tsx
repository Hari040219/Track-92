import { motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Products", "Categories", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading font-bold text-gradient tracking-widest">
            NEW TOP GEAR
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-secondary-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="relative p-2 text-foreground hover:text-primary transition-colors" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-primary rounded-full text-[10px] font-bold flex items-center justify-center text-primary-foreground">
              0
            </span>
          </button>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="flex w-full px-6 py-4 font-body text-sm uppercase tracking-wide text-secondary-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
