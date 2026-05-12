# bootstrap.ps1 — Iniciar nuevo proyecto desde template Mission Control v3
# Uso: .\scripts\bootstrap.ps1 "NombreDelProyecto" "C:\ruta\destino"

param(
    [Parameter(Mandatory=$true)]
    [string]$ProjectName,

    [Parameter(Mandatory=$false)]
    [string]$DestinationPath = (Join-Path (Get-Location) $ProjectName)
)

$ErrorActionPreference = "Stop"
$templateRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent

Write-Host ""
Write-Host "🚀 Mission Control v3 — Bootstrap (Landing Edition)" -ForegroundColor Cyan
Write-Host "   Proyecto: $ProjectName" -ForegroundColor White
Write-Host "   Destino:  $DestinationPath" -ForegroundColor Gray
Write-Host ""

# 1. Crear carpeta del proyecto
if (Test-Path $DestinationPath) {
    Write-Host "⚠️  La carpeta ya existe: $DestinationPath" -ForegroundColor Yellow
    $confirm = Read-Host "¿Continuar? (s/n)"
    if ($confirm -ne "s") { exit 1 }
} else {
    New-Item -ItemType Directory -Path $DestinationPath -Force | Out-Null
    Write-Host "✅ Carpeta creada" -ForegroundColor Green
}

# 2. Copiar .mission_control
$mcSource = Join-Path $templateRoot "template\.mission_control"
$mcDest = Join-Path $DestinationPath ".mission_control"
Copy-Item -Path $mcSource -Destination $mcDest -Recurse -Force
Write-Host "✅ .mission_control/ copiado" -ForegroundColor Green

# 3. Copiar AGENTS.md
$agentsSource = Join-Path $templateRoot "template\AGENTS.md"
if (Test-Path $agentsSource) {
    Copy-Item -Path $agentsSource -Destination (Join-Path $DestinationPath "AGENTS.md") -Force
    Write-Host "✅ AGENTS.md copiado" -ForegroundColor Green
}

# 4. Crear .gitignore básico
$gitignoreContent = @"
node_modules/
.next/
.env.local
.env*.local
*.tsbuildinfo
"@
$gitignorePath = Join-Path $DestinationPath ".gitignore"
if (-not (Test-Path $gitignorePath)) {
    Set-Content -Path $gitignorePath -Value $gitignoreContent -Encoding UTF8
    Write-Host "✅ .gitignore creado" -ForegroundColor Green
}

# 5. Actualizar nombre en state.md
$statePath = Join-Path $mcDest "ia\state.md"
if (Test-Path $statePath) {
    (Get-Content $statePath -Raw) -replace '\[Nombre del proyecto\]', $ProjectName |
        Set-Content $statePath -Encoding UTF8
}

# 6. Actualizar título en CONTEXTO.md
$contextoPath = Join-Path $mcDest "usuario\CONTEXTO.md"
if (Test-Path $contextoPath) {
    (Get-Content $contextoPath -Raw) -replace '\[Nombre del Proyecto\]', $ProjectName |
        Set-Content $contextoPath -Encoding UTF8
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "✨ Proyecto '$ProjectName' listo!" -ForegroundColor Green
Write-Host ""
Write-Host "Siguientes pasos:" -ForegroundColor Yellow
Write-Host "  1. Abre  .mission_control/usuario/CONTEXTO.md" -ForegroundColor White
Write-Host "  2. Llena las secciones (mínimo §0, §1, §2)" -ForegroundColor White
Write-Host "  3. Mete logos/fotos en  .mission_control/usuario/assets/" -ForegroundColor White
Write-Host "  4. Copia el prompt de  .mission_control/usuario/PROMPT.md" -ForegroundColor White
Write-Host "  5. Pégalo en tu IA y ¡a construir! 🎉" -ForegroundColor White
Write-Host ""

# 7. Abrir CONTEXTO.md en el editor por defecto
$openContexto = Read-Host "¿Abrir CONTEXTO.md ahora? (s/n)"
if ($openContexto -eq "s") {
    Start-Process $contextoPath
}
