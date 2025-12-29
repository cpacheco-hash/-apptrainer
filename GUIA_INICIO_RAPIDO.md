# 🚀 Guía de Inicio Rápido - AppTrainer

## Opción 1: Inicio Rápido (Recomendado)

### Windows
1. **Doble click en** `INICIAR_APPTRAINER.bat`
2. Espera a que se abra el navegador automáticamente
3. ¡Listo! La aplicación estará corriendo en http://localhost:3000

El script hará todo automáticamente:
- Instalará las dependencias si es necesario
- Iniciará el servidor de desarrollo
- Abrirá tu navegador

## Opción 2: Inicio Manual

### Requisitos Previos
- Node.js 18+ instalado
- npm o yarn

### Pasos

1. **Instalar dependencias:**
```bash
npm install
```

2. **Inicializar la base de datos (primera vez):**
```bash
npx prisma generate
npx prisma db push
```

3. **Iniciar el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abrir en el navegador:**
Visita http://localhost:3000

## 📁 Estructura del Proyecto

```
apptrainer/
├── app/                    # Páginas y rutas de Next.js
│   ├── page.tsx           # Página principal (Landing)
│   ├── registro/          # Páginas de registro
│   ├── dashboard/         # Dashboards (alumno/entrenador)
│   ├── clase/[id]/        # Detalle de clase
│   ├── checkout/[id]/     # Checkout
│   └── api/               # API Routes
├── components/            # Componentes reutilizables
│   ├── Logo.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── SearchBar.tsx
│   ├── ClassCard.tsx
│   └── MapView.tsx
├── lib/                   # Utilidades
│   ├── prisma.ts         # Cliente de Prisma
│   ├── utils.ts          # Funciones auxiliares
│   └── design-system.ts  # Sistema de diseño
├── prisma/               # Base de datos
│   └── schema.prisma     # Esquema de la BD
├── types/                # TypeScript types
│   └── index.ts
└── public/               # Assets estáticos

```

## 🎨 Páginas Disponibles

### Públicas
- `/` - Landing page con hero y features
- `/registro/alumno` - Registro de alumnos
- `/registro/entrenador` - Registro de entrenadores

### Alumnos
- `/dashboard/alumno` - Dashboard con búsqueda, mapa y clases
- `/clase/[id]` - Detalle de clase
- `/checkout/[id]` - Checkout y pago
- `/entrenador/[id]` - Perfil del entrenador

### Entrenadores
- `/dashboard/entrenador` - Dashboard con calendario y métricas
- Crear clase (modal desde dashboard)
- Gestión de alumnos
- Reportes de ingresos

## 🎯 Funcionalidades Principales

### Para Alumnos ✅
- ✅ Búsqueda de clases (actividad, ubicación, fecha)
- ✅ Mapa interactivo con clases cercanas
- ✅ Ver perfil de entrenadores con ratings
- ✅ Detalle completo de cada clase
- ✅ Sistema de reservas
- ✅ Checkout con múltiples métodos de pago

### Para Entrenadores ✅
- ✅ Dashboard con métricas (ingresos, clases, alumnos)
- ✅ Calendario semanal
- ✅ Crear y gestionar clases
- ✅ Ver reservas recientes
- ✅ Panel de ingresos

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Base de Datos:** Prisma (SQLite para desarrollo)
- **Iconos:** Lucide React
- **UI Components:** Headless UI

## 🎨 Sistema de Diseño

El proyecto incluye un sistema de diseño completo:

### Colores Principales
- **Primary (Verde):** #22c55e - Naturaleza, outdoor, bienestar
- **Secondary (Azul):** #3b82f6 - Confianza, profesionalismo

### Componentes
- `<Logo />` - Logo con variantes
- `<Button />` - Botones con múltiples estilos
- `<Card />` - Tarjetas reutilizables
- `<SearchBar />` - Barra de búsqueda avanzada
- `<ClassCard />` - Tarjeta de clase
- `<MapView />` - Vista de mapa

## 📊 Base de Datos

### Modelos Principales
- `User` - Usuarios del sistema
- `Alumno` - Perfil de alumno
- `Entrenador` - Perfil de entrenador
- `Class` - Clases deportivas
- `Reservation` - Reservas
- `Payment` - Pagos
- `Review` - Reseñas
- `Notification` - Notificaciones

### Comandos Útiles de Prisma

```bash
# Generar cliente de Prisma
npx prisma generate

# Sincronizar schema con la base de datos
npx prisma db push

# Abrir Prisma Studio (GUI para ver la base de datos)
npx prisma studio

# Crear una migración
npx prisma migrate dev --name descripcion_cambio
```

## 🔐 Variables de Entorno

Copia `.env.example` a `.env` y configura las variables:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secret-key"
PLATFORM_COMMISSION_PERCENTAGE="5"
```

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start

# Linting
npm run lint
```

## 🚀 Próximos Pasos

### Para completar el MVP:
1. ⏳ Implementar NextAuth para autenticación
2. ⏳ Integrar pasarela de pagos (Webpay/Stripe)
3. ⏳ Implementar Google Maps para geolocalización real
4. ⏳ Sistema de notificaciones en tiempo real
5. ⏳ Chat o integración con WhatsApp
6. ⏳ Sistema de emails transaccionales
7. ⏳ Deploy en Vercel o servidor VPS

## 💡 Tips de Desarrollo

### Recargar automáticamente
El servidor de desarrollo recarga automáticamente cuando guardas cambios.

### Ver la base de datos
```bash
npx prisma studio
```

### Troubleshooting
Si algo no funciona:
1. Elimina `node_modules` y `.next`
2. Ejecuta `npm install`
3. Ejecuta `npx prisma generate`
4. Inicia de nuevo con `npm run dev`

## 📱 Testing en Móvil

Para probar en tu móvil en la misma red:

1. Encuentra tu IP local: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
2. En tu móvil, visita: `http://TU-IP:3000`

Ejemplo: `http://192.168.1.100:3000`

## 📞 Soporte

¿Problemas o preguntas?
- Revisa la documentación de Next.js: https://nextjs.org/docs
- Revisa la documentación de Prisma: https://www.prisma.io/docs
- Revisa la documentación de Tailwind: https://tailwindcss.com/docs

## 🎉 ¡Listo para Entrenar!

Tu plataforma AppTrainer está lista para funcionar. Ahora puedes:
1. Navegar por las diferentes páginas
2. Explorar el código en VS Code
3. Personalizar los componentes
4. Agregar nuevas funcionalidades

¡Mucho éxito con tu proyecto! 🚀💪
