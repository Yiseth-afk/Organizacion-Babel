# Landing Page Project

## Table of Contents

-   [Instructions](#instructions)
-   [Development](#Development)
-   [License](#License)
-   [Footer](#Footer)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Development

Let’s start to explain my code:-

## Backend local para mensajes

Para usar la base de datos local y guardar los mensajes de honor a Danna, instala dependencias y ejecuta el servidor:

1. Abre la carpeta del proyecto en un terminal.
2. Ejecuta `npm install`.
3. Ejecuta `npm start`.
4. Abre en tu navegador `http://localhost:3000/honor-danna.html`.

Esto permite que la página guarde mensajes en una base de datos SQLite en el archivo `babel.db`.

## Administración y SEO

- La página de administración está disponible en `admin.html`.
- El panel administrativo usa una contraseña simple para acceso básico.
- La API permite consultar y eliminar mensajes de Danna.
- Para que Google indexe tu sitio y aparezca en búsquedas como "Organización Babel", publica el sitio en un servidor público y envía la URL a Google Search Console.
- Crea un `robots.txt` y un `sitemap.xml` en la raíz para ayudar el rastreo.

## Interface and Architecture

1- Architecture:- All files attached as request in rubrics
css

-   styles.css  
    index.html
    js
-   app.js
    README.md
    2- Usability:- checked the accessibility from all platforms (All features are usable across modern desktop, tablet, and phone browsers.).
    3- Styling:- Styling has been added for active states.
    4- HTML Structure:- for inserting fourth section used cloning code in js

---

## Landing Page Behavior

1- Navigation:- Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation creating array from sections to use function and create navigation bar elements. Then make a function to check if sections in viewport, then made another function to toggle class " your- active- class"
2- Section Active State:- used scroll event and offset top to determine which active section to add class " active" to Li related to the active section and scroll to the list item in small screens.
3- Scroll to Anchor:- When clicking an item from the navigation menu, the link should scroll to the appropriate section and used create element to create button " go to top" when user click on it, and hide the button and header navigation bar when the page on top. And when user scroll down they are appeared to deal with them, and finally used event click to make the button responsive and go to the top of the page.
4- Used media query in js code to add some features to nav bar and hide it in mobiles screens

## License

First project: Landing Page
This code write by Mohamed Nassar
copyrights Udacity
Most of my searches in w3school and MDN websites topics but I wrote every code alone.

## Footer

thanks to check my code and feed me back with your opinion and notes
thanks
