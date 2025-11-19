'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from '../styles/Fleet.module.css';
import { LightningIcon, TruckIcon, GearIcon, MapPinIcon, ClockIcon } from './Icons';

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Fleet() {
  const stats = [
    { number: 12, suffix: '+', label: 'Camiones', Icon: TruckIcon },
    { number: 14, suffix: '+', label: 'Equipos de Arrastre', Icon: GearIcon },
    { number: 100, suffix: '%', label: 'Cobertura Nacional', Icon: MapPinIcon },
    { number: 24, suffix: '/7', label: 'Disponibilidad', Icon: ClockIcon },
  ];

  // Imágenes reales de los camiones
  const fleetImages = [
    {
      id: 1,
      src: '/images/WhatsApp Image 2025-11-18 at 15.44.08_d37cb419.jpg',
      alt: 'Camión de transporte GEMA 1'
    },
    {
      id: 2,
      src: '/images/WhatsApp Image 2025-11-18 at 15.44.09_29c46236.jpg',
      alt: 'Camión de transporte GEMA 2'
    },
    {
      id: 3,
      src: '/images/WhatsApp Image 2025-11-18 at 15.44.09_4f302b01.jpg',
      alt: 'Camión de transporte GEMA 3'
    },
    {
      id: 4,
      src: '/images/WhatsApp Image 2025-11-18 at 15.44.09_a9729be9.jpg',
      alt: 'Camión de transporte GEMA 4'
    },
    {
      id: 5,
      src: '/images/WhatsApp Image 2025-11-18 at 15.44.10_514dabcf.jpg',
      alt: 'Camión de transporte GEMA 5'
    },
    {
      id: 6,
      src: '/images/WhatsApp Image 2025-11-18 at 15.44.10_cbb4f2d7.jpg',
      alt: 'Camión de transporte GEMA 6'
    },
  ];

  return (
    <section id="flota" className={styles.fleet}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.badge}>
              <LightningIcon className={styles.badgeIcon} size={18} />
              Nuestra Flota
            </div>
            <h2 className={styles.title}>
              <span className={styles.titleLine1}>Equipamiento</span>
              <span className={styles.titleLine2}>Moderno y Confiable</span>
            </h2>
            <p className={styles.subtitle}>
              Flota propia equipada con tecnología de punta para garantizar
              la seguridad y eficiencia en cada transporte
            </p>
          </div>
        </ScrollReveal>

        {/* Stats con diseño industrial */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <motion.div
                className={styles.statCard}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={styles.statBorder}></div>
                <div className={styles.statIcon}>
                  <stat.Icon className={styles.statIconSvg} size={40} />
                </div>
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statGlow}></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fleet Grid con imágenes reales y efectos parallax */}
        <div className={styles.fleetGrid}>
          {fleetImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={0.05 * index}>
              <motion.div
                className={styles.fleetCard}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.fleetImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.imageOverlayContent}>
                      <div className={styles.imageNumber}>#{image.id}</div>
                      <div className={styles.imageLabel}>Unidad {image.id}</div>
                    </div>
                  </div>
                  <div className={styles.imageShine}></div>
                </div>
                <div className={styles.cardBorder}></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features mejorado */}
        <ScrollReveal delay={0.4}>
          <div className={styles.featuresBox}>
            <h3 className={styles.featuresTitle}>
              <span className={styles.featuresTitleIcon}>▸</span>
              Características de Nuestra Flota
            </h3>
            <div className={styles.featuresList}>
              <motion.div
                className={styles.featureItem}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Mantenimiento Preventivo</h4>
                  <p>Inspecciones regulares para máxima confiabilidad</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.featureItem}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Rastreo GPS</h4>
                  <p>Seguimiento en tiempo real de cada envío</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.featureItem}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4>Equipos Certificados</h4>
                  <p>Cumplimiento de todas las normativas vigentes</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.featureItem}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className={styles.featureIconWrapper}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Conductores Capacitados</h4>
                  <p>Personal con amplia experiencia y formación continua</p>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Decoración industrial */}
      <div className={styles.decorativeElement}></div>
    </section>
  );
}
