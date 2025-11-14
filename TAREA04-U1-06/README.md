# 🔐 Proyecto de Cifrados Modernos en Python

Implementación práctica de los algoritmos de **Cifrado AES (Advanced Encryption Standard)**, **Cifrado RSA (Rivest–Shamir–Adleman)** y funciones **Hash criptográficas**.
Este proyecto tiene como objetivo comprender los principales métodos de **criptografía moderna**, tanto **simétrica**, **asimétrica** como **hashing**, mediante ejemplos prácticos desarrollados en Jupyter Notebook.

## 📘 Descripción del Proyecto

Este repositorio contiene tres notebooks ejecutables en **Python**, que explican y demuestran el proceso de cifrado, descifrado y generación de hash:

* `AES.ipynb` → Implementa el **Cifrado Simétrico AES**, donde la misma clave se usa para cifrar y descifrar.
* `RSA.ipynb` → Implementa el **Cifrado Asimétrico RSA**, basado en clave pública y privada.
* `Funcion_Hash.ipynb` → Implementa funciones **hash criptográficas** (SHA-256, SHA-512, etc.) y muestra cómo generar, comparar y validar hashes.

Cada notebook incluye:

* Conceptos teóricos fundamentales.
* Ejemplos explicados paso a paso.
* Pruebas con **archivos .txt externos** (opcional).
* Visualización de resultados.

## ⚙️ Requisitos Previos

Asegúrate de tener instalado:

* [Python 3.8+](https://www.python.org/downloads/)
* [Jupyter Notebook](https://jupyter.org/install)
* Las siguientes librerías de Python:

  ```bash
  pip install cryptography pycryptodome
  ```

## 🧩 Ejecución del Proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/25-26-CSI/GRUPO6.git
   cd Tarea04-U1-06
   ```

2. Abre Jupyter Notebook:

   ```bash
   jupyter notebook
   ```

3. Ejecuta los archivos:

   * Abre **AES.ipynb** para ver el funcionamiento del **cifrado simétrico**.
   * Abre **RSA.ipynb** para explorar el **cifrado asimétrico**.
   * `Funcion_Hash.ipynb` → Hash criptográfico (SHA-256, SHA-512, etc.)

## 🧮 Estructura del Proyecto

```
/Tarea04-U1-06
│
├── AES.ipynb                 # Notebook del Cifrado AES
├── RSA.ipynb                 # Notebook del Cifrado RSA
├── Funcion_Hash.ipynb            # Funciones hash criptográficas
├── ejemplos_txt/                 # Archivos de ejemplo para pruebas
├── assets/screenshots/       # Carpeta de imágenes de resultados
└── README.md                 # Documentación general del proyecto
```

## 🧾 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
Eres libre de usarlo, modificarlo y compartirlo con fines educativos o personales.

---

## 🤝 Colaboradores

Agradecimientos a todas las personas que contribuyeron al desarrollo de este proyecto sobre **criptografía moderna (AES y RSA)** 💚

| Nombre              | Rol / Aporte Principal                                                              | Contacto                                  |
| ------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------- |
| **Condolo Byron**   | Desarrollo del entorno de pruebas y ejecución de los algoritmos en Jupyter Notebook | [GitHub](https://github.com/SumonPB)      |
| **Lascano Angelo**  | Documentación técnica y análisis teórico de los métodos de cifrado AES y RSA        | —                                         |
| **Loya Bryan**      | Validación de resultados y comparación entre cifrados simétricos y asimétricos      | [GitHub](https://github.com/Bryan1093)    |
| **Rosero Ruth**     | Implementación de ejemplos prácticos y revisión del flujo de cifrado/descifrado     | —                                         |
| **Tapia Freddy**    | Soporte en la integración de librerías criptográficas y optimización de código      | [GitHub](https://github.com/XavierT1)     |
| **Trujillo Dennis** | Coordinación general y desarrollo principal de los notebooks AES y RSA              | [GitHub](https://github.com/Dennis290699) |

---

## 🚀 ¿Quieres colaborar?

🙌 ¡Tu ayuda es bienvenida!
Haz un **fork**, crea una nueva rama con tus cambios y envía un **pull request** con tus mejoras.
Toda contribución será revisada y reconocida.

**Desarrollado con 💻 y pasión por la criptografía moderna.**


