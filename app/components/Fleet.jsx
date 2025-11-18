'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import styles from '../styles/Fleet.module.css';

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
    { number: 12, suffix: '+', label: 'Camiones' },
    { number: 14, suffix: '+', label: 'Equipos de Arrastre' },
    { number: 100, suffix: '%', label: 'Cobertura Nacional' },
    { number: 24, suffix: '/7', label: 'Disponibilidad' },
  ];

  const fleetImages = [
    { id: 1, alt: 'Camión de carga 1' },
    { id: 2, alt: 'Camión de carga 2' },
    { id: 3, alt: 'Camión de carga 3' },
    { id: 4, alt: 'Camión de carga 4' },
  ];

  return (
    <section id="flota" className={styles.fleet}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>Equipamiento Moderno y Confiable</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>
              Nuestra flota está equipada con la última tecnología para garantizar
              la seguridad y eficiencia en cada transporte
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className={styles.fleetGrid}>
          {fleetImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={0.1 * index}>
              <div className={styles.fleetCard}>
                <div className={styles.fleetImagePlaceholder}>
                  <div className={styles.truckIcon}>🚛</div>
                  <p className={styles.truckLabel}>Camión #{image.id}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features */}
        <ScrollReveal delay={0.5}>
          <div className={styles.featuresBox}>
            <h3 className={styles.featuresTitle}>Características de Nuestra Flota</h3>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>
                  <h4>Mantenimiento Preventivo</h4>
                  <p>Inspecciones regulares para máxima confiabilidad</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>
                  <h4>Rastreo GPS</h4>
                  <p>Seguimiento en tiempo real de cada envío</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>
                  <h4>Equipos Certificados</h4>
                  <p>Cumplimiento de todas las normativas vigentes</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>
                  <h4>Conductores Capacitados</h4>
                  <p>Personal con amplia experiencia y formación continua</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
