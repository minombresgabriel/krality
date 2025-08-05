"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Code, Crop, Cpu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800,
  });

  // Efecto de cursor personalizado
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 150 partículas de diferentes tipos
  const particles = Array.from({ length: 150 }, (_, i) => {
    const type = Math.floor(Math.random() * 3);
    const size = Math.random() * 12 + 4;
    return {
      id: i,
      type,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size,
      delay: Math.random() * 10,
      duration: Math.random() * 25 + 15,
      opacity: Math.random() * 0.4 + 0.1,
      rotate: Math.random() * 360
    };
  });

  // Iconos flotantes
  const techIcons = [
    { icon: <Code className="w-6 h-6" />, color: "text-blue-400" },
    { icon: <Crop className="w-6 h-6" />, color: "text-green-400" },
    { icon: <Cpu className="w-6 h-6" />, color: "text-purple-400" },
    { icon: <Zap className="w-6 h-6" />, color: "text-yellow-400" }
  ];

  // Efecto para manejar el tamaño de la ventana
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

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Efecto de cursor brillante
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

  const background = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(58, 125, 68, 0.15), transparent 80%)`;

  return (
    <section 
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1720] via-[#0f2835] to-[#1a4a5a] text-white"
      aria-labelledby="main-heading"
    >
      {/* Fondo interactivo */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Efecto de granja digital */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Partículas digitales */}
        {particles.map((particle) => {
          if (particle.type === 0) {
            // Partículas circulares
            return (
              <motion.div
                key={`circle-${particle.id}`}
                className="absolute rounded-full bg-white/20 backdrop-blur-[1px]"
                initial={{ 
                  y: 0,
                  opacity: 0,
                  x: Math.random() * 100 - 50
                }}
                animate={{ 
                  y: [-100, -windowSize.height],
                  opacity: [particle.opacity, 0],
                  scale: [1, 1.5]
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
                }}
              />
            );
          } else if (particle.type === 1) {
            // Partículas cuadradas (píxeles)
            return (
              <motion.div
                key={`square-${particle.id}`}
                className="absolute bg-[#6BBF77]/40 backdrop-blur-[0.5px]"
                initial={{ 
                  y: 0,
                  opacity: 0,
                  rotate: particle.rotate
                }}
                animate={{ 
                  y: [-50, -windowSize.height],
                  opacity: [particle.opacity, 0],
                  rotate: particle.rotate + 45
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
                }}
              />
            );
          } else {
            // Partículas de código
            return (
              <motion.div
                key={`code-${particle.id}`}
                className="absolute text-[#E9C46A]/80 font-mono text-xs"
                initial={{ 
                  y: 0,
                  opacity: 0,
                  x: Math.random() * 50 - 25
                }}
                animate={{ 
                  y: [-80, -windowSize.height],
                  opacity: [particle.opacity, 0],
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
                  fontSize: `${particle.size}px`,
                }}
              >
                {Math.random() > 0.5 ? "{ }" : "</>"}
              </motion.div>
            );
          }
        })}

        {/* Olas digitales */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/3"
          animate={{
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
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
        </motion.div>
      </div>

      {/* Luces de ambiente */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute -top-[20%] -left-[20%] w-[60vh] h-[60vh] rounded-full bg-[#6BBF77] opacity-[0.15] blur-[100px]"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-[15%] -right-[15%] w-[50vh] h-[50vh] rounded-full bg-[#E9C46A] opacity-[0.1] blur-[80px]"
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl text-center px-6 py-20">
        {/* Efecto de destellos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute text-[#E9C46A]"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0,
                scale: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: 360
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
          ))}
        </div>

        {/* Logo animado */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex justify-center mb-8 mt-7"
        >
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-[#E9C46A]/30 shadow-lg shadow-[#3A7D44]/20 relative overflow-hidden"
          >
            {/* Efecto de brillo al hover */}
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(233,196,106,0.4)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              initial={{ scale: 0.5 }}
              whileHover={{ scale: 1.5 }}
            />
            <Image
              src="/images/logo-krality.png"
              alt="Krality - Granja Digital"
              width={120}
              height={120}
              priority
              className="drop-shadow-[0_0_30px_rgba(110,231,183,0.7)] relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Título principal */}
        <motion.h1 
          id="main-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
        >
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9C46A] via-[#6BBF77] to-[#E9C46A] block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Cultivamos
          </motion.span>
          <motion.span 
            className="relative inline-block mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="relative z-10">tu éxito digital</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-3 bg-[#6BBF77]/50 -rotate-1 -z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Somos <span className="text-[#E9C46A] font-bold">granjeros digitales</span> que plantamos código, 
          regamos diseño y cosechamos <span className="text-[#6BBF77] font-bold">resultados tangibles</span> para tu marca.
        </motion.p>

        {/* Botones */}
        <motion.div 
          className="mt-14 flex flex-col md:flex-row gap-6 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="#services"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 py-5 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            aria-label="Explorar servicios de Krality"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Explorar Servicios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[#6BBF77] to-[#3A7D44] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
              initial={{ x: -100 }}
              whileHover={{ x: 0 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 py-5 bg-transparent border-2 border-[#E9C46A] text-[#E9C46A] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            aria-label="Contactar a Krality"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Comenzar Cosecha</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-[#E9C46A]/10 group-hover:bg-[#E9C46A]/20 transition-all duration-500"
              aria-hidden="true"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
        </motion.div>

        {/* Tech flotante */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={`${tech.color} flex flex-col items-center`}
              animate={{
                y: [0, -15, 0],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + index,
                delay: index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="text-xs opacity-70 mt-2">
                {tech.icon.type === Code && "Código"}
                {tech.icon.type === Crop && "Diseño"}
                {tech.icon.type === Cpu && "Tecnología"}
                {tech.icon.type === Zap && "Rendimiento"}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}