@echo off
title AppTrainer - Iniciando...
color 0A

echo.
echo ========================================
echo   APPTRAINER - Plataforma SaaS
echo   Clases Deportivas Outdoor
echo ========================================
echo.
echo Iniciando servidor de desarrollo...
echo.

cd /d "%~dp0"

:: Verificar si node_modules existe
if not exist "node_modules" (
    echo Instalando dependencias...
    call npm install
)

:: Iniciar el servidor
echo.
echo Abriendo AppTrainer en tu navegador...
echo Presiona Ctrl+C para detener el servidor
echo.

start http://localhost:3000

call npm run dev

pause
