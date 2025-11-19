'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from '../styles/Services.module.css';
import {
  ContainerIcon,
  RefrigeratedIcon,
  TruckIcon,
  ChemicalIcon,
  WaveIcon,
  SunIcon,
  LightningIcon,
  TruckDecorative,
  EngineDecorative
} from './Icons';

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      Icon: ContainerIcon,
      title: 'Transporte de Contenedores',
      description: 'Contenedores de 20, 40 y 45 pies',
      features: ['Permisos para muelles', 'Acceso a terminales', 'Manejo seguro']
    },
    {
      Icon: RefrigeratedIcon,
      title: 'Carga Refrigerada',
      description: 'Cadena de frío controlada',
      features: ['Equipos especializados', 'Monitoreo continuo', 'Temperatura controlada']
    },
    {
      Icon: TruckIcon,
      title: 'Carga Seca',
      description: 'Furgones y plataformas',
      features: ['Mercancía general', 'Carga segura', 'Protección total']
    },
    {
      Icon: ChemicalIcon,
      title: 'Transporte de Químicos',
      description: 'Certificaciones vigentes',
      features: ['Personal capacitado', 'Seguridad máxima', 'Cumplimiento normativo']
    },
    {
      Icon: WaveIcon,
      title: 'Zona Atlántica',
      description: 'Cobertura completa',
      features: ['Limón', 'Moín', 'Puertos del Caribe']
    },
    {
      Icon: SunIcon,
      title: 'Zona Pacífica',
      description: 'Servicio integral',
      features: ['Puntarenas', 'Caldera', 'Puertos del Pacífico']
    }
  ];

  return (
    <section id="servicios" className={styles.services} ref={sectionRef}>
      {/* Decorative backgrounds with parallax */}
      <motion.div className={styles.decorativeTruck} style={{ y: y1, opacity }}>
        <TruckDecorative />
      </motion.div>
      <motion.div className={styles.decorativeEngine} style={{ y: y2, opacity }}>
        <EngineDecorative />
      </motion.div>

      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.badge}>
              <LightningIcon className={styles.badgeIcon} size={18} />
              Nuestros Servicios
            </div>
            <h2 className={styles.title}>
              <span className={styles.titleLine1}>Soluciones</span>
              <span className={styles.titleLine2}>Integrales de Transporte</span>
            </h2>
            <p className={styles.subtitle}>
              Servicios especializados de carga pesada adaptados a las necesidades de cada cliente
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <motion.div
                className={styles.serviceCard}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className={styles.serviceIconWrapper}>
                  <service.Icon className={styles.serviceIcon} size={48} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg className={styles.checkmark} viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardGlow}></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>¿Necesita un Servicio Especializado?</h3>
            <p className={styles.ctaText}>
              Contáctenos y encontraremos la mejor solución para su carga
            </p>
            <a href="#contacto" className={styles.ctaButton}>
              Consultar Disponibilidad
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
