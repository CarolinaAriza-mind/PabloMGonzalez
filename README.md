# Pablo M González — Sitio Web Oficial

Sitio web personal de Pablo M González, consultor de liderazgo ético. Construido con Next.js 15, Tailwind CSS v4 y Framer Motion.

**URL en producción:** [pablomgonzalez.com](https://pablomgonzalez.com)

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 15+ | Framework principal, App Router |
| Tailwind CSS | v4 | Estilos y diseño responsivo |
| Framer Motion | Latest | Animaciones de entrada y transiciones |
| TypeScript | 5+ | Tipado estático |
| Manrope | Google Fonts | Tipografía principal (sans-serif) |
| Libre Baskerville | Google Fonts | Tipografía editorial (serif) |
| Material Symbols | Google | Íconos |

---

## Estructura del proyecto

```
PabloMGonzalez/
├── pablo-gonzalez/              ← raíz del proyecto Next.js
│   ├── app/
│   │   ├── layout.tsx           ← layout raíz, fuentes, metadata
│   │   ├── page.tsx             ← página principal (home)
│   │   ├── globals.css          ← estilos globales, tokens de marca
│   │   ├── icon.png             ← favicon
│   │   ├── personas/
│   │   │   └── page.tsx         ← página perfil Personas
│   │   ├── empresas/
│   │   │   └── page.tsx         ← página perfil Empresas
│   │   └── deportistas/
│   │       └── page.tsx         ← página perfil Deportistas
│   │
│   ├── components/
│   │   ├── sections/            ← secciones de la página
│   │   │   ├── Navbar.tsx       ← navegación fija con menu mobile
│   │   │   ├── Hero.tsx         ← hero con imagen de fondo y animaciones
│   │   │   ├── BrandPositioning.tsx  ← historia de Pablo + features
│   │   │   ├── ThreePillars.tsx ← 3 pilares con imagen y efectos hover
│   │   │   ├── NavigationPaths.tsx   ← cards de acceso a cada perfil
│   │   │   ├── CallToAction.tsx ← CTA intermedio
│   │   │   └── Footer.tsx       ← footer con CTA final y links
│   │   └── ui/                  ← componentes reutilizables
│   │       ├── ThemeProvider.tsx ← proveedor de tema claro/oscuro
│   │       └── ThemeToggle.tsx  ← botón cambio de tema
│   │
│   ├── public/
│   │   ├── LOGO PNG (4).png     ← logo completo (ícono + wordmark)
│   │   ├── ICONO PNG (4).png    ← solo el ícono de la marca
│   │   ├── pg_bck_2.png         ← imagen hero principal
│   │   ├── pg_bck_3.png         ← imagen sección filosofía / pilares
│   │   ├── pilar.png            ← imagen pilar 02
│   │   └── spartano.jpeg        ← imagen pilar 03
│   │
│   ├── next.config.ts           ← configuración Next.js
│   ├── tailwind.config.ts       ← tokens de marca Tailwind
│   ├── tsconfig.json
│   └── package.json
```

---

## Identidad de marca

### Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#3b8c5e` | Verde marca, CTAs, íconos |
| `#C9A84C` | Dorado | Acentos, hovers, elementos premium |
| `#E0BD6A` | Dorado claro | Hover secundario |
| `#0d0d0d` | Negro | Fondo principal (dark) |
| `#f5f3ef` | Crema | Fondo (light mode) |

### Tipografía

| Fuente | Uso | Peso |
|---|---|---|
| Manrope | Cuerpo, navegación, UI | 300, 400, 500, 700 |
| Libre Baskerville | Títulos, citas, editorial | 400, 700, italic |

### Pilares de marca
- **Exclusividad** — acceso limitado, alto valor
- **Autenticidad** — experiencia vivida, no teoría
- **Transformación** — cambio sostenible y real
- **Resiliencia** — fortaleza desde la adversidad

---

## Secciones de la página

### 1. Navbar
- Logo de marca con `next/image`
- Links de navegación desktop
- Menú hamburguesa en mobile
- CTA "Contacto" enlazado al footer
- Toggle de tema claro/oscuro

### 2. Hero
- Imagen de fondo full-screen en desktop (`pg_bck_2.png`)
- En mobile: imagen con `aspect-[16/9]` + texto debajo
- Animaciones de entrada con Framer Motion (stagger)
- Eyebrow dorado + subtítulo en Libre Baskerville

### 3. Brand Positioning
- **Bloque 1:** Historia de Pablo con imagen, cita en blockquote y stats
- **Bloque 2:** Enfoque con 4 cards de servicios con efecto shimmer dorado

### 4. Three Pillars
- 3 cards con imagen de fondo
- Efectos al hover/active: desaturación → color, shimmer dorado, glow, borde inferior
- Descripción siempre visible en mobile

### 5. Navigation Paths
- 3 cards de acceso: Personas / Empresas / Deportistas
- Mismo sistema de efectos dorados
- Grid: 1 col mobile → 2 col tablet → 3 col desktop

### 6. Footer
- CTA final "¿Listo para reescribir tu historia?"
- Botón WhatsApp + email
- Brand, links legales y copyright

---

## Efectos visuales (sistema de diseño)

Todos los elementos interactivos usan el mismo sistema de efectos dorados:

```tsx
// Shimmer — barre de izquierda a derecha
bg-[linear-gradient(105deg,transparent_40%,rgba(201,168,76,0.07)_50%,transparent_60%)]
translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%]

// Glow radial desde abajo
bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.08)_0%,transparent_70%)]
opacity-0 group-hover:opacity-100 group-active:opacity-100

// Borde dorado que se despliega
bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
scale-x-0 group-hover:scale-x-100 group-active:scale-x-100
```

> `group-active:` habilita los efectos en mobile al tocar la pantalla.

---

## Setup local

```bash
# 1. Clonar el repositorio
git clone https://github.com/CarolinaAriza-mind/PabloMGonzalez.git
cd PabloMGonzalez/pablo-gonzalez

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev

# 4. Build de producción
npm run build
```

El servidor corre en `http://localhost:3000` por defecto.

---

## Deploy

El sitio se despliega automáticamente en **Vercel** con cada push a `main`.

### Configuración DNS (Hostinger/Donweb → Vercel)

| Tipo | Nombre | Valor |
|---|---|---|
| `A` | `@` | `216.198.79.1` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

### Root Directory en Vercel
```
pablo-gonzalez
```

---

## Variables de entorno

Este proyecto no requiere variables de entorno para funcionar. El formulario de contacto usa WhatsApp directo mediante un link `wa.me`.

Si en el futuro se agrega un formulario con Resend, agregar en Vercel:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## Comandos útiles

```bash
npm run dev        # desarrollo local
npm run build      # build de producción
npm run lint       # verificar errores ESLint
git add .          # stagear cambios
git commit -m ""   # commitear
git push           # deploy automático a Vercel
```

---

## Contacto del proyecto

- **Cliente:** Pablo M González
- **Email:** hola@pablomgonzalez.com
- **Desarrollo:** Carolina Ariza

### Proyecto continua en desarrollo