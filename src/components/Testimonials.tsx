"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";




export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  const testimonials = [
    {
      id: 1,
      name: "María López",
      role: "CEO en Tienda Digital",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Krality transformó por completo nuestra presencia online. Ahora nuestro sitio no solo se ve increíble, sino que las ventas han aumentado un 50%.",
      rating: 5,
      highlight: "Aumento del 50% en ventas",
      color: "#E9C46A"
    },
    {
      id: 2,
      name: "Juan Rodríguez",
      role: "Fundador de Startup Pro",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "El equipo de Krality entendió perfectamente lo que necesitábamos. El diseño, la velocidad y la automatización superaron nuestras expectativas.",
      rating: 5,
      highlight: "Superó expectativas",
      color: "#6BBF77"
    },
    {
      id: 3,
      name: "Ana García",
      role: "Directora de Marketing",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Trabajar con Krality fue la mejor decisión. Nuestro branding ahora transmite confianza y profesionalismo. ¡Lo recomiendo al 100%!",
      rating: 5,
      highlight: "Branding profesional",
      color: "#1A5A6A"
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 overflow-hidden bg-gradient-to-br from-[#1A5A6A] via-[#3A7D44] to-[#6BBF77] text-white"
    >
      {/* Efectos de fondo decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <motion.div
          initial={{ x: "-20%", y: "-20%" }}
          animate={inView ? { x: "10%", y: "10%" } : {}}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[#E9C46A] blur-[120px]"
        />
        <motion.div
          initial={{ x: "10%", y: "30%" }}
          animate={inView ? { x: "-10%", y: "10%" } : {}}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-white/10 blur-[150px]"
        />
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Encabezado con animación mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Quote className="w-4 h-4 mr-2" />
            Testimonios Reales
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Cosechando <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9C46A] to-white">éxitos</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Lo que dicen nuestros clientes sobre la experiencia de trabajar con nuestra granja digital.
          </motion.p>
        </motion.div>

        {/* Grid de testimonios mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              transition={{ delay: index * 0.15 }}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              {/* Tarjeta de testimonio */}
              <motion.div
                className="h-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10 flex flex-col overflow-hidden"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
              >
                {/* Efecto de acento de color */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: testimonial.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
                
                {/* Rating con animación escalonada */}
                <motion.div 
                  className="flex mb-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                        delay: index * 0.15 + i * 0.1
                      }}
                    >
                      <Star 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#E9C46A] text-[#E9C46A]' : 'text-white/30'}`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Quote con icono animado */}
                <motion.div
                  className="relative"
                >
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/10 z-0" />
                  <motion.p 
                    className="text-lg italic text-white/90 mb-6 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                </motion.div>
                
                {/* Highlight con animación */}
                <motion.div
                  className="mt-auto mb-6"
                >
                  <motion.div
                    className="px-4 py-2 bg-white/10 rounded-lg inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    <span className="text-sm font-medium text-[#E9C46A]">
                      {testimonial.highlight}
                    </span>
                  </motion.div>
                </motion.div>
                
                {/* Autor con animación */}
                <motion.div
                  className="flex items-center"
                >
                  <motion.div 
                    className="relative w-12 h-12 rounded-full border-2 border-[#E9C46A] overflow-hidden mr-4"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      delay: index * 0.15 + 0.5
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.6 }}
                  >
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <span className="text-sm text-white/70">
                      {testimonial.role}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Efecto de borde al hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-[#E9C46A]/50 opacity-0 group-hover:opacity-100 -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 0, scale: 1 } : {}}
                whileHover={{ 
                  opacity: 1,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] text-[#1A5A6A] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg"
            >
              Quiero mi éxito digital
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}