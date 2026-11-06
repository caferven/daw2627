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

let owner = building[1][2];
console.log(`Floor 1, door 2: ${owner}`);

building[0][2] = "Elena";
console.log(building[0]);

let floors = building.length;
console.log(`Floors: ${floors}`);

let doorsFloor2 = building[2].length;
console.log(`Doors on floor 2: ${doorsFloor2}`);
