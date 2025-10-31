// Texto a cifrar
const texto = "UNIVERSIDAD CENTRAL DEL ECUADOR";
const desplazamiento = 3; // puedes cambiarlo

// Función para cifrar con el método César
function cifrarCesar(texto, desplazamiento) {
  return texto
    .split("")
    .map((caracter) => {
      // Solo letras
      if (/[A-Z]/.test(caracter)) {
        const codigo = caracter.charCodeAt(0);
        // Desplaza dentro del alfabeto A-Z
        return String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
      } else if (/[a-z]/.test(caracter)) {
        const codigo = caracter.charCodeAt(0);
        return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
      }
      return caracter; // deja espacios y símbolos igual
    })
    .join("");
}

// Función para descifrar (inverso del cifrado)
function descifrarCesar(texto, desplazamiento) {
  return cifrarCesar(texto, 26 - (desplazamiento % 26));
}

// Ejecución
const cifrado = cifrarCesar(texto, desplazamiento);
const descifrado = descifrarCesar(cifrado, desplazamiento);

console.log("=== CIFRADO CÉSAR ===");
console.log("Texto original: ", texto);
console.log("Texto cifrado : ", cifrado);
console.log("Texto descifrado: ", descifrado);
