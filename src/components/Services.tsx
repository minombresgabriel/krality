"use client";
import { Code, Palette, Zap, ArrowRight, Leaf, Cpu, Cloud, Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(58, 125, 68, 0.1), transparent 80%)`;

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desarrollo Web a Medida",
      description: "Creamos sitios web y aplicaciones únicas, optimizadas para rendimiento, escalabilidad y experiencia de usuario.",
      features: ["Landing Pages", "Aplicaciones Web", "Sistemas SaaS", "E-commerce"],
      color: "from-[#3A7D44] to-[#6BBF77]",
      iconBg: "bg-[#3A7D44]/10",
      particles: 12
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Branding & Diseño",
      description: "Diseñamos marcas que conectan con tu público y reflejan la esencia de tu negocio en cada detalle.",
      features: ["Diseño de Logo", "Identidad Visual", "UI/UX", "Materiales de Marketing"],
      color: "from-[#E9C46A] to-[#F2CB57]",
      iconBg: "bg-[#E9C46A]/10",
      particles: 8
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Automatización & Growth",
      description: "Optimizamos tus procesos con automatizaciones inteligentes para ahorrar tiempo y aumentar ingresos.",
      features: ["Flujos Automatizados", "Chatbots", "Integraciones API", "Análisis de Datos"],
      color: "from-[#1A5A6A] to-[#2A2F8C]",
      iconBg: "bg-[#1A5A6A]/10",
      particles: 16
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#f5f9fc] to-[#e9f2f8]"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      {/* Efectos de fondo interactivos */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#3A7D44]/20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -100],
              opacity: [0.8, 0],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#3A7D44]/10 text-[#3A7D44] text-sm font-medium mb-6 backdrop-blur-sm border border-[#3A7D44]/20"
          >
            <Leaf className="w-5 h-5 mr-2" />
            <span>Nuestros Corrales Digitales</span>
            <motion.div 
              className="ml-3"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-4 h-4 text-[#E9C46A]" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A7D44] to-[#6BBF77]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Cultivamos
            </motion.span>{' '}
            <br />
            <motion.span 
              className="inline-block mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              tu éxito digital
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            En <span className="font-semibold text-[#3A7D44]">Krality</span> aplicamos la metodología agrícola digital: cada servicio es un corral donde tus ideas crecen con tecnología de punta.
          </motion.p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
              className="relative group perspective-1000"
              whileHover={{ y: -10 }}
            >
              {/* Efecto de partículas para cada tarjeta */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(service.particles)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full bg-gradient-to-br ${service.color}`}
                    initial={{
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      y: ["100%", "-100%"],
                      opacity: [0, 0.3, 0],
                      x: [0, Math.random() * 100 - 50]
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "linear"
                    }}
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                    }}
                  />
                ))}
              </div>

              <div className="h-full bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100/70 flex flex-col overflow-hidden transform-style-preserve-3d">
                {/* Efecto de borde gradiente */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-500`}></div>
                
                {/* Efecto de brillo */}
                <div className={`absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(233,196,106,0.2)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
                {/* Icono */}
                <motion.div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl ${service.iconBg} mb-8 group-hover:bg-gradient-to-br ${service.color} group-hover:text-white transition-all duration-500 shadow-inner`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Título */}
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-5 text-gray-900 group-hover:text-[#3A7D44] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Descripción */}
                <p className="text-gray-600 mb-7 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* Lista de características */}
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-gray-700"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 mt-0.5 mr-3 text-[#3A7D44]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01l-3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Botón */}
                <div className="mt-auto pt-6 border-t border-gray-100/50">
                  <motion.button
                    className="inline-flex items-center text-[#3A7D44] font-semibold group-hover:text-[#1A5A6A] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Descubrir más</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            <span className="flex items-center justify-center gap-3">
              <Leaf className="w-5 h-5" />
              <span>¿Listo para cultivar tu proyecto digital?</span>
              <Cloud className="w-5 h-5" />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}