@echo off
cd /d "%~dp0"
start "Valoris - serveur local" /MIN cmd /c node serve.js
timeout /t 1 /nobreak >nul
start "" "http://localhost:8080"
