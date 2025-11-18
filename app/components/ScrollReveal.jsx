'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Componente reutilizable para animaciones scroll reveal
 * Anima elementos cuando entran en el viewport
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  slideAmount = 60,
  className = '',
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    margin: "-100px"
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: slideAmount
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
