# Catalogo Capilar

Este proyecto es un catálogo sencillo para mostrar productos de cuidado capilar.

## Características
- Carga de información desde un archivo JSON
- Diseño responsive
- Buscador por nombre
- Filtro por categoría
- Tarjetas con nombre, descripción y precio

## Estructura
- `index.html` — página principal
- `style.css` — estilos del catálogo
- `script.js` — lógica para cargar y renderizar productos
- `data/catalogo.json` — información del catálogo

## Cómo ejecutar
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta un servidor local:
   ```bash
   python -m http.server 8000
   ```
3. Abre en el navegador:
   ```text
   http://localhost:8000
   ```

## Cómo cargar información al catálogo
Edita el archivo `data/catalogo.json` y agrega más productos con este formato:

```json
{
  "id": 3,
  "nombre": "Acondicionador",
  "categoria": "Cuidado",
  "descripcion": "Acondicionador hidratante para cabello seco.",
  "precio": 25000,
  "imagen": "https://images.unsplash.com/..."
}
```

La aplicación leerá automáticamente ese archivo y mostrará cada producto en la página.
