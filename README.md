Live demo: https://musica-app-delescabe.netlify.app/
Funcionalidades:
Login con cuenta de spotify, busqueda de albums por nombre pudiendo agregarse a favoritos y persisitr esos datos.

Librerias:
animate.css (trancisiones fadeIn a componentes)
axios (fetch data de la api de spotify)
framer-motion (usada para la creación del Slider)
sweetalert2 (Manejo de user experience en el formulario de contacto)

Levantar proyecto
1- git clone (copiar repositorio localmente)
2- npm install (dentro del proyecto para instalar dependencias)
3- npm start (para dar incio)

Variables de entorno necesarias:
REACT_APP_CLIENT_ID = '(Ingresar cliente proporcionado por la API Spotify)'
REACT_APP_REDIRECT_URI = 'http://localhost:3000/ (Agregar al dashboard de Spotify para hacer funcionar -> Edit Settings -> Redirect URIs)'
Fecha de incio: 26/05/2023
