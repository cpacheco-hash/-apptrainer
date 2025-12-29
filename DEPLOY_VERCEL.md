# 🚀 Deploy en Vercel - Guía Rápida

## Pasos para deployar AppTrainer

### 1. Crear cuenta en Vercel
1. Ve a https://vercel.com
2. Haz clic en "Sign Up"
3. Usa tu cuenta de GitHub (recomendado)

### 2. Preparar el proyecto

Desde la terminal en tu proyecto:

```bash
# 1. Inicializar git (si no lo has hecho)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer commit
git commit -m "Initial commit - AppTrainer MVP"

# 4. Crear repositorio en GitHub
# Ve a https://github.com/new
# Crea un repositorio llamado "apptrainer"
# NO marques "Initialize with README"

# 5. Conectar con GitHub
git branch -M main
git remote add origin https://github.com/TU-USUARIO/apptrainer.git
git push -u origin main
```

### 3. Deploy en Vercel

**Opción A - Desde la Web (Más fácil):**
1. Ve a https://vercel.com/new
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio "apptrainer"
4. Haz clic en "Deploy"
5. ¡Listo! Vercel te dará una URL como: https://apptrainer.vercel.app

**Opción B - Desde CLI:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seguir las instrucciones en pantalla
# Seleccionar el proyecto
# Confirmar configuración
```

### 4. Compartir con tu socio

Una vez deployado, Vercel te dará una URL pública como:
- https://apptrainer.vercel.app
- https://apptrainer-tu-usuario.vercel.app

**Comparte esta URL con tu socio** y podrá verla desde cualquier dispositivo.

## Ventajas de Vercel

✅ **GRATIS** para proyectos personales
✅ **Dominio automático** (apptrainer.vercel.app)
✅ **SSL/HTTPS automático**
✅ **Deploy automático** cada vez que haces push a GitHub
✅ **Muy rápido** - CDN global
✅ **Perfect para Next.js** - hecho por los mismos creadores

## Configuración adicional (opcional)

### Variables de entorno en Vercel

Si necesitas configurar variables:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega tus variables (DATABASE_URL, etc.)

### Dominio personalizado

Si tienes un dominio propio:
1. Ve a Settings → Domains
2. Agrega tu dominio
3. Configura los DNS según las instrucciones

## Troubleshooting

Si hay errores:
1. Revisa los logs en Vercel Dashboard
2. Verifica que package.json tenga todos los scripts
3. Asegúrate que no haya errores de build localmente con `npm run build`

## Actualizaciones

Cada vez que hagas cambios:
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

Vercel automáticamente detectará los cambios y deployará la nueva versión.
