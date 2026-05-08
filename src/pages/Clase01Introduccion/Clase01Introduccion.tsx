import { Link } from "react-router";
import { FlipCard } from "../../components/FlipCard";
import { Callout } from "../../components/Callout";
import { Checklist } from "../../components/Checklist";
import { DiagramInternet } from "./DiagramInternet";
import { ExtensionSimulator } from "./ExtensionSimulator";
import { ShortcutDetector } from "./ShortcutDetector";
import { Inspector } from "./Inspector";
import { TriadaDemo } from "./TriadaDemo";
import { DragDropFrontBack } from "./DragDropFrontBack";
import { MiniProject } from "./MiniProject";
import "./Clase01Introduccion.css";

export function Clase01Introduccion() {
  return (
    <>
      {/* HERO */}
      <header className="clase-hero section">
        <div className="container text-center">
          <svg
            className="clase-hero__globe"
            viewBox="0 0 150 150"
            role="img"
            aria-label="Globo terráqueo con conexiones animadas"
          >
            <circle className="globe-circle" cx="75" cy="75" r="60" />
            <ellipse
              className="globe-line"
              cx="75"
              cy="75"
              rx="60"
              ry="30"
              fill="none"
            />
            <ellipse
              className="globe-line"
              cx="75"
              cy="75"
              rx="30"
              ry="60"
              fill="none"
            />
            <line className="globe-line" x1="15" y1="75" x2="135" y2="75" />
            <line className="globe-line" x1="75" y1="15" x2="75" y2="135" />
            <circle className="connection-dot" cx="45" cy="40" r="3" />
            <circle className="connection-dot" cx="105" cy="50" r="3" />
            <circle className="connection-dot" cx="60" cy="100" r="3" />
            <circle className="connection-dot" cx="100" cy="90" r="3" />
            <circle className="connection-dot" cx="75" cy="60" r="3" />
            <line className="connection-line" x1="45" y1="40" x2="75" y2="60" />
            <line
              className="connection-line"
              x1="75"
              y1="60"
              x2="105"
              y2="50"
            />
            <line
              className="connection-line"
              x1="60"
              y1="100"
              x2="100"
              y2="90"
            />
            <line
              className="connection-line"
              x1="45"
              y1="40"
              x2="60"
              y2="100"
            />
          </svg>
          <h1>Clase 1: Cómo funciona esto</h1>
          <p className="clase-hero__subtitle">
            Vas a entender qué pasa cuando abrís una página web, y vas a
            preparar tus herramientas de trabajo.
          </p>
          <a href="#seccion-internet" className="btn btn-primary">
            Arranquemos
          </a>
        </div>
      </header>

      <main>
        {/* SECCIÓN 1: Cómo funciona internet */}
        <section id="seccion-internet" className="section">
          <div className="container">
            <span className="section__number">Sección 1</span>
            <h2 className="section__title">Cómo funciona internet</h2>

            <div className="question-section">
              <h2>
                Cuando abrís Instagram, Netflix o Google... ¿de dónde sale toda
                esa información?
              </h2>
            </div>

            <p className="mt-4 mb-3">
              Para entender esto, pensá en{" "}
              <strong>pedir comida por delivery</strong>. Vas a ver que funciona
              casi igual: vos pedís, alguien busca la dirección, y te llega el
              pedido. Con las páginas web pasa lo mismo.
            </p>

            <h3 className="mt-4 mb-3">Los conceptos clave</h3>
            <div className="grid grid-3">
              <div className="card concept-card concept-card--url">
                <svg
                  className="concept-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono URL"
                >
                  <rect
                    x="4"
                    y="12"
                    width="40"
                    height="24"
                    rx="4"
                    fill="#EFF6FF"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="24" r="2" fill="#3B82F6" opacity="0.5" />
                  <line
                    x1="18"
                    y1="24"
                    x2="38"
                    y2="24"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                </svg>
                <p className="concept-card__name">URL</p>
                <p className="concept-card__analogy">
                  La dirección del restaurante
                </p>
                <p className="concept-card__desc">
                  Lo que escribís en el navegador: youtube.com
                </p>
              </div>

              <div className="card concept-card concept-card--dns">
                <svg
                  className="concept-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono DNS"
                >
                  <rect
                    x="10"
                    y="6"
                    width="28"
                    height="36"
                    rx="4"
                    fill="#F5F3FF"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="16"
                    x2="32"
                    y2="16"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                  <line
                    x1="16"
                    y1="24"
                    x2="30"
                    y2="24"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                  <line
                    x1="16"
                    y1="32"
                    x2="28"
                    y2="32"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                </svg>
                <p className="concept-card__name">DNS</p>
                <p className="concept-card__analogy">La agenda de contactos</p>
                <p className="concept-card__desc">
                  Internet no entiende nombres. El DNS traduce
                  &quot;youtube.com&quot; a un número que sí entiende (la IP).
                </p>
              </div>

              <div className="card concept-card concept-card--ip">
                <svg
                  className="concept-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono IP"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="2"
                  />
                  <text
                    x="24"
                    y="22"
                    textAnchor="middle"
                    fontSize="7"
                    fontFamily="monospace"
                    fontWeight="600"
                    fill="#C2410C"
                  >
                    142.250
                  </text>
                  <text
                    x="24"
                    y="32"
                    textAnchor="middle"
                    fontSize="7"
                    fontFamily="monospace"
                    fontWeight="600"
                    fill="#C2410C"
                  >
                    .185.46
                  </text>
                </svg>
                <p className="concept-card__name">IP</p>
                <p className="concept-card__analogy">El número de teléfono</p>
                <p className="concept-card__desc">
                  Cada computadora conectada a internet tiene un número único
                  que la identifica.
                </p>
              </div>

              <div className="card concept-card concept-card--servidor">
                <svg
                  className="concept-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono servidor"
                >
                  <rect
                    x="10"
                    y="8"
                    width="28"
                    height="32"
                    rx="4"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="18"
                    x2="32"
                    y2="18"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="16"
                    y1="28"
                    x2="32"
                    y2="28"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <circle cx="30" cy="13" r="2" fill="#10B981" opacity="0.6" />
                  <circle cx="30" cy="23" r="2" fill="#10B981" opacity="0.6" />
                  <circle cx="30" cy="33" r="2" fill="#10B981" opacity="0.6" />
                </svg>
                <p className="concept-card__name">Servidor</p>
                <p className="concept-card__analogy">
                  La cocina del restaurante
                </p>
                <p className="concept-card__desc">
                  Una computadora prendida 24/7 en algún lugar del mundo que
                  guarda los archivos de la página.
                </p>
              </div>

              <div className="card concept-card concept-card--archivos">
                <svg
                  className="concept-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono archivos web"
                >
                  <rect
                    x="4"
                    y="10"
                    width="12"
                    height="16"
                    rx="2"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="18"
                    y="10"
                    width="12"
                    height="16"
                    rx="2"
                    fill="#F5F3FF"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="32"
                    y="10"
                    width="12"
                    height="16"
                    rx="2"
                    fill="#FEFCE8"
                    stroke="#EAB308"
                    strokeWidth="1.5"
                  />
                  <text
                    x="24"
                    y="40"
                    textAnchor="middle"
                    fontSize="6"
                    fontWeight="600"
                    fill="#64748B"
                  >
                    HTML + CSS + JS
                  </text>
                </svg>
                <p className="concept-card__name">HTML, CSS, JS</p>
                <p className="concept-card__analogy">El plato que te llega</p>
                <p className="concept-card__desc">
                  Los 3 archivos que arman la página: estructura, diseño e
                  interactividad. Los vemos en detalle más adelante.
                </p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">¿Cómo se conecta todo?</h3>
            <p className="mb-3 text-secondary">
              Ahora que sabés qué es cada cosa, mirá cómo se comunican paso a
              paso:
            </p>

            <DiagramInternet />

            <Callout variant="info">
              <p>
                <strong>Siempre hay DOS computadoras:</strong> la tuya (que
                pide) y la del otro lado (que responde). Toda la web funciona
                así: pedido y respuesta.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Mitos vs Realidad</h3>
            <div className="flip-cards">
              <FlipCard
                front={<p>"Internet y Google son lo mismo"</p>}
                back={
                  <p>
                    Google es UN servicio dentro de internet. Como un local
                    dentro de un shopping.
                  </p>
                }
              />
              <FlipCard
                front={<p>"Las páginas están en el navegador"</p>}
                back={
                  <p>
                    Las páginas están en servidores en algún lugar del mundo. Tu
                    navegador solo las muestra.
                  </p>
                }
              />
              <FlipCard
                front={<p>"WiFi = Internet"</p>}
                back={
                  <p>
                    WiFi es CÓMO te conectás (el cable invisible). Internet es
                    la red A la que te conectás.
                  </p>
                }
              />
            </div>

            <Callout>
              <p>
                La próxima vez que abras una página, pensá:{" "}
                <em>
                  "Mi compu le está pidiendo archivos a un servidor que está en
                  algún lugar del mundo"
                </em>
                . Parece una pavada, pero fija el concepto.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 2: Archivos, carpetas y extensiones */}
        <section id="seccion-archivos" className="section">
          <div className="container">
            <span className="section__number">Sección 2</span>
            <h2 className="section__title">Archivos, carpetas y extensiones</h2>

            <p className="mt-4 mb-3">
              Antes de escribir una sola línea de código, necesitás entender
              cómo se organiza la información en tu computadora. Todo lo que
              guardás — una foto, un documento de Word, una canción — es un{" "}
              <strong>archivo</strong>. Y los archivos se guardan dentro de{" "}
              <strong>carpetas</strong>, igual que los papeles en un cajón.
            </p>

            <p className="mb-3">
              Cuando programás, vas a crear archivos con instrucciones que el
              navegador puede leer. Pero no alcanza con escribir el código: si
              los archivos no están bien organizados, el navegador no va a
              encontrar lo que necesita. Es como darle la dirección equivocada
              al delivery.
            </p>

            <h3 className="mt-4 mb-3">Tu proyecto es una carpeta</h3>
            <p className="mb-3">
              Un proyecto web no es "un archivo". Es una{" "}
              <strong>carpeta que contiene varios archivos</strong>, cada uno
              con una función específica. Mirá cómo se ve la estructura típica:
            </p>

            <svg
              className="library-svg"
              viewBox="0 0 500 350"
              role="img"
              aria-label="Ilustración: tu computadora es una biblioteca con carpetas y archivos organizados"
            >
              <rect
                x="50"
                y="30"
                width="400"
                height="300"
                rx="8"
                fill="#F8FAFC"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="130"
                x2="450"
                y2="130"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="230"
                x2="450"
                y2="230"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
              <rect
                x="100"
                y="55"
                width="160"
                height="55"
                rx="6"
                fill="#FFFBEB"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <text
                x="180"
                y="87"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#92400E"
              >
                Documentos/
              </text>
              <rect
                x="120"
                y="155"
                width="180"
                height="55"
                rx="6"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <text
                x="210"
                y="187"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#1E40AF"
              >
                mi-proyecto/
              </text>
              <rect
                x="90"
                y="255"
                width="100"
                height="55"
                rx="6"
                fill="#FFF7ED"
                stroke="#F97316"
                strokeWidth="1.5"
              />
              <text
                x="140"
                y="278"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="11"
                fontWeight="600"
                fill="#C2410C"
              >
                index.html
              </text>
              <text
                x="140"
                y="298"
                textAnchor="middle"
                fontSize="9"
                fill="#64748B"
              >
                Estructura
              </text>
              <rect
                x="200"
                y="255"
                width="100"
                height="55"
                rx="6"
                fill="#F5F3FF"
                stroke="#8B5CF6"
                strokeWidth="1.5"
              />
              <text
                x="250"
                y="278"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="11"
                fontWeight="600"
                fill="#6D28D9"
              >
                estilos.css
              </text>
              <text
                x="250"
                y="298"
                textAnchor="middle"
                fontSize="9"
                fill="#64748B"
              >
                Diseño
              </text>
              <rect
                x="310"
                y="255"
                width="100"
                height="55"
                rx="6"
                fill="#FEFCE8"
                stroke="#EAB308"
                strokeWidth="1.5"
              />
              <text
                x="360"
                y="278"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="11"
                fontWeight="600"
                fill="#A16207"
              >
                app.js
              </text>
              <text
                x="360"
                y="298"
                textAnchor="middle"
                fontSize="9"
                fill="#64748B"
              >
                Interactividad
              </text>
              <path
                d="M180 110 L 180 130 L 210 155"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="4,2"
              />
              <path
                d="M210 210 L 140 230 L 140 255"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="4,2"
              />
              <path
                d="M210 210 L 250 230 L 250 255"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="4,2"
              />
              <path
                d="M210 210 L 360 230 L 360 255"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray="4,2"
              />
            </svg>

            <Callout variant="info">
              <p>
                <strong>Regla de oro:</strong> nunca pongas un proyecto suelto
                en el Escritorio. Siempre creá una carpeta dedicada. Cuando
                tengas 10 proyectos sueltos sin carpeta, te vas a volver loco
                buscando archivos.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">¿Qué son las extensiones?</h3>
            <p className="mb-3">
              Cada archivo tiene un <strong>nombre</strong> y una{" "}
              <strong>extensión</strong>. La extensión son esas letras que van
              después del punto: en <code>foto.jpg</code>, la extensión es{" "}
              <code>.jpg</code>. En <code>index.html</code>, es{" "}
              <code>.html</code>.
            </p>
            <p className="mb-3">
              La extensión le dice a la computadora{" "}
              <strong>qué tipo de archivo es</strong> y{" "}
              <strong>con qué programa abrirlo</strong>. Si le cambiás la
              extensión a un archivo, la computadora va a intentar abrirlo con
              otro programa y probablemente no funcione. Es como ponerle la
              etiqueta de "azúcar" al frasco de sal: el frasco es el mismo, pero
              el que lo agarra se va a confundir.
            </p>

            <h3 className="mt-4 mb-3">Las extensiones más comunes</h3>
            <div className="grid grid-3">
              <div className="card extension-card extension-card--html">
                <svg
                  className="extension-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono HTML"
                >
                  <rect
                    x="8"
                    y="4"
                    width="32"
                    height="40"
                    rx="4"
                    fill="#FFF7ED"
                    stroke="#F97316"
                    strokeWidth="2"
                  />
                  <line
                    x1="14"
                    y1="14"
                    x2="34"
                    y2="14"
                    stroke="#F97316"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="14"
                    y1="22"
                    x2="28"
                    y2="22"
                    stroke="#F97316"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="14"
                    y1="30"
                    x2="30"
                    y2="30"
                    stroke="#F97316"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </svg>
                <p className="extension-card__name">.html</p>
                <p className="extension-card__desc">Los ladrillos de la casa</p>
              </div>
              <div className="card extension-card extension-card--css">
                <svg
                  className="extension-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono CSS"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    fill="#F5F3FF"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="20" r="4" fill="#8B5CF6" opacity="0.4" />
                  <circle cx="30" cy="20" r="4" fill="#8B5CF6" opacity="0.6" />
                  <circle cx="24" cy="30" r="4" fill="#8B5CF6" opacity="0.8" />
                </svg>
                <p className="extension-card__name">.css</p>
                <p className="extension-card__desc">La pintura y los muebles</p>
              </div>
              <div className="card extension-card extension-card--js">
                <svg
                  className="extension-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono JavaScript"
                >
                  <rect
                    x="8"
                    y="8"
                    width="32"
                    height="32"
                    rx="6"
                    fill="#FEFCE8"
                    stroke="#EAB308"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 20 L24 28 L30 20"
                    fill="none"
                    stroke="#EAB308"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="extension-card__name">.js</p>
                <p className="extension-card__desc">
                  La electricidad y los aparatos
                </p>
              </div>
              <div className="card extension-card extension-card--txt">
                <svg
                  className="extension-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono texto"
                >
                  <rect
                    x="8"
                    y="4"
                    width="32"
                    height="40"
                    rx="4"
                    fill="#F8FAFC"
                    stroke="#64748B"
                    strokeWidth="2"
                  />
                  <line
                    x1="14"
                    y1="16"
                    x2="34"
                    y2="16"
                    stroke="#64748B"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="14"
                    y1="24"
                    x2="30"
                    y2="24"
                    stroke="#64748B"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="14"
                    y1="32"
                    x2="26"
                    y2="32"
                    stroke="#64748B"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="extension-card__name">.txt</p>
                <p className="extension-card__desc">Una hoja en blanco</p>
              </div>
              <div className="card extension-card extension-card--img">
                <svg
                  className="extension-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono imagen"
                >
                  <rect
                    x="6"
                    y="10"
                    width="36"
                    height="28"
                    rx="4"
                    fill="#FDF2F8"
                    stroke="#EC4899"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="22" r="4" fill="#EC4899" opacity="0.4" />
                  <path
                    d="M10 34 L20 26 L28 32 L36 24 L42 30"
                    fill="none"
                    stroke="#EC4899"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="extension-card__name">.jpg</p>
                <p className="extension-card__desc">Una foto o imagen</p>
              </div>
              <div className="card extension-card extension-card--pdf">
                <svg
                  className="extension-card__icon"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-label="Icono PDF"
                >
                  <rect
                    x="8"
                    y="4"
                    width="32"
                    height="40"
                    rx="4"
                    fill="#FEF2F2"
                    stroke="#EF4444"
                    strokeWidth="2"
                  />
                  <text
                    x="24"
                    y="30"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#EF4444"
                  >
                    PDF
                  </text>
                </svg>
                <p className="extension-card__name">.pdf</p>
                <p className="extension-card__desc">Un documento para leer</p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Probá: cambiá la extensión</h3>
            <p className="mb-3 text-secondary">
              Usá el simulador para ver qué pasa cuando le cambiás la extensión
              a un archivo. Fijate cómo cambia el ícono y el programa que lo
              abre.
            </p>
            <ExtensionSimulator />

            <p className="mt-3 mb-3">
              En la web, las tres extensiones que más vas a usar son{" "}
              <code>.html</code>, <code>.css</code> y <code>.js</code>. Si creás
              un archivo con la extensión equivocada (por ejemplo,{" "}
              <code>estilos.html</code> en vez de <code>estilos.css</code>), el
              navegador no va a saber que ahí hay estilos y tu página va a
              quedar sin diseño.
            </p>

            <Callout variant="warning">
              <p>
                <strong>
                  En Windows, las extensiones vienen OCULTAS por default.
                </strong>{" "}
                Si no las ves, podés estar creando <code>index.html.txt</code>{" "}
                sin darte cuenta.
              </p>
              <p className="mt-2">
                Activá <em>"Mostrar extensiones"</em> ya mismo: Explorador de
                archivos → Vista → Extensiones de nombre de archivo.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Ejercicio: armá tu primer proyecto</h3>
            <div className="card">
              <Checklist
                storageKey="clase1-checklist-archivos"
                items={[
                  'Activar "Mostrar extensiones de archivo" en tu sistema',
                  "Crear la carpeta frontend-desde-cero en Documentos",
                  "Dentro, crear index.html",
                  "Crear estilos.css",
                  "Crear app.js",
                  "Hacer doble clic en cada uno y ver qué programa los abre",
                ]}
                completionMessage="🎉 ¡Listo! Ya tenés tu proyecto armado."
              />
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Usar la compu con soltura */}
        <section id="seccion-atajos" className="section">
          <div className="container">
            <span className="section__number">Sección 3</span>
            <h2 className="section__title">Usar la computadora con soltura</h2>

            <p className="mb-4">
              Si la compu la usás solo para WhatsApp Web y YouTube, hay cosas
              que necesitás manejar antes de programar. No es difícil, pero sin
              esto te vas a trabar.
            </p>

            <ShortcutDetector />

            <p className="mt-3 text-secondary text-center">
              Probá apretar alguno de estos atajos — la tarjeta correspondiente
              se va a iluminar.
            </p>

            <Callout>
              <p>
                Programar es como cocinar un plato complejo. Necesitás tener
                todo a mano. Si cada vez que necesitás la sal tenés que ir al
                supermercado, se te quema todo.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 4: Editor y navegador */}
        <section id="seccion-editor" className="section">
          <div className="container">
            <span className="section__number">Sección 4</span>
            <h2 className="section__title">
              El editor de código y el navegador
            </h2>

            <h3 className="mb-3">Anatomía de VS Code</h3>
            <svg
              className="vscode-svg"
              viewBox="0 0 700 400"
              role="img"
              aria-label="Diagrama de las zonas de VS Code"
            >
              <rect
                x="0"
                y="0"
                width="700"
                height="400"
                rx="8"
                fill="#1E293B"
              />
              <rect x="0" y="0" width="700" height="35" rx="8" fill="#0F172A" />
              <rect
                x="140"
                y="5"
                width="90"
                height="25"
                rx="4"
                fill="#1E293B"
              />
              <text
                x="185"
                y="22"
                textAnchor="middle"
                fontSize="10"
                fill="#94A3B8"
                fontFamily="monospace"
              >
                index.html
              </text>
              <rect
                x="235"
                y="5"
                width="80"
                height="25"
                rx="4"
                fill="#0F172A"
                stroke="#334155"
                strokeWidth="1"
              />
              <text
                x="275"
                y="22"
                textAnchor="middle"
                fontSize="10"
                fill="#64748B"
                fontFamily="monospace"
              >
                style.css
              </text>
              <rect x="0" y="35" width="140" height="365" fill="#1E293B" />
              <line
                x1="140"
                y1="35"
                x2="140"
                y2="400"
                stroke="#334155"
                strokeWidth="1"
              />
              <text x="15" y="60" fontSize="9" fill="#94A3B8" fontWeight="600">
                EXPLORADOR
              </text>
              <text x="20" y="85" fontSize="10" fill="#CBD5E1">
                📁 mi-proyecto
              </text>
              <text
                x="32"
                y="105"
                fontSize="10"
                fill="#F97316"
                fontFamily="monospace"
              >
                index.html
              </text>
              <text
                x="32"
                y="125"
                fontSize="10"
                fill="#8B5CF6"
                fontFamily="monospace"
              >
                estilos.css
              </text>
              <text
                x="32"
                y="145"
                fontSize="10"
                fill="#EAB308"
                fontFamily="monospace"
              >
                app.js
              </text>
              <rect x="140" y="35" width="560" height="280" fill="#0F172A" />
              <text
                x="160"
                y="70"
                fontSize="10"
                fill="#475569"
                fontFamily="monospace"
              >
                1
              </text>
              <text
                x="180"
                y="70"
                fontSize="10"
                fill="#3B82F6"
                fontFamily="monospace"
              >
                {"<!DOCTYPE html>"}
              </text>
              <text
                x="160"
                y="90"
                fontSize="10"
                fill="#475569"
                fontFamily="monospace"
              >
                2
              </text>
              <text
                x="180"
                y="90"
                fontSize="10"
                fill="#3B82F6"
                fontFamily="monospace"
              >
                {"<html>"}
              </text>
              <text
                x="160"
                y="110"
                fontSize="10"
                fill="#475569"
                fontFamily="monospace"
              >
                3
              </text>
              <text
                x="180"
                y="110"
                fontSize="10"
                fill="#3B82F6"
                fontFamily="monospace"
              >
                {"<head>"}
              </text>
              <text
                x="160"
                y="130"
                fontSize="10"
                fill="#475569"
                fontFamily="monospace"
              >
                4
              </text>
              <text
                x="180"
                y="130"
                fontSize="10"
                fill="#3B82F6"
                fontFamily="monospace"
              >
                {"<title>"}
              </text>
              <text
                x="260"
                y="130"
                fontSize="10"
                fill="#F8FAFC"
                fontFamily="monospace"
              >
                Hola mundo
              </text>
              <text
                x="345"
                y="130"
                fontSize="10"
                fill="#3B82F6"
                fontFamily="monospace"
              >
                {"</title>"}
              </text>
              <text
                x="160"
                y="150"
                fontSize="10"
                fill="#475569"
                fontFamily="monospace"
              >
                5
              </text>
              <text
                x="180"
                y="150"
                fontSize="10"
                fill="#3B82F6"
                fontFamily="monospace"
              >
                {"</head>"}
              </text>
              <rect x="0" y="315" width="700" height="85" fill="#000" />
              <line
                x1="0"
                y1="315"
                x2="700"
                y2="315"
                stroke="#334155"
                strokeWidth="1"
              />
              <text x="15" y="335" fontSize="9" fill="#94A3B8" fontWeight="600">
                TERMINAL
              </text>
              <text
                x="15"
                y="360"
                fontSize="10"
                fill="#10B981"
                fontFamily="monospace"
              >
                ~/mi-proyecto $
              </text>
              <rect
                x="145"
                y="350"
                width="8"
                height="14"
                fill="#10B981"
                opacity="0.8"
              >
                <animate
                  attributeName="opacity"
                  values="0.8;0;0.8"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </rect>
              <circle cx="70" cy="200" r="14" fill="#3B82F6" />
              <text
                x="70"
                y="205"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#fff"
              >
                1
              </text>
              <circle cx="420" cy="180" r="14" fill="#3B82F6" />
              <text
                x="420"
                y="185"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#fff"
              >
                2
              </text>
              <circle cx="350" cy="360" r="14" fill="#3B82F6" />
              <text
                x="350"
                y="365"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#fff"
              >
                3
              </text>
              <circle cx="350" cy="18" r="14" fill="#3B82F6" />
              <text
                x="350"
                y="23"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#fff"
              >
                4
              </text>
            </svg>

            <div className="grid grid-2 mt-2 mb-4">
              <div className="card">
                <p>
                  <strong>1. Explorador:</strong> Acá ves tus archivos y
                  carpetas.
                </p>
              </div>
              <div className="card">
                <p>
                  <strong>2. Editor:</strong> Donde escribís código con colores
                  y ayuda.
                </p>
              </div>
              <div className="card">
                <p>
                  <strong>3. Terminal:</strong> Una línea de comandos integrada.
                </p>
              </div>
              <div className="card">
                <p>
                  <strong>4. Pestañas:</strong> Cada archivo abierto es una
                  pestaña.
                </p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Bloc de notas vs VS Code</h3>
            <div className="editor-compare">
              <div className="editor-panel editor-panel--notepad">
                <div className="editor-panel__header">Bloc de notas</div>
                <div className="editor-panel__code">
                  {"<h1>Hola mundo</h1>"}
                  <br />
                  {"<p>Mi primera página</p>"}
                </div>
              </div>
              <div className="editor-panel editor-panel--vscode">
                <div className="editor-panel__header">VS Code</div>
                <div className="editor-panel__code">
                  <span className="line-number">1</span>
                  <span className="token-tag">{"<h1>"}</span>Hola mundo
                  <span className="token-tag">{"</h1>"}</span>
                  <br />
                  <span className="line-number">2</span>
                  <span className="token-tag">{"<p>"}</span>Mi primera página
                  <span className="token-tag">{"</p>"}</span>
                </div>
              </div>
            </div>
            <p className="text-center text-secondary mt-2">
              Es como comparar escribir a mano vs un procesador de texto con
              corrector.
            </p>

            <h3 className="mt-4 mb-3">Simulador de DevTools</h3>
            <p className="mb-3 text-secondary">
              Hacé click en cualquier elemento del panel izquierdo para
              "inspeccionarlo".
            </p>
            <Inspector />
            <p className="text-center text-secondary mt-2">
              Esto es lo que hacen las DevTools de Chrome. Los cambios son
              temporales.
            </p>

            <h3 className="mt-4 mb-3">Cómo abrir DevTools</h3>
            <div className="devtools-options">
              <div className="devtools-option">
                <span>🖱️</span>
                <span>
                  Click derecho → <strong>Inspeccionar</strong>
                </span>
              </div>
              <div className="devtools-option">
                <span>⌨️</span>
                <span>
                  <kbd>F12</kbd>
                </span>
              </div>
              <div className="devtools-option">
                <span>⌨️</span>
                <span>
                  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>{" "}
                  <small>(Mac: Cmd+Opt+I)</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: Frontend vs Backend */}
        <section id="seccion-frontend-backend" className="section">
          <div className="container">
            <span className="section__number">Sección 5</span>
            <h2 className="section__title">Frontend vs Backend</h2>

            <div
              className="restaurant-diagram"
              role="img"
              aria-label="Diagrama de restaurante: frontend es lo que el cliente ve, backend es la cocina"
            >
              <div className="restaurant-diagram__side restaurant-diagram__side--frontend">
                <p className="restaurant-diagram__title restaurant-diagram__title--frontend">
                  Frontend
                </p>
                <p className="restaurant-diagram__subtitle restaurant-diagram__subtitle--frontend">
                  Lo que el cliente ve y toca
                </p>
                <div className="restaurant-diagram__icons">
                  <div
                    className="restaurant-diagram__icon restaurant-diagram__icon--frontend"
                    aria-label="Mesa"
                  ></div>
                  <div
                    className="restaurant-diagram__icon restaurant-diagram__icon--frontend"
                    aria-label="Mesa"
                  ></div>
                  <div
                    className="restaurant-diagram__icon restaurant-diagram__icon--frontend"
                    aria-label="Mesa"
                  ></div>
                </div>
                <div className="restaurant-diagram__menu">
                  <div className="restaurant-diagram__menu-line"></div>
                  <div className="restaurant-diagram__menu-line restaurant-diagram__menu-line--short"></div>
                  <div className="restaurant-diagram__menu-line"></div>
                </div>
              </div>
              <div className="restaurant-diagram__divider">
                <span>El cliente no pasa de acá</span>
              </div>
              <div className="restaurant-diagram__side restaurant-diagram__side--backend">
                <p className="restaurant-diagram__title restaurant-diagram__title--backend">
                  Backend
                </p>
                <p className="restaurant-diagram__subtitle restaurant-diagram__subtitle--backend">
                  Lo que pasa en la cocina
                </p>
                <div className="restaurant-diagram__items">
                  <span className="restaurant-diagram__tag">Cocina</span>
                  <span className="restaurant-diagram__tag">Heladera</span>
                  <span className="restaurant-diagram__tag">Inventario</span>
                  <span className="restaurant-diagram__tag">Caja</span>
                </div>
              </div>
            </div>

            <h3 className="mt-4 mb-3">
              La triada del frontend: HTML + CSS + JS
            </h3>
            <TriadaDemo />

            <h3 className="mt-4 mb-3">¿Qué hace cada lado?</h3>
            <div className="compare-table">
              <div className="compare-column compare-column--frontend">
                <p className="compare-column__title">🎨 Frontend</p>
                <ul className="compare-column__list">
                  <li>Lo que el usuario ve</li>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Botones, formularios, animaciones</li>
                  <li>Se ejecuta en TU navegador</li>
                  <li>Diseño y experiencia</li>
                </ul>
              </div>
              <div className="compare-column compare-column--backend">
                <p className="compare-column__title">⚙️ Backend</p>
                <ul className="compare-column__list">
                  <li>Lo que el usuario NO ve</li>
                  <li>Python, Java, Node.js, bases de datos</li>
                  <li>Lógica, seguridad, datos</li>
                  <li>Se ejecuta en un SERVIDOR</li>
                  <li>Procesamiento y almacenamiento</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Ejercicio: ¿Frontend o Backend?</h3>
            <p className="mb-3 text-secondary">
              Arrastrá cada tarjeta a la columna correcta (o hacé click en la
              tarjeta y después en la zona).
            </p>
            <DragDropFrontBack />
          </div>
        </section>

        {/* SECCIÓN 6: Tu primera página web */}
        <section id="seccion-practica" className="section">
          <div className="container">
            <span className="section__number">Sección 6</span>
            <h2 className="section__title">Tu primera página web</h2>

            <p className="mt-4 mb-3">
              Ya sabés qué es el frontend, qué herramientas usar y cómo se
              conecta todo. Ahora vas a <strong>hacer tu primera página</strong>{" "}
              con tus propias manos. Seguí los pasos y mirá cómo el resultado
              cambia en el navegador:
            </p>

            <MiniProject />

            <h3 className="mt-4 mb-3">Inspeccioná tu propia página</h3>
            <p className="mb-3">
              Ahora abrí DevTools en <strong>tu</strong> página (F12 o click
              derecho → Inspeccionar) y probá cambiar cosas. Los cambios son
              temporales — si recargás, vuelve todo al original:
            </p>

            <Checklist
              storageKey="clase1-checklist-devtools-practice"
              items={[
                "Hacé click en el <h1> en el panel Elements y cambiá el texto",
                "En Styles, cambiá el color del h1 a red",
                "Cambiá el background-color del body a otro color",
                "Recargá (F5) y comprobá que todo vuelve al original",
              ]}
              completionMessage="🎉 ¡Ya sabés inspeccionar y experimentar con tu propia página!"
            />

            <Callout variant="success">
              <p>
                <strong>¡Acabás de crear tu primera página web!</strong> Ya no
                sos alguien que "nunca hizo una página". A partir de acá, todo
                es ir sumando cosas sobre esta base.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 7: Cierre */}
        <section id="seccion-cierre" className="section">
          <div className="container">
            <span className="section__number">Sección 7</span>
            <h2 className="section__title">Cierre y próximos pasos</h2>

            <svg
              className="mindmap-svg"
              viewBox="0 0 600 400"
              role="img"
              aria-label="Mapa mental resumen de la clase 1"
            >
              <circle
                cx="300"
                cy="200"
                r="45"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="3"
              />
              <text
                x="300"
                y="195"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#1E293B"
              >
                Clase 1
              </text>
              <text
                x="300"
                y="212"
                textAnchor="middle"
                fontSize="9"
                fill="#64748B"
              >
                Introducción
              </text>
              <path
                d="M260 170 Q 200 120 140 100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="120"
                cy="90"
                r="30"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <text
                x="120"
                y="85"
                textAnchor="middle"
                fontSize="10"
                fill="#1E293B"
              >
                🌐
              </text>
              <text
                x="120"
                y="100"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                Pedido y
              </text>
              <text
                x="120"
                y="112"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                respuesta
              </text>
              <path
                d="M340 170 Q 400 130 470 110"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="490"
                cy="100"
                r="30"
                fill="#FFFBEB"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <text
                x="490"
                y="95"
                textAnchor="middle"
                fontSize="10"
                fill="#1E293B"
              >
                📁
              </text>
              <text
                x="490"
                y="110"
                textAnchor="middle"
                fontSize="7"
                fill="#64748B"
              >
                .html .css .js
              </text>
              <path
                d="M255 200 Q 170 200 100 220"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="80"
                cy="230"
                r="30"
                fill="#F5F3FF"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <text
                x="80"
                y="225"
                textAnchor="middle"
                fontSize="10"
                fill="#1E293B"
              >
                🔧
              </text>
              <text
                x="80"
                y="240"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                Atajos y
              </text>
              <text
                x="80"
                y="252"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                ventanas
              </text>
              <path
                d="M280 240 Q 220 300 160 330"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="140"
                cy="340"
                r="30"
                fill="#ECFDF5"
                stroke="#10B981"
                strokeWidth="2"
              />
              <text
                x="140"
                y="335"
                textAnchor="middle"
                fontSize="10"
                fill="#1E293B"
              >
                💻
              </text>
              <text
                x="140"
                y="350"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                VS Code +
              </text>
              <text
                x="140"
                y="362"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                DevTools
              </text>
              <path
                d="M340 225 Q 420 280 480 310"
                fill="none"
                stroke="#F97316"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="500"
                cy="320"
                r="30"
                fill="#FFF7ED"
                stroke="#F97316"
                strokeWidth="2"
              />
              <text
                x="500"
                y="315"
                textAnchor="middle"
                fontSize="10"
                fill="#1E293B"
              >
                🖥️
              </text>
              <text
                x="500"
                y="330"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                Lo que
              </text>
              <text
                x="500"
                y="342"
                textAnchor="middle"
                fontSize="8"
                fill="#64748B"
              >
                se ve
              </text>
            </svg>

            <h3 className="mt-4 mb-3">Tarea para la próxima clase</h3>
            <Checklist
              storageKey="clase1-checklist-tarea"
              showProgress
              items={[
                "Instalar VS Code",
                "Instalar Google Chrome",
                "Crear carpeta frontend-desde-cero con index.html, estilos.css, app.js",
                "Abrir DevTools en 2 páginas distintas e inspeccionar algo",
                '(Bonus) Escribir "Hola, soy [tu nombre]" en index.html y verlo en el navegador',
              ]}
              completionMessage="🚀 ¡Genial! Estás listo/a para la próxima clase."
            />

            <h3 className="mt-4 mb-3">Recursos</h3>
            <div className="resources-grid">
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg className="resource-card__icon" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#EFF6FF"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 12 L20 26 M14 22 L20 28 L26 22"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">Descargar VS Code</p>
                  <p className="text-secondary">Editor gratuito de Microsoft</p>
                </div>
              </a>
              <a
                href="https://www.google.com/chrome/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg className="resource-card__icon" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="20" r="8" fill="#10B981" opacity="0.3" />
                  <circle cx="20" cy="20" r="4" fill="#10B981" />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">Descargar Chrome</p>
                  <p className="text-secondary">
                    Navegador con las mejores DevTools
                  </p>
                </div>
              </a>
              <a
                href="https://developer.mozilla.org/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg className="resource-card__icon" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#F5F3FF"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="13"
                    y="12"
                    width="14"
                    height="18"
                    rx="2"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="24"
                    y2="17"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                  />
                  <line
                    x1="16"
                    y1="21"
                    x2="24"
                    y2="21"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                  />
                  <line
                    x1="16"
                    y1="25"
                    x2="22"
                    y2="25"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">
                    MDN Web Docs (en español)
                  </p>
                  <p className="text-secondary">
                    La mejor referencia para HTML, CSS y JS
                  </p>
                </div>
              </a>
              <a
                href="https://www.freecodecamp.org/espanol/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg className="resource-card__icon" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#FFFBEB"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 20 L18 24 L26 16"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">
                    freeCodeCamp en español
                  </p>
                  <p className="text-secondary">
                    Ejercicios prácticos gratuitos
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <nav className="clase-footer-nav" aria-label="Navegación entre clases">
        <Link to="/clase/02-git" className="btn btn-primary">
          Clase 2: Git →
        </Link>
        <Link to="/clase/03-html" className="btn btn-secondary">
          Clase 3: HTML →
        </Link>
      </nav>
    </>
  );
}
