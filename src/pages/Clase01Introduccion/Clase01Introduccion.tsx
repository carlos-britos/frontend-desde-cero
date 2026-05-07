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
                . Parece boludo, pero fija el concepto.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 2: Archivos, carpetas y extensiones */}
        <section id="seccion-archivos" className="section">
          <div className="container">
            <span className="section__number">Sección 2</span>
            <h2 className="section__title">Archivos, carpetas y extensiones</h2>

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
            <ExtensionSimulator />

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

            <svg
              className="restaurant-svg"
              viewBox="0 0 700 300"
              role="img"
              aria-label="Diagrama de restaurante: frontend es lo que el cliente ve, backend es la cocina"
            >
              <rect
                x="10"
                y="10"
                width="330"
                height="280"
                rx="12"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <text
                x="175"
                y="40"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="#1E40AF"
              >
                Frontend
              </text>
              <text
                x="175"
                y="60"
                textAnchor="middle"
                fontSize="11"
                fill="#3B82F6"
              >
                Lo que el cliente ve y toca
              </text>
              <circle
                cx="80"
                cy="120"
                r="25"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1"
              />
              <circle
                cx="180"
                cy="150"
                r="25"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1"
              />
              <circle
                cx="280"
                cy="120"
                r="25"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1"
              />
              <rect
                x="60"
                y="200"
                width="50"
                height="60"
                rx="4"
                fill="#fff"
                stroke="#93C5FD"
                strokeWidth="1"
              />
              <line
                x1="68"
                y1="215"
                x2="102"
                y2="215"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <line
                x1="68"
                y1="225"
                x2="95"
                y2="225"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <line
                x1="68"
                y1="235"
                x2="100"
                y2="235"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <line
                x1="350"
                y1="20"
                x2="350"
                y2="280"
                stroke="#64748B"
                strokeWidth="2"
                strokeDasharray="8,4"
              />
              <text
                x="350"
                y="295"
                textAnchor="middle"
                fontSize="9"
                fill="#64748B"
              >
                El cliente no pasa de acá
              </text>
              <rect
                x="360"
                y="10"
                width="330"
                height="280"
                rx="12"
                fill="#ECFDF5"
                stroke="#10B981"
                strokeWidth="2"
              />
              <text
                x="525"
                y="40"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="#065F46"
              >
                Backend
              </text>
              <text
                x="525"
                y="60"
                textAnchor="middle"
                fontSize="11"
                fill="#10B981"
              >
                Lo que pasa en la cocina
              </text>
              <rect
                x="400"
                y="90"
                width="80"
                height="60"
                rx="6"
                fill="#D1FAE5"
                stroke="#6EE7B7"
                strokeWidth="1"
              />
              <text
                x="440"
                y="125"
                textAnchor="middle"
                fontSize="10"
                fill="#065F46"
              >
                Cocina
              </text>
              <rect
                x="520"
                y="90"
                width="50"
                height="70"
                rx="4"
                fill="#D1FAE5"
                stroke="#6EE7B7"
                strokeWidth="1"
              />
              <text
                x="545"
                y="130"
                textAnchor="middle"
                fontSize="9"
                fill="#065F46"
              >
                ❄️
              </text>
              <rect
                x="400"
                y="180"
                width="70"
                height="50"
                rx="4"
                fill="#D1FAE5"
                stroke="#6EE7B7"
                strokeWidth="1"
              />
              <text
                x="435"
                y="210"
                textAnchor="middle"
                fontSize="9"
                fill="#065F46"
              >
                Inventario
              </text>
              <rect
                x="520"
                y="190"
                width="60"
                height="40"
                rx="4"
                fill="#D1FAE5"
                stroke="#6EE7B7"
                strokeWidth="1"
              />
              <text
                x="550"
                y="215"
                textAnchor="middle"
                fontSize="9"
                fill="#065F46"
              >
                Caja 💰
              </text>
            </svg>

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

        {/* SECCIÓN 6: Cierre */}
        <section id="seccion-cierre" className="section">
          <div className="container">
            <span className="section__number">Sección 6</span>
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
