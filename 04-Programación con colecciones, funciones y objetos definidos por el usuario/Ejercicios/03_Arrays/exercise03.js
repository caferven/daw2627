/*
 * `building` guarda los propietarios de un edificio: building[planta][puerta].
 * Un `null` es un piso libre.
 *   - `owner`: el propietario de la planta 1, puerta 2.
 *   - Asigna "Elena" al piso libre de la planta 0 y muestra esa planta.
 *   - `floors`: número de plantas.
 *   - `doorsFloor2`: número de puertas de la planta 2.
 */

const building = [
  ["Ana", "Luis", null],
  ["Marta", null, "Pablo"],
  [null, "Sara", "Iván", "Jorge"],
];

let owner = ""; // TODO
console.log(`Floor 1, door 2: ${owner}`);

// TODO: asigna "Elena" al piso libre de la planta 0
console.log(building[0]);

let floors = 0; // TODO
console.log(`Floors: ${floors}`);

let doorsFloor2 = 0; // TODO
console.log(`Doors on floor 2: ${doorsFloor2}`);
