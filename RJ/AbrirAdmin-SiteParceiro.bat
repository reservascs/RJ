@echo off
setlocal
cd /d "%~dp0"

if exist "admin-fotos.html" (
    set "ADMIN=admin-fotos.html"
) else if exist "admin-fotos-site-parceiro.html" (
    set "ADMIN=admin-fotos-site-parceiro.html"
) else (
    echo ERRO: nao encontrei o arquivo do admin nesta pasta.
    echo Coloque este BAT junto do admin de fotos e pressione uma tecla.
    pause
    exit /b 1
)

start "Servidor local - Site Parceiro" python -m http.server 8765
 timeout /t 1 >nul
start "Admin de Fotos - Site Parceiro" msedge "http://localhost:8765/%ADMIN%"
endlocal
