// SVG Icons para Transportes GEMA

// Camión Cabezal/Tractor (sin remolque)
export const TruckIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Ruedas traseras */}
    <circle cx="16" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="18" r="1" fill="currentColor"/>
    {/* Cabina */}
    <path d="M3 10C3 8.89543 3.89543 8 5 8H11C12.1046 8 13 8.89543 13 10V18H3V10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Capó/Motor */}
    <path d="M13 12H18V18H13V12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Ventana */}
    <rect x="5" y="10" width="5" height="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Parrilla frontal */}
    <path d="M15 13V17M17 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Escape */}
    <path d="M11 8V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ContainerIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M2 9H22M2 12H22M2 15H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6" cy="6" r="1" fill="currentColor"/>
    <circle cx="18" cy="6" r="1" fill="currentColor"/>
  </svg>
);

export const RefrigeratedIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M4 8H20" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 5V6M8 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 14L10 16M12 14L14 16M12 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChemicalIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 3V8L5 16C4.5 17 5 18 6 18H18C19 18 19.5 17 19 16L15 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M9 3H15M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="1" fill="currentColor"/>
    <circle cx="16" cy="14" r="1" fill="currentColor"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
  </svg>
);

// Remolque/Furgón de Camión
export const TrailerIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Estructura del remolque */}
    <rect x="2" y="6" width="18" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Ruedas */}
    <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="6" cy="18" r="1" fill="currentColor"/>
    <circle cx="16" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="18" r="1" fill="currentColor"/>
    {/* Líneas decorativas del container */}
    <path d="M2 9H20M2 12H20" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    {/* Enganche */}
    <circle cx="20" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M21.5 11H22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GearIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 1V4M12 20V23M23 12H20M4 12H1M20.49 20.49L18.36 18.36M5.64 5.64L3.51 3.51M20.49 3.51L18.36 5.64M5.64 18.36L3.51 20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RouteIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 7C11 9 13 11 15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

export const ShieldCheckIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L3 7V12C3 16.97 6.84 21.62 12 23C17.16 21.62 21 16.97 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClockIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MapPinIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const WaveIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 12C4 8 6 6 8 6C10 6 11 8 13 8C15 8 16 6 18 6C20 6 22 8 24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M2 16C4 12 6 10 8 10C10 10 11 12 13 12C15 12 16 10 18 10C20 10 22 12 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

export const SunIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 1V3M12 21V23M23 12H21M3 12H1M20.49 3.51L19.07 4.93M4.93 19.07L3.51 20.49M20.49 20.49L19.07 19.07M4.93 4.93L3.51 3.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CityIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 21V9L9 3L15 9V21M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M6 12H8M11 12H13M6 15H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="17" y="11" width="5" height="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M19 14H20M19 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const GlobeIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const TargetIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

export const HandshakeIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 11L9 4L13 8L20 1M20 1V6M20 1H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M6 16L4 18L2 20M12 16L9 19L6 22M18 16L21 19L24 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MuscleIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 7C14 5.34315 12.6569 4 11 4C9.34315 4 8 5.34315 8 7M8 7C8 8.10457 7.10457 9 6 9C4.89543 9 4 9.89543 4 11V16C4 18.2091 5.79086 20 8 20H11C13.7614 20 16 17.7614 16 15V9C16 7.89543 15.1046 7 14 7H8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const FamilyIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="7" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="17" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
    <path d="M7 11C7 9.89543 7.89543 9 9 9H15C16.1046 9 17 9.89543 17 11V13H7V11Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 13V18C9 19.1046 8.10457 20 7 20H5M15 13V18C15 19.1046 15.8954 20 17 20H19M12 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const LightningIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
  </svg>
);

export const DollarIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HeadsetIcon = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C6.5 2 2 6.5 2 12V17H5V12H7V20H5C3.89543 20 3 19.1046 3 18V17M12 2C17.5 2 22 6.5 22 12V17H19V12H17V20H19C20.1046 20 21 19.1046 21 18V17" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Decorative Truck Background SVG
export const TruckDecorative = ({ className }) => (
  <svg viewBox="0 0 800 600" fill="none" className={className} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="truckGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.03"/>
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.01"/>
      </linearGradient>
    </defs>
    <g opacity="0.4">
      {/* Main truck body */}
      <rect x="50" y="200" width="400" height="200" rx="10" fill="url(#truckGradient)" stroke="currentColor" strokeWidth="3" strokeOpacity="0.1"/>
      {/* Cabin */}
      <path d="M 450 250 L 550 250 L 580 300 L 580 400 L 450 400 Z" fill="url(#truckGradient)" stroke="currentColor" strokeWidth="3" strokeOpacity="0.1"/>
      {/* Windows */}
      <rect x="460" y="270" width="50" height="60" rx="5" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1"/>
      <path d="M 515 270 L 560 300 L 560 330 L 515 330 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1"/>
      {/* Wheels */}
      <circle cx="150" cy="420" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1"/>
      <circle cx="350" cy="420" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1"/>
      <circle cx="500" cy="420" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1"/>
      {/* Container lines */}
      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="2" strokeOpacity="0.08"/>
      <line x1="50" y1="300" x2="450" y2="300" stroke="currentColor" strokeWidth="2" strokeOpacity="0.08"/>
      <line x1="50" y1="350" x2="450" y2="350" stroke="currentColor" strokeWidth="2" strokeOpacity="0.08"/>
    </g>
  </svg>
);

// Engine/Gear Decorative SVG
export const EngineDecorative = ({ className }) => (
  <svg viewBox="0 0 400 400" fill="none" className={className} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="engineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.04"/>
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.01"/>
      </linearGradient>
    </defs>
    <g opacity="0.3">
      {/* Large gear */}
      <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="6" strokeOpacity="0.1"/>
      <circle cx="200" cy="200" r="40" fill="url(#engineGradient)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.1"/>
      {/* Gear teeth */}
      <rect x="195" y="110" width="10" height="20" fill="currentColor" fillOpacity="0.08"/>
      <rect x="270" y="195" width="20" height="10" fill="currentColor" fillOpacity="0.08"/>
      <rect x="195" y="270" width="10" height="20" fill="currentColor" fillOpacity="0.08"/>
      <rect x="110" y="195" width="20" height="10" fill="currentColor" fillOpacity="0.08"/>
      {/* Bolts */}
      <circle cx="200" cy="200" r="8" fill="currentColor" fillOpacity="0.1"/>
      <circle cx="240" cy="160" r="6" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="240" cy="240" r="6" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="160" cy="160" r="6" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="160" cy="240" r="6" fill="currentColor" fillOpacity="0.08"/>
    </g>
  </svg>
);
