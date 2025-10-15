# 🎬 Movie Watchlist App

Una aplicación en React + Tailwind CSS para armar y gestionar una lista de películas (“watchlist”).  
Permite ver una galería de películas, agregar películas a tu lista, verlas en un modal y quitarlas.

---

## 📁 Estructura del Proyecto 
```
WATCHLIST/
├── node_modules/           # Dependencias del proyecto
├── public/                 # Archivos estáticos públicos
│   └── index.html          # HTML principal de la aplicación
├── src/                    # Código fuente de la aplicación
│   ├── assets/             # Imágenes y recursos visuales
│   │   ├── 2148457848.jpg
│   │   ├── background.jpg
│   │   └── logo.png
│   ├── components/         # Componentes reutilizables de React
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── NavBar.jsx
│   │   └── WatchListModal.jsx
│   ├── App.jsx             # Componente raíz de la aplicación
│   ├── index.css           # Estilos globales
│   └── main.jsx            # Punto de entrada de la aplicación
├── .gitignore              # Archivos ignorados por Git
├── eslint.config.js        # Configuración de ESLint
├── package.json            # Metadatos y dependencias del proyecto
├── package-lock.json       # Control de versiones de dependencias
├── README.md               # Documentación del proyecto
└── vite.config.js          # Configuración de Vite
````
---

## 🛠 Funcionalidades

- Mostrar una galería de películas (cards con imagen y título).  
- Agregar una película a tu Watchlist si no está ya incluida.  
- Guardar la `watchlist` en **localStorage**, para que persista entre recargas.  
- Modal que muestra las películas agregadas: permite ver la lista y quitar películas.  
- Diseño responsive: cards adaptables, grid fluido, modal centrado.

---

## 🚀 Cómo levantar el proyecto

1. Cloná el repositorio  
   ```bash
   git clone <url-del-repo>
   cd <nombre-del-proyecto>
2. Instalá dependecias
   npm install
3. npm run dev

## 📦 Dependencias principales
    React
    Tailwind CSS   
## 📝 Licencia
    Este proyecto está bajo la licencia MIT — ver archivo LICENSE para detalles.
