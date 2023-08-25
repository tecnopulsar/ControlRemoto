import fs from "fs";
import path from "path";

const carpeta =
  "F:/FullStack/Proyectos/ControlRemoto/src/components/canalesDirecTV/img"; // Ruta de la carpeta que contiene los archivos

// Leer los nombres de archivo en la carpeta
fs.readdir(carpeta, (err, archivos) => {
  if (err) {
    console.error("Error al leer la carpeta:", err);
    return;
  }

  archivos.forEach((archivo) => {
    const rutaArchivoAntigua = path.join(carpeta, archivo);
    const nuevoNombre = archivo.toLowerCase();
    const rutaArchivoNueva = path.join(carpeta, nuevoNombre);

    // Renombrar el archivo
    fs.rename(rutaArchivoAntigua, rutaArchivoNueva, (err) => {
      if (err) {
        console.error(`Error al renombrar ${archivo}:`, err);
      } else {
        console.log(`${archivo} renombrado a ${nuevoNombre}`);
      }
    });
  });
});
