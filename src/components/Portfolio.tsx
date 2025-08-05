"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Eye, Github, Star, Zap, Leaf, Crop } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(500px at ${mouseX}px ${mouseY}px, rgba(58, 125, 68, 0.1), transparent 80%)`;

  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Tienda online con carrito inteligente y pasarela de pagos segura.",
      tags: ["React", "Next.js", "Stripe", "Tailwind"],
      image: "/images/portfolio/ecommerce.png",
      link: "#",
      repo: "#",
      features: ["+300% conversión", "0.3s load time", "100% mobile"],
      stars: 4.9
    },
    {
      title: "Landing Page Corporativa",
      description: "Página de alto impacto con animaciones fluidas y SEO avanzado.",
      tags: ["Framer Motion", "GSAP", "CMS"],
      image: "/images/portfolio/landing.jpg",
      link: "#",
      repo: "#",
      features: ["95% score SEO", "3.2s avg session", "70% menos rebote"],
      stars: 4.7
    },
    {
      title: "Sistema de Gestión",
      description: "Plataforma integral para administración de inventarios y ventas.",
      tags: ["Node.js", "MongoDB", "GraphQL"],
      image: "/images/portfolio/dashboard.jpg",
      link: "#",
      repo: "#",
      features: ["30h ahorradas/sem", "API personalizada", "Reportes en tiempo real"],
      stars: 5.0
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#f5f9fc] to-[#e9f2f8]"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      {/* Fondo interactivo */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Efectos de partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#3A7D44]/10 backdrop-blur-[1px]"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: ["0%", "-100%"],
              opacity: [0.8, 0],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
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
            <Eye className="w-5 h-5 mr-2" />
            <span>Nuestra Cosecha Digital</span>
            <motion.div 
              className="ml-3"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Zap className="w-4 h-4 text-[#E9C46A]" />
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
              Proyectos
            </motion.span>{' '}
            <br />
            <motion.span 
              className="inline-block mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              cultivados con excelencia
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Cada proyecto en <span className="font-semibold text-[#3A7D44]">Krality</span> es como una cosecha: plantado con cuidado, regado con tecnología y cosechado con dedicación.
          </motion.p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
              className="relative group perspective-1000"
              whileHover={{ y: -15 }}
            >
              {/* Efecto de partículas para cada proyecto */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#E9C46A]/20 backdrop-blur-[0.5px]"
                    initial={{
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      y: ["100%", "-100%"],
                      opacity: [0, 0.4, 0],
                      x: [0, Math.random() * 100 - 50]
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "linear"
                    }}
                    style={{
                      width: `${Math.random() * 6 + 3}px`,
                      height: `${Math.random() * 6 + 3}px`,
                    }}
                  />
                ))}
              </div>

              <div className="h-full bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100/70 flex flex-col overflow-hidden transform-style-preserve-3d">
                {/* Efecto de borde gradiente */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7D44]/10 to-[#E9C46A]/10 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-700"></div>
                
                {/* Imagen del proyecto */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ y: 30 }}
                      whileHover={{ y: 0 }}
                      className="space-y-4"
                    >
                      {/* Rating */}
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(project.stars) ? 'fill-[#E9C46A] text-[#E9C46A]' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-xs text-white/80">{project.stars}/5</span>
                      </div>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-white/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E9C46A] mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Contenido inferior */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-3"
                      whileHover={{ x: 3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-5">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ y: -2 }}
                          className="px-3 py-1.5 text-xs bg-[#3A7D44]/10 text-[#3A7D44] rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Botones */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100/50">
                    <motion.a
                      href={project.link}
                      className="flex items-center text-[#3A7D44] font-semibold hover:text-[#1A5A6A] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Ver proyecto</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      >
                        <ArrowUpRight className="ml-2 w-5 h-5" />
                      </motion.span>
                    </motion.a>
                    <motion.a
                      href={project.repo}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            <Leaf className="w-6 h-6 mr-3" />
            <span className="text-lg">¿Quieres ver más de nuestra cosecha digital?</span>
            <Crop className="w-6 h-6 ml-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}