// Arreglo vacio que se usara mas adelante, todos los espacios estan indefinidos e inicializados
const Array_global = Array.from({ length: 10 });

//metodo para crear un array con numeros al azar usando el array global
let Azar_Num = Array_global.map( () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
})

//Aplicaremos el metodo sort para ordenar los numeros de manera descencente:
let ordenados = Azar_Num.sort((a,b) => b - a)
console.log("Los numeros Son: ", ordenados)


//Crear un array con los primeros 10 numeros usando Array.from

let numeros_10 = Array.from(Array_global, (_, index) => index + 1)
console.log(numeros_10)

//Filtar numeros impares en ese nuevo array:

let numeros_pares = numeros_10.filter((numero => numero % 2 === 0))
console.log(numeros_pares)

// Tambien se puede usar en Azar_num:

numeros_pares = Azar_Num.filter((numero => numero % 2 === 0))
console.log(numeros_pares)

// Uso del metodo .some para comprobar si al menos 1 persona en un grupo es mayor de edad:
let usuarios_fiesta = [15,16,30,19];

//Esto devuelve en booleano true si hay al menos 1 mayor de edad:
const esMayorDeEdad = usuarios_fiesta.some(usuario => usuario >= 18);
esMayorDeEdad === true?console.log("Pueden entrar con el acopañante mayor de edad"):
console.log("Se necesita al menos un mayor de edad para entrar");

//Esto devuelve en booleano true si todos son mayor de edad:
const Todosmayores = usuarios_fiesta.every(usuario => (usuario >= 18));
Todosmayores === true?console.log("Bienvenidos"):console.log("No esta permitida la entrada a menores");

//Otro uso del filter para encontar los usuarios que no entran
const menoresDeEdad = usuarios_fiesta.filter(usuario => usuario < 18);
console.log("Estos son los usuarios que no pueden entrar: ", menoresDeEdad)

// Arreglos con letras y palabras: 

const palabras = ["Gato", "Perro", "Pez", "Loro", "Conejo"];
console.log(palabras)
// Todo a mayusculas:
let palabras_Mayus = palabras.map(palabra => palabra.toUpperCase());
console.log(palabras_Mayus);
//Todo a minusculas:
let palabras_Minus = palabras_Mayus.map(palabra => palabra.toLowerCase());
console.log(palabras_Minus);



