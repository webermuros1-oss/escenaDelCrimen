// src/config/api.js
// Configuración de API que cambia según el entorno

const API_URL = import.meta.env.PROD 
  ? '' // En producción (Vercel) usa rutas relativas
  : 'http://localhost:3000'; // En desarrollo usa json-server

export default API_URL;