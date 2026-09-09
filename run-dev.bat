@echo off
chcp 65001 >nul
title Buscador de Cursos de IA
echo.
echo  ============================================
echo    Buscador de Cursos de IA
echo    Next.js + TypeScript
echo  ============================================
echo.
echo  Iniciando o servidor de desenvolvimento...
echo  Abra em: http://localhost:3000
echo.
cd /d "%~dp0"
call npm run dev
pause
