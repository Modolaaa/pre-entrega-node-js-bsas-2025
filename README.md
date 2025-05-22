# FakeStore CLI

Una aplicación de línea de comandos (CLI) desarrollada con Node.js que permite interactuar con la API pública de [FakeStore](https://fakestoreapi.com). Permite consultar, crear y eliminar productos directamente desde la terminal.

---

## 🚀 Funcionalidades

- 📦 Consultar todos los productos
- 🔍 Consultar un producto por ID
- ➕ Crear un nuevo producto
- ❌ Eliminar un producto por ID

---

## 🛠️ Requisitos

- Node.js instalado
- Git (opcional)
- Conexión a Internet

---

## ⚙️ Instalación

1. Clona este repositorio o descargá los archivos:
   git clone https://github.com/tu-usuario/fake-store-cli.git
   cd fake-store-cli
   npm install
## 📌 Comandos Disponibles
npm run start GET products

npm run start GET products/<productId>
# Ejemplo:
npm run start GET products/10

npm run start POST products <title> <price> <category>
# Ejemplo:
npm run start POST products "T-Shirt-Rex" 300 remeras

npm run start DELETE products/<productId>
# Ejemplo:
npm run start DELETE products/7

## 🧱 Estructura del Proyecto

fake-store-cli/
│
├── index.js          # Lógica principal del CLI
├── package.json      # Configuración de npm
└── .gitignore        # Archivos ignorados por Git

📄 Licencia
MIT

