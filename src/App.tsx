import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown, Gauge, Wind, Zap, ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

const specs = [
  { icon: Gauge, label: 'Top Speed', value: '352 km/h' },
  { icon: Zap, label: 'Horsepower', value: '1,063 hp' },
  { icon: Wind, label: '0-100 km/h', value: '2.9s' },
  { icon: ShieldCheck, label: 'Engine', value: '1.6L V6 E-ASSIST' },
];

const galleryImages = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022_Mercedes_AMG_One.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/IAA_2021,_Munich_(IAA10151).jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_ONE_(53047550437).jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2025_Mercedes-AMG_One_HCC25.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2023_Mercedes_AMG_One.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_ONE_(53048132806).jpg"
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-red-600 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase z-50">
          AMG <span className="text-red-600">ONE</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-xs font-medium tracking-[0.2em] uppercase">
          <a href="#performance" className="hover:text-red-600 transition-colors">Performance</a>
          <a href="#design" className="hover:text-red-600 transition-colors">Design</a>
          <a href="#gallery" className="hover:text-red-600 transition-colors">Gallery</a>
        </div>

        <div className="flex items-center gap-4 z-50">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2.5 border border-white/20 rounded-full text-xs font-medium uppercase tracking-[0.2em] transition-colors"
          >
            Reserve
          </motion.button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#performance" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-red-600 transition-colors">Performance</a>
            <a href="#design" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-red-600 transition-colors">Design</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-red-600 transition-colors">Gallery</a>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 border border-white/20 rounded-full text-sm font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Reserve Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505] z-10" />
          <img 
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_One_IAA_2021_1X7A0108.jpg" 
            alt="Mercedes AMG ONE Front View" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-[12vw] font-display font-bold leading-[0.85] tracking-tighter uppercase"
          >
            Formula 1.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">For the road.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light px-4"
          >
            The Mercedes-AMG ONE brings fully-fledged Formula 1 hybrid technology directly from the racetrack to the street.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Specs Section */}
      <section id="performance" className="py-24 md:py-32 px-6 md:px-12 relative z-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {specs.map((spec, index) => (
              <motion.div 
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-6 lg:border-l-0 lg:border-t lg:pt-12 lg:pl-0 cursor-default"
              >
                <spec.icon className="w-8 h-8 text-red-600 mb-4 md:mb-6" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight mb-2 md:mb-3">{spec.value}</div>
                <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em]">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section id="design" className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
                Aero<br className="hidden md:block"/>dynamics<br className="hidden md:block"/> Redefined.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
                Every curve, every intake, and every wing is designed with a single purpose: maximum downforce and optimal cooling. The active aerodynamics adapt to your driving mode, transforming the car from a sleek street cruiser to a track-dominating monster.
              </p>
              <motion.button 
                whileHover={{ x: 10 }}
                className="group flex items-center gap-3 text-red-600 text-sm font-medium uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                Explore Design 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square sm:aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden order-1 md:order-2"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="https://commons.wikimedia.org/wiki/Special:FilePath/2023_Mercedes-AMG_One_FOS25.jpg" 
                alt="Aerodynamics detail of Mercedes AMG ONE" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
              The <span className="text-red-600">Gallery</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl group aspect-[4/3] md:aspect-[3/2]"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={src}
                  alt={`Mercedes AMG ONE Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image / Quote */}
      <section id="quote" className="py-24 md:py-32 relative flex items-center justify-center min-h-[50vh] md:min-h-[70vh] my-10 md:my-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_One_at_the_2022_Goodwood_Festival_of_Speed.jpg" 
            alt="Mercedes AMG ONE Performance" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-6xl font-display font-light leading-tight tracking-tight"
          >
            "It's not just a car. It's a statement of what is technologically possible when limits are pushed to the absolute edge."
          </motion.h3>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-12 mt-10 md:mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase">
            AMG <span className="text-red-600">ONE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
          </div>
          <div className="text-xs text-white/40 tracking-widest">
            &copy; {new Date().getFullYear()} MERCEDES-AMG.
          </div>
        </div>
      </footer>
    </div>
  );
}
