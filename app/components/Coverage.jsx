'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import styles from '../styles/Coverage.module.css';

export default function Coverage() {
  const zones = [
    {
      icon: '🌊',
      title: 'Zona Atlántica',
      locations: ['Limón', 'Moín', 'Puertos del Caribe'],
      color: 'blue'
    },
    {
      icon: '🏖️',
      title: 'Zona Pacífica',
      locations: ['Puntarenas', 'Caldera', 'Puertos del Pacífico'],
      color: 'orange'
    },
    {
      icon: '🏙️',
      title: 'Gran Área Metropolitana',
      locations: ['San José', 'Alajuela', 'Heredia', 'Cartago'],
      color: 'green'
    },
    {
      icon: '🌎',
      title: 'Todo el Territorio',
      locations: ['Cobertura completa', 'Servicio nacional', 'Sin restricciones'],
      color: 'purple'
    }
  ];

  return (
    <section id="cobertura" className={styles.coverage}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span>
              Cobertura Nacional
            </div>
            <h2 className={styles.title}>
              <span className={styles.titleLine1}>Operamos en</span>
              <span className={styles.titleLine2}>Todo Costa Rica</span>
            </h2>
            <p className={styles.subtitle}>
              Cobertura nacional completa para que su carga llegue a cualquier destino
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.zonesGrid}>
          {zones.map((zone, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <motion.div
                className={`${styles.zoneCard} ${styles[zone.color]}`}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className={styles.zoneIcon}>{zone.icon}</div>
                <h3 className={styles.zoneTitle}>{zone.title}</h3>
                <ul className={styles.locationsList}>
                  {zone.locations.map((location, idx) => (
                    <li key={idx} className={styles.locationItem}>
                      <span className={styles.locationDot}>•</span>
                      {location}
                    </li>
                  ))}
                </ul>
                <div className={styles.zoneGlow}></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapIcon}>🗺️</div>
            <h3 className={styles.mapTitle}>Mapa de Costa Rica</h3>
            <p className={styles.mapText}>
              Desde puertos hasta el interior del país, llegamos a donde su carga necesita estar
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className={styles.guaranteeBox}>
            <h3 className={styles.guaranteeTitle}>Garantía de Cobertura</h3>
            <div className={styles.guaranteeGrid}>
              <div className={styles.guaranteeItem}>
                <span className={styles.guaranteeIcon}>📍</span>
                <div>
                  <h4>Cualquier Ubicación</h4>
                  <p>No importa donde esté, nosotros llegamos</p>
                </div>
              </div>
              <div className={styles.guaranteeItem}>
                <span className={styles.guaranteeIcon}>⏱️</span>
                <div>
                  <h4>Tiempos Optimizados</h4>
                  <p>Rutas eficientes para entregas rápidas</p>
                </div>
              </div>
              <div className={styles.guaranteeItem}>
                <span className={styles.guaranteeIcon}>🛡️</span>
                <div>
                  <h4>Seguridad Garantizada</h4>
                  <p>Protección total durante el trayecto</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
