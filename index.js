// Hola Error 404
console.log("no manden troyanos por favor");

//Esto se complicada cada vez más 


console. log ("no me gusta usar la terminal jajaja")
/** Maca Bazar */
function sumarVariables (n1, n2) {
    return n1+n2
}

// console.log( prueba1)

console.log("O avisen");
const greet = (name) => console.log(`Hi ${name}`);
greet("Luis");
let names= ["Abigail", "Zabdiel","Fernando"];


let nombreCompleto = [[ 'Juan', 'Carlos' ], 'Pérez'];
function recorrerNombre(nombre) {
    // Verificar si el nombre comienza con un array
    if (Array.isArray(nombre[0])) {
      // Recorrer el array al principio del nombre
      for (let i = 0; i < nombre[0].length; i++) {
        console.log(nombre[0][i]);
      }
    }
    // Recorrer el resto del nombre (cadena de texto)
    for (let i = nombre[0].length; i < nombre.length; i++) {
      console.log(nombre[i]);
    }
  }
  recorrerNombre(nombreCompleto);
  