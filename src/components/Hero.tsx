"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Zap, Code, Crop, Cpu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
interface ParticleType {
  id: number;
  type: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  rotate: number;
} 
// Componente optimizado para partículas
const Particle = ({ particle, windowHeight }: { particle: ParticleType, windowHeight: number }) => {
  return (
    <motion.div
      key={`particle-${particle.id}`}
      className={`absolute ${
        particle.type === 0 
          ? "rounded-full bg-white/20 backdrop-blur-[1px]" 
          : particle.type === 1 
            ? "bg-[#6BBF77]/40 backdrop-blur-[0.5px]" 
            : "text-[#E9C46A]/80 font-mono text-xs"
      }`}
      initial={{ 
        y: 0,
        opacity: 0,
        x: particle.type !== 1 ? Math.random() * 100 - 50 : 0,
        rotate: particle.type === 1 ? particle.rotate : 0
      }}
      animate={{ 
        y: [-100, -windowHeight],
        opacity: [particle.opacity, 0],
        scale: particle.type === 0 ? [1, 1.5] : 1,
        rotate: particle.type === 1 ? particle.rotate + 45 : 0
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        left: `${particle.left}%`,
        top: `${particle.top}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        fontSize: particle.type === 2 ? `${particle.size}px` : undefined
      }}
    >
      {particle.type === 2 ? (Math.random() > 0.5 ? "{ }" : "</>") : null}
    </motion.div>
  );
};

export default function Hero() {
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800,
  });

  // Efecto de cursor personalizado
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Memoize particles para evitar recreación en cada render
  const particles = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => { // Reducido de 150 a 100 partículas
      const type = Math.floor(Math.random() * 3);
      const size = Math.random() * 8 + 3; // Tamaño reducido
      return {
        id: i,
        type,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        delay: Math.random() * 5, // Delay reducido
        duration: Math.random() * 15 + 10, // Duración reducida
        opacity: Math.random() * 0.3 + 0.1, // Opacidad reducida
        rotate: Math.random() * 360
      };
    });
  }, []);

  // Iconos flotantes
  const techIcons = useMemo(() => [
    { icon: <Code className="w-5 h-5" />, color: "text-blue-400", label: "Código" },
    { icon: <Crop className="w-5 h-5" />, color: "text-green-400", label: "Diseño" },
    { icon: <Cpu className="w-5 h-5" />, color: "text-purple-400", label: "Tecnología" },
    { icon: <Zap className="w-5 h-5" />, color: "text-yellow-400", label: "Rendimiento" }
  ], []);

  // Efecto para manejar el tamaño de la ventana (debounced)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Establecer el tamaño inicial
      handleResize();

      let timeoutId: NodeJS.Timeout;
      const debouncedResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleResize, 100);
      };

      window.addEventListener('resize', debouncedResize);
      return () => {
        window.removeEventListener('resize', debouncedResize);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  // Efecto de cursor brillante (optimizado)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        animate(mouseX, e.clientX, { duration: 0.5 });
        animate(mouseY, e.clientY, { duration: 0.5 });
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(58, 125, 68, 0.1), transparent 80%)`;

  return (
    <section 
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1720] via-[#0f2835] to-[#1a4a5a] text-white"
      aria-labelledby="main-heading"
    >
      {/* Fondo interactivo (optimizado) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Efecto de granja digital (optimizado) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Partículas digitales (renderizadas por lotes) */}
        {particles.map((particle) => (
          <Particle key={particle.id} particle={particle} windowHeight={windowSize.height} />
        ))}

        {/* Olas digitales (simplificadas) */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.12]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              fill="#3A7D44" 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Luces de ambiente (optimizadas) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] -left-[20%] w-[40vh] h-[40vh] rounded-full bg-[#6BBF77] opacity-[0.1] blur-[80px]" />
        <div className="absolute -bottom-[15%] -right-[15%] w-[30vh] h-[30vh] rounded-full bg-[#E9C46A] opacity-[0.08] blur-[60px]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl text-center px-4 py-16 sm:px-6 sm:py-20">
        {/* Logo animado (optimizado) */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex justify-center mb-6 mt-4"
        >
          <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-[#E9C46A]/30 shadow-lg shadow-[#3A7D44]/20">
            <Image
              src="/images/logo-krality.png"
              alt="Krality - Granja Digital"
              width={80}
              height={80}
              priority
              className="drop-shadow-[0_0_20px_rgba(110,231,183,0.5)]"
            />
          </div>
        </motion.div>

        {/* Título principal (optimizado) */}
        <h1 
          id="main-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9C46A] to-[#6BBF77] block">
            Cultivamos
          </span>
          <span className="relative inline-block mt-2 sm:mt-4">
            tu éxito digital
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#6BBF77]/50 -rotate-1" />
          </span>
        </h1>

        {/* Subtítulo (optimizado) */}
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
          Somos <span className="text-[#E9C46A] font-bold">granjeros digitales</span> que plantamos código, 
          regamos diseño y cosechamos <span className="text-[#6BBF77] font-bold">resultados tangibles</span>.
        </p>

        {/* Botones (optimizados) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="relative px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Explorar servicios de Krality"
          >
            Explorar Servicios
          </a>

          <a
            href="#contact"
            className="relative px-8 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-[#E9C46A] text-[#E9C46A] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Contactar a Krality"
          >
            Comenzar Cosecha
          </a>
        </div>

        {/* Tech flotante (optimizado) */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xs sm:max-w-md mx-auto">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className={`${tech.color} flex flex-col items-center text-sm`}
            >
              <div className="text-2xl mb-1">{tech.icon}</div>
              <div className="text-xs opacity-70">{tech.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}