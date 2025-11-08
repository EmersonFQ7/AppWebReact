# PokéApp - Explorador de Pokémon

<div align="center">
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.0-7952B3?style=for-the-badge&logo=bootstrap)
![PokéAPI](https://img.shields.io/badge/Pok%C3%A9API-REST-FF0000?style=for-the-badge)
Una aplicación web moderna para explorar y descubrir información detallada sobre Pokémon.
![Demo](https://img.shields.io/badge/%F0%9F%9A%80_Ver_Demo_en_Vivo-FF6B6B?style=for-the-badge)
</div>

📖 **Descripción**  
PokéApp es una aplicación web desarrollada en React que permite a los usuarios explorar el mundo de los Pokémon. La aplicación consume la PokéAPI para mostrar información detallada sobre diferentes Pokémon, incluyendo sus estadísticas, tipos, habilidades y más.

✨ **Características Principales**  
🏠 Página de Inicio: Hero section atractiva y sección de Pokémon populares  
📚 Pokédex Completa: Listado paginado de todos los Pokémon con sistema de búsqueda  
📞 Formulario de Contacto: Formulario validado para recibir comentarios de usuarios  
🎨 Diseño Responsive: Optimizado para móviles, tablets y desktop  
⚡ Performance: Carga rápida y estados de loading optimizados  

🚀 **Demo en Vivo**  
Puedes ver la aplicación funcionando en:  
https://tu-app-pokemon.netlify.app

🛠️ **Tecnologías Utilizadas**  
- React 18.2.0: Framework principal  
- React Router DOM 6.8.0: Navegación entre páginas  
- Axios 1.3.0: Peticiones HTTP a la API  
- Bootstrap 5.2.0: Framework de estilos CSS  
- Font Awesome 6.4.0: Iconografía  
- Vite 4.3.0: Tooling de desarrollo  

📡 **API Utilizada**  
- PokéAPI  
- URL Base: https://pokeapi.co/api/v2  
- Tipo: REST API  
- Documentación: https://pokeapi.co/  

**Endpoints utilizados:**  
- GET /pokemon - Lista de Pokémon con paginación  
- GET /pokemon/{id|name} - Detalles específicos de un Pokémon  
- GET /pokemon?limit=6 - Pokémon populares para la homepage  

⚙️ **Instalación y Ejecución**  
**Prerrequisitos:**  
- Node.js 16+  
- npm o yarn  

**Pasos para instalar:**  
1. Clonar el repositorio  
2. Instalar dependencias  
3. Ejecutar en modo desarrollo  
4. Abrir en el navegador: http://localhost:5173  

**Comandos disponibles:**  
- Desarrollo: npm run dev  
- Build para producción: npm run build  
- Preview del build: npm run preview  
- Linter: npm run lint  

🎯 **Funcionalidades Implementadas**  
✅ **Página de Inicio (/)**  
- Hero section con llamada a la acción  
- Grid de 6 Pokémon populares  
- Cards con imagen, nombre, tipo y número  
- Diseño responsive y animaciones  

✅ **Pokédex (/lista)**  
- Sistema de búsqueda en tiempo real con debounce  
- Paginación completa con navegación numérica  
- Filtros por nombre de Pokémon  
- Selector de items por página (10, 20, 50)  
- Persistencia de parámetros en URL  
- Grid responsivo de cards de Pokémon  
- Estadísticas visuales con barras de progreso  

✅ **Formulario de Contacto (/contacto)**  
- Validación en tiempo real de todos los campos  
- Validaciones específicas:  
  - Nombre (requerido, mínimo 3 caracteres)  
  - Email (formato válido)  
  - Asunto (requerido)  
  - Mensaje (mínimo 10 caracteres)  
- Estados de envío con feedback visual  
- Limpieza automática después del envío exitoso  
- Mensajes de error/success informativos  

✅ **Componentes Comunes**  
- Navbar con navegación y estados activos  
- Footer con información de la aplicación  
- LoadingSpinner para estados de carga  
- ErrorAlert para manejo de errores  

🎨 **Características de UX/UI**  
- Design System con colores basados en tipos de Pokémon  
- Estados de carga con spinners y skeletons  
- Manejo de errores con opción de reintentar  
- Animaciones CSS suaves y profesionales  
- Accesibilidad con roles ARIA y contraste adecuado  
- Responsive design mobile-first  

🔧 **Configuración para Deploy**  
- Netlify: Conecta tu repositorio de GitHub  
- Configura el build command: npm run build  
- Configura el publish directory: dist  
- Variables de entorno opcionales en `.env`:  
  - VITE_API_BASE_URL=https://pokeapi.co/api/v2  
  - VITE_APP_NAME=PokéApp  

🤝 **Contribución**  
Las contribuciones son bienvenidas. Para contribuir:  
- Fork el proyecto  
- Crea una rama para tu feature (git checkout -b feature/AmazingFeature)  
- Commit tus cambios (git commit -m 'Add some AmazingFeature')  
- Push a la rama (git push origin feature/AmazingFeature)  
- Abre un Pull Request  

📄 **Licencia**  
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.  

👨‍💻 **Autor**  
- Tu Nombre  
- GitHub: @tu-usuario  
- LinkedIn: Tu Nombre  

🙏 **Agradecimientos**  
- PokéAPI por proporcionar la data de Pokémon  
- Bootstrap por el framework de CSS  
- React por el framework de JavaScript  

- ¿Listo para atraparlos a todos? 🎯  
- ⭐ Déjanos una estrella si te gustó el proyecto!
