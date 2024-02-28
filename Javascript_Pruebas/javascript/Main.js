// Variables
let Edad__1 = 18;
let radio__1 = 10;
const PI = 3.14159;
const nombreD = "Juan";
const EdadD = 18;
let contraseña = "Sopa_de_Caracol";

// Función para calcular la edad en numero de pi
const Edad_Pi = (Edad) => {
  return (Edad/PI).toFixed(2);
}

// Función para calcular el área de un círculo
const area = (radio) => {
  return PI * radio * radio;
}

// Función para saludar a alguien y dar su edad en PI
const Saludo = (nombre,edad) => {
  return "¡Hola, " + nombre + "!" + "Tu edad en terminos de PI es: " + Edad_Pi(edad);
}

//Funcion para usar if con una constraseña
const Constraseña = (contraseña) => {
    contraseña === "Sopa_de_Caracol"?result="Bienvenido":result = "Contraseña Incorrecta";
    return result
}

// Uso de las funciones y resultados
console.log("Su edad en Numeros PI es: " + Edad_Pi(Edad__1))
console.log("El area del, circulo de radio: " +  radio__1 + ", es: " + area(radio__1))
console.log(Saludo(nombreD,EdadD))
console.log(Constraseña(contraseña))
