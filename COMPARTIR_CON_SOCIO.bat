@echo off
echo ========================================
echo   COMPARTIR APPTRAINER CON TU SOCIO
echo ========================================
echo.
echo Este script te ayudara a compartir la app rapidamente
echo.

echo [1/3] Verificando que npm este instalado...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: npm no esta instalado
    echo Por favor instala Node.js primero
    pause
    exit /b 1
)

echo [2/3] Verificando que las dependencias esten instaladas...
if not exist "node_modules" (
    echo Instalando dependencias...
    call npm install
)

echo.
echo ========================================
echo   OPCIONES PARA COMPARTIR
echo ========================================
echo.
echo 1. Usar ngrok (requiere cuenta gratuita)
echo 2. Usar localtunnel (sin cuenta, mas simple)
echo 3. Solo instrucciones para Vercel (deploy permanente)
echo.
set /p choice="Selecciona una opcion (1/2/3): "

if "%choice%"=="1" goto ngrok
if "%choice%"=="2" goto localtunnel
if "%choice%"=="3" goto vercel

:ngrok
echo.
echo ========================================
echo   CONFIGURACION NGROK
echo ========================================
echo.
echo Para usar ngrok:
echo 1. Descarga ngrok de: https://ngrok.com/download
echo 2. Crea cuenta gratis en: https://ngrok.com
echo 3. Copia tu authtoken de: https://dashboard.ngrok.com/get-started/your-authtoken
echo.
echo Ya tienes ngrok configurado? (S/N)
set /p hasngrok="> "

if /i "%hasngrok%"=="N" (
    echo.
    echo Abriendo pagina de descarga de ngrok...
    start https://ngrok.com/download
    echo.
    echo Despues de descargar y configurar, ejecuta este script de nuevo.
    pause
    exit /b 0
)

echo.
echo [3/3] Iniciando la aplicacion...
echo.
echo IMPORTANTE:
echo - Esta ventana debe permanecer ABIERTA
echo - Abre OTRA terminal y ejecuta: ngrok http 3000
echo - ngrok te dara una URL para compartir
echo.
start cmd /k "title NGROK - Ejecuta: ngrok http 3000 && echo Ejecuta: ngrok http 3000 && echo."
echo.
echo Presiona ENTER cuando hayas iniciado ngrok...
pause >nul

npm run dev
goto end

:localtunnel
echo.
echo ========================================
echo   CONFIGURACION LOCALTUNNEL
echo ========================================
echo.
echo Verificando si localtunnel esta instalado...
where lt >nul 2>nul
if %errorlevel% neq 0 (
    echo Instalando localtunnel globalmente...
    call npm install -g localtunnel
)

echo.
echo [3/3] Iniciando aplicacion y tunel...
echo.
echo IMPORTANTE:
echo - Mantén esta ventana ABIERTA
echo - Se abrirá otra ventana con la URL para compartir
echo - Copia la URL y compartela con tu socio
echo.

start cmd /k "title LOCALTUNNEL - URL Publica && echo Esperando que la app inicie... && timeout /t 10 /nobreak >nul && lt --port 3000"

npm run dev
goto end

:vercel
echo.
echo ========================================
echo   DEPLOY EN VERCEL (Recomendado)
echo ========================================
echo.
echo Vercel es la mejor opcion para deploy permanente:
echo.
echo PASOS:
echo 1. Crea cuenta en: https://vercel.com
echo 2. Conecta tu GitHub
echo 3. Sube tu proyecto a GitHub
echo 4. Importa el proyecto en Vercel
echo 5. Obten tu URL permanente (ej: apptrainer.vercel.app)
echo.
echo Quieres abrir la documentacion detallada? (S/N)
set /p opendoc="> "

if /i "%opendoc%"=="S" (
    start DEPLOY_VERCEL.md
)

echo.
echo Abriendo Vercel en el navegador...
start https://vercel.com/new
echo.
pause
goto end

:end
echo.
echo Proceso completado.
pause
