# 🏃‍♂️ AppTrainer - Plataforma SaaS para Clases Deportivas Outdoor

**Entrena donde quieras, reserva fácil**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)

## 📖 Descripción

AppTrainer es una plataforma SaaS freemium que conecta entrenadores outdoor con alumnos, facilitando la gestión de clases, reservas y pagos en espacios abiertos como plazas y parques.

## 🚀 Inicio Rápido

### Windows (Recomendado)
1. **Doble click en** `INICIAR_APPTRAINER.bat`
2. Espera a que se abra el navegador
3. ¡Listo! → http://localhost:3000

### Manual
```bash
npm install
npm run dev
```

📚 **[Ver Guía Completa de Inicio →](./GUIA_INICIO_RAPIDO.md)**

## ✨ Características Principales

### Para Alumnos ✅
- 🗺️ **Búsqueda Inteligente**: Filtra por actividad, ubicación y fecha
- 📍 **Mapa Interactivo**: Encuentra clases cerca de ti
- ⭐ **Perfiles Verificados**: Revisa ratings y certificaciones de entrenadores
- 💳 **Pago Seguro**: Webpay, tarjetas y transferencias
- 📱 **100% Responsive**: Diseño móvil-first

### Para Entrenadores ✅
- 📊 **Dashboard Completo**: Métricas de ingresos, clases y alumnos
- 📅 **Calendario Visual**: Gestiona tus horarios fácilmente
- 💰 **Modelo Freemium**: Sin costo inicial, solo 5% de comisión
- 📈 **Reportes en Tiempo Real**: Seguimiento de asistencia e ingresos
- ✉️ **Comunicación Directa**: Chat o WhatsApp integrado

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Frontend** | Next.js 16, TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes, Prisma ORM |
| **Base de Datos** | PostgreSQL / SQLite |
| **Autenticación** | NextAuth.js |
| **Pagos** | Webpay / Stripe |
| **UI Components** | Lucide React, Headless UI |
| **Mapas** | Google Maps API |

## 📁 Estructura del Proyecto

```
apptrainer/
├── 📄 INICIAR_APPTRAINER.bat    # ⭐ Ejecutable para iniciar
├── 📄 GUIA_INICIO_RAPIDO.md     # Guía detallada
├── app/
│   ├── page.tsx                  # Landing page
│   ├── registro/                 # Registro alumno/entrenador
│   ├── dashboard/                # Dashboards
│   │   ├── alumno/              # Dashboard de alumno
│   │   └── entrenador/          # Dashboard de entrenador
│   ├── clase/[id]/              # Detalle de clase
│   ├── checkout/[id]/           # Proceso de pago
│   ├── entrenador/[id]/         # Perfil de entrenador
│   └── api/                     # API Routes
│       ├── classes/             # Gestión de clases
│       └── reservations/        # Gestión de reservas
├── components/                   # Componentes reutilizables
│   ├── Logo.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── SearchBar.tsx
│   ├── ClassCard.tsx
│   └── MapView.tsx
├── lib/
│   ├── prisma.ts               # Cliente de base de datos
│   ├── utils.ts                # Utilidades
│   └── design-system.ts        # Sistema de diseño
├── prisma/
│   └── schema.prisma           # Esquema de BD
└── types/                      # TypeScript types
```

## 🎨 Sistema de Diseño

### Colores Corporativos
- **Primary (Verde):** `#22c55e` - Naturaleza, outdoor, bienestar
- **Secondary (Azul):** `#3b82f6` - Confianza, profesionalismo

### Componentes Principales
- `<Logo />` - Logo corporativo con variantes
- `<Button />` - Botones con 5 variantes
- `<Card />` - Tarjetas con efectos hover
- `<SearchBar />` - Búsqueda avanzada con filtros
- `<ClassCard />` - Tarjeta de clase con toda la info
- `<MapView />` - Vista de mapa interactivo

## 📊 Base de Datos

### Modelos Principales
```prisma
User → Alumno / Entrenador
Class → Clases deportivas
Reservation → Reservas
Payment → Pagos
Review → Reseñas
Notification → Notificaciones
```

### Comandos Prisma
```bash
npx prisma generate      # Generar cliente
npx prisma db push       # Sincronizar schema
npx prisma studio        # Abrir GUI
```

## 🌐 API Endpoints

### Clases
- `GET /api/classes` - Listar clases
- `POST /api/classes` - Crear clase
- `GET /api/classes/[id]` - Detalle de clase

### Reservas
- `GET /api/reservations` - Listar reservas
- `POST /api/reservations` - Crear reserva
- `PUT /api/reservations/[id]` - Actualizar reserva

## 📱 Páginas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page con hero |
| `/registro/alumno` | Registro de alumnos |
| `/registro/entrenador` | Registro de entrenadores |
| `/dashboard/alumno` | Dashboard con búsqueda y mapa |
| `/dashboard/entrenador` | Dashboard con calendario |
| `/clase/[id]` | Detalle de clase |
| `/checkout/[id]` | Checkout y pago |
| `/entrenador/[id]` | Perfil del entrenador |

## 💰 Modelo de Negocio

- **Freemium**: Funcionalidades básicas gratis
- **Comisión**: 5-8% por transacción procesada
- **Mercado**: Entrenadores outdoor en Chile
- **Piloto**: Sector oriente de Santiago

### Oportunidad de Mercado
- 💵 Mercado fitness Chile: USD 50-60M/año
- 🏃 Segmento outdoor: USD 8-10M/año
- 🎯 Meta piloto: 5.000 usuarios / 200 entrenadores (6 meses)

## 🔐 Variables de Entorno

Copia `.env.example` a `.env`:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secret"
PLATFORM_COMMISSION_PERCENTAGE="5"
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Build para producción
npm start        # Ejecutar en producción
npm run lint     # Linting
```

## 🚀 Próximos Pasos (Roadmap)

- [ ] Implementar NextAuth para autenticación real
- [ ] Integrar Webpay/Stripe para pagos
- [ ] Google Maps API para geolocalización
- [ ] Sistema de notificaciones push
- [ ] Chat en tiempo real
- [ ] Emails transaccionales
- [ ] Deploy en Vercel

## 🤝 Contribuir

Este es un proyecto propietario. Para contribuir, contacta al equipo de desarrollo.

## 📞 Soporte

- 📧 Email: soporte@apptrainer.cl
- 📱 WhatsApp: +56 9 XXXX XXXX

## 📄 Licencia

© 2025 AppTrainer. Todos los derechos reservados.

---

**Hecho con ❤️ en Chile 🇨🇱**
