"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, MapPin, Clock, Send } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Correo Electrónico",
      value: "contacto@krality.com",
      action: "mailto:contacto@krality.com",
      color: "bg-[#3A7D44]/10 text-[#3A7D44]"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Teléfono",
      value: "+58 414 000 0000",
      action: "tel:+584140000000",
      color: "bg-[#1A5A6A]/10 text-[#1A5A6A]"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "WhatsApp",
      value: "Chat Directo",
      action: "https://wa.me/584140000000?text=Hola,%20quiero%20información%20sobre%20Krality",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Ubicación",
      value: "Caracas, Venezuela",
      action: "https://goo.gl/maps/...",
      color: "bg-[#E9C46A]/10 text-[#8B5A2F]"
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]"
    >
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[#6BBF77] blur-[80px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#E9C46A] blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#3A7D44]/10 text-[#3A7D44] text-sm font-medium mb-4">
            <Send className="w-4 h-4 mr-2" />
            Cultivando Conexiones
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A7D44] to-[#6BBF77]">Planta</span> la semilla de tu proyecto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuéntanos tus ideas y te ayudaremos a hacerlas crecer con soluciones digitales a medida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent outline-none transition"
                    />
                  </div>
<div>
  <input
    type="text"
    placeholder="Asunto"
    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent outline-none transition !resize-none"
  />
</div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent outline-none transition"
                    ></textarea>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white font-medium rounded-lg shadow hover:shadow-md transition-all"
                >
                  Enviar Mensaje
                </motion.button>
              </form>

              {/* Elemento adicional debajo del formulario */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
                  <Clock className="w-4 h-4 text-[#3A7D44]" />
                  <span>Respuesta en menos de 24 horas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Directo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -2 }}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-lg ${method.color} hover:shadow-md transition-all`}
                  >
                    <div className={`p-2 rounded-md ${method.color} mr-3`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{method.title}</h4>
                      <p className="text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-[#3A7D44] rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-bold">Horario de Atención</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </p>
              </div>
              <div className="mt-4 text-xs opacity-80">
                * WhatsApp disponible 24/7
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                className="w-full h-48 sm:h-56"
                loading="lazy"
                title="Ubicación Krality"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}