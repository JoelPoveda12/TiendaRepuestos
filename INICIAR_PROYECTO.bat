@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

title Nintendo Parts & Repair Colombia - Servidor de Desarrollo

echo ================================================
echo   NINTENDO PARTS ^& REPAIR COLOMBIA
echo   Servidor de Desarrollo Next.js
echo ================================================
echo.

REM Configurar PATH con Node.js y pnpm
set "PATH=C:\Users\User\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\User\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;%PATH%"

REM Verificar Node.js
echo [1/4] Verificando Node.js...
node --version 2>nul
if !ERRORLEVEL! NEQ 0 (
    echo ERROR: Node.js no encontrado
    pause
    exit /b 1
)

REM Verificar pnpm
echo [2/4] Verificando pnpm...
pnpm --version 2>nul
if !ERRORLEVEL! NEQ 0 (
    echo ERROR: pnpm no encontrado
    pause
    exit /b 1
)

REM Verificar archivo .env
echo [3/4] Verificando configuracion...
if not exist ".env" (
    echo ADVERTENCIA: No se encontro archivo .env
    echo Copiando desde .env.example...
    copy ".env.example" ".env" >nul
    echo Archivo .env creado. Por favor configurarlo antes de usar en produccion.
    echo.
)

REM Instalar dependencias si no existen
if not exist "node_modules" (
    echo Instalando dependencias...
    pnpm install
    echo.
)

REM Iniciar servidor de desarrollo
echo [4/4] Iniciando servidor de desarrollo...
echo.
echo Servidor disponible en: http://localhost:3000
echo Presiona Ctrl+C para detener el servidor
echo.
pnpm dev

pause
endlocal
