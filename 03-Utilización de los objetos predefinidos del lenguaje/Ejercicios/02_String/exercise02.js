/*
 * Calcula:
 *   - `extension`: para cada fichero de `files`, su extensión o "" si no tiene.
 *     Usa `lastIndexOf` y `substring`.
 *   - `domain`: el dominio de `email`. Usa `indexOf` y `substring`.
 *
 * Salida esperada:
 *   report.final.pdf -> "pdf"
 *   photo.jpeg -> "jpeg"
 *   Makefile -> ""
 *   tienda.es
 */

const files = ["report.final.pdf", "photo.jpeg", "Makefile"];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  let extension = ""; // TODO

  console.log(`${file} -> "${extension}"`);
}

const email = "ana@tienda.es";
let domain = ""; // TODO
console.log(domain);
