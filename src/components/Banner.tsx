import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";

const Banner = () => (
  <section className="py-10 md:py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <div className="relative aspect-[4/3] sm:aspect-[16/7] md:aspect-[21/9] min-h-[220px]">
          <img
            src="https://images.unsplash.com/photo-1493238503870-128daed662ae?q=80&w=1600&auto=format&fit=crop"
            alt="Season Sale Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-3 md:mb-4">
              Season <span className="text-gradient">Sale</span> — Up to 40% Off
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Limited time offer on select accessories
            </p>
            <a
              href="#products"
              className="inline-block bg-gradient-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base rounded-md hover:opacity-90 transition-opacity glow-red"
            >
              Shop the Sale
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Banner;
