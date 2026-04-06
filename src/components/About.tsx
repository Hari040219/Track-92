import { motion } from "framer-motion";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { Truck, Shield, Headphones, Wrench } from "lucide-react";

const features = [
  { icon: Truck, title: "Fast Shipping", desc: "Free delivery on orders over $75" },
  { icon: Shield, title: "Quality Guaranteed", desc: "Premium materials, built to last" },
  { icon: Headphones, title: "24/7 Support", desc: "Expert help anytime you need it" },
  { icon: Wrench, title: "Easy Install", desc: "DIY-friendly with guides included" },
];

const About = () => (
  <section id="about" className="py-12 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border"
        >
          <img
            src="https://images.unsplash.com/photo-1486496413158-96bb32f22e70?q=80&w=1200&auto=format&fit=crop"
            alt="Our Garage"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
            Built For <span className="text-gradient">Car Lovers</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            New Top Gear was born from a passion for cars and the drive to make every ride look and feel extraordinary. We handpick every product to ensure top-tier quality and style.
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Whether you're a weekend warrior or a daily driver, our curated collection of accessories helps you express your personality on the road.
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary/40 transition-colors group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-primary flex items-center justify-center glow-red">
              <f.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <h4 className="font-heading text-sm md:text-lg font-semibold mb-1 md:mb-2">{f.title}</h4>
            <p className="font-body text-xs md:text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
