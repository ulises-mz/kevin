'use client';

import ScrollReveal from './ScrollReveal';
import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    {
      icon: '📦',
      title: 'Transporte de Contenedores',
      description: 'Contenedores de 20, 40 y 45 pies',
      features: ['Permisos para muelles', 'Acceso a terminales', 'Manejo seguro']
    },
    {
      icon: '❄️',
      title: 'Carga Refrigerada',
      description: 'Cadena de frío controlada',
      features: ['Equipos especializados', 'Monitoreo continuo', 'Temperatura controlada']
    },
    {
      icon: '📋',
      title: 'Carga Seca',
      description: 'Furgones y plataformas',
      features: ['Mercancía general', 'Carga segura', 'Protección total']
    },
    {
      icon: '⚗️',
      title: 'Transporte de Químicos',
      description: 'Certificaciones vigentes',
      features: ['Personal capacitado', 'Seguridad máxima', 'Cumplimiento normativo']
    },
    {
      icon: '🌊',
      title: 'Zona Atlántica',
      description: 'Cobertura completa',
      features: ['Limón', 'Moín', 'Puertos del Caribe']
    },
    {
      icon: '🏖️',
      title: 'Zona Pacífica',
      description: 'Servicio integral',
      features: ['Puntarenas', 'Caldera', 'Puertos del Pacífico']
    }
  ];

  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>Nuestros Servicios</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>
              Soluciones integrales de transporte de carga pesada adaptadas a sus necesidades
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>¿Necesita un servicio especializado?</h3>
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
