"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Enlaces rápidos",
      links: [
        { name: "Servicios", href: "#services" },
        { name: "Portafolio", href: "#portfolio" },
        { name: "Testimonios", href: "#testimonials" },
        { name: "Contacto", href: "#contact" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { name: "Diseño Web", href: "#" },
        { name: "Branding", href: "#" },
        { name: "Sistemas SaaS", href: "#" },
        { name: "Automatización", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos y condiciones", href: "#" },
        { name: "Política de privacidad", href: "#" },
        { name: "Cookies", href: "#" }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "contacto@krality.com",
      href: "mailto:contacto@krality.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+58 414 000 0000",
      href: "tel:+584140000000"
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      text: "WhatsApp Chat",
      href: "https://wa.me/584140000000"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Caracas, Venezuela",
      href: "https://goo.gl/maps/"
    }
  ];

  const socialNetworks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0a2e38] via-[#1a5a6a] to-[#3A7D44] text-white pt-20 pb-10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Columna 1: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Krality</span>
            </Link>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Cultivamos soluciones digitales que hacen crecer tu negocio con diseño, tecnología y estrategia.
            </p>
            <div className="flex gap-4">
              {socialNetworks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columnas de enlaces */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4 text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#E9C46A] text-sm transition-colors flex items-start gap-2"
                    >
                      <span className="mt-1 w-1 h-1 rounded-full bg-[#E9C46A] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Columna 4: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              {contactMethods.map((method, index) => (
                <li key={index}>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#E9C46A] text-sm transition-colors flex items-start gap-3"
                  >
                    <span className="mt-0.5">{method.icon}</span>
                    {method.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Línea inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Krality. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-[#E9C46A] text-sm transition-colors">
              Términos y condiciones
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#E9C46A] text-sm transition-colors">
              Política de privacidad
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}