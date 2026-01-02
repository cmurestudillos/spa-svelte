# 🦸‍♂️ Heroes App - MESN Stack

Una moderna aplicación web que muestra información detallada sobre superhéroes de Marvel y DC Comics, construida con tecnologías de vanguardia del stack MESN.

## 🚀 Demo

[Ver aplicación en vivo](https://spa-svelte-heroes.vercel.app) • [API Endpoint](https://spa-heroes-service.vercel.app)

## ✨ Características

- 🔍 **Búsqueda inteligente** - Encuentra héroes por nombre, biografía o casa editorial
- 📱 **Diseño responsive** - Perfecta experiencia en móviles, tablets y desktop
- ⚡ **Carga rápida** - Gestión eficiente de estados y datos
- 🎨 **UI moderna** - Interfaz atractiva con animaciones fluidas
- 🦸‍♀️ **Información detallada** - Biografías completas, fechas de aparición y más
- 🔄 **Navegación fluida** - Routing dinámico con SPA

## 🛠️ Stack Tecnológico (MESN)

### Frontend
- **Svelte.js** - Framework reactivo y performante
- **Svelte Routing** - Navegación del lado del cliente
- **Bootstrap 5** - Framework CSS para diseño responsive
- **Font Awesome** - Iconografía moderna

### Backend & Database
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB

### Deployment & Tools
- **Vercel** - Hosting y deployment
- **Git** - Control de versiones
- **NPM** - Gestión de paquetes

## 🏗️ Arquitectura

```
heroes-app/
├── src/
│   ├── components/
│   │   ├── heroes/
│   │   │   └── Heroes.svelte
│   │   ├── heroe/
│   │   │   └── Heroe.svelte
│   │   └── shared/
│   │       ├── card/
│   │       │   └── Card.svelte
│   │       └── footer/
│   │           └── Footer.svelte
│   ├── App.svelte
│   └── main.js
├── public/
│   └── assets/
│       └── img/
├── package.json
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- NPM o Yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/cmurestudillos/spa-svelte.git
   cd spa-svelte
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre la aplicación**
   Navega a `http://localhost:8080`

## 📡 API Endpoints

La aplicación consume una API REST personalizada:

- `GET /api/superheroes` - Obtiene todos los héroes
- `GET /api/superheroes/:id` - Obtiene un héroe específico

**Base URL**: `https://spa-heroes-service.vercel.app`

### Ejemplo de respuesta

```json
{
  "superheroes": [
    {
      "_id": "68adc0afb8b0efbde1543730",
      "nombre": "Spider-Man",
      "bio": "Tras ser mordido por una araña radiactiva...",
      "img": "assets/img/spiderman.svg",
      "aparicion": "1962-08-01T00:00:00.000Z",
      "casa": "Marvel"
    }
  ]
}
```

## 🎨 Características de la UI

### Búsqueda Inteligente
- Búsqueda en tiempo real
- Filtrado por múltiples campos
- Contador de resultados
- Indicadores visuales de estado

### Design System
- Gradientes modernos con temática de superhéroes
- Animaciones CSS suaves
- Cards responsivas con hover effects
- Tipografía optimizada para legibilidad

### Responsive Design
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: sm (576px), md (768px), lg (992px)
- **Grid System**: 1-2-3 columnas según tamaño de pantalla

### Personalización

Puedes modificar los estilos principales en el archivo CSS global:

```css
/* Tema principal */
:root {
  --primary-color: #ff3d00;
  --secondary-color: #ff5722;
  --background: linear-gradient(90deg, #ff3d00 0%, #000000 100%);
}
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Marvel y DC Comics por los increíbles personajes
- [Svelte](https://svelte.dev/) por el framework reactivo
- [Bootstrap](https://getbootstrap.com/) por los componentes CSS
- [Vercel](https://vercel.com/) por el hosting gratuito

## 📊 Estado del Proyecto

- ✅ Implementación base
- ✅ Sistema de búsqueda
- ✅ Diseño responsive
- ✅ API integración
- 🔄 Tests unitarios (en progreso)
- 📋 Mejoras de accesibilidad (planeado)

---

⭐ **¡Dale una estrella si te gustó el proyecto!**