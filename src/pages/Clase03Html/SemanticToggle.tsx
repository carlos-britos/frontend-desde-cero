import { useState } from "react";

const DIV_CODE = `<div class="header">
  <div class="titulo">Mi Blog</div>
  <div class="nav">
    <a href="/">Inicio</a>
    <a href="/contacto">Contacto</a>
  </div>
</div>
<div class="contenido">
  <div class="articulo">
    <div class="titulo-art">Mi primer post</div>
    <div class="texto">Contenido del post...</div>
  </div>
</div>
<div class="pie">
  <div class="copy">© 2026 Mi Blog</div>
</div>`;

const SEMANTIC_CODE = `<header>
  <h1>Mi Blog</h1>
  <nav>
    <a href="/">Inicio</a>
    <a href="/contacto">Contacto</a>
  </nav>
</header>
<main>
  <article>
    <h2>Mi primer post</h2>
    <p>Contenido del post...</p>
  </article>
</main>
<footer>
  <p>© 2026 Mi Blog</p>
</footer>`;

export function SemanticToggle() {
  const [isSemantic, setIsSemantic] = useState(false);

  function toggle() {
    setIsSemantic((prev) => !prev);
  }

  return (
    <div
      className={`semantic-compare${isSemantic ? " semantic-compare--semantic" : ""}`}
    >
      <div
        className="semantic-toggle"
        role="switch"
        aria-checked={isSemantic}
        aria-label="Alternar entre codigo con divs y codigo semantico"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <span
          className={`semantic-toggle__label semantic-toggle__label--div${!isSemantic ? " semantic-toggle__label--active" : ""}`}
        >
          Solo &lt;div&gt;
        </span>
        <div className="semantic-toggle__track">
          <div className="semantic-toggle__thumb" />
        </div>
        <span
          className={`semantic-toggle__label semantic-toggle__label--semantic${isSemantic ? " semantic-toggle__label--active" : ""}`}
        >
          Semantico
        </span>
      </div>

      <div className="semantic-compare__panels">
        <div className="semantic-compare__code">
          <pre
            className={`semantic-compare__pre semantic-compare__pre--div${!isSemantic ? " semantic-compare__pre--active" : ""}`}
          >
            <code>{DIV_CODE}</code>
          </pre>
          <pre
            className={`semantic-compare__pre semantic-compare__pre--semantic${isSemantic ? " semantic-compare__pre--active" : ""}`}
          >
            <code>{SEMANTIC_CODE}</code>
          </pre>
        </div>

        <div className="semantic-compare__preview">
          <div className="semantic-compare__mini-page">
            <div className="mini-header">Mi Blog</div>
            <div className="mini-nav">Inicio | Contacto</div>
            <div className="mini-main">
              <div className="mini-title">Mi primer post</div>
              <div className="mini-text">Contenido del post...</div>
            </div>
            <div className="mini-footer">&copy; 2026 Mi Blog</div>
          </div>
          <p className="semantic-compare__verdict semantic-compare__verdict--div">
            El navegador no sabe que es cada parte.
          </p>
          <p className="semantic-compare__verdict semantic-compare__verdict--semantic">
            El navegador entiende la estructura.
          </p>
        </div>
      </div>
    </div>
  );
}
