/**
 * Función para averiguar si un texto es o no un palíndromo
 * @param {String} texto Texto a revisar si es o no un palíndromo
 * @returns Devuelve <code>true</code> si lo es, y <code>false</code> si no lo es
 */
function palindromo(texto) {
  let resultado = true;
  for (let contador = 0; contador < texto.length / 2; contador++) {
    if (texto.charAt(contador) != texto.charAt(texto.length - 1 - contador)) {
      resultado = false;
      break;
    }
  }
  return resultado;
}
let resultado = ""; // En donde se almacenarám los resultados de cada no de los apartados del ejercicio
const expRegular1 = /^[^,]*,{1}\s+[^,]*$/; // Para comprobar que posee una coma y al menos un espacio en blanco
const expRegular2 = /^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜÑñ ]+$/; // Para comprobar que no tiene valores numéricos
// Solicitamos el nombre por medio de una ventana emergente
let nombreInsertado = window.prompt("Introduzca apellidos, nombre");
// Testeamos si existe una única coma con un espacio por lo menos justo después
if (expRegular1.test(nombreInsertado)) {
  //Dividimos el nombre y los apellidos en un array
  let arrayNombreInsertado = nombreInsertado.split(", ");
  let enBlanco = false;
  // Comprobamos si existen tanto los apellidos como los nombres
  arrayNombreInsertado.forEach((elemento) => {
    elemento = elemento.trim();
    if (!expRegular2.test(elemento)) {
      enBlanco = true;
    }
  });
  if (enBlanco) {
    resultado = "Se dejó en blanco el nombre o los apellidos";
  } else {
    // Eliminamos los espacios en blanco que pueden existir de más
    for (let contador1 = 0; contador1 < arrayNombreInsertado.length; contador1++) {
      arrayNombreInsertado[contador1] = arrayNombreInsertado[contador1].trim();
      while (arrayNombreInsertado[contador1].search(/\s{2}/) != -1) {
        arrayNombreInsertado[contador1] = arrayNombreInsertado[contador1].replace("  ", " ");
      }
    }
    // Mostramos el nombre con el formato correcto
    let nombreCompleto = arrayNombreInsertado[0] + ", " + arrayNombreInsertado[1];
    resultado += nombreInsertado + "\n" + nombreCompleto + "\n";
    // Como puede ser un nombre compuesto lo divido atendiendo a los espacios que tenga
    let arrayNombre = arrayNombreInsertado[1].split(/\s{1}/);
    // Mostramos el mensaje de saludo
    resultado += `Hola ${arrayNombre[0]}\n`;
    // Mostramos la longitud del nombre completo sin contar la coma y el espacio posterior
    resultado += arrayNombreInsertado[0].length + arrayNombreInsertado[1].length + "\n";
    // Mostramos el nombre en minúsculas
    resultado += nombreCompleto.toLocaleLowerCase() + "\n";
    // Mostramos el nombre en mayúsculas
    resultado += nombreCompleto.toLocaleUpperCase() + "\n";
    // Mostramos el número de caracteres de los apellidos
    resultado += arrayNombreInsertado[1].length + "\n";
    // Mostramos el número de caracteres del nombre
    resultado += arrayNombreInsertado[0].length + "\n";
    // Mostramos las iniciales
    let iniciales = "";
    let arrayApellidos = arrayNombreInsertado[0].split(/\s{1}/);
    arrayNombre.forEach((elemento) => {
      iniciales += elemento.charAt(0) + ".";
    });
    arrayApellidos.forEach((elemento) => {
      iniciales += elemento.charAt(0) + ".";
    });
    resultado += iniciales + "\n";
    // Elimino la coma y reemplazamos cualquier letra por un asterisco
    let nombreEncriptado = nombreCompleto.replace(",", "");
    nombreEncriptado = nombreEncriptado.replace(/[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜÑñ]/g, "*");
    resultado += nombreEncriptado + "\n";
    // Se eliminan los puntos de las iniciales y se vé si es o no un palíndromo
    iniciales = iniciales.replace(/\./g, "");
    if (palindromo(iniciales)) {
      resultado += "Sí";
    } else {
      resultado += "No";
    }
  }
} else {
  resultado += "No hay la coma de separación o hay más de una.";
}
window.alert(resultado);
