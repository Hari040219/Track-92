import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";
import camaroImg from "../assets/images/hero-camaro.jpg";
import placeholderCarImg from "../assets/images/placeholder-car.jpg";
import wheelsImg from "../assets/images/wheels.jpg";

const categories = [
  {
    name: "Interior",
    desc: "Seat covers, dash kits, floor mats",
    image: camaroImg
  },
  {
    name: "Exterior",
    desc: "Body kits, spoilers, decals",
    image: placeholderCarImg
  },
  {
    name: "Lighting",
    desc: "LED bars, headlights, fog lights",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Wheels & Tires",
    desc: "Rims, hubcaps, tire accessories",
    image: wheelsImg
  },
  {
    name: "Electronics",
    desc: "Dash cams, GPS, audio systems",
    image: "https://images.unsplash.com/photo-1590333746438-283582775bb8?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Performance",
    desc: "Air filters, exhausts, tuning",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Categories = () => (
  <section id="categories" className="py-12 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-2">
          Browse By
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold">
          Categories
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-3 md:p-5">
              <h3 className="font-heading text-base md:text-xl font-semibold mb-1 group-hover:text-gradient transition-colors">
                {cat.name}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                {cat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Categories;
