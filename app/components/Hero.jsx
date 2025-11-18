'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = [
    { number: '12+', label: 'Camiones Propios' },
    { number: '14+', label: 'Equipos de Arrastre' },
    { number: '100%', label: 'Cobertura Nacional' },
    { number: '24/7', label: 'Disponibilidad' },
  ];

  const features = [
    'Contenedores 20-40-45 pies',
    'Cargas Refrigeradas',
    'Químicos Certificados'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50689417464', '_blank');
  };

  const handleCotizarClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contacto');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      {/* Parallax Background */}
      <motion.div
        className={styles.background}
        style={{ y }}
      >
        <div className={styles.overlay}></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={styles.content}
        style={{ opacity }}
      >
        <div className={styles.container}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.textContent}
          >
            <motion.h1 variants={itemVariants} className={styles.title}>
              Transporte de Carga Pesada en Costa Rica
            </motion.h1>

            <motion.p variants={itemVariants} className={styles.subtitle}>
              Empresa familiar con +12 años de experiencia
            </motion.p>

            <motion.div variants={itemVariants} className={styles.features}>
              {features.map((feature, index) => (
                <span key={index} className={styles.feature}>
                  {feature}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className={styles.buttons}>
              <button
                onClick={handleCotizarClick}
                className={styles.primaryButton}
              >
                Solicitar Cotización
              </button>
              <button
                onClick={handleWhatsAppClick}
                className={styles.secondaryButton}
              >
                <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: 8941-7464
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.statsGrid}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={styles.statCard}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className={styles.scrollArrow}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
