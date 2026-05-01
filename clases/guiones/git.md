# Clase 2: Git — Control de versiones

## Datos de la clase

- **Duracion estimada:** 70-90 minutos
- **Requisitos previos:** Saber manejar archivos y carpetas (Clase 1). Tener VS Code instalado.
- **Herramientas necesarias:** Git instalado, una cuenta en GitHub, VS Code con terminal integrada.

---

## Objetivos de aprendizaje

Al terminar esta clase, el estudiante va a poder:

1. Explicar que es un repositorio, un commit y una rama con sus propias palabras.
2. Crear un repositorio local, hacer commits y ver el historial de cambios.
3. Conectar su repositorio local con GitHub y subir sus cambios.
4. Crear una rama nueva, trabajar en ella y entender por que sirve.
5. Seguir el flujo basico de trabajo con Git que se usa en equipos reales.

---

## Conceptos clave (glosario rapido)

| Concepto           | Definicion simple                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Git                | Una herramienta que guarda el historial completo de cambios de tu proyecto. Como un "Ctrl+Z" infinito y super organizado. |
| Repositorio (repo) | Una carpeta de proyecto que tiene "memoria": Git le guarda todas las versiones de todos los archivos.                     |
| Commit             | Una foto del estado de tu proyecto en un momento dado, con un mensaje que explica que cambiaste.                          |
| Branch (rama)      | Una linea paralela de desarrollo. Te permite trabajar en algo nuevo sin romper lo que ya funciona.                        |
| Repositorio remoto | Una copia de tu repo en un servidor (GitHub). Te permite tener backup y trabajar en equipo.                               |
| Clone              | Bajarte una copia completa de un repo remoto a tu computadora.                                                            |
| Push               | Subir tus commits locales al repositorio remoto.                                                                          |
| Pull               | Bajar los cambios que otros subieron al remoto a tu computadora.                                                          |
| Staging area       | Una zona intermedia donde "preparas" que cambios van a entrar en el proximo commit.                                       |
| Merge              | Combinar los cambios de una rama con otra.                                                                                |
| Pull Request (PR)  | Un pedido formal en GitHub para que alguien revise tu codigo y lo mergee a la rama principal.                             |
| .gitignore         | Un archivo que le dice a Git que cosas NO debe trackear (archivos temporales, secretos, etc).                             |

---

## Bloque 1: Que es Git y por que existe (10 min)

### Guion

**Arrancamos con un problema:** "Imaginate que estas escribiendo un trabajo practico para la facu. Empezaste bien, pero despues de un rato haces un cambio grande y todo se rompe. Queres volver a como estaba antes, pero no te acordas que tocaste. Perdiste media hora de trabajo."

"Ahora imaginate eso pero en un proyecto con 5 personas tocando los mismos archivos al mismo tiempo. Sin una herramienta que organice todo eso, es un caos."

**Git existe para resolver ese problema.**

**Analogia central: el Google Docs del codigo (pero mejor)**

Pensalo asi:

- Cuando escribis en Google Docs, hay un historial de versiones. Podes ver como estaba el documento hace una hora, ayer, la semana pasada. Git hace lo mismo, pero para proyectos enteros con muchos archivos.
- La diferencia es que con Git, VOS decidis cuando guardar un punto en el historial (un commit). No se guarda automaticamente cada 3 segundos, sino cuando vos decis "esto esta listo, lo quiero guardar".
- Ademas, Git te deja crear "universos paralelos" (ramas) donde podes probar cosas sin afectar la version principal.

**Dato rapido:** Git fue creado en 2005 por Linus Torvalds (el mismo que creo Linux). Hoy lo usa el 95%+ de los equipos de desarrollo del mundo. No es una opcion, es EL estandar.

**Lo clave:** Git es una herramienta que corre en tu computadora. GitHub es una plataforma web que aloja tus repositorios de Git en la nube. Son cosas distintas, aunque se usan juntas.

---

## Bloque 2: El repositorio — tu proyecto con memoria (10 min)

### Guion

**Analogia: la carpeta con superpoderes**

Un repositorio es una carpeta comun y corriente de tu computadora, pero con un agregado: Git le pone una carpeta oculta llamada `.git` adentro que funciona como un "diario secreto" donde anota TODOS los cambios que se hicieron, quien los hizo y cuando.

**Como se crea un repositorio:**

Hay dos formas de arrancar:

1. **Crear uno nuevo** en una carpeta que ya tenes:

   ```
   git init
   ```

   Esto le dice a Git: "Empeza a seguir los cambios de esta carpeta".

2. **Bajarte uno que ya existe** (por ejemplo, un proyecto de tu equipo en GitHub):
   ```
   git clone <url>
   ```
   Esto te baja la carpeta completa con todo su historial.

**Demostracion sugerida:**

1. Abrir la terminal en VS Code.
2. Navegar a la carpeta del proyecto (`cd frontend-desde-cero`).
3. Correr `git init`.
4. Mostrar que ahora aparece la carpeta oculta `.git` (con `ls -la` en Mac/Linux o `dir /a` en Windows).
5. Explicar: "No toques NUNCA esa carpeta `.git`. Es la memoria de Git. Si la borras, perdes todo el historial."

### Errores comunes de principiantes

- Hacer `git init` dentro de otra carpeta que ya tiene `git init` (repos anidados). Siempre fijate que no estes ya dentro de un repo.
- Confundir la carpeta del proyecto con el repositorio. El repositorio ES la carpeta del proyecto (una vez que le hiciste `git init`).

---

## Bloque 3: Commits — las fotos de tu proyecto (15 min)

### Guion

**Analogia central: el album de fotos**

Imaginate que estas renovando tu departamento. Cada vez que terminas algo importante (pintaste una pared, pusiste un mueble nuevo, cambiaste el piso) sacas una foto del estado actual y le pones una nota: "Pinte la pared del living de azul".

Un commit es exactamente eso: una foto del estado de tu proyecto en un momento dado, con un mensaje que explica que hiciste.

**El flujo para hacer un commit (3 pasos):**

Aca hay algo que confunde al principio: no es simplemente "guardar". Hay un paso intermedio.

1. **Haces cambios** en tus archivos (editar, crear, borrar).
2. **Moves los cambios al "staging area"** (la zona de preparacion):
   ```
   git add archivo.html
   ```
   o para agregar TODO lo que cambio:
   ```
   git add .
   ```
3. **Sacas la foto** (haces el commit):
   ```
   git commit -m "Agregue la seccion de contacto"
   ```

**Analogia del staging area: el carrito del supermercado**

Pensalo asi:

- Estas en un supermercado (tu proyecto con cambios).
- `git add` es meter productos al carrito. Podes elegir cuales SI y cuales NO.
- `git commit` es pasar por caja. Todo lo que esta en el carrito se "confirma" y queda registrado.
- Lo que no pusiste en el carrito queda en la gondola esperando para la proxima compra.

**Por que existe el staging area?** Porque a veces haces 5 cambios en tu proyecto pero solo queres commitear 3 de ellos. El staging area te deja elegir que incluir y que dejar para despues.

**Ver el estado actual: tu mejor amigo**

```
git status
```

Este comando te dice:

- Que archivos cambiaste y todavia no agregaste al staging (en rojo).
- Que archivos ya estan en el staging listos para commitear (en verde).
- Que archivos son nuevos y Git no los conoce todavia (untracked).

**Vas a usar `git status` TODO el tiempo.** Es como mirar el GPS mientras manejas: te dice donde estas parado.

**Ver el historial:**

```
git log
```

Te muestra todos los commits que se hicieron, con fecha, autor y mensaje. Es tu "album de fotos" completo.

**Buenos mensajes de commit:**

| Mal mensaje     | Buen mensaje                           |
| --------------- | -------------------------------------- |
| "cambios"       | "Agrego formulario de contacto"        |
| "arregle cosas" | "Corrijo error en validacion de email" |
| "wip"           | "Agrego estilos al header"             |
| "asdfghj"       | "Elimino archivos de prueba"           |

**Regla de oro:** El mensaje tiene que explicar QUE hiciste de forma que si lo lees en 3 meses, entiendas sin abrir el codigo.

### Errores comunes de principiantes

- Olvidarse del `git add` antes del `git commit`. Sin add, el commit sale vacio (o con lo que ya estaba en staging).
- Hacer commits enormes con 500 cambios. Mejor hacer commits chicos y frecuentes.
- Escribir mensajes como "fix" o "cambios varios". Tomate 10 segundos para escribir un buen mensaje; tu yo del futuro te lo va a agradecer.
- Entrar en panico al ver el editor de texto que abre Git si te olvidas el `-m`. Simplemente escribi el mensaje, guarda y cerra (o usa siempre `git commit -m "mensaje"`).

### Ejercicio sugerido

1. Crear un archivo `index.html` con un `<h1>Hola mundo</h1>` basico.
2. Correr `git status` y ver que aparece en rojo (untracked).
3. Hacer `git add index.html`.
4. Correr `git status` de nuevo y ver que ahora esta en verde.
5. Hacer `git commit -m "Creo pagina principal con titulo"`.
6. Correr `git log` y ver el commit registrado.
7. Modificar el `<h1>` a "Hola, soy [tu nombre]", hacer otro commit.
8. Correr `git log` y ver los dos commits en el historial.

---

## Bloque 4: Ramas — universos paralelos (15 min)

### Guion

**Analogia central: la casa en construccion**

Imaginate que tenes una casa terminada y funcionando (la rama `main`). Queres probar como quedaria si agregas una pileta en el fondo. Pero no queres empezar a romper el jardin hasta estar seguro de que va a quedar bien.

Con Git podes crear una "copia paralela" de tu casa (una rama), probar poner la pileta ahi, y si queda bien, agregarla a la casa real. Si queda mal, la tiras sin que la casa original se entere.

**La rama principal: `main`**

Cuando creas un repo, Git crea automaticamente una rama llamada `main`. Esta es tu "version oficial". Lo que esta en `main` tiene que funcionar siempre.

**Crear y moverse entre ramas:**

Ver en que rama estas y cuales existen:

```
git branch
```

Crear una rama nueva y moverte a ella:

```
git switch -c nombre-de-la-rama
```

Volver a una rama que ya existe:

```
git switch main
```

**Demostracion sugerida:**

1. Estan en `main` con su `index.html` commiteado.
2. Crean una rama: `git switch -c agregar-parrafo`.
3. Agregan un `<p>` al HTML y commitean.
4. Vuelven a `main` con `git switch main`.
5. **Momento magico:** El archivo volvio a como estaba antes (sin el parrafo). El cambio solo existe en la otra rama.
6. Vuelven a `git switch agregar-parrafo` y el parrafo reaparece.

**Lo clave:** Cada rama es como un timeline diferente. Los commits que haces en una rama NO afectan a las otras. Despues, cuando estas seguro de que tu cambio esta bien, lo "mergeas" a main.

**Convenciones para nombres de ramas:**

- `feature/nombre-de-lo-que-haces` — Para funcionalidades nuevas.
- `fix/que-estas-arreglando` — Para correcciones de bugs.
- Siempre en minusculas, sin espacios (usar guiones).
- Ejemplo: `feature/formulario-contacto`, `fix/boton-roto`.

### Errores comunes de principiantes

- Trabajar directamente en `main` para todo. Main es sagrado: siempre trabaja en una rama aparte.
- Olvidarse en que rama estan (usar `git branch` o mirar el indicador de VS Code abajo a la izquierda).
- Crear una rama pero no moverse a ella. `git branch nueva-rama` la crea pero te deja donde estabas. Usa `git switch -c` que hace las dos cosas juntas.

### Ejercicio sugerido

1. Verificar que estan en `main` con `git branch`.
2. Crear una rama `feature/agregar-estilos`.
3. Crear un archivo `estilos.css` con algun estilo basico (ej: `body { background: lightblue; }`).
4. Linkear el CSS en el HTML.
5. Hacer commit: "Agrego hoja de estilos con fondo celeste".
6. Volver a `main` y verificar que `estilos.css` no existe ahi.
7. Volver a `feature/agregar-estilos` y ver que reaparece.

---

## Bloque 5: El repositorio remoto y GitHub (15 min)

### Guion

**Analogia: la copia en la nube**

Hasta ahora todo lo que hicimos vive en tu computadora. Si se te rompe el disco, chau historial. El repositorio remoto es como tener una copia de seguridad en la nube, pero con esteroides: no solo te sirve de backup, sino que permite que otras personas vean tu codigo, lo bajen, y trabajen con vos.

**GitHub: la red social del codigo**

GitHub es una plataforma donde podes alojar tus repositorios de Git. Es gratis para proyectos publicos (y tiene plan gratuito para privados tambien). La mayoria de los proyectos open source del mundo viven ahi.

**Git vs GitHub:**

| Git                                      | GitHub                                         |
| ---------------------------------------- | ---------------------------------------------- |
| Es una herramienta que corre en tu compu | Es una plataforma web (un sitio)               |
| Existe desde 2005                        | Existe desde 2008                              |
| No necesita internet para funcionar      | Necesita internet (es un servidor remoto)      |
| Maneja tu historial local                | Aloja tu repo en la nube y agrega herramientas |

**Conectar tu repo local con GitHub:**

Una vez que tenes un repo en GitHub, lo conectas con tu repo local usando:

```
git remote add origin <url-del-repo-en-github>
```

"origin" es el nombre que le damos al remoto (es una convencion, podria llamarse de cualquier forma pero todo el mundo usa "origin").

**Subir tus cambios:**

```
git push
```

Esto agarra todos los commits que tenes localmente y no estan en el remoto, y los sube.

La primera vez que pusheas una rama nueva:

```
git push -u origin nombre-de-la-rama
```

**Bajar cambios de otros:**

```
git pull
```

Esto baja los commits nuevos que estan en el remoto y no tenes en tu maquina.

**Flujo visual (para la pagina web):**

```
Tu compu (LOCAL)          Internet          GitHub (REMOTO)

[Editas archivos]
       |
  git add + commit
       |
  git push ──────────────────────────────> [Tus commits llegan aca]

  git pull <────────────────────────────── [Commits de otros]
```

**Bajarte un proyecto que ya existe:**

Si alguien te pasa un link a un repo de GitHub y vos queres trabajar en ese proyecto:

```
git clone <url>
```

Esto te crea la carpeta con TODOS los archivos y TODO el historial del proyecto. Es lo primero que haces cuando entras a un equipo.

### Errores comunes de principiantes

- Confundir Git con GitHub. Git funciona sin internet; GitHub es solo un lugar donde guardar la copia remota.
- Hacer push sin haber hecho commit antes. Push sube commits, si no commiteaste no hay nada que subir.
- Olvidarse de hacer pull antes de empezar a trabajar. Si no bajas lo ultimo, podes estar trabajando sobre una version vieja.
- Pensar que subir un archivo a GitHub es lo mismo que "publicar una pagina web". No. GitHub guarda el codigo, no lo "ejecuta" (para eso hay otros servicios).

### Ejercicio sugerido

1. Crear una cuenta en GitHub (si todavia no tienen).
2. Crear un repositorio nuevo en GitHub (boton "New repository").
3. Seguir las instrucciones que GitHub te da para conectar tu repo local.
4. Hacer `git push` y verificar en GitHub que tu codigo aparecio.
5. Hacer un cambio nuevo, commitear, pushear y ver como se actualiza en GitHub.

---

## Bloque 6: Flujo de trabajo en equipo (10 min)

### Guion

**Ahora juntamos todo.** Cuando trabajas en un equipo real, el flujo tipico es asi:

**Paso a paso:**

1. **Bajar lo ultimo de main:**

   ```
   git switch main
   git pull
   ```

   "Primero me aseguro de tener la ultima version del proyecto."

2. **Crear una rama para mi tarea:**

   ```
   git switch -c feature/mi-tarea
   ```

   "Creo mi propio espacio de trabajo."

3. **Trabajar, commitear de a poco:**

   ```
   (edito archivos)
   git add .
   git commit -m "Agrego estructura del formulario"
   (edito mas)
   git add .
   git commit -m "Agrego validacion del email"
   ```

   "Voy guardando checkpoints con mensajes claros."

4. **Subir mi rama al remoto:**

   ```
   git push -u origin feature/mi-tarea
   ```

   "Subo mi trabajo a GitHub para que otros lo vean."

5. **Abrir un Pull Request (PR):**
   Desde la interfaz web de GitHub, abris un PR pidiendo que mergeen tu rama a `main`. Alguien del equipo revisa tu codigo, te deja comentarios, y si esta todo bien, lo aprueba y se mergea.

**Por que Pull Requests?** Porque en un equipo no queres que cualquiera meta codigo directo a main sin que nadie lo revise. El PR es el mecanismo de control de calidad.

**Analogia del PR: el control de calidad en una fabrica**

Vos armas una pieza (tu rama con cambios). Antes de que esa pieza entre en la linea de produccion (main), pasa por control de calidad (el code review). Si esta todo bien, se aprueba. Si hay algo para corregir, te lo devuelven con notas.

---

## Bloque 7: Conceptos que vas a escuchar (5 min)

### Guion

**Cosas que no necesitas dominar hoy, pero conviene que ubiques:**

**Merge y conflictos de merge:**

Cuando dos personas modifican la misma linea del mismo archivo en ramas distintas, Git no sabe cual version dejar. Eso es un "conflicto de merge". Git te va a pedir que lo resuelvas a mano, eligiendo cual version queres (o combinandolas).

No te asustes cuando pase: es normal y tiene solucion. Pero por ahora no te va a pasar porque sos vos solo.

**.gitignore:**

Es un archivo que le dice a Git: "Estas cosas no las trackees". Se usa para:

- Carpetas enormes que se regeneran (como `node_modules`).
- Archivos con secretos (contraseñas, API keys).
- Archivos de configuracion personal del editor.
- Archivos del sistema operativo (como `.DS_Store` en Mac).

Ejemplo de un `.gitignore`:

```
node_modules/
.env
.DS_Store
```

**GitHub vs Git (de nuevo porque la gente se confunde):**

- Git = la herramienta. Es lo que corre en tu compu.
- GitHub = una plataforma web. Es UN lugar donde podes alojar repos.
- Alternativas a GitHub: GitLab, Bitbucket. La herramienta Git es la misma para todos.

---

## Cierre de la clase (5 min)

### Resumen en 5 frases

1. Git es una herramienta que guarda el historial completo de tu proyecto. Cada "foto" guardada es un commit.
2. El flujo basico es: cambiar archivos, `git add` para prepararlos, `git commit` para guardar la foto con un mensaje.
3. Las ramas te permiten trabajar en cosas nuevas sin romper la version principal (`main`).
4. GitHub es donde subis tu repo para tener backup y poder trabajar en equipo. Push sube, pull baja.
5. En equipo: pull, crear rama, commitear, push, abrir PR, code review, merge. Ese es el ciclo.

### Tarea para la proxima clase

1. Tener **Git instalado** (verificar con `git --version` en la terminal).
2. Tener una **cuenta en GitHub**.
3. Haber creado un repositorio local con al menos **3 commits** con mensajes descriptivos.
4. Haber conectado ese repo con GitHub y haber hecho **push** exitosamente.
5. (Bonus) Crear una rama, hacer un cambio, commitear, y volver a `main` para ver como el archivo "vuelve en el tiempo".

---

## Recursos complementarios

- [Git - Documentacion oficial](https://git-scm.com/doc) — La documentacion completa de Git.
- [GitHub - Guia para principiantes](https://docs.github.com/en/get-started) — Guia oficial de GitHub para arrancar.
- [Oh Shit, Git!?!](https://ohshitgit.com/) — Guia informal para cuando la cagas con Git (en ingles pero muy util).
- [Learn Git Branching](https://learngitbranching.js.org/) — Juego interactivo para aprender branching visualmente.

---

## Notas para el disenador de la clase

- **Visualizaciones clave para la pagina web:**
  - Diagrama del flujo de archivos: Working Directory → Staging Area → Repository (local) → Remote. Este diagrama es fundamental y debe ser interactivo.
  - Diagrama visual de ramas: mostrar como `main` avanza linealmente y una rama sale, se desarrolla, y vuelve con un merge. Puede ser tipo "grafo de nodos" animado.
  - Diagrama local vs remoto: dos columnas mostrando la computadora del usuario y GitHub, con flechas de push/pull entre ellas.
  - Secuencia animada del flujo de equipo (los 5 pasos del Bloque 6).

- **Interactividad sugerida:**
  - Un simulador de terminal donde el usuario pueda "tipear" comandos de git y ver el resultado (no real, sino simulado con JS). Que pueda hacer `git add`, `git commit`, `git status` y ver como cambia el estado visual.
  - Quiz con preguntas tipo "que comando usarias para...?" despues de cada bloque.
  - Tarjetas flip con los comandos de un lado y la explicacion del otro.

- **Tono:** Igual que la Clase 1. Informal, rioplatense, con "vos". Que no se sienta como documentacion tecnica sino como un amigo que te explica.

- **Nota importante:** Esta clase es mas conceptual que practica en la pagina web (porque Git se usa en la terminal, no en un HTML). El desafio es hacerla visual e interactiva a pesar de que el contenido no produce "cosas que se ven en el navegador". Los diagramas animados y el simulador de terminal son clave para que no sea aburrida.

- **Estructura de archivos esperada:**
  - `clases/git.html` — La pagina de la clase.
  - `clases/css/git.css` — Estilos propios de esta clase.
  - `clases/js/git.js` — Logica interactiva (simulador de terminal, animaciones de diagramas, quizzes).
