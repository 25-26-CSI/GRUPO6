# 🔐 Proyecto de Cifrados Modernos en Python

Implementación práctica de los algoritmos de **Cifrado AES (Advanced Encryption Standard)** y **Cifrado RSA (Rivest–Shamir–Adleman)**.
El objetivo de este proyecto es comprender cómo funcionan los principales métodos de **criptografía moderna**, tanto **simétrica** como **asimétrica**, mediante ejemplos prácticos desarrollados en Jupyter Notebook.

## 📘 Descripción del Proyecto

Este repositorio contiene dos notebooks ejecutables en **Python**, que explican y demuestran el proceso de cifrado y descifrado con ambos algoritmos:

* `AES.ipynb` → Implementa el **Cifrado Simétrico AES**, donde la misma clave se usa para cifrar y descifrar el mensaje.
* `RSA.ipynb` → Implementa el **Cifrado Asimétrico RSA**, que utiliza un **par de claves pública y privada** para garantizar la confidencialidad y autenticidad de los datos.

Cada notebook incluye:

* Explicaciones teóricas sobre el funcionamiento del algoritmo.
* Ejemplos prácticos paso a paso.
* Pruebas de cifrado y descifrado sobre texto de ejemplo.

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
   cd Tarea02-01-06
   ```

2. Abre Jupyter Notebook:

   ```bash
   jupyter notebook
   ```

3. Ejecuta los archivos:

   * Abre **AES.ipynb** para ver el funcionamiento del **cifrado simétrico**.
   * Abre **RSA.ipynb** para explorar el **cifrado asimétrico**.

## 🧮 Estructura del Proyecto

```
/Tarea02-01-06
│
├── AES.ipynb                 # Notebook del Cifrado AES
├── RSA.ipynb                 # Notebook del Cifrado RSA
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
