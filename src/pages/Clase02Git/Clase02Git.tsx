import { useState } from "react";
import { Callout } from "../../components/Callout";
import { FlipCard } from "../../components/FlipCard";
import { Checklist } from "../../components/Checklist";
import { GitFlowDiagram } from "./GitFlowDiagram";
import { TerminalSimulator } from "./TerminalSimulator";
import { BranchesDiagram } from "./BranchesDiagram";
import { RemoteDiagram } from "./RemoteDiagram";
import { TeamFlow } from "./TeamFlow";
import "./Clase02Git.css";

export function Clase02Git() {
  const [orderVisible, setOrderVisible] = useState(false);
  const [revealText, setRevealText] = useState("Con Git es así:");

  function handleReveal() {
    setOrderVisible(true);
    setRevealText("Mucho mejor, no?");
  }

  return (
    <>
      {/* HERO */}
      <header className="clase-hero section">
        <div className="container text-center">
          <svg
            className="clase-hero__timeline"
            viewBox="0 0 500 120"
            role="img"
            aria-label="Timeline de commits con una rama que se bifurca y vuelve a unirse"
          >
            <line className="main-line" x1="50" y1="80" x2="450" y2="80" />
            <path
              className="branch-line"
              d="M175 80 Q200 40 250 35 L320 35 Q370 35 390 80"
            />
            <circle className="commit-node" cx="100" cy="80" r="10" />
            <circle className="commit-node" cx="175" cy="80" r="10" />
            <circle className="commit-node" cx="310" cy="80" r="10" />
            <circle className="commit-node" cx="390" cy="80" r="10" />
            <circle className="branch-node" cx="250" cy="35" r="8" />
            <circle className="branch-node" cx="320" cy="35" r="8" />
            <rect
              className="cursor-blink"
              x="440"
              y="72"
              width="3"
              height="16"
              fill="#3B82F6"
            />
          </svg>
          <h1>Clase 2: Git — Tu proyecto con memoria</h1>
          <p className="clase-hero__subtitle">
            Vas a aprender a guardar el historial completo de tu proyecto,
            volver atrás en el tiempo, y trabajar en equipo sin pisar el trabajo
            del otro.
          </p>
          <a href="#seccion-que-es-git" className="btn btn-primary">
            Arranquemos
          </a>
        </div>
      </header>

      <main>
        {/* SECCIÓN 1: Qué es Git */}
        <section id="seccion-que-es-git" className="section">
          <div className="container">
            <span className="section__number">Sección 1</span>
            <h2 className="section__title">Qué es Git y por qué existe</h2>

            <div className="question-section">
              <p>
                Imaginá que hacés un cambio grande en tu proyecto y todo se
                rompe. Querés volver a como estaba antes... pero no te acordás
                qué tocaste.
              </p>
              <p>
                Ahora imaginá eso pero con 5 personas tocando los mismos
                archivos.
              </p>
            </div>

            <div className="git-compare">
              <div className="git-compare__panel git-compare__panel--chaos">
                <h3>Sin Git</h3>
                <p className="text-secondary mb-2">
                  El caos de los backups manuales
                </p>
                <ul className="git-compare__files">
                  <li>index.html</li>
                  <li>index-backup.html</li>
                  <li>index-FINAL.html</li>
                  <li>index-FINAL-FINAL.html</li>
                  <li>index-NO-TOCAR.html</li>
                </ul>
              </div>
              <div
                className={`git-compare__panel git-compare__panel--order${orderVisible ? " visible" : ""}`}
              >
                <h3>Con Git</h3>
                <p className="text-secondary mb-2">
                  Historial limpio y organizado
                </p>
                <div className="git-compare__timeline-item">
                  <span className="git-compare__timeline-dot" />
                  <span className="git-compare__timeline-msg">
                    Agrego header
                  </span>
                </div>
                <div className="git-compare__timeline-item">
                  <span className="git-compare__timeline-dot" />
                  <span className="git-compare__timeline-msg">
                    Corrijo typo
                  </span>
                </div>
                <div className="git-compare__timeline-item">
                  <span className="git-compare__timeline-dot" />
                  <span className="git-compare__timeline-msg">
                    Agrego contacto
                  </span>
                </div>
                <p className="text-secondary mt-2 text-sm">
                  Puedo volver a cualquier punto cuando quiera.
                </p>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={handleReveal}
              disabled={orderVisible}
            >
              {revealText}
            </button>

            <h3 className="mt-4 mb-3">Git vs GitHub</h3>
            <div className="git-vs-github">
              <div className="git-vs-github__card">
                <h4>Git</h4>
                <p>Herramienta en tu compu</p>
                <p>No necesita internet</p>
                <p>Maneja tu historial local</p>
              </div>
              <div className="git-vs-github__card">
                <h4>GitHub</h4>
                <p>Plataforma web</p>
                <p>Necesita internet</p>
                <p>Aloja tu repo en la nube</p>
              </div>
            </div>

            <Callout variant="info">
              <p>
                Git es como Word. GitHub es como Google Drive. Uno crea los
                documentos, el otro los guarda en la nube.
              </p>
            </Callout>

            <div className="dato-historico">
              Git fue creado en 2005 por Linus Torvalds (el mismo que creó
              Linux). Hoy lo usa el 95%+ de los equipos de desarrollo del mundo.
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: El repositorio */}
        <section id="seccion-repositorio" className="section">
          <div className="container">
            <span className="section__number">Sección 2</span>
            <h2 className="section__title">
              El repositorio — tu proyecto con memoria
            </h2>

            <svg
              className="repo-svg"
              viewBox="0 0 400 300"
              role="img"
              aria-label="Un repositorio es una carpeta con un diario secreto (.git) adentro"
            >
              <rect
                x="60"
                y="30"
                width="280"
                height="200"
                rx="12"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <rect
                x="60"
                y="20"
                width="120"
                height="20"
                rx="6"
                fill="#3B82F6"
              />
              <text
                x="200"
                y="55"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="#1E40AF"
              >
                mi-proyecto/
              </text>

              <rect
                x="90"
                y="75"
                width="120"
                height="30"
                rx="4"
                fill="#fff"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <text
                x="100"
                y="95"
                fontSize="11"
                fontFamily="monospace"
                fill="#1E293B"
              >
                index.html
              </text>
              <rect
                x="90"
                y="115"
                width="120"
                height="30"
                rx="4"
                fill="#fff"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <text
                x="100"
                y="135"
                fontSize="11"
                fontFamily="monospace"
                fill="#1E293B"
              >
                style.css
              </text>
              <rect
                x="90"
                y="155"
                width="120"
                height="30"
                rx="4"
                fill="#fff"
                stroke="#CBD5E1"
                strokeWidth="1"
              />
              <text
                x="100"
                y="175"
                fontSize="11"
                fontFamily="monospace"
                fill="#1E293B"
              >
                app.js
              </text>

              <rect
                x="240"
                y="90"
                width="80"
                height="100"
                rx="6"
                fill="#1E293B"
                opacity="0.9"
              />
              <text
                x="280"
                y="130"
                textAnchor="middle"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="700"
                fill="#10B981"
              >
                .git/
              </text>
              <text
                x="280"
                y="150"
                textAnchor="middle"
                fontSize="9"
                fill="#94A3B8"
              >
                (diario
              </text>
              <text
                x="280"
                y="165"
                textAnchor="middle"
                fontSize="9"
                fill="#94A3B8"
              >
                secreto)
              </text>

              <text
                x="200"
                y="270"
                textAnchor="middle"
                fontSize="12"
                fill="#64748B"
                fontWeight="500"
              >
                Un repo es una carpeta con un diario secreto adentro
              </text>
            </svg>

            <h3 className="mt-4 mb-3">Cómo se crea un repositorio</h3>
            <div className="repo-cards">
              <div className="repo-card repo-card--init">
                <h4>Crear uno nuevo</h4>
                <code>git init</code>
                <p className="text-secondary mt-1">
                  Le dice a Git: "Empezá a seguir los cambios de esta carpeta"
                </p>
              </div>
              <div className="repo-card repo-card--clone">
                <h4>Bajarte uno que ya existe</h4>
                <code>git clone &lt;url&gt;</code>
                <p className="text-secondary mt-1">
                  Te baja la carpeta completa con todo su historial
                </p>
              </div>
            </div>

            <Callout variant="warning">
              <p>
                No toques NUNCA la carpeta <code>.git</code>. Es la memoria de
                Git. Si la borrás, perdés todo el historial.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 3: Commits */}
        <section id="seccion-commits" className="section">
          <div className="container">
            <span className="section__number">Sección 3</span>
            <h2 className="section__title">
              Commits — las fotos de tu proyecto
            </h2>

            <p className="mb-4">
              Imaginá que estás renovando tu depto. Cada vez que terminás algo
              importante (pintaste una pared, pusiste un mueble, cambiaste el
              piso), sacás una foto y le ponés una nota. Un commit es
              exactamente eso.
            </p>

            <GitFlowDiagram />

            <Callout>
              <p>
                Pensalo así: estás en un super. <code>git add</code> es meter
                productos al carrito. <code>git commit</code> es pasar por caja.
                Lo que no pusiste en el carrito queda en la góndola esperando.
              </p>
            </Callout>

            <h3 className="mt-4 mb-3">Simulador de terminal</h3>
            <p className="text-secondary mb-3">
              Escribí comandos de Git acá abajo. El panel de la derecha te
              muestra qué pasa con tus archivos en tiempo real.
            </p>

            <TerminalSimulator />

            <h3 className="mt-4 mb-3">Buenos mensajes de commit</h3>
            <div className="commits-compare">
              <div className="commits-compare__col commits-compare__col--bad">
                <h4>Mal</h4>
                <div className="commits-compare__item">"cambios"</div>
                <div className="commits-compare__item">"arreglé cosas"</div>
                <div className="commits-compare__item">"wip"</div>
                <div className="commits-compare__item">"asdfghj"</div>
              </div>
              <div className="commits-compare__col commits-compare__col--good">
                <h4>Bien</h4>
                <div className="commits-compare__item">
                  "Agrego formulario de contacto"
                </div>
                <div className="commits-compare__item">
                  "Corrijo error en validación de email"
                </div>
                <div className="commits-compare__item">
                  "Agrego estilos al header"
                </div>
                <div className="commits-compare__item">
                  "Elimino archivos de prueba"
                </div>
              </div>
            </div>

            <Callout variant="info">
              <p>
                El mensaje tiene que explicar QUÉ hiciste de forma que si lo
                leés en 3 meses, entiendas sin abrir el código.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 4: Ramas */}
        <section id="seccion-ramas" className="section">
          <div className="container">
            <span className="section__number">Sección 4</span>
            <h2 className="section__title">Ramas — universos paralelos</h2>

            <svg
              className="branches-svg"
              viewBox="0 0 700 200"
              role="img"
              aria-label="Analogía: main es tu casa funcional, una rama es donde probás cambios"
            >
              <rect
                x="40"
                y="80"
                width="150"
                height="100"
                rx="6"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <polygon
                points="115,40 40,80 190,80"
                fill="#3B82F6"
                opacity="0.3"
              />
              <text
                x="115"
                y="195"
                textAnchor="middle"
                fontSize="10"
                fill="#3B82F6"
                fontWeight="600"
              >
                main — tu casa funcional
              </text>

              <path
                d="M200 100 Q280 60 350 80"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="6,3"
              />
              <text x="275" y="55" fontSize="9" fill="#8B5CF6">
                Creo una rama
              </text>

              <rect
                x="360"
                y="60"
                width="150"
                height="100"
                rx="6"
                fill="#F5F3FF"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <polygon
                points="435,20 360,60 510,60"
                fill="#8B5CF6"
                opacity="0.3"
              />
              <ellipse
                cx="470"
                cy="130"
                rx="25"
                ry="12"
                fill="#93C5FD"
                opacity="0.5"
              />
              <text
                x="435"
                y="180"
                textAnchor="middle"
                fontSize="10"
                fill="#8B5CF6"
                fontWeight="600"
              >
                rama — probás la pileta
              </text>

              <path
                d="M520 90 L580 70"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
              <text x="590" y="65" fontSize="9" fill="#10B981">
                Quedó bien → merge
              </text>
              <path
                d="M520 130 L580 150"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <text x="590" y="155" fontSize="9" fill="#EF4444">
                Quedó mal → la borrás
              </text>
            </svg>

            <BranchesDiagram />

            <h3 className="mt-4 mb-3">Comandos de ramas</h3>
            <div className="branch-commands">
              <div className="branch-command-card">
                <code>git branch</code>
                <p>Ver en qué rama estás</p>
              </div>
              <div className="branch-command-card">
                <code>git switch -c nombre</code>
                <p>Crear rama y moverte</p>
              </div>
              <div className="branch-command-card">
                <code>git switch main</code>
                <p>Volver a main</p>
              </div>
            </div>

            <div className="naming-conventions">
              <p className="mb-2">
                <strong>Convenciones de nombres de ramas:</strong>
              </p>
              <code>feature/nombre-de-lo-que-haces</code>
              <code>fix/que-estas-arreglando</code>
              <p className="text-secondary mt-2 text-sm">
                Siempre en minúsculas, sin espacios (usar guiones).
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: Remoto y GitHub */}
        <section id="seccion-remoto" className="section">
          <div className="container">
            <span className="section__number">Sección 5</span>
            <h2 className="section__title">El repositorio remoto y GitHub</h2>

            <RemoteDiagram />

            <h3 className="mt-4 mb-3">Paso a paso para conectar con GitHub</h3>
            <div className="connect-steps">
              <div className="connect-step">
                <span className="connect-step__number">1</span>
                <div>
                  <p>Crear repo en GitHub (botón "New repository")</p>
                </div>
              </div>
              <div className="connect-step">
                <span className="connect-step__number">2</span>
                <div>
                  <p>Conectar</p>
                  <code>git remote add origin &lt;url&gt;</code>
                </div>
              </div>
              <div className="connect-step">
                <span className="connect-step__number">3</span>
                <div>
                  <p>Subir</p>
                  <code>git push -u origin main</code>
                </div>
              </div>
              <div className="connect-step">
                <span className="connect-step__number">4</span>
                <div>
                  <p>Verificar en GitHub que apareció tu código</p>
                </div>
              </div>
            </div>

            <Callout variant="warning">
              <p>
                Subir código a GitHub NO es lo mismo que publicar una página
                web. GitHub guarda el código, no lo ejecuta.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 6: Flujo de equipo */}
        <section id="seccion-equipo" className="section">
          <div className="container">
            <span className="section__number">Sección 6</span>
            <h2 className="section__title">Flujo de trabajo en equipo</h2>

            <TeamFlow />

            <Callout>
              <p>
                Un PR es como el control de calidad en una fábrica. Vos armás la
                pieza (tu rama). Antes de que entre a producción (main), alguien
                la revisa. Si está bien, se aprueba. Si hay algo para corregir,
                te lo devuelven con notas.
              </p>
            </Callout>
          </div>
        </section>

        {/* SECCIÓN 7: Conceptos */}
        <section id="seccion-conceptos" className="section">
          <div className="container">
            <span className="section__number">Sección 7</span>
            <h2 className="section__title">Conceptos que vas a escuchar</h2>

            <h3 className="mb-3">Merge y conflictos</h3>
            <svg
              className="merge-conflict-svg"
              viewBox="0 0 400 120"
              role="img"
              aria-label="Dos ramas que modifican la misma línea generan un conflicto"
            >
              <line
                x1="50"
                y1="60"
                x2="350"
                y2="60"
                stroke="#3B82F6"
                strokeWidth="3"
              />
              <path
                d="M150 60 Q200 20 250 30"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <path
                d="M150 60 Q200 100 250 90"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <circle
                cx="280"
                cy="60"
                r="15"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <text
                x="280"
                y="65"
                textAnchor="middle"
                fontSize="16"
                fill="#EF4444"
              >
                !
              </text>
              <text x="250" y="20" fontSize="9" fill="#8B5CF6">
                Persona A edita línea 5
              </text>
              <text x="250" y="110" fontSize="9" fill="#F59E0B">
                Persona B edita línea 5
              </text>
            </svg>
            <p className="text-secondary">
              Cuando dos personas tocan la misma línea, Git te pide que elijas.
              No te asustes: es normal y tiene solución.
            </p>

            <h3 className="mt-4 mb-3">.gitignore</h3>
            <div className="gitignore-code">
              node_modules/
              <br />
              .env
              <br />
              .DS_Store
            </div>
            <p className="text-secondary">
              Este archivo le dice a Git qué cosas NO seguir. Cosas pesadas,
              secretos, archivos basura del sistema.
            </p>

            <h3 className="mt-4 mb-3">Preguntas frecuentes</h3>
            <div className="git-flip-cards">
              <FlipCard
                front={<p>¿Necesitás internet para usar Git?</p>}
                back={
                  <p>
                    No. Git funciona 100% local. Solo necesitás internet para
                    push/pull.
                  </p>
                }
              />
              <FlipCard
                front={<p>¿GitHub es la única opción?</p>}
                back={
                  <p>
                    No. Existen GitLab, Bitbucket, etc. La herramienta (Git) es
                    la misma.
                  </p>
                }
              />
              <FlipCard
                front={<p>¿Push y commit son lo mismo?</p>}
                back={
                  <p>
                    No. Commit guarda local. Push sube al remoto. Primero
                    commit, después push.
                  </p>
                }
              />
            </div>
          </div>
        </section>

        {/* SECCIÓN 8: Cierre */}
        <section id="seccion-cierre" className="section">
          <div className="container">
            <span className="section__number">Sección 8</span>
            <h2 className="section__title">Cierre y próximos pasos</h2>

            <h3 className="mb-3">Resumen en 5 frases</h3>
            <div className="summary-cards">
              <div className="summary-card">
                <span className="summary-card__number">1</span>
                <p>
                  Git guarda el historial de tu proyecto. Cada checkpoint es un
                  commit.
                </p>
              </div>
              <div className="summary-card">
                <span className="summary-card__number">2</span>
                <p>
                  El flujo: cambiar archivos → <code>git add</code> →{" "}
                  <code>git commit</code>.
                </p>
              </div>
              <div className="summary-card">
                <span className="summary-card__number">3</span>
                <p>Las ramas te dejan probar cosas sin romper main.</p>
              </div>
              <div className="summary-card">
                <span className="summary-card__number">4</span>
                <p>
                  GitHub = backup + trabajo en equipo. Push sube, pull baja.
                </p>
              </div>
              <div className="summary-card">
                <span className="summary-card__number">5</span>
                <p>
                  En equipo: pull, rama, commit, push, PR, merge. Ese es el
                  ciclo.
                </p>
              </div>
            </div>

            <h3 className="mt-4 mb-3">Tarea para la próxima clase</h3>
            <Checklist
              storageKey="clase2-checklist-tarea"
              showProgress
              completionMessage="Genial! Estás listo/a para la próxima clase."
              items={[
                "Tener Git instalado (verificar con git --version)",
                "Tener una cuenta en GitHub",
                "Crear un repositorio local con al menos 3 commits descriptivos",
                "Conectar el repo con GitHub y hacer push exitosamente",
                "(Bonus) Crear una rama, hacer un cambio, commitear, y volver a main",
              ]}
            />

            <h3 className="mt-4 mb-3">Recursos</h3>
            <div className="resources-grid">
              <a
                href="https://git-scm.com/doc"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg
                  className="resource-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono documentación"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#FEF2F2"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="13"
                    y="12"
                    width="14"
                    height="18"
                    rx="2"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="24"
                    y2="17"
                    stroke="#EF4444"
                    strokeWidth="1"
                  />
                  <line
                    x1="16"
                    y1="21"
                    x2="24"
                    y2="21"
                    stroke="#EF4444"
                    strokeWidth="1"
                  />
                  <line
                    x1="16"
                    y1="25"
                    x2="22"
                    y2="25"
                    stroke="#EF4444"
                    strokeWidth="1"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">
                    Git — Documentación oficial
                  </p>
                  <p className="text-secondary">La referencia completa</p>
                </div>
              </a>
              <a
                href="https://docs.github.com/en/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg
                  className="resource-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono GitHub"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#F5F3FF"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="18" r="7" fill="#8B5CF6" opacity="0.3" />
                  <path
                    d="M14 30 Q14 24 20 24 Q26 24 26 30"
                    fill="#8B5CF6"
                    opacity="0.3"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">
                    GitHub — Guía para principiantes
                  </p>
                  <p className="text-secondary">Guía oficial para arrancar</p>
                </div>
              </a>
              <a
                href="https://ohshitgit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg
                  className="resource-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono ayuda"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#FFFBEB"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    fontSize="16"
                    fill="#F59E0B"
                  >
                    !
                  </text>
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">Oh Shit, Git!?!</p>
                  <p className="text-secondary">
                    Para cuando la cagás (inglés, muy útil)
                  </p>
                </div>
              </a>
              <a
                href="https://learngitbranching.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <svg
                  className="resource-card__icon"
                  viewBox="0 0 40 40"
                  role="img"
                  aria-label="Icono juego interactivo"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 20 L18 24 L26 16"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="resource-card__text">
                  <p className="resource-card__title">Learn Git Branching</p>
                  <p className="text-secondary">
                    Juego interactivo para entender ramas
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
