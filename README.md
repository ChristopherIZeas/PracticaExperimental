# Formulario de Registro - Proyecto de Desarrollo Web

Este proyecto consiste en un formulario de registro interactivo construido con tecnologías web estándar. Incluye un diseño responsivo utilizando Flexbox, estilos personalizados y validación del lado del cliente para asegurar la integridad de los datos ingresados.

##  Tecnologías Utilizadas

*   **HTML5:** Estructura semántica del contenido.
*   **CSS3:** Estilos, diseño responsivo (Flexbox) y variables personalizadas para una fácil adaptación temática.
*   **JavaScript (Vanilla):** Lógica de validación del lado del cliente (nombre, correo electrónico, contraseñas, etc.) y manejo de eventos.

##  Estructura del Proyecto

*   `index.html`: La página principal que contiene el formulario de registro.
*   `style.css`: La hoja de estilos principal del proyecto.
*   `variables.css`: Archivo que contiene variables CSS (colores, fuentes) para un diseño consistente.
*   `script.js`: Archivo con la lógica de validación del formulario en JavaScript.
*   `styleguide.html`: Guía de estilos del proyecto (si aplica).

##  Instalación y Ejecución

Al ser un proyecto estático compuesto únicamente por archivos de front-end (HTML, CSS y JS), **no requiere de ninguna instalación de dependencias ni un entorno de servidor complejo**.

### Opción 1: Apertura Directa (Recomendado para pruebas rápidas)

1.  Descarga o clona este repositorio en tu computadora local.
2.  Navega hasta la carpeta del proyecto (`Proyecto`).
3.  Haz doble clic en el archivo `index.html` o arrástralo directamente a tu navegador web favorito (Chrome, Firefox, Edge, Safari).
4.  El proyecto se abrirá y podrás interactuar con el formulario.

### Opción 2: Usando Live Server (Recomendado para desarrollo)

Si deseas realizar cambios en el código y verlos reflejados automáticamente en el navegador:

1.  Abre la carpeta del proyecto en un editor de código como **Visual Studio Code**.
2.  Instala la extensión **Live Server** (si no la tienes instalada).
3.  Haz clic derecho sobre el archivo `index.html` y selecciona la opción **"Open with Live Server"**.
4.  El proyecto se abrirá en tu navegador predeterminado en una dirección local (ej. `http://127.0.0.1:5500/index.html`).

##  Características de Validación

El formulario incluye las siguientes validaciones automáticas:

*   **Nombre:** Verifica que el campo no esté vacío.
*   **Correo Electrónico:** Verifica que se ingrese una dirección de correo válida usando un formato estándar (ej. `usuario@dominio.com`).
*   **Contraseña:** Exige una longitud mínima, letras y números para mayor seguridad.
*   **Confirmar Contraseña:** Asegura que ambas contraseñas ingresadas coincidan.

Cualquier error en el llenado de estos campos se notificará al usuario inmediatamente.
