/*
 * Objetos anidados:
 *   - Asigna `office` como propiedad `address` de `employee1`.
 *   - `city1`: la ciudad de `employee1`.
 *   - `city2`: la ciudad de `employee2`, que no tiene `address`.
 */

class Address {
  constructor(city, country) {
    this.city = city;
    this.country = country;
  }
}

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

const office = new Address("Madrid", "España");
const employee1 = new Employee("Lucía", "Developer");
const employee2 = new Employee("Marcos", "Designer");

// TODO: asigna office a employee1

let city1 = ""; // TODO
console.log(`${employee1.name} works in ${city1} (${employee1.address?.country})`);

let city2 = ""; // TODO
console.log(`${employee2.name} works in ${city2}`);
