const fs = require('fs');
const https = require('https');
const path = require('path');

// URL del PDF a descargar
const pdfUrl = 'https://ejemplo.com/documento.pdf'; // Reemplaza con la URL real

// Ruta donde se guardará el archivo
const outputPath = path.join(__dirname, 'downloads', 'documento-descargado.pdf');

// Asegurar que exista la carpeta "downloads"
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Función para descargar el PDF
function descargarPDF(url, destino) {
  const archivo = fs.createWriteStream(destino);
  https.get(url, response => {
    if (response.statusCode !== 200) {
      console.error(`❌ Error: Código de estado ${response.statusCode}`);
      return;
    }
    response.pipe(archivo);
    archivo.on('finish', () => {
      archivo.close();
      console.log(`✅ PDF descargado en: ${destino}`);
    });
  }).on('error', err => {
    fs.unlink(destino, () => {});
    console.error(`❌ Error al descargar el PDF: ${err.message}`);
  });
}

// Ejecutar la función
descargarPDF(pdfUrl, outputPath);
