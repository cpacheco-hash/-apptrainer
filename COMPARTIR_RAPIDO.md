# ⚡ Compartir AppTrainer Rápidamente con ngrok

## Opción más rápida - Sin deploy

Si necesitas compartir la app **AHORA MISMO** sin hacer deploy en la nube.

### Paso 1: Instalar ngrok

1. Ve a https://ngrok.com
2. Crea una cuenta gratuita (con email o GitHub)
3. Descarga ngrok para Windows
4. Descomprime el archivo

### Paso 2: Configurar ngrok

```bash
# En la carpeta donde descomprimiste ngrok
ngrok config add-authtoken TU_TOKEN_DE_NGROK
```

(El token lo obtienes de https://dashboard.ngrok.com/get-started/your-authtoken)

### Paso 3: Iniciar la aplicación

```bash
# En tu proyecto AppTrainer
cd "C:\Users\cpach\OneDrive\Escritorio\Apptrainer"
npm run dev
```

Espera que se inicie en http://localhost:3000

### Paso 4: Crear el túnel

**En otra terminal:**

```bash
# Ve a donde descomprimiste ngrok y ejecuta:
ngrok http 3000
```

### Paso 5: Compartir

ngrok te dará una URL pública como:
```
https://abc123.ngrok-free.app
```

**Comparte esta URL con tu socio** y podrá ver la aplicación en tiempo real.

## ⚠️ Importante

- La URL de ngrok cambia cada vez que reinicias ngrok
- Necesitas mantener tu computadora encendida y la app corriendo
- Es gratis pero tiene algunas limitaciones (se puede desconectar después de 2 horas)
- Tu socio podría ver un aviso de ngrok antes de acceder

## Ventajas

✅ **Instantáneo** - funciona en 2 minutos
✅ **No necesitas GitHub** ni configuración extra
✅ **Ver cambios en tiempo real** - cualquier cambio se refleja inmediatamente
✅ **Gratis**

## Desventajas

❌ Tu PC debe estar encendida
❌ La URL cambia cada vez
❌ Puede desconectarse
❌ Advertencia de ngrok para visitantes

---

## Plan B: LocalTunnel (Alternativa a ngrok)

Si no quieres crear cuenta en ngrok:

```bash
# Instalar localtunnel
npm install -g localtunnel

# Iniciar tu app
npm run dev

# En otra terminal:
lt --port 3000
```

Te dará una URL como: https://strange-dog-42.loca.lt
