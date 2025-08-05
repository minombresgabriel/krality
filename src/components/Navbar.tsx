"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type NavLinkProps = {
  href: string;
  name: string;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
};

const NavLink = ({ href, name, isActive, onClick, isMobile = false }: NavLinkProps) => (
  <motion.div
    whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
    whileTap={{ scale: isMobile ? 0.97 : 0.95 }}
    className={isMobile ? "w-[90%] text-center rounded-lg" : ""}
  >
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 transition-all duration-300 group ${
        isActive 
          ? 'text-[#3A7D44] font-medium' 
          : 'text-gray-700 hover:text-[#3A7D44]'
      } ${isMobile ? 'block px-6 py-3 hover:bg-gray-50/50 rounded-lg' : ''}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="relative z-10">{name}</span>
      {isActive && !isMobile && (
        <motion.span
          layoutId="activeNavLink"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6BBF77] rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {!isActive && !isMobile && (
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#6BBF77] rounded-full transition-all duration-300 group-hover:w-[80%] group-hover:left-[10%]"></span>
      )}
    </Link>
  </motion.div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Actualizar link activo basado en scroll (para secciones)
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      setActiveLink(current || "/");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "#services" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" },
  ];


  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { 
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.3 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: { 
        y: { stiffness: 1000 },
        opacity: { duration: 0.1 }
      }
    }
  };

  const hamburgerVariants = {
    top: {
      open: { rotate: 45, y: 7, backgroundColor: "#3A7D44" },
      closed: { rotate: 0, y: 0, backgroundColor: "#3A7D44" }
    },
    middle: {
      open: { opacity: 0 },
      closed: { opacity: 1 }
    },
    bottom: {
      open: { rotate: -45, y: -7, backgroundColor: "#3A7D44" },
      closed: { rotate: 0, y: 0, backgroundColor: "#3A7D44" }
    }
  };

  return (
    <motion.nav
      aria-label="Navegación principal"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] max-w-6xl rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-md"
          : "bg-white/90 backdrop-blur-sm border border-gray-200/30"
      }`}
    >
      <Link href="/" className="flex items-center gap-3 group" aria-label="Inicio">
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src="/images/logo-krality.png" 
            alt="Krality" 
            width={40} 
            height={40} 
            className="drop-shadow-[0_2px_4px_rgba(110,231,183,0.3)]"
            priority
          />
        </motion.div>
        <motion.span 
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3A7D44] to-[#6BBF77]"
          whileHover={{ scale: 1.05 }}
        >
          Krality
        </motion.span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-2 items-center">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            href={link.href}
            name={link.name}
            isActive={activeLink === link.href}
            onClick={() => setIsOpen(false)}
          />
        ))}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
          >
            Cotizar
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BBF77] focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Menú"
        aria-expanded={isOpen}
      >
        <div className="space-y-2">
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerVariants.top}
            className="block w-6 h-0.5 rounded-full"
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerVariants.middle}
            className="block w-6 h-0.5 rounded-full"
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerVariants.bottom}
            className="block w-6 h-0.5 rounded-full"
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden md:hidden flex flex-col items-center gap-2 py-4 border border-gray-200/50"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(110, 231, 183, 0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="w-[90%] text-center rounded-lg"
              >
                <NavLink
                  href={link.href}
                  name={link.name}
                  onClick={() => setIsOpen(false)}
                  isActive={activeLink === link.href}
                  isMobile
                />
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-[90%] px-6 py-3 text-center"
            >
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 bg-gradient-to-r from-[#3A7D44] to-[#6BBF77] text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
              >
                Cotizar
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}