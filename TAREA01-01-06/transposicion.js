// Texto a cifrar
const texto = "UNIVERSIDAD CENTRAL DEL ECUADOR";
const clave = 6; // Número de columnas

// Quitar espacios para el cifrado
function limpiarTexto(texto) {
  return texto.replace(/\s+/g, "").toUpperCase();
}

// Cifrado por transposición de columnas
function cifrarTransposicion(texto, clave) {
  const limpio = limpiarTexto(texto);
  const filas = Math.ceil(limpio.length / clave);
  const matriz = [];

  for (let i = 0; i < filas; i++) {
    const fila = limpio.slice(i * clave, (i + 1) * clave);
    matriz.push(fila);
  }

  // Leer por columnas
  let cifrado = "";
  for (let c = 0; c < clave; c++) {
    for (let f = 0; f < filas; f++) {
      cifrado += matriz[f][c] || "";
    }
  }

  return cifrado;
}

// Descifrado por transposición
function descifrarTransposicion(cifrado, clave) {
  const filas = Math.ceil(cifrado.length / clave);
  const matriz = new Array(filas).fill("").map(() => new Array(clave).fill(""));
  let k = 0;

  for (let c = 0; c < clave; c++) {
    for (let f = 0; f < filas; f++) {
      if (k < cifrado.length) {
        matriz[f][c] = cifrado[k++];
      }
    }
  }

  // Leer por filas
  let texto = matriz.flat().join("");
  return texto;
}

// Ejecución
const cifrado = cifrarTransposicion(texto, clave);
const descifrado = descifrarTransposicion(cifrado, clave);

console.log("=== CIFRADO POR TRANSPOSICIÓN ===");
console.log("Texto original: ", texto);
console.log("Texto cifrado : ", cifrado);
console.log("Texto descifrado: ", descifrado);
