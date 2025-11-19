'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
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

const SERVICES = [
  {
    id: 'contenedores',
    Icon: ContainerIcon,
    title: 'Transporte de Contenedores',
    tabDescription: 'Contenedores de 20, 40 y 45 pies con acceso a muelles',
    image: '/images/WhatsApp Image 2025-11-18 at 15.44.08_d37cb419.jpg',
    description: (
      <>
        <p className={styles.serviceText}>
          Especializados en el transporte de contenedores de 20, 40 y 45 pies con permisos para acceso
          a muelles y terminales portuarias en todo el país. Contamos con equipos especializados y
          personal capacitado para el manejo seguro de carga marítima.
        </p>
        <p className={styles.serviceText}>
          Nuestros conductores están certificados para operar en zonas restringidas y manejamos toda la
          documentación necesaria para el transporte de carga internacional. Coordinamos con navieras y
          agentes aduanales para garantizar entregas puntuales.
        </p>
        <ul className={styles.serviceFeaturesList}>
          <li>Permisos vigentes para muelles del Atlántico y Pacífico</li>
          <li>Acceso a terminales marítimas principales</li>
          <li>Manejo seguro de contenedores refrigerados y secos</li>
          <li>Coordinación con navieras y agentes aduanales</li>
          <li>Rastreo GPS en tiempo real</li>
        </ul>
      </>
    ),
  },
  {
    id: 'refrigerada',
    Icon: RefrigeratedIcon,
    title: 'Carga Refrigerada',
    tabDescription: 'Cadena de frío controlada con equipos especializados',
    image: '/images/WhatsApp Image 2025-11-18 at 15.44.09_29c46236.jpg',
    description: (
      <>
        <p className={styles.serviceText}>
          Mantenemos la cadena de frío de sus productos con equipos de última generación y monitoreo
          continuo de temperatura. Ideal para productos perecederos, farmacéuticos y alimentos que
          requieren condiciones controladas durante el transporte.
        </p>
        <p className={styles.serviceText}>
          Nuestros contenedores refrigerados cuentan con sistemas de control de temperatura independientes
          y registros digitales de cada viaje. Personal capacitado en protocolos de seguridad alimentaria
          y manejo de mercancías sensibles.
        </p>
        <ul className={styles.serviceFeaturesList}>
          <li>Equipos con control de temperatura preciso (-25°C a +25°C)</li>
          <li>Monitoreo continuo y alertas en tiempo real</li>
          <li>Registro digital de temperaturas del viaje</li>
          <li>Personal certificado en cadena de frío</li>
          <li>Protocolos de limpieza y sanitización</li>
        </ul>
      </>
    ),
  },
  {
    id: 'seca',
    Icon: TruckIcon,
    title: 'Carga Seca',
    tabDescription: 'Furgones y plataformas para mercancía general',
    image: '/images/WhatsApp Image 2025-11-18 at 15.44.09_4f302b01.jpg',
    description: (
      <>
        <p className={styles.serviceText}>
          Transporte de mercancía general en furgones cerrados y plataformas de diferentes capacidades.
          Protección total contra factores climáticos y manipulación segura de carga paletizada,
          empaquetada o a granel.
        </p>
        <p className={styles.serviceText}>
          Contamos con una flota moderna equipada con sistemas de amarre profesionales, lonas
          impermeables y seguros de carga. Experiencia en el manejo de materiales de construcción,
          productos manufacturados, electrodomésticos y más.
        </p>
        <ul className={styles.serviceFeaturesList}>
          <li>Furgones cerrados de diferentes capacidades</li>
          <li>Plataformas para cargas dimensionadas</li>
          <li>Sistemas de amarre y sujeción profesionales</li>
          <li>Protección contra clima y manipulación</li>
          <li>Seguro de carga incluido</li>
        </ul>
      </>
    ),
  },
  {
    id: 'quimicos',
    Icon: ChemicalIcon,
    title: 'Transporte de Químicos',
    tabDescription: 'Certificaciones vigentes y personal capacitado',
    image: '/images/WhatsApp Image 2025-11-18 at 15.44.09_a9729be9.jpg',
    description: (
      <>
        <p className={styles.serviceText}>
          Transporte especializado de productos químicos con todas las certificaciones vigentes y
          cumplimiento estricto de normativas nacionales e internacionales. Personal capacitado en
          manejo de materiales peligrosos y procedimientos de emergencia.
        </p>
        <p className={styles.serviceText}>
          Equipos especializados con contenedores homologados, sistemas de ventilación y protección.
          Documentación completa, hojas de seguridad (MSDS) y permisos especiales para transporte de
          sustancias controladas.
        </p>
        <ul className={styles.serviceFeaturesList}>
          <li>Certificación para transporte de materiales peligrosos</li>
          <li>Personal capacitado y certificado en HAZMAT</li>
          <li>Equipos especializados con contenedores homologados</li>
          <li>Cumplimiento de normativas nacionales e internacionales</li>
          <li>Planes de emergencia y respuesta inmediata</li>
        </ul>
      </>
    ),
  },
  {
    id: 'atlantico',
    Icon: WaveIcon,
    title: 'Zona Atlántica',
    tabDescription: 'Cobertura completa en Limón, Moín y puertos del Caribe',
    image: '/images/WhatsApp Image 2025-11-18 at 15.44.10_514dabcf.jpg',
    description: (
      <>
        <p className={styles.serviceText}>
          Servicio integral en toda la zona atlántica de Costa Rica, incluyendo los puertos principales
          de Limón y Moín. Experiencia comprobada en rutas del Caribe y coordinación con terminales
          marítimas para optimizar tiempos de carga y descarga.
        </p>
        <p className={styles.serviceText}>
          Conocimiento profundo de las rutas, infraestructura y requisitos específicos de la región.
          Disponibilidad 24/7 para atender las necesidades de importadores y exportadores con operaciones
          en el Atlántico.
        </p>
        <ul className={styles.serviceFeaturesList}>
          <li>Cobertura total en Limón y zonas aledañas</li>
          <li>Acceso directo a puerto Moín y terminales</li>
          <li>Rutas optimizadas hacia GAM y Pacífico</li>
          <li>Coordinación con navieras del Atlántico</li>
          <li>Servicio 24/7 para carga urgente</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pacifico',
    Icon: SunIcon,
    title: 'Zona Pacífica',
    tabDescription: 'Servicio integral en Puntarenas, Caldera y puertos del Pacífico',
    image: '/images/WhatsApp Image 2025-11-18 at 15.44.10_cbb4f2d7.jpg',
    description: (
      <>
        <p className={styles.serviceText}>
          Cobertura completa en la zona pacífica de Costa Rica, con servicios especializados en los
          puertos de Puntarenas, Caldera y terminales graneleras. Rutas establecidas y tiempos de
          tránsito competitivos hacia cualquier destino nacional.
        </p>
        <p className={styles.serviceText}>
          Amplia experiencia en el manejo de carga proveniente de Asia y Sudamérica. Coordinación
          eficiente con agentes portuarios y flexibilidad para adaptarnos a los horarios de zarpe y
          arribo de embarcaciones.
        </p>
        <ul className={styles.serviceFeaturesList}>
          <li>Cobertura total en Puntarenas y zona costera</li>
          <li>Acceso a puerto Caldera y terminales especializadas</li>
          <li>Rutas directas hacia GAM y zonas interiores</li>
          <li>Coordinación con navieras del Pacífico</li>
          <li>Flexibilidad horaria para operaciones portuarias</li>
        </ul>
      </>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const sectionRefs = useRef([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const lastScrollY = useRef(0);
  const updateTimeout = useRef(undefined);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        if (updateTimeout.current) {
          clearTimeout(updateTimeout.current);
        }

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            index: sections.indexOf(entry.target),
            ratio: entry.intersectionRatio,
          }))
          .filter((item) => item.index !== -1)
          .sort((a, b) => b.ratio - a.ratio);

        if (visibleSections.length === 0) return;

        let targetIndex = activeRef.current;

        if (visibleSections.length === 1) {
          targetIndex = visibleSections[0].index;
        } else {
          const topVisible = visibleSections[0];

          if (scrollingDown) {
            const nextSection = visibleSections.find(s => s.index > activeRef.current);
            if (nextSection && nextSection.ratio > 0.4) {
              targetIndex = nextSection.index;
            } else {
              targetIndex = topVisible.index;
            }
          } else {
            const prevSection = visibleSections.find(s => s.index < activeRef.current);
            if (prevSection && prevSection.ratio > 0.4) {
              targetIndex = prevSection.index;
            } else {
              targetIndex = topVisible.index;
            }
          }
        }

        updateTimeout.current = setTimeout(() => {
          if (targetIndex !== activeRef.current) {
            activeRef.current = targetIndex;
            setActive(targetIndex);
          }
        }, 100);
      },
      {
        root: null,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (updateTimeout.current) {
        clearTimeout(updateTimeout.current);
      }
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const scrollToIndex = (i) => {
    const el = sectionRefs.current[i];
    if (!el) return;

    activeRef.current = i;
    setActive(i);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        {/* Header */}
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

        {/* Sticky Layout: Tabs + Content */}
        <div className={styles.stickyLayout}>
          {/* Tabs sticky - Solo visible en desktop - CSS sticky puro SIN Framer Motion */}
          <aside className={styles.stickyTabs}>
            <ul className={styles.tabsList}>
              {SERVICES.map((s, i) => (
                <li key={s.id} className={styles.tabItem}>
                  <button
                    onClick={() => scrollToIndex(i)}
                    className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                  >
                    <div className={styles.tabContent}>
                      <span className={styles.tabTitle}>{s.title}</span>
                      <div className={`${styles.tabDescription} ${active === i ? styles.tabDescriptionActive : ''}`}>
                        <div className={styles.tabDescriptionInner}>
                          <span className={styles.tabDescriptionText}>{s.tabDescription}</span>
                          <span className={styles.tabCta}>
                            Ver más
                            <svg className={styles.tabArrow} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                  {i < SERVICES.length - 1 && <div className={styles.tabDivider} />}
                </li>
              ))}
            </ul>
          </aside>

          {/* Content apilado */}
          <div className={styles.servicesStack}>
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => { sectionRefs.current[i] = el; }}
                className={styles.serviceCard}
              >
                <div className={styles.serviceCardInner}>
                  {/* Imagen con overlay */}
                  <div className={styles.serviceImageWrapper}>
                    <div className={styles.serviceImageOverlay} />
                    <img
                      src={s.image}
                      alt={s.title}
                      className={styles.serviceImage}
                    />
                    {/* Badge flotante */}
                    <div className={styles.serviceBadge}>
                      <s.Icon className={styles.serviceBadgeIcon} size={20} />
                      <span className={styles.serviceBadgeText}>{s.title}</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceHeader}>
                      <div className={styles.serviceHeaderText}>
                        <h2 className={styles.serviceTitle}>{s.title}</h2>
                        <p className={styles.serviceSubtitle}>{s.tabDescription}</p>
                      </div>
                      <div className={styles.serviceNumber}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Descripción completa - Solo desktop */}
                    <div className={styles.serviceDescription}>
                      {s.description}
                    </div>

                    {/* CTA - Solo desktop */}
                    <div className={styles.serviceCta}>
                      <a href="#contacto" className={styles.ctaButton}>
                        Solicitar cotización
                        <svg className={styles.ctaArrow} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <a href="#contacto" className={styles.ctaButtonSecondary}>
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
