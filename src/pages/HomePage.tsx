import { ClaseCard } from "../components/ClaseCard";
import "./HomePage.css";

const clases = [
  {
    number: "Clase 01",
    title: "Cómo funciona esto",
    description:
      "Internet, archivos, herramientas, editor y la diferencia entre frontend y backend.",
    tags: ["Internet", "VS Code", "DevTools"],
    href: "/clase/01-introduccion",
  },
  {
    number: "Clase 02",
    title: "Git — Control de versiones",
    description:
      "Historial de cambios, commits, ramas, GitHub y trabajo en equipo.",
    tags: ["Git", "GitHub", "Ramas"],
    href: "/clase/02-git",
  },
  {
    number: "Clase 03",
    title: "HTML — Los cimientos de la web",
    description:
      "Estructura de un documento, tags, anidamiento, semántica, atributos, links, imágenes y formularios.",
    tags: ["Tags", "Semántica", "Formularios"],
    href: "/clase/03-html",
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content text-center">
          <span className="hero__badge">Curso gratuito</span>
          <h1 className="hero__title">
            Frontend desde <span className="hero__accent">Cero</span>
          </h1>
          <p className="hero__subtitle">
            Un curso práctico para aprender desarrollo web desde cero absoluto.
            Sin requisitos previos.
          </p>
          <a href="#clases" className="btn btn-primary hero__cta">
            Ver clases
          </a>
        </div>
      </section>

      <section className="clases-section" id="clases">
        <h2 className="clases-section__title">Clases</h2>
        <p className="clases-section__subtitle">
          Avanzá a tu ritmo. Cada clase es interactiva y práctica.
        </p>
        <div className="clases-grid">
          {clases.map((clase) => (
            <ClaseCard key={clase.href} {...clase} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-section__inner">
          <h2 className="about-section__title">Sobre este curso</h2>
          <div className="about-grid">
            <div className="about-item">
              <div className="about-item__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="about-item__title">Interactivo</h3>
              <p className="about-item__desc">
                Cada clase tiene demos, simuladores y ejercicios para que
                practiques mientras aprendés.
              </p>
            </div>
            <div className="about-item">
              <div className="about-item__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <h3 className="about-item__title">Progresivo</h3>
              <p className="about-item__desc">
                Desde cero absoluto hasta construir tus propias páginas web,
                paso a paso.
              </p>
            </div>
            <div className="about-item">
              <div className="about-item__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="about-item__title">Gratuito</h3>
              <p className="about-item__desc">
                Sin costo, sin registro, sin excusas. Todo el contenido es libre
                y abierto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
