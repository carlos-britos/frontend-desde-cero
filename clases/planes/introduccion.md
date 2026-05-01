# Plan de implementacion - Clase 1: Introduccion

## Estructura general de la pagina

La pagina es un scroll vertical continuo con secciones bien diferenciadas. El alumno avanza leyendo e interactuando. Cada seccion ocupa al menos el 80% del viewport para evitar distracciones.

**Archivo principal:** `introduccion.html`
**Estilos:** `introduccion.css`
**Interactividad:** `introduccion.js`

---

## Barra de progreso

- Barra fina fija en el top de la pagina (4px de alto, color primario #3B82F6).
- Se llena proporcionalmente al scroll del usuario.
- Comportamiento JS: escuchar evento `scroll`, calcular porcentaje, actualizar width de la barra.

---

## Seccion 0: Hero / Intro

**Contenido estatico:**

- Titulo grande: "Clase 1: Como funciona esto"
- Subtitulo: "Vas a entender que pasa cuando abris una pagina web, y vas a preparar tus herramientas de trabajo."
- Icono animado: un globo terrestre con pequenas lineas que se mueven simulando conexiones (CSS animation, no gif).

**Elemento interactivo:**

- Boton "Arranquemos" que hace smooth-scroll a la primera seccion de contenido.

---

## Seccion 1: Como funciona internet

### 1.1 — Pregunta disparadora

**Contenido estatico:**

- Texto grande centrado: "Cuando abris Instagram, Netflix o Google... de donde sale toda esa informacion?"
- Fondo oscuro para generar contraste y foco.

### 1.2 — Analogia del restaurante (diagrama interactivo)

**Ilustracion SVG principal — "El restaurante de internet"**

Diagrama horizontal con 4 elementos conectados por flechas animadas:

| Elemento                 | Forma                                                      | Color             | Label                  |
| ------------------------ | ---------------------------------------------------------- | ----------------- | ---------------------- |
| Tu computadora (cliente) | Rectangulo con bordes redondeados, icono de laptop adentro | #3B82F6 (azul)    | "Vos (el cliente)"     |
| Internet (el mozo)       | Figura humana estilizada con bandeja, caminando            | #F59E0B (ambar)   | "Internet (el mozo)"   |
| DNS (guia telefonica)    | Libro abierto con lupa                                     | #8B5CF6 (violeta) | "DNS (la guia)"        |
| Servidor (la cocina)     | Rectangulo mas grande con icono de servidor/rack           | #10B981 (verde)   | "Servidor (la cocina)" |

**Flechas animadas (SVG `stroke-dashoffset` animation):**

- Flecha 1: de Cliente a DNS (label: "Que numero tiene youtube.com?")
- Flecha 2: de DNS a Cliente (label: "142.250.185.46")
- Flecha 3: de Cliente a Servidor pasando por Internet (label: "Mandame tu pagina")
- Flecha 4: de Servidor a Cliente pasando por Internet (label: "Aca tenes: HTML + CSS + JS")

**Interactividad:**

- Estado inicial: solo se ve el Cliente.
- Boton "Paso 1" revela la flecha al DNS y su respuesta.
- Boton "Paso 2" revela la flecha al servidor.
- Boton "Paso 3" revela la respuesta volviendo al cliente.
- Boton "Ver todo junto" reproduce la animacion completa en loop.

El alumno controla el ritmo con los botones. Cada paso muestra un texto corto debajo del diagrama explicando que esta pasando.

### 1.3 — Lo clave

**Contenido estatico:**

- Caja destacada (borde izquierdo grueso azul, fondo gris muy claro):
  - "Siempre hay DOS computadoras: la tuya (que pide) y la del otro lado (que responde). Toda la web funciona asi: pedido y respuesta."

### 1.4 — Errores comunes

**Elemento interactivo — "Mitos vs Realidad"**

Tres tarjetas flip (click para dar vuelta):

| Frente (mito)                       | Dorso (realidad)                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------ |
| "Internet y Google son lo mismo"    | "Google es UN servicio dentro de internet. Como un local dentro de un shopping."           |
| "Las paginas estan en el navegador" | "Las paginas estan en servidores en algun lugar del mundo. Tu navegador solo las muestra." |
| "WiFi = Internet"                   | "WiFi es COMO te conectas (el cable invisible). Internet es la red A la que te conectas."  |

Estilo: fondo blanco con sombra suave. Al hacer click, la tarjeta rota 180 grados en el eje Y con transition CSS (transform: rotateY(180deg), transition 0.5s). El dorso tiene fondo verde claro.

### 1.5 — Ejercicio mental

**Contenido estatico:**

- Caja con icono de cerebro:
  - "La proxima vez que abras una pagina, pensa: 'Mi compu le esta pidiendo archivos a un servidor que esta en algun lugar del mundo'. Parece boludo, pero fija el concepto."

---

## Seccion 2: Archivos, carpetas y extensiones

### 2.1 — Analogia de la biblioteca (diagrama)

**Ilustracion SVG — "Tu compu es una biblioteca"**

Dibujo estilo flat de una estanteria con 3 niveles:

- Nivel superior: carpeta grande con label "Documentos" (color #F59E0B).
- Nivel medio: dentro de Documentos, carpeta mas chica "mi-proyecto" (color #3B82F6).
- Nivel inferior: dentro de mi-proyecto, 3 archivos representados como libros/hojas con colores distintos segun extension.

Cada archivo tiene:

- `index.html` — color naranja, icono de estructura/ladrillos
- `estilos.css` — color violeta, icono de pincel/paleta
- `app.js` — color amarillo, icono de rayo/engranaje

Labels claros, tipografia mono para nombres de archivo.

### 2.2 — Tabla de extensiones (estatica pero visual)

En vez de una tabla aburrida, mostrar una grilla de tarjetas (2 columnas en mobile, 3 en desktop):

Cada tarjeta tiene:

- Icono representativo arriba (SVG simple)
- Nombre de la extension grande (`.html`, `.css`, `.js`, `.txt`, `.jpg`, `.pdf`)
- Una linea con la analogia ("Los ladrillos de la casa", "La pintura y los muebles", etc.)
- Color de fondo sutil distinto para cada una

### 2.3 — Demo interactiva: "Cambia la extension"

**Elemento interactivo:**

Simulacion visual de un explorador de archivos simplificado:

- Se ve un archivo llamado `documento.txt` con icono de bloc de notas.
- Un input editable donde el alumno puede cambiar el nombre/extension.
- Al cambiar a `.html`, el icono cambia al de Chrome/navegador.
- Al cambiar a `.jpg`, el icono cambia al de imagen.
- Al cambiar a `.css`, el icono cambia al de hoja de estilos.
- Mensaje abajo: "La extension NO cambia el contenido. Solo le dice a la compu como tratarlo."

Comportamiento JS:

- Escuchar evento `input` en el campo de texto.
- Extraer la extension (todo despues del ultimo punto).
- Cambiar el icono y un texto descriptivo segun la extension detectada.
- Si no hay extension reconocida, mostrar icono generico con "??".

### 2.4 — Alerta importante

**Contenido estatico — Caja de warning (borde naranja, icono de alerta):**

- "En Windows, las extensiones vienen OCULTAS por default. Si no las ves, podes estar creando `index.html.txt` sin darte cuenta. Activa 'Mostrar extensiones' ya mismo."
- Pequeno diagrama SVG mostrando donde esta la opcion en Windows (Vista > Extensiones de nombre de archivo) — rectangulo simulando la barra de menu con la opcion resaltada.

### 2.5 — Ejercicio paso a paso

**Elemento interactivo — Checklist con checkbox**

Lista de pasos con checkboxes que el alumno puede marcar a medida que los completa:

1. [ ] Activar "Mostrar extensiones de archivo" en tu sistema
2. [ ] Crear la carpeta `frontend-desde-cero` en Documentos
3. [ ] Dentro, crear `index.html`
4. [ ] Crear `estilos.css`
5. [ ] Crear `app.js`
6. [ ] Hacer doble clic en cada uno y ver que programa los abre

Comportamiento JS: al marcar todos, mostrar un mensaje de felicitacion con mini animacion (confetti CSS o simplemente un emoji y texto "Listo, ya tenes tu proyecto armado").

---

## Seccion 3: Usar la computadora con soltura

### 3.1 — Intro directa

**Contenido estatico:**

- Texto: "Si la compu la usas solo para WhatsApp Web y YouTube, hay cosas que necesitas manejar antes de programar. No es dificil, pero sin esto te vas a trabar."

### 3.2 — Atajos de teclado (tarjetas interactivas)

**Ilustracion + interactividad:**

Grid de 5 tarjetas, cada una representando un atajo:

| Atajo            | Icono                     | Que hace                       |
| ---------------- | ------------------------- | ------------------------------ |
| Alt + Tab        | Dos ventanas superpuestas | Cambiar entre programas        |
| Ctrl + C / V / X | Tijera + portapapeles     | Copiar, pegar, cortar          |
| Ctrl + F         | Lupa                      | Buscar en cualquier lado       |
| Ctrl + T / W     | Pestana con + / x         | Nueva pestana / cerrar pestana |
| Win + flechas    | Ventana + flecha          | Dividir pantalla               |

Cada tarjeta:

- Muestra las teclas como `<kbd>` estilizados (fondo gris oscuro, bordes redondeados, sombra como teclas reales, tipografia mono).
- Al hacer hover/click, se expande mostrando un tip extra y la variante para Mac.
- Color de borde superior distinto para cada una.

**Interactividad JS:**

- Detector de teclas: si el alumno presiona alguno de los atajos en la pagina, la tarjeta correspondiente se ilumina brevemente (flash de color + checkmark).
- Texto abajo: "Proba apretar Ctrl+F ahora mismo en esta pagina."

### 3.3 — Analogia de cocina

**Contenido estatico:**

- Caja con icono de sarten:
  - "Programar es como cocinar un plato complejo. Necesitas tener todo a mano. Si cada vez que necesitas la sal tenes que ir al supermercado, se te quema todo."

---

## Seccion 4: El editor de codigo y el navegador

### 4.1 — VS Code (layout visual)

**Ilustracion SVG — "Anatomia de VS Code"**

Diagrama del layout de VS Code simplificado:

Rectangulo grande con 4 zonas claramente marcadas con colores y labels:

- Zona izquierda (20% del ancho, fondo #1E293B): "Explorador de archivos" — con iconos de carpetas y archivos en arbol.
- Zona central (60% del ancho, fondo #0F172A): "Area de edicion" — con lineas simulando codigo coloreado (3-4 lineas con colores distintos para tags, atributos, valores).
- Zona inferior (100% del ancho, 20% del alto, fondo #000): "Terminal integrada" — con un cursor parpadeante (CSS animation).
- Barra superior: pestanas de archivos.

Cada zona tiene un circulo numerado (1-4) y al hacer click/hover en el numero, aparece un tooltip con la explicacion corta.

### 4.2 — VS Code vs Bloc de notas (comparacion visual)

**Ilustracion SVG — Comparacion lado a lado**

Dos paneles:

- Panel izquierdo (label "Bloc de notas"): texto negro sobre fondo blanco, todo igual, monotonico. Sin colores, sin numeros de linea.
- Panel derecho (label "VS Code"): el mismo texto pero con syntax highlighting (tags en azul, atributos en verde, valores en naranja, numeros de linea a la izquierda en gris).

Ambos muestran el mismo codigo: `<h1>Hola mundo</h1>`.

Abajo: "Es como comparar escribir a mano vs un procesador de texto con corrector."

### 4.3 — DevTools (demo interactiva)

**Elemento interactivo — Mini-pagina con inspector simulado**

Dividir el area en dos paneles (simula la experiencia de DevTools):

**Panel izquierdo (60%) — "La pagina":**

- Un mini layout con: titulo "Mi pagina", un parrafo, un boton azul, una imagen placeholder.
- Todos los elementos son clickeables.

**Panel derecho (40%) — "Inspector":**

- Al hacer click en un elemento del panel izquierdo:
  - Se resalta con borde punteado azul.
  - En el panel derecho aparece el "codigo HTML" correspondiente (texto con syntax highlighting CSS).
  - Ejemplo: click en el titulo → aparece `<h1>Mi pagina</h1>` resaltado.

**Interactividad extra:**

- Un campo editable en el panel derecho donde el alumno puede cambiar el texto del elemento seleccionado y verlo cambiar en vivo en el panel izquierdo.
- Nota debajo: "Esto es lo que hacen las DevTools de Chrome. Los cambios son temporales."

### 4.4 — Como abrir DevTools

**Contenido estatico:**

- 3 opciones mostradas como tarjetas horizontales con icono de teclado:
  - Click derecho > Inspeccionar
  - F12
  - Ctrl + Shift + I (Cmd + Option + I en Mac)

---

## Seccion 5: Frontend vs Backend

### 5.1 — Analogia del restaurante parte 2 (diagrama)

**Ilustracion SVG — "El restaurante completo"**

Vista de planta de un restaurante dividido en dos zonas con una linea punteada:

**Zona izquierda — "Frontend" (fondo azul muy suave #EFF6FF):**

- Mesas, sillas, menu, decoracion, iluminacion (iconos flat).
- Label grande: "Lo que el cliente ve y toca"
- Color de borde: #3B82F6

**Zona derecha — "Backend" (fondo verde muy suave #ECFDF5):**

- Cocina, heladera, inventario, cajas (iconos flat).
- Label grande: "Lo que pasa en la cocina"
- Color de borde: #10B981

Linea divisoria punteada con label: "El cliente no pasa de aca"

### 5.2 — La triada del frontend (diagrama interactivo)

**Ilustracion SVG — "HTML + CSS + JS"**

Tres bloques verticales que se construyen progresivamente:

**Estado 1 (HTML):**

- Una casa hecha solo con lineas/wireframe (sin color, sin movimiento). Estructura de huesos.
- Label: "HTML = Estructura"
- Color del bloque: #F97316 (naranja)

**Estado 2 (CSS):**

- La misma casa ahora con colores, texturas, techo rojo, paredes amarillas, jardin verde.
- Label: "CSS = Presentacion"
- Color del bloque: #8B5CF6 (violeta)

**Estado 3 (JS):**

- La misma casa pero con puerta que se abre/cierra, luz que prende, humo que sale de la chimenea (animaciones CSS activadas por JS).
- Label: "JavaScript = Comportamiento"
- Color del bloque: #EAB308 (amarillo)

**Interactividad:**

- Tres botones/tabs: "Solo HTML", "HTML + CSS", "HTML + CSS + JS"
- Al seleccionar cada uno, la ilustracion cambia de estado con transicion suave (opacity/transform).
- Empezar mostrando solo HTML para que el alumno vea la progresion.

### 5.3 — Tabla comparativa

**Contenido estatico pero visual:**

- Dos columnas grandes (Frontend | Backend) con iconos y texto minimo.
- Usar los mismos colores de la seccion (azul frontend, verde backend).

### 5.4 — Ejercicio: identifica frontend y backend

**Elemento interactivo — Drag & Drop o Click para clasificar**

Se muestran 8 tarjetas con acciones/elementos de una web:

- "Boton que cambia de color" → Frontend
- "Verificar tu contrasena" → Backend
- "Animacion de carga" → Frontend
- "Guardar tu foto de perfil" → Backend
- "Formulario de login" → Frontend (la vista)
- "Comprobar si el email existe" → Backend
- "Menu hamburguesa que se abre" → Frontend
- "Recomendaciones personalizadas" → Backend

El alumno arrastra cada tarjeta a la columna Frontend o Backend (o hace click para asignar en mobile).

Comportamiento JS:

- Drag & drop con fallback a click en mobile.
- Al soltar en la columna correcta: borde verde, checkmark.
- Al soltar en la incorrecta: borde rojo, shake animation, vuelve al centro.
- Al completar todas: mensaje de cierre + mini explicacion de las que podrian haber generado duda (ej: "El formulario de login es frontend porque es lo que VES, pero la verificacion de la contrasena es backend").

---

## Seccion 6: Cierre y proximos pasos

### 6.1 — Resumen visual

**Ilustracion SVG — "Mapa mental de la clase"**

Diagrama tipo mind map centrado con "Clase 1" en el medio y 5 ramas:

1. Internet (icono globo) — "Pedido y respuesta"
2. Archivos (icono carpeta) — ".html .css .js"
3. Herramientas (icono llave) — "Atajos y ventanas"
4. Editor + Browser (icono codigo) — "VS Code + DevTools"
5. Frontend (icono pantalla) — "Lo que se ve"

Colores: cada rama con el color que se uso en su seccion correspondiente.
Estilo: lineas organicas (no rectas), nodos circulares.

### 6.2 — Tarea para la proxima

**Elemento interactivo — Checklist persistente (localStorage)**

Lista de tareas con checkboxes que guardan su estado en localStorage:

1. [ ] Instalar VS Code
2. [ ] Instalar Google Chrome
3. [ ] Crear carpeta `frontend-desde-cero` con `index.html`, `estilos.css`, `app.js`
4. [ ] Abrir DevTools en 2 paginas distintas e inspeccionar algo
5. [ ] (Bonus) Escribir "Hola, soy [tu nombre]" en index.html y verlo en el navegador

Comportamiento JS:

- Guardar estado de cada checkbox en localStorage.
- Al recargar la pagina, restaurar el estado.
- Mostrar progreso (ej: "3/5 completadas").

### 6.3 — Recursos

**Contenido estatico:**

- Lista de links con icono y descripcion de una linea cada uno.
- Estilizados como tarjetas clickeables (hover con elevacion).

---

## Especificaciones tecnicas transversales

### Paleta de colores

| Uso                       | Color          | Hex     |
| ------------------------- | -------------- | ------- |
| Primario / links / acento | Azul           | #3B82F6 |
| Exito / correcto          | Verde          | #10B981 |
| Warning / atencion        | Ambar          | #F59E0B |
| Error                     | Rojo           | #EF4444 |
| Frontend                  | Azul           | #3B82F6 |
| Backend                   | Verde          | #10B981 |
| HTML                      | Naranja        | #F97316 |
| CSS                       | Violeta        | #8B5CF6 |
| JS                        | Amarillo       | #EAB308 |
| Fondo pagina              | Gris muy claro | #F8FAFC |
| Texto principal           | Gris oscuro    | #1E293B |
| Texto secundario          | Gris medio     | #64748B |

### Tipografia

- Titulos: sans-serif con peso bold (Inter, system-ui fallback)
- Cuerpo: sans-serif peso regular, 18px base, line-height 1.6
- Codigo: monospace (JetBrains Mono o Fira Code, monospace fallback)

### Responsive

- Mobile-first. Una columna en mobile, expandir a grids en tablet/desktop.
- Breakpoints: 640px, 1024px.
- Los SVG deben ser responsivos (viewBox, no width/height fijos).

### Animaciones

- Todas las animaciones respetan `prefers-reduced-motion`. Si el usuario tiene motion reducido, se reemplazan por transiciones de opacidad simples.
- Duraciones: 200-300ms para micro-interacciones, 500-800ms para animaciones de diagrama.
- Easing: ease-out para entradas, ease-in para salidas.

### Accesibilidad

- Todos los interactivos son operables con teclado (Tab, Enter, Space).
- Los SVG tienen `role="img"` y `aria-label` descriptivo.
- Las tarjetas flip tienen `aria-live="polite"` para anunciar el contenido al darse vuelta.
- Contraste minimo 4.5:1 para texto, 3:1 para elementos graficos.

### Comportamientos JS requeridos

1. **Barra de progreso:** listener de scroll, calculo de porcentaje, update de width.
2. **Reveal por pasos (seccion 1):** mostrar/ocultar elementos con clase CSS, controlar via botones.
3. **Tarjetas flip (seccion 1):** toggle de clase al click, transicion CSS.
4. **Cambio de extension (seccion 2):** listener de input, regex para extension, swap de icono.
5. **Checklist con estado (secciones 2 y 6):** listeners de change, read/write localStorage.
6. **Detector de atajos (seccion 3):** listener de keydown, match contra lista, feedback visual.
7. **Inspector simulado (seccion 4):** click en elementos, mostrar HTML correspondiente, edicion en vivo.
8. **Tabs de triada (seccion 5):** cambio de estado visual entre HTML/CSS/JS con transicion.
9. **Drag & drop clasificacion (seccion 5):** drag events con fallback click, validacion, feedback.
10. **Scroll progress + smooth scroll:** barra superior + boton hero.

### Estructura de archivos resultante

```
clases/
  introduccion/
    index.html
    introduccion.css
    introduccion.js
    assets/
      restaurante.svg
      biblioteca.svg
      vscode-layout.svg
      comparacion-editor.svg
      restaurante-frontend-backend.svg
      casa-triada.svg
      mapa-mental.svg
```
