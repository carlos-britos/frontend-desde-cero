# Plan de implementacion - Clase 2: Git — Control de versiones

## Estructura general de la pagina

La pagina sigue el mismo patron de scroll vertical continuo con secciones diferenciadas. El desafio central de esta clase es que Git es una herramienta de terminal que no produce output visual — compensamos con un simulador de terminal interactivo como pieza estrella, diagramas animados del flujo de archivos, y visualizaciones de ramas como grafos.

**Archivo principal:** `git.html`
**Estilos:** `css/git.css`
**Interactividad:** `js/git.js`

---

## Barra de progreso

Misma implementacion que la Clase 1: barra fina fija en el top, se llena con el scroll. Usa `shared.css`.

---

## Seccion 0: Hero / Intro

**Contenido estatico:**

- Titulo grande: "Clase 2: Git — Tu proyecto con memoria"
- Subtitulo: "Vas a aprender a guardar el historial completo de tu proyecto, volver atras en el tiempo, y trabajar en equipo sin pisar el trabajo del otro."
- Icono animado SVG: una linea de tiempo con nodos (commits) que aparecen secuencialmente con una animacion CSS. Los nodos son circulos conectados por una linea, y de uno de ellos sale una rama que se bifurca y vuelve a unirse (merge).

**Elemento interactivo:**

- Boton "Arranquemos" que hace smooth-scroll a la primera seccion.

**Ilustracion SVG del hero — "Timeline de commits"**

Descripcion del SVG:

- Linea horizontal principal (color #3B82F6).
- 4 circulos (nodos/commits) sobre la linea, espaciados uniformemente.
- Del segundo nodo sale una linea que sube en diagonal (la rama), tiene 2 nodos propios, y vuelve a unirse al nodo 4 (merge).
- Cada nodo tiene una animacion de aparicion escalonada (scale de 0 a 1, con delay incrementando).
- Los nodos de la rama principal son azules (#3B82F6), los de la rama secundaria son violetas (#8B5CF6).
- Cursor parpadeante al final de la linea principal simulando que el historial sigue.

---

## Seccion 1: Que es Git y por que existe

### 1.1 — Problema disparador

**Contenido estatico:**

- Texto grande centrado: "Imaginate que haces un cambio grande en tu proyecto y todo se rompe. Queres volver a como estaba antes... pero no te acordas que tocaste."
- Segunda linea: "Ahora imaginate eso pero con 5 personas tocando los mismos archivos."

### 1.2 — Analogia central (diagrama interactivo)

**Ilustracion SVG — "Git vs no tener Git"**

Diagrama dividido en dos mitades:

**Mitad izquierda — "Sin Git" (fondo #FEF2F2, borde #EF4444):**

- Carpeta con archivos desordenados.
- Archivos con nombres tipo: `index.html`, `index-backup.html`, `index-FINAL.html`, `index-FINAL-FINAL.html`, `index-NO-TOCAR.html`.
- Icono de caos/confusion (espirales, signos de pregunta).
- Label: "El caos de los backups manuales"

**Mitad derecha — "Con Git" (fondo #ECFDF5, borde #10B981):**

- Una linea de tiempo limpia con nodos etiquetados.
- Cada nodo tiene un mensaje corto: "Agrego header", "Corrijo typo", "Agrego contacto".
- Flecha señalando un nodo viejo con label: "Puedo volver aca cuando quiera".
- Label: "Historial limpio y organizado"

**Interactividad:**

- Al cargar se muestra solo la mitad izquierda.
- Boton "Con Git es asi:" que revela la mitad derecha con una transicion de slide lateral.
- El contraste visual entre el caos y el orden refuerza el "por que".

### 1.3 — Git vs GitHub

**Contenido estatico — Dos tarjetas lado a lado:**

| Git                         | GitHub                                    |
| --------------------------- | ----------------------------------------- |
| Icono: terminal/engranaje   | Icono: logo de GitHub (gato) simplificado |
| "Herramienta en tu compu"   | "Plataforma web"                          |
| "No necesita internet"      | "Necesita internet"                       |
| "Maneja tu historial local" | "Aloja tu repo en la nube"                |

**Callout:**

- "Git es como Word. GitHub es como Google Drive. Uno crea los documentos, el otro los guarda en la nube."

### 1.4 — Dato historico

**Contenido estatico:**

- Caja sutil: "Git fue creado en 2005 por Linus Torvalds (el mismo que creo Linux). Hoy lo usa el 95%+ de los equipos de desarrollo del mundo."

---

## Seccion 2: El repositorio — tu proyecto con memoria

### 2.1 — Analogia visual

**Ilustracion SVG — "La carpeta con superpoderes"**

Descripcion del SVG:

- Una carpeta comun (icono flat, color #3B82F6).
- Dentro de la carpeta, un listado de archivos normales (index.html, style.css, app.js).
- Al costado/debajo, una carpeta mas chica y oscura con label `.git` (color #1E293B con opacidad, icono de candado/secreto).
- De la carpeta `.git` salen lineas punteadas conectando a un "diario" abierto con fechas y mensajes.
- Label general: "Un repo es una carpeta con un diario secreto adentro"

### 2.2 — Como se crea (dos caminos)

**Contenido estatico — Dos tarjetas con codigo:**

**Tarjeta 1 — "Crear uno nuevo":**

- Icono: carpeta con signo +
- Codigo: `git init`
- Descripcion: "Le dice a Git: 'Empeza a seguir los cambios de esta carpeta'"
- Color borde: #10B981

**Tarjeta 2 — "Bajarte uno que ya existe":**

- Icono: nube con flecha abajo
- Codigo: `git clone <url>`
- Descripcion: "Te baja la carpeta completa con todo su historial"
- Color borde: #3B82F6

### 2.3 — Callout de advertencia

**Contenido estatico — Callout warning:**

- "No toques NUNCA la carpeta `.git`. Es la memoria de Git. Si la borras, perdes todo el historial."

---

## Seccion 3: Commits — las fotos de tu proyecto (PIEZA CENTRAL)

Esta es la seccion mas importante y mas larga. Contiene el simulador de terminal.

### 3.1 — Analogia del album de fotos

**Contenido estatico:**

- Texto: "Imaginate que estas renovando tu depto. Cada vez que terminas algo importante (pintaste una pared, pusiste un mueble, cambiaste el piso), sacas una foto y le pones una nota. Un commit es exactamente eso."

### 3.2 — Diagrama del flujo de 3 pasos (CLAVE)

**Ilustracion SVG interactiva — "Working Directory → Staging → Repository"**

Diagrama horizontal con 3 zonas conectadas por flechas:

| Zona              | Color fondo | Color borde | Icono                        | Label                         |
| ----------------- | ----------- | ----------- | ---------------------------- | ----------------------------- |
| Working Directory | #FFF7ED     | #F97316     | Archivos con lapiz           | "Tus archivos (donde editas)" |
| Staging Area      | #FFFBEB     | #F59E0B     | Carrito de supermercado      | "La zona de preparacion"      |
| Repository        | #ECFDF5     | #10B981     | Album de fotos / caja fuerte | "El historial (commits)"      |

**Flechas entre zonas:**

- De Working a Staging: label `git add` (color ambar)
- De Staging a Repository: label `git commit` (color verde)

**Interactividad — paso a paso:**

- Estado 0: solo se ve "Working Directory" con archivos marcados en rojo (modificados).
- Boton "git add" (o click en la flecha): los archivos "viajan" a Staging (animacion de traslado) y se ponen amarillos.
- Boton "git commit": los archivos viajan a Repository, se crea un nodo nuevo en el historial, se ponen verdes.
- Boton "Reiniciar": vuelve al estado inicial.

Debajo del diagrama, texto explicativo que cambia segun el paso activo:

- Paso 0: "Editaste archivos. Git los ve en rojo porque cambiaron."
- Paso 1: "Con `git add` los moves al carrito. Estan listos para commitear."
- Paso 2: "Con `git commit` sacas la foto. Quedan guardados para siempre."

### 3.3 — Analogia del carrito de supermercado

**Contenido estatico — Callout:**

- "Pensalo asi: estas en un super. `git add` es meter productos al carrito. `git commit` es pasar por caja. Lo que no pusiste en el carrito queda en la gondola esperando."

### 3.4 — Simulador de terminal (PIEZA ESTRELLA INTERACTIVA)

**Elemento interactivo — Terminal simulada**

Un componente que imita una terminal de VS Code donde el alumno puede escribir comandos de Git y ver respuestas simuladas. NO es una terminal real — es una simulacion JS con respuestas prearmadas.

**Diseno visual:**

- Fondo #0F172A (azul muy oscuro), bordes redondeados (16px).
- Barra superior con 3 circulos (rojo, amarillo, verde) simulando controles de ventana.
- Titulo en la barra: "Terminal — mi-proyecto".
- Fuente monospace (JetBrains Mono), color principal #E2E8F0.
- Prompt: `~/mi-proyecto $` en verde (#10B981).
- Cursor parpadeante despues del prompt.

**Comandos soportados:**

| Comando                               | Respuesta simulada                                                                  |
| ------------------------------------- | ----------------------------------------------------------------------------------- |
| `git init`                            | "Initialized empty Git repository in ~/mi-proyecto/.git/"                           |
| `git status` (sin cambios)            | "On branch main\nNothing to commit, working tree clean"                             |
| `git status` (con cambios pendientes) | Muestra archivos en rojo (modificados) y verdes (en staging) segun el estado actual |
| `git add index.html`                  | (silencio — exito) Actualiza el estado interno moviendo el archivo a staging        |
| `git add .`                           | (silencio — exito) Mueve todos los archivos a staging                               |
| `git commit -m "mensaje"`             | "1 file changed, 5 insertions(+)\n[main abc1234] mensaje"                           |
| `git log`                             | Muestra historial de commits hechos con hash, fecha y mensaje                       |
| `git branch`                          | Muestra las ramas (\* main)                                                         |
| `git switch -c nombre`                | "Switched to a new branch 'nombre'"                                                 |
| `git switch main`                     | "Switched to branch 'main'"                                                         |
| `help`                                | Lista los comandos disponibles                                                      |
| `clear`                               | Limpia la pantalla                                                                  |

**Estado interno del simulador:**

- Lista de archivos con estado (untracked, modified, staged, committed).
- Lista de commits realizados.
- Rama actual.
- El simulador pre-carga un estado inicial: un archivo `index.html` como "untracked".

**Panel visual al costado (o arriba en mobile):**

- Un mini diagrama simplificado del flujo (Working → Staging → Repo) que se actualiza EN TIEMPO REAL segun lo que el alumno escribe.
- Cuando hace `git add`, el archivo se mueve visualmente a Staging.
- Cuando hace `git commit`, aparece un nuevo nodo en el historial.
- Esto conecta lo que tipean con el diagrama de la seccion anterior.

**Guia paso a paso (modo tutorial):**

- Un panel lateral/inferior con instrucciones paso a paso que guian al alumno:
  1. "Escribi `git status` para ver que archivos hay"
  2. "Ahora escribi `git add index.html` para prepararlo"
  3. "Escribi `git status` de nuevo — fijate como cambio el color"
  4. "Ahora hace el commit: `git commit -m \"Creo pagina principal\"`"
  5. "Escribi `git log` para ver tu historial"
- Cada paso se marca como completado cuando el alumno ejecuta el comando correcto.
- Al completar todos, mensaje de felicitacion.

**Dimensiones:**

- Desktop: terminal ocupa ~60% del ancho, panel visual 40%.
- Mobile: terminal arriba (100% ancho), panel visual abajo colapsable.

### 3.5 — Buenos mensajes de commit

**Contenido estatico — Tabla visual tipo "Bien vs Mal":**

Dos columnas con tarjetas:

| Mal (fondo rojo suave, tachado) | Bien (fondo verde suave, check)        |
| ------------------------------- | -------------------------------------- |
| "cambios"                       | "Agrego formulario de contacto"        |
| "arregle cosas"                 | "Corrijo error en validacion de email" |
| "wip"                           | "Agrego estilos al header"             |
| "asdfghj"                       | "Elimino archivos de prueba"           |

**Callout:**

- "El mensaje tiene que explicar QUE hiciste de forma que si lo lees en 3 meses, entiendas sin abrir el codigo."

---

## Seccion 4: Ramas — universos paralelos

### 4.1 — Analogia visual

**Ilustracion SVG animada — "La casa en construccion"**

Descripcion del SVG:

- Una casa completa y prolija a la izquierda (label: "main — tu casa funcional").
- Una flecha diagonal hacia arriba-derecha.
- Una copia de la casa con una pileta dibujada al lado (label: "rama — probas la pileta").
- Dos posibles resultados con flechas:
  - Flecha verde hacia la casa original: "Quedo bien → la agregas a main" (la casa ahora tiene pileta).
  - Flecha roja con una X: "Quedo mal → la borras sin afectar la casa".

### 4.2 — Diagrama de ramas (INTERACTIVO)

**Ilustracion SVG interactiva — "Visualizacion de ramas"**

Diagrama estilo grafo (tipo lo que muestra `git log --graph`):

- Linea principal horizontal (main) con nodos (commits) en azul (#3B82F6).
- Desde un nodo, una linea que sale hacia arriba creando una rama paralela con nodos en violeta (#8B5CF6).
- La rama puede volver a unirse (merge) al final.

**Interactividad — Timeline controlable:**

Botones debajo del diagrama:

1. "Crear rama" — Se anima una nueva linea saliendo del ultimo commit de main. Aparece un label "feature/agregar-estilos".
2. "Hacer commit en rama" — Se agrega un nodo en la rama con un mini mensaje.
3. "Volver a main" — Se resalta la linea de main (la rama queda desaturada).
4. "Merge" — La rama vuelve a conectarse con main con animacion. Aparece un nodo de merge.
5. "Reiniciar" — Vuelve al estado inicial.

Texto explicativo debajo que cambia segun el paso activo:

- "Estas en main. Tu codigo funciona bien."
- "Creaste una rama. Ahora podes probar cosas sin romper main."
- "Hiciste un commit en la rama. Main sigue igual."
- "Volviste a main. Los cambios de la rama no estan aca."
- "Merge: los cambios de la rama ahora estan en main."

### 4.3 — Comandos de ramas

**Contenido estatico — Tarjetas con codigo:**

| Comando                | Que hace              |
| ---------------------- | --------------------- |
| `git branch`           | Ver en que rama estas |
| `git switch -c nombre` | Crear rama y moverte  |
| `git switch main`      | Volver a main         |

Cada tarjeta tiene el comando en fuente monospace grande y la explicacion abajo en texto normal.

### 4.4 — Convenciones de nombres

**Contenido estatico — Mini callout:**

- `feature/nombre-de-lo-que-haces` — Para funcionalidades nuevas.
- `fix/que-estas-arreglando` — Para correcciones.
- "Siempre en minusculas, sin espacios (usar guiones)."

---

## Seccion 5: El repositorio remoto y GitHub

### 5.1 — Diagrama local vs remoto (CLAVE)

**Ilustracion SVG interactiva — "Tu compu y GitHub"**

Diagrama con dos columnas grandes y flechas animadas entre ellas:

**Columna izquierda — "Tu computadora (LOCAL)" (fondo #EFF6FF, borde #3B82F6):**

- Icono de laptop.
- Dentro: representacion de Working Dir, Staging, Repo Local (mini version del diagrama de la seccion 3).

**Columna derecha — "GitHub (REMOTO)" (fondo #F5F3FF, borde #8B5CF6):**

- Icono del logo de GitHub simplificado.
- Dentro: representacion del repositorio remoto con nodos de commits.

**Flechas entre las columnas:**

- Flecha hacia la derecha (de local a remoto): label `git push` — color verde (#10B981).
- Flecha hacia la izquierda (de remoto a local): label `git pull` — color ambar (#F59E0B).
- Flecha grande desde la columna derecha: label `git clone` — color azul.

**Interactividad:**

- Las flechas se animan al hacer hover (stroke-dashoffset animation).
- Boton "Simular push": un commit viaja de local a remoto con animacion de particula.
- Boton "Simular pull": un commit viaja de remoto a local.
- Boton "Simular clone": toda la columna derecha se "copia" a la izquierda.

### 5.2 — Paso a paso para conectar

**Contenido estatico — Tarjetas numeradas verticales:**

1. "Crear repo en GitHub (boton 'New repository')"
2. "Conectar: `git remote add origin <url>`"
3. "Subir: `git push -u origin main`"
4. "Verificar en GitHub que aparecio tu codigo"

Cada tarjeta tiene un circulo con el numero, el comando si aplica, y una explicacion de una linea.

### 5.3 — Callout aclaratorio

**Contenido estatico:**

- "Subir codigo a GitHub NO es lo mismo que publicar una pagina web. GitHub guarda el codigo, no lo ejecuta."

---

## Seccion 6: Flujo de trabajo en equipo

### 6.1 — Diagrama del flujo completo (ANIMACION)

**Ilustracion SVG animada — "El flujo de trabajo real"**

Diagrama vertical (tipo infografia/flowchart) con 5 pasos conectados por flechas:

| Paso | Icono              | Comando                            | Descripcion                   |
| ---- | ------------------ | ---------------------------------- | ----------------------------- |
| 1    | Flecha abajo       | `git pull`                         | "Bajo lo ultimo de main"      |
| 2    | Rama saliendo      | `git switch -c feature/mi-tarea`   | "Creo mi espacio de trabajo"  |
| 3    | Nodos acumulandose | `git add . && git commit -m "..."` | "Trabajo y voy guardando"     |
| 4    | Flecha arriba/nube | `git push`                         | "Subo mi trabajo a GitHub"    |
| 5    | Icono de PR/merge  | "Abrir Pull Request"               | "Pido que revisen y aprueben" |

**Interactividad — Animacion escalonada:**

- Los pasos aparecen uno por uno con un delay de 800ms entre cada uno (animacion de entrada desde abajo con opacity).
- Boton "Ver paso a paso" vs "Ver todo junto".
- Al pasar por cada paso, un highlight visual lo rodea y un texto explicativo corto aparece al costado.

### 6.2 — Analogia del Pull Request

**Contenido estatico — Callout:**

- "Un PR es como el control de calidad en una fabrica. Vos armas la pieza (tu rama). Antes de que entre a produccion (main), alguien la revisa. Si esta bien, se aprueba. Si hay algo para corregir, te lo devuelven con notas."

---

## Seccion 7: Conceptos que vas a escuchar

### 7.1 — Merge y conflictos

**Contenido estatico — Mini diagrama + texto:**

SVG simple mostrando dos ramas que modifican la misma linea y un signo de exclamacion donde se cruzan.

Texto: "Cuando dos personas tocan la misma linea, Git te pide que elijas. No te asustes: es normal y tiene solucion."

### 7.2 — .gitignore

**Contenido estatico — Tarjeta con codigo:**

```
node_modules/
.env
.DS_Store
```

Texto: "Este archivo le dice a Git que cosas NO seguir. Cosas pesadas, secretos, archivos basura del sistema."

### 7.3 — Tarjetas flip — "Git vs GitHub" (refuerzo)

**Elemento interactivo — 3 tarjetas flip rapidas:**

| Frente (pregunta)                   | Dorso (respuesta)                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| "Necesitas internet para usar Git?" | "No. Git funciona 100% local. Solo necesitas internet para push/pull."        |
| "GitHub es la unica opcion?"        | "No. Existen GitLab, Bitbucket, etc. La herramienta (Git) es la misma."       |
| "Push y commit son lo mismo?"       | "No. Commit guarda local. Push sube al remoto. Primero commit, despues push." |

---

## Seccion 8: Cierre y proximos pasos

### 8.1 — Resumen en 5 frases

**Contenido estatico — 5 tarjetas numeradas apiladas:**

1. "Git guarda el historial de tu proyecto. Cada checkpoint es un commit."
2. "El flujo: cambiar archivos → `git add` → `git commit`."
3. "Las ramas te dejan probar cosas sin romper main."
4. "GitHub = backup + trabajo en equipo. Push sube, pull baja."
5. "En equipo: pull, rama, commit, push, PR, merge. Ese es el ciclo."

### 8.2 — Tarea para la proxima clase

**Elemento interactivo — Checklist persistente (localStorage):**

1. [ ] Tener Git instalado (verificar con `git --version`)
2. [ ] Tener una cuenta en GitHub
3. [ ] Crear un repositorio local con al menos 3 commits descriptivos
4. [ ] Conectar el repo con GitHub y hacer push exitosamente
5. [ ] (Bonus) Crear una rama, hacer un cambio, commitear, y volver a main

Comportamiento JS: mismo que la Clase 1 — guarda estado en localStorage, muestra progreso ("3/5 completadas"), barra de progreso visual.

### 8.3 — Recursos

**Contenido estatico — Tarjetas de recursos:**

- [Git - Documentacion oficial](https://git-scm.com/doc) — "La referencia completa"
- [GitHub - Guia para principiantes](https://docs.github.com/en/get-started) — "Guia oficial para arrancar"
- [Oh Shit, Git!?!](https://ohshitgit.com/) — "Para cuando la cagas (en ingles pero muy util)"
- [Learn Git Branching](https://learngitbranching.js.org/) — "Juego interactivo para entender ramas"

---

## Especificaciones tecnicas transversales

### Paleta de colores

Misma paleta base que la Clase 1, con agregados especificos para Git:

| Uso                                      | Color       | Hex     |
| ---------------------------------------- | ----------- | ------- |
| Commits / principal                      | Azul        | #3B82F6 |
| Ramas secundarias                        | Violeta     | #8B5CF6 |
| Working Directory / archivos modificados | Naranja     | #F97316 |
| Staging Area                             | Ambar       | #F59E0B |
| Repository / commits exitosos            | Verde       | #10B981 |
| Errores / conflictos                     | Rojo        | #EF4444 |
| Terminal fondo                           | Azul oscuro | #0F172A |
| Terminal texto                           | Gris claro  | #E2E8F0 |
| Terminal prompt                          | Verde       | #10B981 |
| GitHub / remoto                          | Violeta     | #8B5CF6 |

### Tipografia

Misma que Clase 1. La fuente monospace (JetBrains Mono) tiene protagonismo extra por la cantidad de comandos y la terminal simulada.

### Responsive

- Mobile-first.
- El simulador de terminal se adapta: en desktop tiene el panel visual al costado (layout 60/40); en mobile va uno arriba del otro.
- Los diagramas SVG usan viewBox responsivo.
- Breakpoints: 640px, 1024px.

### Animaciones

- Todas respetan `prefers-reduced-motion`.
- El simulador de terminal usa typing animation (aparicion caracter por caracter para las respuestas, 20-30ms por caracter).
- Los diagramas de ramas usan stroke-dashoffset para animar las lineas "dibujandose".
- Las transiciones entre estados del flujo usan transform + opacity (300ms ease-out).

### Accesibilidad

- La terminal simulada es accesible: el input es un `<input>` real con label, las respuestas usan `aria-live="polite"`.
- Los SVG tienen `role="img"` y `aria-label`.
- Las tarjetas flip tienen `aria-live="polite"`.
- Todo operable con teclado.
- Los colores de estado (rojo/amarillo/verde para archivos) se complementan con texto y no dependen solo del color.

### Comportamientos JS requeridos

1. **Barra de progreso:** listener de scroll, calculo de porcentaje.
2. **Reveal "Con Git vs Sin Git" (seccion 1):** boton que revela la segunda mitad.
3. **Diagrama flujo 3 pasos (seccion 3):** animacion de archivos moviendose entre zonas controlada por botones.
4. **Simulador de terminal (seccion 3):**
   - Parser de comandos con estado interno (archivos, staging, commits, rama actual).
   - Historial de comandos (flecha arriba/abajo para navegar).
   - Autocompletado basico (Tab).
   - Typing animation para respuestas.
   - Sync con panel visual.
   - Modo tutorial con pasos guiados.
5. **Diagrama de ramas interactivo (seccion 4):** control por botones, animacion de nodos y lineas con SVG.
6. **Diagrama local vs remoto (seccion 5):** animacion de particulas viajando entre columnas al simular push/pull/clone.
7. **Flujo de equipo animado (seccion 6):** aparicion escalonada controlada por boton.
8. **Tarjetas flip (seccion 7):** toggle de clase con rotateY.
9. **Checklist persistente (seccion 8):** localStorage read/write.
10. **Smooth scroll:** boton hero.

### Estructura de archivos resultante

```
clases/
  git.html
  css/
    shared.css    (ya existe)
    git.css
  js/
    git.js
```

### Notas de implementacion

- El simulador de terminal es la pieza mas compleja. Conviene implementarlo como un modulo JS autocontenido con un API clara (`Terminal.execute(command)`, `Terminal.getState()`, etc.).
- El estado del simulador debe ser resetteable para que el alumno pueda repetir los ejercicios.
- Los diagramas SVG inline (no archivos externos) permiten animarlos con CSS/JS sin problemas de carga.
- La clase es mas larga que la Clase 1 en cantidad de contenido pero la interactividad (especialmente la terminal) deberia mantener la atencion.
