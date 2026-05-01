# Clase 1: Introduccion

## Datos de la clase

- **Duracion estimada:** 60-75 minutos
- **Requisitos previos:** Ninguno. Solo tener una computadora con internet.
- **Herramientas necesarias:** Un navegador (Chrome recomendado), acceso a internet.

---

## Objetivos de aprendizaje

Al terminar esta clase, el estudiante va a poder:

1. Explicar con sus palabras que pasa cuando escribe una direccion web y aprieta Enter.
2. Crear, renombrar y organizar archivos y carpetas, entendiendo que significa la extension de un archivo.
3. Usar el navegador como herramienta de trabajo (no solo para "mirar paginas").
4. Distinguir que es frontend y que es backend, y saber donde se ubica lo que va a aprender.
5. Sentirse comodo con las herramientas basicas antes de escribir la primera linea de codigo.

---

## Conceptos clave (glosario rapido)

| Concepto         | Definicion simple                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Internet         | Una red mundial de computadoras conectadas entre si que se pasan informacion.                            |
| Navegador        | El programa que usas para ver paginas web (Chrome, Firefox, Edge).                                       |
| Servidor         | Una computadora que esta prendida 24/7 esperando que le pidan cosas para mandarlas.                      |
| URL              | La direccion de una pagina web, como la direccion de una casa pero en internet.                          |
| DNS              | Una guia telefonica gigante que traduce nombres (google.com) a numeros que las computadoras entienden.   |
| Archivo          | Un bloque de informacion guardado con un nombre y una extension (.html, .jpg, .txt).                     |
| Extension        | Las letras despues del punto en un nombre de archivo. Le dicen a la compu que tipo de contenido tiene.   |
| Editor de codigo | Un programa para escribir codigo, como un bloc de notas pero con superpoderes (colores, autocompletado). |
| Frontend         | Todo lo que el usuario ve y toca en una pagina web (textos, botones, colores, animaciones).              |
| Backend          | Todo lo que pasa "detras de escena" (bases de datos, logica del servidor, autenticacion).                |

---

## Bloque 1: Como funciona internet (15 min)

### Contexto para el instructor

Dato actual: en 2026 hay mas de 6.000 millones de personas usando internet en el mundo, casi el 74% de la poblacion mundial. Cada vez que alguien abre una pagina, esta pasando lo que vamos a explicar aca.

### Guion

**Arrancamos con una pregunta:** "Cuando abris Instagram, Netflix o Google... que pensas que esta pasando? De donde sale toda esa informacion?"

**Analogia central: el restaurante**

Pensalo asi:

- **Tu computadora (el navegador)** es como vos sentado en un restaurante. Sos el cliente.
- **El servidor** es la cocina del restaurante. Tiene toda la comida (la informacion, las paginas, las fotos, los videos).
- **La URL** es lo que vos le pedis al mozo: "Quiero la milanesa napolitana" → "Quiero la pagina www.google.com".
- **Internet** es el mozo que lleva tu pedido a la cocina y te trae el plato.

**Que pasa paso a paso cuando escribis una URL:**

1. **Escribis la direccion** (por ejemplo, `www.youtube.com`) y apretas Enter.
2. **El DNS traduce el nombre a un numero.** Las computadoras no entienden "youtube.com", necesitan un numero (una direccion IP, tipo 142.250.185.46). El DNS es como una guia telefonica: vos decis el nombre y te devuelve el numero.
3. **Tu navegador manda un pedido** al servidor de YouTube: "Che, mandame tu pagina principal".
4. **El servidor responde** mandando los archivos: el HTML (la estructura), el CSS (los colores y el diseno), el JavaScript (la interactividad), las imagenes, los videos.
5. **Tu navegador arma todo** y te lo muestra en pantalla.

**Lo clave para llevarse:** hay DOS computadoras involucradas siempre. La tuya (que pide) y la del otro lado (que responde). Toda la web funciona asi: pedido y respuesta.

### Errores comunes de principiantes

- Pensar que "internet" y "Google" son lo mismo. Google es UN servicio dentro de internet.
- Creer que las paginas "estan en el navegador". No, estan en servidores que pueden estar en cualquier parte del mundo.
- Confundir WiFi con internet. WiFi es como te conectas (el cable invisible), internet es la red a la que te conectas.

### Ejercicio sugerido

Abrir el navegador, escribir una URL cualquiera y mientras carga, decir en voz alta: "Mi computadora le esta pidiendo archivos a un servidor que esta en algun lugar del mundo". Parece tonto, pero fija el concepto.

---

## Bloque 2: Archivos, carpetas y extensiones (15 min)

### Guion

**Analogia central: la biblioteca**

Tu computadora es como una biblioteca:

- **Las carpetas** son las estanterias y los estantes. Organizan.
- **Los archivos** son los libros. Cada uno tiene contenido diferente.
- **La extension** es el genero del libro. Si dice ".novela" sabes que es ficcion. Si dice ".receta" sabes que es de cocina. En la compu, la extension le dice al sistema que programa usar para abrirlo.

**Extensiones que nos importan en este curso:**

| Extension       | Que es                          | Analogia                                         |
| --------------- | ------------------------------- | ------------------------------------------------ |
| `.html`         | Estructura de una pagina web    | Los ladrillos y paredes de una casa              |
| `.css`          | Estilos y diseno visual         | La pintura, los muebles, la decoracion           |
| `.js`           | Comportamiento e interactividad | La electricidad, las canillas, lo que "funciona" |
| `.txt`          | Texto plano, sin formato        | Una hoja de papel con texto escrito a mano       |
| `.jpg` / `.png` | Imagenes                        | Fotos y dibujos                                  |
| `.pdf`          | Documento con formato fijo      | Un libro impreso que no podes editar             |

**Demostracion practica:**

1. Crear una carpeta llamada `mi-primer-proyecto` en el escritorio.
2. Dentro, crear un archivo de texto y renombrarlo a `prueba.html`.
3. Mostrar que SI te animaste a cambiar la extension de `.txt` a `.html`, Windows/Mac ahora lo trata distinto: si le haces doble clic, se abre en el navegador en vez del bloc de notas.

**Lo clave:** la extension NO cambia el contenido del archivo. Solo le dice a la computadora como tratarlo. Si renombras una foto `.jpg` a `.txt`, no se convierte en texto; simplemente la compu se confunde e intenta abrirla con el programa equivocado.

### Errores comunes de principiantes

- No saber donde guardaron un archivo (descargas vs escritorio vs documentos).
- Tener las extensiones ocultas en Windows (por default vienen ocultas!) y no poder cambiarlas.
- Crear `index.html.txt` sin darse cuenta porque Windows agrega `.txt` escondido.

### Ejercicio sugerido

1. Ir al explorador de archivos (o Finder en Mac).
2. Activar la opcion "Mostrar extensiones de archivo" (en Windows: Vista > Extensiones de nombre de archivo).
3. Crear la carpeta `frontend-desde-cero` en Documentos.
4. Dentro, crear tres archivos vacios: `index.html`, `estilos.css`, `app.js`.
5. Hacer doble clic en cada uno y ver con que programa se abre cada uno.

---

## Bloque 3: Usar la computadora con soltura (10 min)

### Guion

**Intro directa:** "Si la compu la usas solo para WhatsApp Web y YouTube, hay algunas cosas que necesitas manejar antes de arrancar a programar. No es dificil, pero si no las practicas te van a frenar."

**Habilidades minimas necesarias:**

1. **Manejar ventanas:** Tener dos o tres programas abiertos al mismo tiempo y pasar de uno a otro.
   - Windows: `Alt + Tab`
   - Mac: `Cmd + Tab`
   - Tip: Dividir la pantalla (editor a la izquierda, navegador a la derecha) va a ser tu forma de trabajo habitual.

2. **Copiar y pegar:** Parece basico pero hay gente que no usa atajos de teclado.
   - `Ctrl + C` (copiar), `Ctrl + V` (pegar), `Ctrl + X` (cortar)
   - Mac: reemplazar `Ctrl` por `Cmd`

3. **Buscar dentro de una pagina o documento:**
   - `Ctrl + F` (buscar) — funciona en TODOS lados: navegador, editor, PDFs.

4. **Navegar el sistema de archivos:**
   - Saber donde esta la carpeta de Descargas.
   - Saber crear carpetas nuevas.
   - Saber mover archivos de un lugar a otro (arrastrar o cortar/pegar).

5. **Usar multiples pestanas en el navegador:**
   - `Ctrl + T` (nueva pestana), `Ctrl + W` (cerrar pestana)
   - Saber tener abiertas varias cosas: tu pagina, la documentacion, Google.

**Analogia:** Programar es como cocinar un plato complejo. Necesitas tener varios ingredientes a mano, ir de la receta a la mesada, usar varias herramientas. Si cada vez que necesitas la sal tenes que ir al supermercado, se te quema todo.

### Ejercicio sugerido

Desafio cronometrado (5 minutos):

1. Abrir el navegador con 3 pestanas: Google, YouTube, y Wikipedia.
2. Abrir el explorador de archivos.
3. Dividir la pantalla entre el navegador y el explorador.
4. Crear una carpeta nueva desde el explorador.
5. Buscar la palabra "internet" en la pagina de Wikipedia usando `Ctrl + F`.
6. Copiar la primera oracion y pegarla en un archivo de texto nuevo dentro de la carpeta que creaste.

Si pudiste hacer todo eso sin trabarte, estas listo para arrancar a programar.

---

## Bloque 4: El editor de codigo y el navegador como herramientas de trabajo (15 min)

### Guion

**El editor de codigo: VS Code**

"Vamos a hablar de la herramienta donde vas a pasar la mayor parte del tiempo: el editor de codigo."

**Que es:** Un programa para escribir codigo. Es como el Word, pero diseñado para programadores. En 2026, VS Code (Visual Studio Code, hecho por Microsoft) es usado por mas del 70% de los desarrolladores del mundo. Es gratis, liviano y tiene miles de extensiones.

**Por que no usamos el bloc de notas comun?** Porque el bloc de notas:

- No colorea el codigo (syntax highlighting).
- No te ayuda a completar lo que estas escribiendo (autocompletado).
- No te avisa cuando metes la pata.
- No te deja manejar proyectos con muchos archivos facilmente.

**VS Code SI hace todo eso.** Es como comparar escribir una carta a mano con usar un procesador de texto que te subraya los errores de ortografia.

**Cosas clave que van a ver en VS Code:**

- El explorador de archivos a la izquierda (tu proyecto, con todas sus carpetas).
- El area de edicion en el centro (donde escribis codigo).
- La terminal integrada abajo (una linea de comandos, la van a usar mas adelante).
- Los colores del codigo: cada tipo de cosa tiene un color distinto para que sea mas facil leer.

---

**El navegador como herramienta de trabajo: DevTools**

"Chrome no es solo para mirar paginas. Tiene herramientas secretas que te permiten ver COMO esta hecha cualquier pagina."

**Como abrir las DevTools (herramientas de desarrollador):**

- Click derecho en cualquier elemento de una pagina → "Inspeccionar"
- O apretar `F12`
- O `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac)

**Que podes hacer con DevTools:**

1. **Ver la estructura HTML** de cualquier pagina (la pestaña Elements).
2. **Ver y modificar los estilos CSS** en vivo (los cambios son temporales, se pierden al recargar).
3. **Ver errores de JavaScript** en la consola (Console).
4. **Ver los archivos que se descargaron** del servidor (Network).

**Demostracion sugerida:**

1. Abrir cualquier pagina (por ejemplo, google.com).
2. Click derecho en el logo de Google → Inspeccionar.
3. Mostrar que se resalta el codigo HTML que corresponde a ese logo.
4. Cambiar el texto de algun elemento en vivo y ver como cambia la pagina.
5. Aclarar: "Esto es TEMPORAL. Solo cambia en TU pantalla. No hackeaste nada."

**Analogia:** Las DevTools son como los rayos X de una pagina web. Te dejan ver los huesos (HTML), la piel (CSS) y el sistema nervioso (JavaScript) de cualquier sitio.

### Errores comunes de principiantes

- Asustarse con las DevTools porque "parece mucho codigo". Tranquilo, no tenes que entender todo de entrada.
- Pensar que modificar algo con Inspeccionar cambia la pagina real. No, solo cambia lo que ves vos, y desaparece al recargar.
- No instalar VS Code y querer programar en el bloc de notas. Se puede, pero es como clavar clavos con un zapato.

### Ejercicio sugerido

1. Descargar e instalar VS Code desde https://code.visualstudio.com.
2. Abrir la carpeta `frontend-desde-cero` que crearon antes desde VS Code (File > Open Folder).
3. Abrir el archivo `index.html` y escribir: `Hola mundo`.
4. Guardar (`Ctrl + S`).
5. Ir al explorador de archivos, hacer doble clic en `index.html`. Se abre en el navegador y muestra "Hola mundo".
6. Click derecho en "Hola mundo" → Inspeccionar. Ver el codigo que escribieron reflejado en las DevTools.

---

## Bloque 5: Frontend vs Backend — Que es "la web" (10 min)

### Guion

**Analogia central: el restaurante (parte 2)**

Volvemos al restaurante:

- **El frontend** es TODO lo que el cliente ve y toca: el salon, las mesas, el menu impreso, la decoracion, la musica, la iluminacion. Es la EXPERIENCIA del cliente.
- **El backend** es TODO lo que pasa en la cocina y la trastienda: la preparacion de la comida, el inventario, el proveedor, la heladera, la logistica. El cliente no lo ve, pero sin eso no hay restaurante.

**Traducido a la web:**

|                 | Frontend                                                                                                                  | Backend                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Que hace**    | Lo que ves y tocas en la pagina                                                                                           | Lo que procesa datos y logica del otro lado                                                                           |
| **Lenguajes**   | HTML, CSS, JavaScript                                                                                                     | Python, PHP, Java, Ruby, Node.js                                                                                      |
| **Donde corre** | En TU navegador (tu computadora)                                                                                          | En el servidor (la computadora del otro lado)                                                                         |
| **Ejemplos**    | Un boton que cambia de color al pasar el mouse, un formulario que valida tu email, una animacion, el layout de una pagina | Verificar tu contraseña, guardar tu foto de perfil, calcular el precio con descuento, mandar un email de confirmacion |

**La triada del frontend:**

1. **HTML** = La estructura. Los huesos. Que elementos hay en la pagina (titulos, parrafos, imagenes, botones).
2. **CSS** = La presentacion. La piel y la ropa. Como se VEN esos elementos (colores, tamaños, posiciones, tipografia).
3. **JavaScript** = El comportamiento. El cerebro y los musculos. Que HACEN esos elementos cuando interactuas (abrir un menu, validar un formulario, cargar mas contenido).

**Por que empezamos con frontend?**

- Ves los resultados al instante: guardas el archivo, recargas el navegador y ya ves el cambio.
- No necesitas instalar servidores ni bases de datos para arrancar.
- Es mas tangible: estas diseñando algo visual, no logica invisible.
- Es la puerta de entrada mas accesible al mundo de la programacion.

**Que NO es este curso:**

- No vamos a ver bases de datos.
- No vamos a aprender Python ni PHP.
- No vamos a hacer aplicaciones de escritorio ni apps de celular (al menos no directamente).
- Nos concentramos en HTML + CSS + JavaScript: las tres herramientas para construir lo que la gente ve e interactua en la web.

### Errores comunes de principiantes

- Querer aprender todo a la vez (frontend + backend + devops + mobile). Enfocate en una cosa.
- Pensar que frontend es "mas facil" o "menos importante" que backend. Son distintos, no hay jerarquia.
- Confundir "programar" con solo JavaScript. HTML y CSS tambien son lenguajes (aunque no son "de programacion" en sentido estricto, son fundamentales).

### Ejercicio sugerido

Abrir 3 paginas web que uses seguido (puede ser Instagram, MercadoLibre, algun diario) y para cada una, responder:

1. Que cosas de las que veo son frontend? (todo lo visual: botones, textos, imagenes, animaciones)
2. Que cosas sospecho que son backend? (login, busqueda de productos, recomendaciones personalizadas, carrito de compras guardado)

---

## Cierre de la clase (5 min)

### Resumen en 5 frases

1. Internet es una red de computadoras. Cuando abris una pagina, tu compu le pide archivos a otra compu (el servidor) y el navegador los muestra.
2. Los archivos tienen extensiones que indican su tipo. En este curso vamos a trabajar con `.html`, `.css` y `.js`.
3. Manejar la compu con soltura (ventanas, atajos, sistema de archivos) es un prerequisito no negociable.
4. VS Code es tu taller. Chrome con las DevTools es tu laboratorio. Vas a vivir entre esos dos programas.
5. Frontend es lo que se ve. Backend es lo que no se ve. Nosotros vamos por el frontend: HTML + CSS + JavaScript.

### Tarea para la proxima clase

1. Tener instalado **VS Code** (https://code.visualstudio.com).
2. Tener instalado **Google Chrome** (https://www.google.com/chrome).
3. Tener creada la carpeta `frontend-desde-cero` con los archivos `index.html`, `estilos.css` y `app.js` adentro.
4. Haber abierto las DevTools en al menos 2 paginas web y haber "inspeccionado" algun elemento.
5. (Bonus) Abrir `index.html` en VS Code, escribir `Hola, soy [tu nombre]` guardarlo y abrirlo en Chrome.

---

## Recursos complementarios

- [MDN - Como funciona la web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) — Explicacion de Mozilla sobre como funciona la web.
- [Cloudflare - Que es DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) — Explicacion visual del sistema de nombres de dominio.
- [Chrome DevTools - Documentacion oficial](https://developer.chrome.com/docs/devtools/) — Guia completa de las herramientas de desarrollador de Chrome.
- [VS Code - Descarga](https://code.visualstudio.com) — Sitio oficial para descargar el editor.

---

## Notas para el disenador de la clase

- El tono debe ser informal y amigable. Tutear al estudiante. Usar "vos" (rioplatense).
- Las analogias del restaurante y la biblioteca son los hilos conductores. Mantenerlas consistentes.
- La demostracion de DevTools es el momento "wow" de la clase. Darle importancia.
- No apurarse en el Bloque 2 (archivos). Es donde mas tropiezan los principiantes reales.
- Si la clase es en vivo, hacer las demostraciones en pantalla compartida. Si es grabada, incluir screencast.
- Considerar incluir capturas de pantalla de: VS Code abierto, DevTools abierto, el explorador de archivos con extensiones visibles.
