@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

title Nintendo Parts & Repair Colombia - Instalacion

echo ================================================
echo   NINTENDO PARTS ^& REPAIR COLOMBIA
echo   Instalacion y Configuracion
echo ================================================
echo.

REM Configurar PATH con Node.js y pnpm
set "PATH=C:\Users\User\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\User\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;%PATH%"

echo [1/5] Instalando dependencias...
pnpm install
echo.

echo [2/5] Configurando archivo .env...
if not exist ".env" (
    copy ".env.example" ".env" >nul
    echo Archivo .env creado desde .env.example
    echo POR FAVOR EDITA EL ARCHIVO .env CON TUS CONFIGURACIONES
) else (
    echo Archivo .env ya existe
)
echo.

echo [3/5] Generando cliente de Prisma...
pnpm prisma generate
echo.

echo [4/5] Informacion importante...
echo.
echo ================================================
echo   CONFIGURACION REQUERIDA
echo ================================================
echo.
echo 1. Base de datos PostgreSQL:
echo    - Instala PostgreSQL o usa un servicio como Neon, Supabase
echo    - Configura DATABASE_URL en .env
echo.
echo 2. WhatsApp:
echo    - Configura NEXT_PUBLIC_WHATSAPP_NUMBER en .env
echo    - Formato: 573001234567 (sin + ni espacios)
echo.
echo 3. Ejecutar migraciones (cuando tengas DB configurada):
echo    - pnpm prisma migrate dev
echo.
echo ================================================
echo   PARA INICIAR EL PROYECTO
echo ================================================
echo.
echo Ejecuta: INICIAR_PROYECTO.bat
echo o manualmente: pnpm dev
echo.
echo ================================================

echo [5/5] Instalacion completada
echo.
pause
endlocal
