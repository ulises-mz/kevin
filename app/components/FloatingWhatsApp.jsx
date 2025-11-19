'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/50689417464', '_blank');
  };

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      >
        <motion.button
          className={styles.button}
          onClick={handleClick}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* WhatsApp Icon SVG */}
          <svg viewBox="0 0 32 32" fill="currentColor" className={styles.icon}>
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.828.736 5.482 2.025 7.78L0 32l8.448-2.016A15.925 15.925 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.548 0-4.943-.712-6.975-1.947l-.502-.297-5.196 1.24 1.267-4.965-.33-.52A13.262 13.262 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
            <path d="M23.189 19.276c-.387-.194-2.292-1.13-2.648-1.26-.356-.13-.615-.194-.873.194-.258.387-1 1.26-1.226 1.518-.226.258-.452.29-.839.097-.387-.194-1.634-.602-3.111-1.92-1.15-1.026-1.927-2.293-2.153-2.68-.226-.388-.024-.597.17-.79.174-.175.387-.452.581-.678.194-.226.258-.387.387-.646.13-.258.065-.484-.032-.678-.097-.194-.873-2.102-1.195-2.876-.314-.753-.633-.652-.873-.664-.226-.011-.484-.013-.742-.013-.258 0-.678.097-.032.968.065.193.871 2.102 1.195 2.876.323.774 1.195 2.102 1.195 2.102s.742.097 1 .097c.258 0 .516-.032.774-.097.258-.064.774-.29 1-.484.226-.193.355-.387.452-.58.097-.194.097-.387 0-.581-.097-.194-.29-.29-.58-.452z"/>
          </svg>

          {/* Ripple effect */}
          <span className={styles.ripple}></span>
          <span className={styles.ripple2}></span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.tooltip}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.tooltipContent}>
                <div className={styles.tooltipTitle}>¿Necesitas ayuda?</div>
                <div className={styles.tooltipText}>Chatea con nosotros</div>
              </div>
              <div className={styles.tooltipArrow}></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
