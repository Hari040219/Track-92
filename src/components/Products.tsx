import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Carbon Fiber Steering Wheel",
    price: "₹20,999",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1593359677777-a56382ad7759?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "LED Underglow Kit",
    price: "₹7,499",
    tag: "New",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Premium Leather Seat Covers",
    price: "₹14,999",
    tag: null,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sport Exhaust Tip - Dual",
    price: "₹5,499",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1594976612318-936660424683?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "360° Dash Cam HD",
    price: "₹10,999",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1590333746438-283582775bb8?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Alloy Wheel Set 18\"",
    price: "₹49,999",
    tag: null,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Custom Floor Mats",
    price: "₹3,999",
    tag: "New",
    image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Turbo Air Intake System",
    price: "₹16,999",
    tag: "Performance",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ceramic Coating Kit",
    price: "₹8,999",
    tag: "New",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Carbon Fiber Rear Spoiler",
    price: "₹12,499",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "OBD-II Performance Tuner",
    price: "₹18,999",
    tag: "Hot",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ambient Interior Lighting",
    price: "₹2,499",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Products = () => (
  <section id="products" className="py-12 md:py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-2">
          Top Picks
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold">
          Featured Products
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.name}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.tag && (
                <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-gradient-primary text-primary-foreground text-[9px] md:text-[10px] font-heading uppercase tracking-wider px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-3 md:p-4">
              <h4 className="font-heading text-xs md:text-sm font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h4>
              <div className="flex items-center justify-between gap-1">
                <span className="font-heading text-sm md:text-lg font-bold text-gradient">
                  {product.price}
                </span>
                <button className="p-1.5 md:p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0">
                  <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Products;
