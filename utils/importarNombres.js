"F:\FullStack\Proyectos\ControlRemoto\src\components\canalesDirecTV\img\*.*";

import fs from "fs";
import path from "path";

const carpeta =
  "F:/FullStack/Proyectos/ControlRemoto/src/components/canalesDirecTV/img"; // Ruta de la carpeta que contiene los archivos
const archivoCSV = "nombres_archivos.csv"; // Nombre del archivo CSV de salida

// Leer los nombres de archivo en la carpeta
fs.readdir(carpeta, (err, archivos) => {
  if (err) {
    console.error("Error al leer la carpeta:", err);
    return;
  }

  const nombresArchivosCSV = archivos.join("\n");

  nombresArchivosCSV = nombresArchivosCSV.toLowerCase();

  // Escribir los nombres de archivo en un archivo CSV
  fs.writeFile(archivoCSV, nombresArchivosCSV, (err) => {
    if (err) {
      console.error("Error al escribir en el archivo CSV:", err);
      return;
    }

    console.log("Nombres de archivo guardados en " + archivoCSV);
  });
});
