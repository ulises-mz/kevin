'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from '../styles/About.module.css';
import {
  TargetIcon,
  HandshakeIcon,
  MuscleIcon,
  FamilyIcon,
  LightningIcon,
  TruckDecorative
} from './Icons';

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const imageY = useTransform(imageProgress, [0, 1], [0, -50]);
  const imageScale = useTransform(imageProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const values = [
    {
      Icon: TargetIcon,
      title: 'Experiencia',
      description: '+12 años en el sector de transporte de carga pesada'
    },
    {
      Icon: HandshakeIcon,
      title: 'Responsabilidad',
      description: 'Compromiso con cada envío y cliente'
    },
    {
      Icon: MuscleIcon,
      title: 'Dedicación',
      description: 'Trabajo arduo y constante mejora'
    },
    {
      Icon: FamilyIcon,
      title: 'Familia',
      description: 'Empresa familiar que valora sus raíces'
    }
  ];

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      {/* Decorative background with parallax */}
      <motion.div className={styles.decorativeTruck} style={{ y, opacity }}>
        <TruckDecorative />
      </motion.div>

      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.badge}>
              <LightningIcon className={styles.badgeIcon} size={18} />
              Nuestra Historia
            </div>
            <h2 className={styles.title}>
              <span className={styles.titleLine1}>Una Historia Familiar</span>
              <span className={styles.titleLine2}>de Superación</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal delay={0.2}>
            <div className={styles.textContent}>
              <p className={styles.mainText}>
                Transportes GEMA inició con un chofer y su familia con ganas de superarse.
                Con el pasar del tiempo, poco a poco se fueron haciendo de sus equipos para
                transporte y después de años de arduo trabajo en equipo, se ha logrado crear
                una empresa consolidada en el ámbito del transporte, con mucha experiencia,
                responsabilidad y dedicación.
              </p>
              <p className={styles.secondaryText}>
                Hoy en día, somos una empresa líder en el transporte de carga pesada en Costa Rica,
                manteniendo los valores familiares que nos fundaron y el compromiso con la excelencia
                en cada servicio que brindamos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.div
              className={styles.imageContainer}
              ref={imageRef}
              style={{ y: imageY, scale: imageScale }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/WhatsApp Image 2025-11-18 at 15.44.09_a9729be9.jpg"
                  alt="Transportes GEMA - Nuestra Historia"
                  fill
                  className={styles.aboutImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageShine}></div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <motion.div
                className={styles.valueCard}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className={styles.valueIconWrapper}>
                  <value.Icon className={styles.valueIcon} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
                <div className={styles.valueGlow}></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
