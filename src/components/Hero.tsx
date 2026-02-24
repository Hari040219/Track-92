import { useState, Suspense, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const CarModel = ({ colors, selectedPart, setSelectedPart }: any) => {
  // Load the realistic car model
  const { scene } = useGLTF('/models/ferrari.glb') as any;

  // Clone to avoid mutating the cached original model
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        // Create a new material for the parts we want to change so we don't mutate all instances
        child.material = child.material.clone();
        const matName = child.material.name.toLowerCase();
        const nodeName = child.name.toLowerCase();

        const isHeadlight =
          matName.includes('head') || matName.includes('front_light') || matName.includes('headlight') ||
          nodeName.includes('head') || nodeName.includes('headlight') || nodeName.includes('front_light') ||
          nodeName.includes('frontlight');

        const isTaillight =
          matName.includes('tail') || matName.includes('brake') || matName.includes('rear_light') ||
          matName.includes('rearlight') || matName.includes('stop') ||
          nodeName.includes('tail') || nodeName.includes('brake') || nodeName.includes('rear_light') ||
          nodeName.includes('rearlight') || nodeName.includes('stoplight');

        const isGlass =
          matName.includes('glass') || matName.includes('window') || matName.includes('windshield') ||
          nodeName.includes('glass') || nodeName.includes('window') || nodeName.includes('windshield');

        const isTire = matName.includes('tire') || nodeName.includes('tire');

        const isRim =
          matName.includes('rim') || matName.includes('wheel') ||
          nodeName.includes('wheel') || nodeName.includes('rim');

        const isBody = matName.includes('body') || nodeName.includes('body');

        // 1. HEADLIGHTS — bright glowing white
        if (isHeadlight) {
          child.material.color.set("#ffffff");
          child.material.emissive = new THREE.Color("#ffffff");
          child.material.emissiveIntensity = 5;
          child.material.toneMapped = false;
        }
        // 2. TAILLIGHTS — bright glowing red
        else if (isTaillight) {
          child.material.color.set("#ff1a1a");
          child.material.emissive = new THREE.Color("#ff0000");
          child.material.emissiveIntensity = 6;
          child.material.toneMapped = false;
        }
        // 3. WINDOWS / GLASS (Black Tint)
        else if (isGlass) {
          child.material.color.set("#050505");
          child.material.transparent = true;
          child.material.opacity = 0.85;
        }
        // 4. TIRES (Constant Black)
        else if (isTire) {
          child.material.color.set("#111111");
        }
        // 5. RIMS (Customizable)
        else if (isRim) {
          child.material.color.set(colors.rims);
          if (selectedPart === 'rims') {
            child.material.emissive = new THREE.Color("#333333");
            child.material.emissiveIntensity = 0.5;
          } else {
            child.material.emissive = new THREE.Color("black");
          }
        }
        // 6. BODY (Customizable)
        else if (isBody) {
          child.material.color.set(colors.body);
          if (selectedPart === 'body') {
            child.material.emissive = new THREE.Color("#330000");
            child.material.emissiveIntensity = 0.5;
          } else {
            child.material.emissive = new THREE.Color("black");
          }
        }
      }
    });
  }, [clonedScene, colors, selectedPart]);

  return (
    <primitive
      object={clonedScene}
      scale={1}
      position={[0, -0.4, 0]}
      rotation={[0, Math.PI / 4, 0]}
      onClick={(e: any) => {
        e.stopPropagation();
        const meshName = e.object.name.toLowerCase();
        const matName = e.object.material?.name?.toLowerCase() || '';

        if (matName.includes('rim') || matName.includes('wheel') || meshName.includes('wheel') || meshName.includes('rim') && !matName.includes('tire') && !meshName.includes('tire')) {
          setSelectedPart('rims');
        } else if (matName.includes('body') || meshName.includes('body')) {
          setSelectedPart('body');
        } else {
          // Default to body if clicked on unknown part
          setSelectedPart('body');
        }
      }}
    />
  );
};

// Preload the model for faster rendering
useGLTF.preload('/models/ferrari.glb');

const Hero = () => {
  const [selectedPart, setSelectedPart] = useState('body');
  const [colors, setColors] = useState({
    body: '#cc0033',
    rims: '#ffffff',
  });

  const availableColors = ['#cc0033', '#00ffcc', '#9900ff', '#1a1a1a', '#ffffff', '#ffff00'];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-80" />
      <div className="absolute top-1/3 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-3 md:mb-4">
            Premium Car Accessories
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-[0.95] mb-4 md:mb-6">
            Upgrade<br />
            Your <span className="text-gradient">Ride</span>
          </h1>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
            Discover top-quality car accessories that combine style, performance and protection. Select a part on the 3D car to customize colors instantly!
          </p>

          {/* Rev line animation */}
          <div className="h-1 bg-muted rounded-full mb-6 md:mb-8 max-w-xs mx-auto md:mx-0 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />
          </div>

          <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
            <a
              href="#products"
              className="bg-gradient-primary text-primary-foreground font-heading uppercase tracking-wider px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base rounded-md hover:opacity-90 transition-opacity glow-red"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="border border-border text-foreground font-heading uppercase tracking-wider px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base rounded-md hover:bg-secondary transition-colors"
            >
              Browse
            </a>
          </div>
        </motion.div>

        {/* Hero 3D Car Area */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden glow-red bg-muted/30 border border-primary/20">
            <Canvas camera={{ position: [5, 4, 6], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              {/* Front headlights — bright white point light */}
              <pointLight position={[0, 0.5, 3]} color="#ffffff" intensity={8} distance={6} decay={2} />
              {/* Rear taillights — glowing red point light */}
              <pointLight position={[0, 0.3, -3]} color="#ff0000" intensity={10} distance={5} decay={2} />
              <Suspense fallback={null}>
                <CarModel colors={colors} selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
                <Environment preset="city" />
                <ContactShadows position={[0, -0.6, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#000000" />
              </Suspense>
              <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2 - 0.1} />
            </Canvas>

            {/* Color picker — top-right on md+, bottom overlay on mobile */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-4 md:right-4 md:bottom-auto bg-background/80 px-4 py-3 md:p-4 rounded-xl backdrop-blur-md border border-border shadow-lg z-20 pointer-events-auto">
              <h3 className="text-xs font-semibold mb-2 uppercase tracking-wider text-primary text-center">
                Customize: {selectedPart}
              </h3>
              <div className="flex gap-2 md:gap-3 justify-center">
                {availableColors.map(c => (
                  <button
                    key={c}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 ring-offset-2 ring-offset-background"
                    style={{
                      backgroundColor: c,
                      borderColor: colors[selectedPart as keyof typeof colors] === c ? '#fff' : 'transparent',
                      boxShadow: colors[selectedPart as keyof typeof colors] === c ? `0 0 10px ${c}` : 'none'
                    }}
                    onClick={() => setColors({ ...colors, [selectedPart]: c })}
                    aria-label={`Select color ${c}`}
                  />
                ))}
              </div>
            </div>

            {/* Hint text - hidden on very small screens to save space */}
            <div className="hidden sm:block absolute top-3 left-3 right-3 text-center pointer-events-none">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest bg-background/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                Click parts • Drag to rotate • Scroll to zoom
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
