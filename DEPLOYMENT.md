# Deployment Anleitung für GitHub Pages

Diese Anleitung zeigt Ihnen, wie Sie die Website auf GitHub Pages veröffentlichen.

## Voraussetzungen

- Git installiert
- GitHub Account
- Repository bereits erstellt

## Schritte zur Veröffentlichung

### 1. GitHub Pages in den Repository-Einstellungen aktivieren

1. Gehen Sie zu Ihrem GitHub Repository
2. Klicken Sie auf **Settings** (Einstellungen)
3. Navigieren Sie zu **Pages** im linken Menü
4. Unter **Source** wählen Sie **GitHub Actions**

### 2. Code committen und pushen

```bash
# Alle Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit: Obstbaumpfleger Website"

# Zum main Branch pushen
git push origin main
```

### 3. Deployment überwachen

1. Gehen Sie zu **Actions** in Ihrem GitHub Repository
2. Sie sollten einen laufenden Workflow namens "Deploy to GitHub Pages" sehen
3. Warten Sie, bis der Workflow erfolgreich abgeschlossen ist (grünes Häkchen)

### 4. Website aufrufen

Nach erfolgreichem Deployment ist Ihre Website unter folgender URL erreichbar:

```
https://der-obstbaum-pfleger.github.io
```

oder

```
https://<ihr-github-username>.github.io/<repository-name>
```

## Automatisches Deployment

Jedes Mal, wenn Sie Änderungen zum `main` Branch pushen, wird die Website automatisch neu deployed:

```bash
# Änderungen machen
# ...

# Committen und pushen
git add .
git commit -m "Update: Beschreibung der Änderungen"
git push origin main
```

## Lokale Vorschau

Bevor Sie deployen, können Sie die Website lokal testen:

```bash
# Entwicklungsserver starten
npm run dev

# Im Browser öffnen: http://localhost:5173
```

## Build lokal testen

```bash
# Production Build erstellen
npm run build

# Build-Vorschau starten
npm run preview

# Im Browser öffnen: http://localhost:4173
```

## Troubleshooting

### Build schlägt fehl

- Überprüfen Sie die Logs im Actions Tab
- Stellen Sie sicher, dass alle Dependencies in `package.json` korrekt sind
- Testen Sie den Build lokal mit `npm run build`

### 404 Fehler nach Deployment

- Warten Sie einige Minuten, bis das Deployment vollständig abgeschlossen ist
- Überprüfen Sie, ob GitHub Pages auf "GitHub Actions" eingestellt ist
- Löschen Sie den Browser-Cache

### Bilder werden nicht angezeigt

- Stellen Sie sicher, dass alle Bilder im `public/` Ordner liegen
- Verwenden Sie absolute Pfade (z.B. `/logo-light.jpeg` statt `./logo-light.jpeg`)

## Custom Domain (Optional)

Wenn Sie eine eigene Domain verwenden möchten:

1. Gehen Sie zu **Settings** → **Pages**
2. Geben Sie Ihre Domain unter **Custom domain** ein
3. Folgen Sie den Anweisungen zur DNS-Konfiguration
4. Erstellen Sie eine `CNAME` Datei im `public/` Ordner mit Ihrer Domain

## Support

Bei Fragen oder Problemen können Sie:

- Die [GitHub Pages Dokumentation](https://docs.github.com/pages) konsultieren
- Ein Issue im Repository erstellen
