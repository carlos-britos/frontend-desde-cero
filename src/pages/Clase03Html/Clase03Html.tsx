import { Callout } from "../../components/Callout";
import { CodeBlock } from "../../components/CodeBlock";
import { Checklist } from "../../components/Checklist";
import { Playground } from "../../components/Playground";
import { SkeletonDiagram } from "./SkeletonDiagram";
import { NestingVisualizer } from "./NestingVisualizer";
import { SemanticToggle } from "./SemanticToggle";
import { SemanticMap } from "./SemanticMap";
import { AttrTable } from "./AttrTable";
import { AltTextDemo } from "./AltTextDemo";
import { InputTypeDemo } from "./InputTypeDemo";
import "./Clase03Html.css";

const PLAYGROUND_1_CODE = `<h1>Recetas de cocina</h1>
<h2>Milanesas napolitanas</h2>
<p>Un <strong>clasico</strong> de la cocina argentina.</p>

<h3>Ingredientes</h3>
<ul>
  <li>Milanesas</li>
  <li>Salsa de tomate</li>
  <li>Jamon</li>
  <li>Queso</li>
</ul>
<h3>Preparacion</h3>
<ol>
  <li>Cocinar las milanesas</li>
  <li>Agregar salsa, jamon y queso</li>
  <li>Gratinar en el horno</li>
</ol>`;

const PLAYGROUND_2_CODE = `<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="asunto">Asunto:</label>
  <select id="asunto" name="asunto">
    <option value="">Elegir...</option>
    <option value="consulta">Consulta</option>
    <option value="reclamo">Reclamo</option>
  </select>

  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="3"></textarea>

  <button type="submit">Enviar</button>
</form>`;

const ESTRUCTURA_CODE = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera pagina</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Esta es mi primera pagina web.</p>
  </body>
</html>`;

const IMAGEN_CODE = `<img src="fotos/mi-gato.jpg" alt="Gato negro durmiendo en el sillon" />`;

const FORM_CODE = `<form>                                    <!-- Agrupa todos los campos -->
  <label for="nombre">Nombre:</label>    <!-- Etiqueta del campo -->
  <input type="text" id="nombre"          <!-- El campo -->
         name="nombre">
  <button type="submit">Enviar</button>   <!-- Boton de envio -->
</form>`;

const COMENTARIOS_CODE = `<!-- Esto es un comentario. El usuario no lo ve. -->

<h1>Titulo visible</h1>
<!-- TODO: agregar subtitulo -->
<p>Parrafo visible</p>`;

const CHECKLIST_ITEMS = [
  'Crear una pagina "Mi CV" con estructura HTML completa',
  "Usar tags semanticos: <header>, <main>, <section>, <footer>",
  "Incluir encabezados, parrafos, al menos una lista y una imagen",
  "Armar un formulario de contacto con name, email, mensaje y boton",
  "Validar el HTML en validator.w3.org",
];

export function Clase03Html() {
  return (
    <>
      {/* HERO */}
      <header className="clase-hero section">
        <div className="container text-center">
          <svg
            className="clase-hero__browser"
            viewBox="0 0 320 240"
            role="img"
            aria-label="Animacion de una pagina web construyendose: aparecen header, nav, main y footer"
          >
            <rect
              x="10"
              y="10"
              width="300"
              height="220"
              rx="12"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            <rect
              x="10"
              y="10"
              width="300"
              height="30"
              rx="12"
              fill="#F1F5F9"
            />
            <rect x="10" y="28" width="300" height="12" fill="#F1F5F9" />
            <circle cx="30" cy="25" r="5" fill="#EF4444" />
            <circle cx="48" cy="25" r="5" fill="#F59E0B" />
            <circle cx="66" cy="25" r="5" fill="#10B981" />
            <rect x="90" y="19" width="140" height="12" rx="3" fill="#E2E8F0" />
            <text
              x="160"
              y="28"
              textAnchor="middle"
              fontSize="7"
              fill="#94A3B8"
              fontFamily="monospace"
            >
              mi-pagina.html
            </text>
            <g className="hero-block" data-delay="0">
              <rect
                x="30"
                y="52"
                width="260"
                height="28"
                rx="4"
                fill="#F97316"
                opacity="0.15"
              />
              <rect x="30" y="52" width="3" height="28" rx="1" fill="#F97316" />
              <text
                x="44"
                y="70"
                fontSize="9"
                fill="#F97316"
                fontFamily="monospace"
              >
                &lt;header&gt;
              </text>
            </g>
            <g className="hero-block" data-delay="1">
              <rect
                x="30"
                y="88"
                width="80"
                height="90"
                rx="4"
                fill="#F97316"
                opacity="0.1"
              />
              <text
                x="44"
                y="138"
                fontSize="9"
                fill="#F97316"
                fontFamily="monospace"
              >
                &lt;nav&gt;
              </text>
            </g>
            <g className="hero-block" data-delay="2">
              <rect
                x="118"
                y="88"
                width="172"
                height="90"
                rx="4"
                fill="#F97316"
                opacity="0.2"
              />
              <text
                x="132"
                y="138"
                fontSize="9"
                fill="#F97316"
                fontFamily="monospace"
              >
                &lt;main&gt;
              </text>
            </g>
            <g className="hero-block" data-delay="3">
              <rect
                x="30"
                y="186"
                width="260"
                height="28"
                rx="4"
                fill="#F97316"
                opacity="0.15"
              />
              <rect
                x="30"
                y="186"
                width="3"
                height="28"
                rx="1"
                fill="#F97316"
              />
              <text
                x="44"
                y="204"
                fontSize="9"
                fill="#F97316"
                fontFamily="monospace"
              >
                &lt;footer&gt;
              </text>
            </g>
          </svg>

          <h1>Clase 3: HTML — Los cimientos de la web</h1>
          <p className="clase-hero__subtitle">
            Vas a aprender a escribir la estructura de una pagina web desde
            cero. Todo lo que ves en internet arranca aca.
          </p>
          <a href="#seccion-estructura" className="btn btn-primary">
            Arranquemos
          </a>
        </div>
      </header>

      <main>
        {/* BLOQUE 1: Estructura basica */}
        <section id="seccion-estructura" className="section" data-block="1">
          <div className="container">
            <span className="section__number">Bloque 1</span>
            <h2 className="section__title">
              Estructura basica del documento HTML
            </h2>

            <div className="question-section">
              <p>
                En la Clase 1 creaste un archivo HTML y le pusiste "Hola mundo".
                Funciono. Pero el navegador estaba adivinando.
              </p>
              <p>
                Un HTML de verdad tiene una estructura base. Es siempre la
                misma, como los cimientos de cualquier casa.
              </p>
            </div>

            <Callout variant="info">
              <p>
                Un HTML es como una carta formal. Tiene un formato fijo:
                remitente, encabezado, cuerpo. Si no lo seguis, puede llegar
                igual... pero el cartero (navegador) puede interpretar cualquier
                cosa.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Las partes de un documento HTML</h3>
            <SkeletonDiagram />

            <CodeBlock code={ESTRUCTURA_CODE} filename="estructura.html" />

            <Callout variant="warning">
              <p>
                Si te olvidas el <code>&lt;meta charset="UTF-8"&gt;</code>, las
                tildes y enes se ven como <code>Ã©</code> o <code>â€™</code>.
                UTF-8 incluye todos los caracteres del mundo: tildes, enes,
                emojis, arabe, chino, todo.
              </p>
            </Callout>
          </div>
        </section>

        {/* BLOQUE 2: Tags y anidamiento */}
        <section id="seccion-tags" className="section" data-block="2">
          <div className="container">
            <span className="section__number">Bloque 2</span>
            <h2 className="section__title">Tags y anidamiento de elementos</h2>

            <h3 className="mb-3">Las partes de un elemento HTML</h3>
            <svg
              className="anatomy-svg"
              viewBox="0 0 660 190"
              role="img"
              aria-label="Diagrama: anatomia de un elemento HTML con tag de apertura, contenido y tag de cierre"
            >
              <text
                x="120"
                y="40"
                textAnchor="middle"
                fontSize="24"
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="700"
                fill="#F97316"
              >
                &lt;p&gt;
              </text>
              <text
                x="330"
                y="40"
                textAnchor="middle"
                fontSize="24"
                fontFamily="'JetBrains Mono', monospace"
                fill="#3B82F6"
              >
                Este es un parrafo
              </text>
              <text
                x="550"
                y="40"
                textAnchor="middle"
                fontSize="24"
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="700"
                fill="#F97316"
              >
                &lt;/p&gt;
              </text>
              <line
                x1="120"
                y1="52"
                x2="120"
                y2="68"
                stroke="#F97316"
                strokeWidth="2"
              />
              <line
                x1="85"
                y1="68"
                x2="155"
                y2="68"
                stroke="#F97316"
                strokeWidth="2"
              />
              <text
                x="120"
                y="86"
                textAnchor="middle"
                fontSize="12"
                fill="#F97316"
                fontWeight="600"
              >
                Tag de apertura
              </text>
              <line
                x1="330"
                y1="52"
                x2="330"
                y2="68"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <line
                x1="195"
                y1="68"
                x2="465"
                y2="68"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <text
                x="330"
                y="86"
                textAnchor="middle"
                fontSize="12"
                fill="#3B82F6"
                fontWeight="600"
              >
                Contenido
              </text>
              <line
                x1="550"
                y1="52"
                x2="550"
                y2="68"
                stroke="#F97316"
                strokeWidth="2"
              />
              <line
                x1="510"
                y1="68"
                x2="590"
                y2="68"
                stroke="#F97316"
                strokeWidth="2"
              />
              <text
                x="550"
                y="86"
                textAnchor="middle"
                fontSize="12"
                fill="#F97316"
                fontWeight="600"
              >
                Tag de cierre
              </text>
              <text
                x="550"
                y="102"
                textAnchor="middle"
                fontSize="10"
                fill="#64748B"
              >
                la barra / indica cierre
              </text>
              <path
                d="M70 120 Q70 132 82 132 L320 132 Q330 132 330 144 Q330 132 340 132 L580 132 Q592 132 592 120"
                fill="none"
                stroke="#1E293B"
                strokeWidth="2"
              />
              <text
                x="330"
                y="168"
                textAnchor="middle"
                fontSize="14"
                fill="#1E293B"
                fontWeight="700"
              >
                Elemento HTML
              </text>
            </svg>

            <h3 className="mt-4 mb-3">Tags vacios: no necesitan cierre</h3>
            <div className="grid grid-2">
              <div className="card void-tag-card">
                <svg
                  className="void-tag-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono de imagen"
                >
                  <rect
                    x="4"
                    y="8"
                    width="32"
                    height="24"
                    rx="4"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="2"
                  />
                  <polygon
                    points="10,26 18,18 24,24 30,16 36,26"
                    fill="#F97316"
                    opacity="0.3"
                  />
                  <circle cx="14" cy="16" r="3" fill="#F97316" opacity="0.4" />
                </svg>
                <p className="void-tag-card__tag">&lt;img&gt;</p>
                <p className="void-tag-card__desc">Inserta una imagen</p>
              </div>
              <div className="card void-tag-card">
                <svg
                  className="void-tag-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono de salto de linea"
                >
                  <path
                    d="M12 10 L12 24 Q12 30 18 30 L28 30"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="24,26 28,30 24,34"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="void-tag-card__tag">&lt;br&gt;</p>
                <p className="void-tag-card__desc">Salto de linea</p>
              </div>
              <div className="card void-tag-card">
                <svg
                  className="void-tag-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono de campo de texto"
                >
                  <rect
                    x="4"
                    y="12"
                    width="32"
                    height="16"
                    rx="3"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="2"
                  />
                  <line
                    x1="10"
                    y1="17"
                    x2="10"
                    y2="23"
                    stroke="#F97316"
                    strokeWidth="2"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </line>
                </svg>
                <p className="void-tag-card__tag">&lt;input&gt;</p>
                <p className="void-tag-card__desc">Campo de formulario</p>
              </div>
              <div className="card void-tag-card">
                <svg
                  className="void-tag-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono de linea horizontal"
                >
                  <line
                    x1="4"
                    y1="20"
                    x2="36"
                    y2="20"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="void-tag-card__tag">&lt;hr&gt;</p>
                <p className="void-tag-card__desc">Linea horizontal</p>
              </div>
            </div>

            <Callout variant="info">
              <p>
                Estos tags no "envuelven" nada. SON el contenido: una imagen, un
                salto de linea, un campo. En HTML5 la barra de cierre (
                <code>&lt;br /&gt;</code>) es opcional.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Cajas adentro de cajas</h3>
            <NestingVisualizer />

            <Callout>
              <p>
                Pensalo como ponerte ropa: primero la remera, despues el buzo.
                Para sacartelos, es al reves: primero el buzo, despues la
                remera. Los tags funcionan igual.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Reglas de anidamiento</h3>
            <div className="grid grid-3">
              <div className="card nesting-rule-card">
                <svg
                  className="nesting-rule-card__icon"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Error"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="#FEF2F2"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />
                  <line
                    x1="10"
                    y1="10"
                    x2="22"
                    y2="22"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="22"
                    y1="10"
                    x2="10"
                    y2="22"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="nesting-rule-card__rule">
                  Un <code>&lt;p&gt;</code> no puede contener otro{" "}
                  <code>&lt;p&gt;</code> ni bloques como{" "}
                  <code>&lt;div&gt;</code>
                </p>
                <p className="nesting-rule-card__consequence">
                  Si lo haces, el navegador cierra el primer{" "}
                  <code>&lt;p&gt;</code> solo y te queda HTML roto.
                </p>
              </div>
              <div className="card nesting-rule-card">
                <svg
                  className="nesting-rule-card__icon"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Advertencia"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="#FFFBEB"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <text
                    x="16"
                    y="22"
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="700"
                    fill="#F59E0B"
                  >
                    !
                  </text>
                </svg>
                <p className="nesting-rule-card__rule">
                  <code>&lt;ul&gt;</code> y <code>&lt;ol&gt;</code> solo aceptan{" "}
                  <code>&lt;li&gt;</code> como hijos directos
                </p>
                <p className="nesting-rule-card__consequence">
                  Nada de poner <code>&lt;p&gt;</code> o{" "}
                  <code>&lt;div&gt;</code> sueltos adentro de una lista.
                </p>
              </div>
              <div className="card nesting-rule-card">
                <svg
                  className="nesting-rule-card__icon"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Correcto"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <polyline
                    points="10,16 14,20 22,12"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="nesting-rule-card__rule">
                  Un <code>&lt;li&gt;</code> puede contener casi cualquier cosa
                </p>
                <p className="nesting-rule-card__consequence">
                  Parrafos, links, otras listas, divs... todo vale adentro de un{" "}
                  <code>&lt;li&gt;</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 3: Elementos de texto */}
        <section id="seccion-texto" className="section" data-block="3">
          <div className="container">
            <span className="section__number">Bloque 3</span>
            <h2 className="section__title">Elementos de texto</h2>

            <h3 className="mb-3">Los 6 niveles de encabezado</h3>
            <div className="heading-levels">
              {[
                { level: 1, text: "Titulo principal" },
                { level: 2, text: "Subtitulo" },
                { level: 3, text: "Sub-subtitulo" },
                { level: 4, text: "Nivel 4" },
                { level: 5, text: "Nivel 5" },
                { level: 6, text: "Nivel 6" },
              ].map(({ level, text }) => (
                <div
                  key={level}
                  className={`heading-level heading-level--${level}`}
                >
                  <span className="heading-level__tag">&lt;h{level}&gt;</span>
                  <span className="heading-level__text">{text}</span>
                </div>
              ))}
            </div>

            <Callout variant="info">
              <p>
                Pensalo como los titulos de un libro: <code>&lt;h1&gt;</code> es
                el titulo del libro (uno solo por pagina),{" "}
                <code>&lt;h2&gt;</code> son los capitulos,{" "}
                <code>&lt;h3&gt;</code> las secciones dentro de un capitulo.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Formato de texto</h3>
            <div className="grid grid-2">
              <div className="card text-format-card">
                <p className="text-format-card__title">
                  <code>&lt;strong&gt;</code> — Importancia
                </p>
                <p className="text-format-card__example">
                  Este texto es <strong>importante</strong>
                </p>
                <p className="text-format-card__note">
                  Los lectores de pantalla cambian la entonacion.
                </p>
              </div>
              <div className="card text-format-card">
                <p className="text-format-card__title">
                  <code>&lt;em&gt;</code> — Enfasis
                </p>
                <p className="text-format-card__example">
                  Este texto tiene <em>enfasis</em>
                </p>
                <p className="text-format-card__note">
                  Preferi <code>&lt;em&gt;</code> sobre <code>&lt;i&gt;</code>:
                  tiene significado semantico.
                </p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Listas</h3>
            <div className="grid grid-2">
              <div className="card list-demo-card">
                <p className="list-demo-card__title">
                  <code>&lt;ul&gt;</code> — Lista con vinetas
                </p>
                <ul className="list-demo-card__list">
                  <li>Manzanas</li>
                  <li>Bananas</li>
                  <li>Naranjas</li>
                </ul>
                <p className="list-demo-card__note">
                  Se usa cuando el orden no importa.
                </p>
              </div>
              <div className="card list-demo-card">
                <p className="list-demo-card__title">
                  <code>&lt;ol&gt;</code> — Lista numerada
                </p>
                <ol className="list-demo-card__list list-demo-card__list--ordered">
                  <li>Prender el horno</li>
                  <li>Preparar la masa</li>
                  <li>Hornear 30 minutos</li>
                </ol>
                <p className="list-demo-card__note">
                  Se usa cuando el orden SI importa (pasos, instrucciones).
                </p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Proba vos mismo</h3>
            <p className="mb-3 text-secondary">
              Escribi HTML a la izquierda y mira el resultado a la derecha.
            </p>
            <Playground defaultCode={PLAYGROUND_1_CODE} />
          </div>
        </section>

        {/* BLOQUE 4: Tags semanticos */}
        <section id="seccion-semantica" className="section" data-block="4">
          <div className="container">
            <span className="section__number">Bloque 4</span>
            <h2 className="section__title">Tags semanticos</h2>

            <div className="question-section">
              <p>
                Podrias armar una pagina entera usando solo{" "}
                <code>&lt;div&gt;</code> para todo. Y funcionaria.
              </p>
              <p>
                El problema: una pagina de solo divs es como un edificio donde
                ninguna puerta tiene cartel. Vos sabes donde esta el bano...
                pero un visitante nuevo esta perdido.
              </p>
            </div>

            <h3 className="mt-4 mb-3">Toggle div vs semantico</h3>
            <SemanticToggle />

            <h3 className="mt-4 mb-3">Las zonas de una pagina web</h3>
            <SemanticMap />

            <h3 className="mt-4 mb-3">Tres razones para usar semantica</h3>
            <div className="grid grid-3">
              <div className="card reason-card">
                <svg
                  className="reason-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Persona con auriculares"
                >
                  <circle
                    cx="20"
                    cy="14"
                    r="7"
                    fill="#F97316"
                    opacity="0.2"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 32 Q8 22 20 22 Q32 22 32 32"
                    fill="#F97316"
                    opacity="0.2"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 14 Q8 8 12 8"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32 14 Q32 8 28 8"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="reason-card__title">Accesibilidad</p>
                <p className="reason-card__text">
                  Los lectores de pantalla pueden decir "Estas en la navegacion"
                  o "Esto es el footer".
                </p>
              </div>
              <div className="card reason-card">
                <svg
                  className="reason-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Lupa"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="10"
                    fill="#F97316"
                    opacity="0.2"
                    stroke="#F97316"
                    strokeWidth="2"
                  />
                  <line
                    x1="26"
                    y1="26"
                    x2="36"
                    y2="36"
                    stroke="#F97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="reason-card__title">SEO</p>
                <p className="reason-card__text">
                  Google entiende mejor tu pagina. Sabe cual es el titulo, la
                  navegacion, el contenido.
                </p>
              </div>
              <div className="card reason-card">
                <svg
                  className="reason-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Llave inglesa"
                >
                  <path
                    d="M10 30 L24 16 Q28 12 32 16 Q36 20 32 24 L18 38 Z"
                    fill="#F97316"
                    opacity="0.2"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M30 10 L34 6 M34 6 L38 10 M34 6 L30 2"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="reason-card__title">Mantenimiento</p>
                <p className="reason-card__text">
                  En 6 meses, <code>&lt;nav&gt;</code> se entiende mejor que{" "}
                  <code>&lt;div class="barra-de-arriba"&gt;</code>.
                </p>
              </div>
            </div>

            <Callout variant="info">
              <p>
                El <code>&lt;div&gt;</code> no esta prohibido. Usalo cuando
                necesitas agrupar cosas SOLO para estilos (CSS) y no hay un tag
                semantico que corresponda. Es un contenedor generico, sin
                significado.
              </p>
            </Callout>
          </div>
        </section>

        {/* BLOQUE 5: Atributos */}
        <section id="seccion-atributos" className="section" data-block="5">
          <div className="container">
            <span className="section__number">Bloque 5</span>
            <h2 className="section__title">Atributos</h2>

            <Callout variant="info">
              <p>
                Un tag HTML es como una prenda de ropa. El atributo es la
                etiqueta cosida adentro: talle, material, instrucciones de
                lavado. No cambia QUE es la prenda, pero agrega informacion
                importante.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Anatomia de un atributo</h3>
            <svg
              className="attribute-svg"
              viewBox="0 0 650 180"
              role="img"
              aria-label="Diagrama: anatomia de un atributo HTML"
            >
              {/* <img */}
              <text
                x="100"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#F97316"
              >
                &lt;img
              </text>
              {/* src= */}
              <text
                x="175"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#3B82F6"
              >
                src
              </text>
              <text
                x="203"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#1E293B"
              >
                =
              </text>
              {/* "foto.jpg" */}
              <text
                x="275"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#10B981"
              >
                "foto.jpg"
              </text>
              {/* alt= */}
              <text
                x="380"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#3B82F6"
              >
                alt
              </text>
              <text
                x="408"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#1E293B"
              >
                =
              </text>
              {/* "Mi foto" */}
              <text
                x="480"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#10B981"
              >
                "Mi foto"
              </text>
              {/* > */}
              <text
                x="540"
                y="30"
                textAnchor="middle"
                fontSize="16"
                fontFamily="monospace"
                fill="#F97316"
              >
                &gt;
              </text>

              {/* Nombre del tag -> <img */}
              <line
                x1="100"
                y1="42"
                x2="100"
                y2="70"
                stroke="#F97316"
                strokeWidth="1.5"
              />
              <text
                x="100"
                y="84"
                textAnchor="middle"
                fontSize="10"
                fill="#F97316"
                fontWeight="600"
              >
                Nombre del tag
              </text>

              {/* Nombre del atributo -> src */}
              <line
                x1="175"
                y1="42"
                x2="175"
                y2="90"
                stroke="#3B82F6"
                strokeWidth="1.5"
              />
              <text
                x="175"
                y="104"
                textAnchor="middle"
                fontSize="10"
                fill="#3B82F6"
                fontWeight="600"
              >
                Nombre del atributo
              </text>

              {/* Valor del atributo -> "foto.jpg" */}
              <line
                x1="275"
                y1="42"
                x2="275"
                y2="70"
                stroke="#10B981"
                strokeWidth="1.5"
              />
              <text
                x="275"
                y="84"
                textAnchor="middle"
                fontSize="10"
                fill="#10B981"
                fontWeight="600"
              >
                Valor del atributo
              </text>

              {/* Otro atributo -> alt */}
              <line
                x1="380"
                y1="42"
                x2="380"
                y2="90"
                stroke="#3B82F6"
                strokeWidth="1.5"
              />
              <text
                x="380"
                y="104"
                textAnchor="middle"
                fontSize="10"
                fill="#3B82F6"
                fontWeight="600"
              >
                Otro atributo
              </text>

              {/* Otro valor -> "Mi foto" */}
              <line
                x1="480"
                y1="42"
                x2="480"
                y2="70"
                stroke="#10B981"
                strokeWidth="1.5"
              />
              <text
                x="480"
                y="84"
                textAnchor="middle"
                fontSize="10"
                fill="#10B981"
                fontWeight="600"
              >
                Otro valor
              </text>

              <text
                x="325"
                y="140"
                textAnchor="middle"
                fontSize="11"
                fill="#64748B"
              >
                Los atributos siempre van en el tag de APERTURA. El valor va
                entre comillas dobles.
              </text>
            </svg>

            <h3 className="mt-4 mb-3">Atributos comunes</h3>
            <AttrTable />

            <h3 className="mt-4 mb-3">class vs id</h3>
            <div className="grid grid-2">
              <div className="card class-vs-id-card class-vs-id-card--class">
                <p className="class-vs-id-card__title">
                  <code>class</code> — Reutilizable
                </p>
                <svg
                  className="class-vs-id-card__icon"
                  viewBox="0 0 40 24"
                  role="img"
                  aria-label="Dos cuadrados iguales"
                >
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="3"
                    fill="#3B82F6"
                    opacity="0.2"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="22"
                    y="2"
                    width="16"
                    height="16"
                    rx="3"
                    fill="#3B82F6"
                    opacity="0.2"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="class-vs-id-card__text">
                  Se puede repetir. Varios elementos con la misma clase.
                </p>
                <div className="class-vs-id-card__example">
                  <code>&lt;p class="destacado"&gt;</code> y{" "}
                  <code>&lt;p class="destacado"&gt;</code> — Esto esta bien.
                </div>
                <p className="class-vs-id-card__use">
                  Uso principal: para estilos CSS compartidos.
                </p>
              </div>
              <div className="card class-vs-id-card class-vs-id-card--id">
                <p className="class-vs-id-card__title">
                  <code>id</code> — Unico
                </p>
                <svg
                  className="class-vs-id-card__icon"
                  viewBox="0 0 40 24"
                  role="img"
                  aria-label="Cuadrado con estrella"
                >
                  <rect
                    x="10"
                    y="2"
                    width="20"
                    height="20"
                    rx="3"
                    fill="#F97316"
                    opacity="0.2"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <text
                    x="20"
                    y="17"
                    textAnchor="middle"
                    fontSize="14"
                    fill="#F97316"
                  >
                    *
                  </text>
                </svg>
                <p className="class-vs-id-card__text">
                  Solo un elemento puede tener un id determinado.
                </p>
                <div className="class-vs-id-card__example">
                  <code>&lt;div id="contacto"&gt;</code> — Si lo repetis, JS y
                  CSS se confunden.
                </div>
                <p className="class-vs-id-card__use">
                  Uso principal: para identificar UN elemento especifico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 6: Links e imagenes */}
        <section id="seccion-links" className="section" data-block="6">
          <div className="container">
            <span className="section__number">Bloque 6</span>
            <h2 className="section__title">Links e imagenes</h2>

            <h3 className="mb-3">Tres tipos de links</h3>
            <div className="grid grid-3">
              <div className="card link-type-card link-type-card--external">
                <svg
                  className="link-type-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Globo terraqueo"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="#EFF6FF"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="20"
                    cy="20"
                    rx="10"
                    ry="16"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="4"
                    y1="20"
                    x2="36"
                    y2="20"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
                <p className="link-type-card__label">URL absoluta</p>
                <code className="link-type-card__code">
                  &lt;a href="https://google.com"&gt;Google&lt;/a&gt;
                </code>
                <p className="link-type-card__note">
                  Direccion completa. Para cosas de OTROS sitios.
                </p>
              </div>
              <div className="card link-type-card link-type-card--internal">
                <svg
                  className="link-type-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Carpeta"
                >
                  <rect
                    x="4"
                    y="14"
                    width="32"
                    height="22"
                    rx="3"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 14 L4 10 Q4 8 6 8 L16 8 L20 12 L4 12"
                    fill="#10B981"
                    opacity="0.3"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="link-type-card__label">Ruta relativa</p>
                <code className="link-type-card__code">
                  &lt;a href="contacto.html"&gt;Contacto&lt;/a&gt;
                </code>
                <p className="link-type-card__note">
                  Relativa a donde estas. Para cosas de TU sitio.
                </p>
              </div>
              <div className="card link-type-card link-type-card--anchor">
                <svg
                  className="link-type-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Ancla"
                >
                  <circle
                    cx="20"
                    cy="12"
                    r="5"
                    fill="#F5F3FF"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="20"
                    y1="17"
                    x2="20"
                    y2="32"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 26 Q12 32 20 32 Q28 32 28 26"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="22"
                    x2="24"
                    y2="22"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                </svg>
                <p className="link-type-card__label">Ancla</p>
                <code className="link-type-card__code">
                  &lt;a href="#formulario"&gt;Ir al formulario&lt;/a&gt;
                </code>
                <p className="link-type-card__note">
                  Salta a un elemento con ese id en la misma pagina.
                </p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Dar indicaciones</h3>
            <div className="grid grid-2">
              <div className="card route-card route-card--absolute">
                <svg
                  className="route-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Mapa con pin"
                >
                  <rect
                    x="4"
                    y="4"
                    width="32"
                    height="32"
                    rx="4"
                    fill="#EFF6FF"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 10 Q26 10 26 16 Q26 22 20 28 Q14 22 14 16 Q14 10 20 10"
                    fill="#3B82F6"
                    opacity="0.3"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="16" r="3" fill="#3B82F6" />
                </svg>
                <p className="route-card__text">
                  Av. Corrientes 1234, Buenos Aires
                </p>
                <p className="route-card__label">
                  Funciona desde cualquier lugar
                </p>
              </div>
              <div className="card route-card route-card--relative">
                <svg
                  className="route-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Persona senalando"
                >
                  <circle
                    cx="20"
                    cy="12"
                    r="6"
                    fill="#10B981"
                    opacity="0.3"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 22 Q14 34 20 34 Q26 34 26 22"
                    fill="#10B981"
                    opacity="0.2"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="28"
                    y1="24"
                    x2="36"
                    y2="20"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="route-card__text">La puerta de al lado</p>
                <p className="route-card__label">
                  Solo funciona si sabes donde estoy yo
                </p>
              </div>
            </div>

            <Callout>
              <p>
                Para cosas de tu sitio → ruta relativa (mas portable). Para
                cosas de otros sitios → ruta absoluta.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Imagenes</h3>
            <CodeBlock code={IMAGEN_CODE} filename="imagen.html" />
            <p className="text-secondary mt-2">
              <code>src</code> es la ruta de la imagen. <code>alt</code> es lo
              que se muestra si no carga y lo que leen los lectores de pantalla.
            </p>

            <h3 className="mt-4 mb-3">Que pasa cuando la imagen no carga</h3>
            <AltTextDemo />

            <h3 className="mt-4 mb-3">Buen alt vs mal alt</h3>
            <div className="alt-comparison">
              <div className="alt-comparison__row alt-comparison__row--header">
                <span>Tipo de imagen</span>
                <span>Mal alt</span>
                <span>Buen alt</span>
              </div>
              <div className="alt-comparison__row">
                <span>Foto de paisaje</span>
                <span className="alt-comparison__bad">
                  <code>alt="foto"</code>
                </span>
                <span className="alt-comparison__good">
                  <code>
                    alt="Atardecer en las montanas con lago en primer plano"
                  </code>
                </span>
              </div>
              <div className="alt-comparison__row">
                <span>Logo de empresa</span>
                <span className="alt-comparison__bad">
                  <code>alt="logo"</code>
                </span>
                <span className="alt-comparison__good">
                  <code>alt="Logo de MercadoLibre"</code>
                </span>
              </div>
              <div className="alt-comparison__row">
                <span>Icono decorativo</span>
                <span className="alt-comparison__bad">
                  <code>alt="icono"</code>
                </span>
                <span className="alt-comparison__good">
                  <code>alt=""</code> (vacio — es decorativo)
                </span>
              </div>
              <div className="alt-comparison__row">
                <span>Grafico de datos</span>
                <span className="alt-comparison__bad">
                  <code>alt="grafico"</code>
                </span>
                <span className="alt-comparison__good">
                  <code>
                    alt="Ventas mensuales: enero 100, febrero 150, marzo 200"
                  </code>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 7: Formularios */}
        <section id="seccion-formularios" className="section" data-block="7">
          <div className="container">
            <span className="section__number">Bloque 7</span>
            <h2 className="section__title">Formularios</h2>

            <p className="mb-4">
              Cada vez que te registras, te logueas, buscas algo o compras
              online, estas usando un formulario HTML. Son la parte mas
              interactiva de la web.
            </p>

            <h3 className="mb-3">Estructura basica del formulario</h3>
            <CodeBlock code={FORM_CODE} filename="formulario.html" />

            <Callout variant="info">
              <p>
                El <code>for</code> del label y el <code>id</code> del input
                tienen que coincidir. Asi el lector de pantalla sabe que
                "Nombre" es la etiqueta de ese campo. Ademas, si haces click en
                el texto "Nombre", el cursor salta al campo.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Cambia el tipo y mira que pasa</h3>
            <InputTypeDemo />

            <h3 className="mt-4 mb-3">Arma tu propio formulario</h3>
            <p className="mb-3 text-secondary">
              Proba agregar campos, cambiar types, poner required.
            </p>
            <Playground defaultCode={PLAYGROUND_2_CODE} />

            <h3 className="mt-4 mb-3">Errores comunes con formularios</h3>
            <div className="grid grid-3">
              <div className="card form-error-card form-error-card--red">
                <svg
                  className="form-error-card__icon"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Error"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="#FEF2F2"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />
                  <line
                    x1="10"
                    y1="10"
                    x2="22"
                    y2="22"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="22"
                    y1="10"
                    x2="10"
                    y2="22"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="form-error-card__error">
                  No usar <code>&lt;label&gt;</code> o no conectar con{" "}
                  <code>for</code>
                </p>
                <p className="form-error-card__consequence">
                  El lector de pantalla dice "campo de texto" sin saber que
                  campo es.
                </p>
              </div>
              <div className="card form-error-card form-error-card--amber">
                <svg
                  className="form-error-card__icon"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Advertencia"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="#FFFBEB"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <text
                    x="16"
                    y="22"
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="700"
                    fill="#F59E0B"
                  >
                    !
                  </text>
                </svg>
                <p className="form-error-card__error">
                  Usar placeholder en vez de label
                </p>
                <p className="form-error-card__consequence">
                  El placeholder desaparece al escribir. El usuario se olvida
                  que campo era.
                </p>
              </div>
              <div className="card form-error-card form-error-card--red">
                <svg
                  className="form-error-card__icon"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Error"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="#FEF2F2"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />
                  <line
                    x1="10"
                    y1="10"
                    x2="22"
                    y2="22"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="22"
                    y1="10"
                    x2="10"
                    y2="22"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="form-error-card__error">
                  No poner <code>name</code> en los inputs
                </p>
                <p className="form-error-card__consequence">
                  Sin name, el dato no se envia al submitear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 8: Comentarios */}
        <section id="seccion-comentarios" className="section" data-block="8">
          <div className="container">
            <span className="section__number">Bloque 8</span>
            <h2 className="section__title">Comentarios en HTML</h2>

            <CodeBlock code={COMENTARIOS_CODE} filename="comentarios.html" />

            <h3 className="mt-4 mb-3">Cuando usar y cuando no</h3>
            <div className="grid grid-2">
              <div className="card comment-card comment-card--do">
                <h4 className="comment-card__title">Cuando usar</h4>
                <ul className="comment-card__list">
                  <li>Para explicar algo no obvio.</li>
                  <li>
                    Para marcar secciones en archivos largos:{" "}
                    <code>&lt;!-- Seccion contacto --&gt;</code>
                  </li>
                  <li>Para desactivar codigo temporalmente.</li>
                  <li>
                    Para TODOs:{" "}
                    <code>&lt;!-- TODO: agregar validacion --&gt;</code>
                  </li>
                </ul>
              </div>
              <div className="card comment-card comment-card--dont">
                <h4 className="comment-card__title">Cuando NO usar</h4>
                <ul className="comment-card__list">
                  <li>
                    Para explicar lo obvio:{" "}
                    <code>&lt;!-- Este es el titulo --&gt;</code> arriba de un{" "}
                    <code>&lt;h1&gt;</code>.
                  </li>
                  <li>Para dejar codigo muerto por meses.</li>
                  <li>
                    Para poner datos privados (cualquiera puede ver el codigo
                    fuente).
                  </li>
                </ul>
              </div>
            </div>

            <Callout variant="warning">
              <p>
                Los comentarios son invisibles en la PAGINA, pero cualquiera
                puede verlos con click derecho &gt; "Ver codigo fuente". Nunca
                pongas contrasenas ni datos privados.
              </p>
            </Callout>
          </div>
        </section>

        {/* CIERRE */}
        <section id="seccion-cierre" className="section">
          <div className="container">
            <span className="section__number">Cierre</span>
            <h2 className="section__title">Cierre y proximos pasos</h2>

            <h3 className="mb-3">Resumen en 8 frases</h3>
            <div className="summary-cards">
              {[
                <>
                  Todo HTML arranca con <code>&lt;!DOCTYPE html&gt;</code>,{" "}
                  <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>,{" "}
                  <code>&lt;body&gt;</code>.
                </>,
                <>
                  Los tags se abren, tienen contenido, y se cierran. Los tags
                  vacios (como <code>&lt;img&gt;</code>) no tienen cierre.
                </>,
                <>
                  Anidamiento: lo que se abre primero se cierra ultimo. Como
                  ponerte ropa.
                </>,
                <>
                  Para texto: <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>,{" "}
                  <code>&lt;p&gt;</code>, <code>&lt;strong&gt;</code>,{" "}
                  <code>&lt;em&gt;</code>, <code>&lt;ul&gt;</code>/
                  <code>&lt;ol&gt;</code> con <code>&lt;li&gt;</code>.
                </>,
                <>
                  Los tags semanticos (<code>&lt;header&gt;</code>,{" "}
                  <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
                  <code>&lt;footer&gt;</code>) le dan significado a cada zona.
                </>,
                <>
                  Los atributos agregan info extra: <code>nombre="valor"</code>{" "}
                  en el tag de apertura.
                </>,
                <>
                  Links (<code>&lt;a href&gt;</code>) conectan paginas. Imagenes
                  (<code>&lt;img src alt&gt;</code>) muestran contenido visual.
                </>,
                <>
                  Formularios (<code>&lt;form&gt;</code>,{" "}
                  <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>,{" "}
                  <code>&lt;button&gt;</code>) reciben datos del usuario.
                </>,
              ].map((text, i) => (
                <div key={i} className="summary-card">
                  <span className="summary-card__number">{i + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-4 mb-3">Tarea para la proxima clase</h3>
            <Checklist
              storageKey="clase3-checklist-tarea"
              items={CHECKLIST_ITEMS}
            />

            <h3 className="mt-4 mb-3">Recursos</h3>
            <div className="resources-grid">
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg
                  className="resource-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono documentacion"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="13"
                    y="12"
                    width="14"
                    height="18"
                    rx="2"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="24"
                    y2="17"
                    stroke="#F97316"
                    strokeWidth="1"
                  />
                  <line
                    x1="16"
                    y1="21"
                    x2="24"
                    y2="21"
                    stroke="#F97316"
                    strokeWidth="1"
                  />
                  <line
                    x1="16"
                    y1="25"
                    x2="22"
                    y2="25"
                    stroke="#F97316"
                    strokeWidth="1"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">
                    MDN — Introduccion a HTML
                  </p>
                  <p className="text-secondary">Tutorial base de Mozilla</p>
                </div>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg
                  className="resource-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono estructura"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="12"
                    y="12"
                    width="16"
                    height="4"
                    rx="1"
                    fill="#F97316"
                    opacity="0.3"
                  />
                  <rect
                    x="12"
                    y="18"
                    width="10"
                    height="10"
                    rx="1"
                    fill="#F97316"
                    opacity="0.2"
                  />
                  <rect
                    x="24"
                    y="18"
                    width="4"
                    height="10"
                    rx="1"
                    fill="#F97316"
                    opacity="0.2"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">
                    MDN — Estructura de documentos
                  </p>
                  <p className="text-secondary">Tags semanticos en detalle</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
