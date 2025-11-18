# Transportes GEMA - Landing Page Corporativa

Landing page corporativa premium para Transportes GEMA, empresa líder en transporte de carga pesada en Costa Rica.

## Características

- **Framework:** Next.js 14+ con App Router
- **Estilos:** CSS Modules nativo (sin Tailwind)
- **Animaciones:** Framer Motion con efectos cinematográficos
- **Optimización:** next/image para imágenes optimizadas
- **Tipografía:** Google Fonts (Inter + Montserrat)
- **SEO:** Metadata API completa + JSON-LD Schema
- **Performance:** Optimizado para Lighthouse 95+

## Stack Técnico

- **Next.js 16.0.3** - Framework React con App Router
- **React 19.2.0** - Biblioteca de UI
- **Framer Motion 12.23.24** - Animaciones avanzadas
- **CSS Modules** - Estilos con scope local

## Estructura del Proyecto

```
/
├── app/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx     # Header sticky animado
│   │   ├── Hero.jsx       # Hero con parallax
│   │   ├── About.jsx      # Sobre Nosotros
│   │   ├── Services.jsx   # Servicios
│   │   ├── Fleet.jsx      # Flota con contadores animados
│   │   ├── Coverage.jsx   # Cobertura Nacional
│   │   ├── CTASection.jsx # Call to Action
│   │   ├── Footer.jsx     # Footer
│   │   └── ScrollReveal.jsx # Componente reutilizable
│   ├── styles/            # CSS Modules
│   │   ├── Header.module.css
│   │   ├── Hero.module.css
│   │   ├── About.module.css
│   │   ├── Services.module.css
│   │   ├── Fleet.module.css
│   │   ├── Coverage.module.css
│   │   ├── CTA.module.css
│   │   └── Footer.module.css
│   ├── globals.css        # Estilos globales y variables
│   ├── layout.js          # Layout raíz con SEO y JSON-LD
│   ├── page.js            # Página principal
│   ├── robots.js          # Configuración robots.txt
│   └── sitemap.js         # Generador de sitemap
├── public/
│   └── images/            # Imágenes del sitio
├── next.config.js         # Configuración Next.js
└── package.json
```

## Instalación

1. **Clonar el repositorio:**
```bash
git clone <repository-url>
cd kevin
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en desarrollo:**
```bash
npm run dev
```

4. **Abrir en el navegador:**
```
http://localhost:3000
```

## Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run start` - Inicia servidor de producción
- `npm run lint` - Ejecuta el linter

## Secciones de la Landing Page

### 1. Header Sticky
- Navegación sticky con animación
- Transparente → opaco al hacer scroll
- Menú responsive con hamburger móvil
- CTA destacado "Cotizar Ahora"

### 2. Hero con Parallax
- Efecto parallax en el fondo
- Animaciones stagger en texto
- Stats con glassmorphism
- Botones de acción (Cotizar + WhatsApp)

### 3. Sobre Nosotros
- Historia familiar de la empresa
- Grid de valores corporativos
- Diseño de dos columnas (texto + imagen)

### 4. Servicios
- Grid de 6 servicios principales
- Animaciones scroll reveal con stagger
- Cards interactivas con hover effects
- CTA box al final

### 5. Nuestra Flota
- Contadores animados con Framer Motion
- Grid de imágenes de camiones
- Features box con características
- Stats: 12+ camiones, 14+ equipos

### 6. Cobertura Nacional
- Zonas de operación con iconos
- Mapa placeholder
- Garantías de servicio

### 7. CTA Principal
- Fondo con gradiente animado
- Métodos de contacto (WhatsApp, Teléfono, Email)
- Info box con beneficios

### 8. Footer
- Grid de 4 columnas
- Links rápidos
- Información de contacto
- Redes sociales

## SEO Implementado

### Metadata
- Títulos optimizados
- Descripciones ricas en keywords
- Open Graph para redes sociales
- Twitter Cards
- Canonical URLs

### JSON-LD Schema
- Tipo: MovingCompany
- Información completa de la empresa
- Servicios estructurados
- Ratings y reviews
- Datos de contacto

### Archivos SEO
- `robots.js` - Control de indexación
- `sitemap.js` - Mapa del sitio dinámico

## Paleta de Colores

```css
--primary: #1E40AF      /* Azul corporativo */
--secondary: #F59E0B    /* Ámbar/dorado */
--dark: #0F172A         /* Azul oscuro casi negro */
--light: #F8FAFC        /* Gris muy claro */
--white: #FFFFFF        /* Blanco */
--accent: #DC2626       /* Rojo para urgencia */
--text: #334155         /* Gris oscuro para texto */
--border: #E2E8F0       /* Bordes sutiles */
```

## Tipografía

- **Títulos:** Montserrat (600, 700, 800)
- **Cuerpo:** Inter (400, 500, 600, 700)
- **Font Display:** swap para optimización

## Animaciones

### Framer Motion Features
- Scroll parallax en Hero
- Scroll reveal en secciones
- Contadores animados en Fleet
- Stagger effects en grids
- Smooth transitions en interacciones

### Efectos Visuales
- Glassmorphism en cards
- Gradientes animados
- Hover states suaves
- Backdrop blur effects

## Información de Contacto

- **Teléfono:** 8941-7464
- **WhatsApp:** https://wa.me/50689417464
- **Email:** olmanlr2238@gmail.com
- **País:** Costa Rica

## Deployment

### Build de Producción

```bash
npm run build
npm run start
```

### Vercel (Recomendado)

1. Push a GitHub
2. Conectar repositorio en Vercel
3. Deploy automático

### Variables de Entorno

No se requieren variables de entorno para la versión actual.

## Optimización de Imágenes

1. Agregar imágenes reales en `public/images/`
2. Usar formatos optimizados (WebP, JPEG optimizado)
3. Next.js optimizará automáticamente con next/image

Ver `public/images/README.md` para lista de imágenes necesarias.

## Personalización

### Cambiar Colores
Editar variables en `app/globals.css`:
```css
:root {
  --primary: #TuColor;
  --secondary: #TuColor;
}
```

### Agregar Secciones
1. Crear componente en `app/components/`
2. Crear CSS Module en `app/styles/`
3. Importar en `app/page.js`

### Modificar SEO
Editar `app/layout.js` - metadata y JSON-LD

## Performance

### Objetivos Lighthouse
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimizaciones Implementadas
- Code splitting automático
- Image optimization con next/image
- Font optimization con next/font
- CSS Modules para estilos con scope
- Lazy loading de componentes
- Smooth scroll behavior

## Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Licencia

Proyecto propietario de Transportes GEMA.

## Soporte

Para soporte técnico:
- Email: olmanlr2238@gmail.com
- WhatsApp: 8941-7464

---

**Desarrollado con Next.js 14 + Framer Motion**

*Landing page corporativa premium lista para producción*
