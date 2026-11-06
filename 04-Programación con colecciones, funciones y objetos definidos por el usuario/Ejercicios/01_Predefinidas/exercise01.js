/*
 * Convierte los textos a número con `parseInt` (indicando siempre la base)
 * y `parseFloat`:
 *   - `totalWidth`: suma de `sidebarWidth` y `contentWidth`.
 *   - `total`: precio de `quantity` unidades a `unitPrice` cada una.
 *   - `weirdResult`: resultado de convertir `weirdInput` con `parseInt`.
 */

const sidebarWidth = "300px";
const contentWidth = "900px";
let totalWidth = parseInt(sidebarWidth, 10) + parseInt(contentWidth, 10);
console.log(`Total width: ${totalWidth}px`);

const unitPrice = "3.5€";
const quantity = "2 unidades";
let total = parseFloat(unitPrice) * parseInt(quantity, 10);
console.log(`Total: ${total}€`);

const weirdInput = "px100";
let weirdResult = parseInt(weirdInput, 10);
console.log(`${weirdInput} -> ${weirdResult}`);
