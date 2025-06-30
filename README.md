# 📄 Script de Descarga de PDF desde URL

Este script en Node.js permite descargar un archivo PDF directamente desde una URL pública y guardarlo localmente. Es útil cuando ya conoces el enlace directo al documento y necesitas automatizar su descarga.

---

## 🛠 Requisitos

- Node.js instalado en tu sistema (versión 14+ recomendada).
- Acceso a la terminal o consola de comandos.
- Una URL directa a un archivo PDF disponible públicamente vía HTTPS.

---

## 📁 Estructura del proyecto

```
project-root/
├── downloads/                 # Carpeta donde se guarda el PDF descargado
├── descargar_pdf.js           # Script de descarga
```

---

## 🚀 Cómo usar

1. Clona o copia este script en tu proyecto:

```bash
mkdir pdf-downloader && cd pdf-downloader
```

2. Crea el archivo `descargar_pdf.js` y pega el contenido del script.

3. Modifica el valor de la constante `pdfUrl` con la URL real del PDF que quieres descargar:

```js
const pdfUrl = 'https://ejemplo.com/documento.pdf';
```

4. Ejecuta el script desde la terminal:

```bash
node descargar_pdf.js
```

5. El archivo descargado aparecerá en la carpeta `downloads/` con el nombre `documento-descargado.pdf`.

---

## ⚠️ Consideraciones legales y técnicas

- Este script **no realiza scraping**, solo descarga archivos cuando ya conoces la URL directa.
- Asegúrate de tener permiso para descargar y procesar el contenido del PDF.
- La conexión utiliza el módulo `https`, si el enlace es `http` deberás modificar el import correspondiente.

---

## ✅ Ejemplo de éxito

```
✅ PDF descargado en: /ruta/completa/al/proyecto/downloads/documento-descargado.pdf
```

---

## 🧠 Próximos pasos (opcional)

- Integrar este script con `cheerio` o `puppeteer` para identificar URLs de PDFs en páginas web.
- Combinarlo con un script de anonimización como `enhanced-legal-anonymizer-v3.js` para flujos automáticos de procesamiento legal.

