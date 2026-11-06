/*
 * Escribe la clase `Book` con un constructor que reciba `title`, `author` y
 * `pages` y los guarde como propiedades.
 */

class Book {
  // TODO
}

const book1 = new Book("Cien años de soledad", "Gabriel García Márquez", 471);
const book2 = new Book("La sombra del viento", "Carlos Ruiz Zafón", 576);

console.log(`${book1.title}, de ${book1.author} (${book1.pages} páginas)`);
console.log(`${book2.title}, de ${book2.author} (${book2.pages} páginas)`);
