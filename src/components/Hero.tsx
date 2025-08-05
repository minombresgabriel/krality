"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { ArrowRight, Code, Crop, Cpu, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  // Efecto de cursor suave (ligero)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(mouseX, e.clientX, { duration: 0.5 });
      animate(mouseY, e.clientY, { duration: 0.5 });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(58, 125, 68, 0.1), transparent 80%)`;

  // Elementos decorativos estáticos
  const decorItems = [
    { content: "{ }", className: "text-[#E9C46A]/30 text-2xl" },
    { content: "</>", className: "text-[#6BBF77]/30 text-3xl" },
    { content: "/* */", className: "text-[#3A7D44]/30 text-xl" },
    { content: "=>", className: "text-[#E9C46A]/25 text-xl" },
  ];

  return (
    <section 
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a1720] via-[#0f2835] to-[#1a4a5a] text-white"
      aria-labelledby="main-heading"
    >
      {/* Fondo interactivo ligero */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Elementos decorativos estáticos */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {decorItems.map((item, index) => (
          <div 
            key={index}
            className={`absolute ${item.className}`}
            style={{
              left: `${10 + (index * 20)}%`,
              top: `${15 + (index * 15)}%`,
            }}
          >
            {item.content}
          </div>
        ))}

        {/* Ola estática en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              fill="#3A7D44" 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl text-center px-6 py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8 mt-20">
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
        </div>

        {/* Título principal */}
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

        {/* Subtítulo */}
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
          Somos <span className="text-[#E9C46A] font-bold">granjeros digitales</span> que plantamos código, 
          regamos diseño y cosechamos <span className="text-[#6BBF77] font-bold">resultados tangibles</span>.
        </p>

        {/* Botones */}
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

        {/* Tech icons estáticos */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xs sm:max-w-md mx-auto">
          {[
            { icon: <Code className="w-5 h-5 mx-auto" />, color: "text-blue-400", label: "Código" },
            { icon: <Crop className="w-5 h-5 mx-auto" />, color: "text-green-400", label: "Diseño" },
            { icon: <Cpu className="w-5 h-5 mx-auto" />, color: "text-purple-400", label: "Tecnología" },
            { icon: <Zap className="w-5 h-5 mx-auto" />, color: "text-yellow-400", label: "Rendimiento" }
          ].map((tech, index) => (
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