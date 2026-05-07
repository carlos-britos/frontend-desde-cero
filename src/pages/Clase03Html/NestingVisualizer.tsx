import { useState, useRef, useCallback } from "react";

export function NestingVisualizer() {
  const [animating, setAnimating] = useState(false);
  const boxesRef = useRef<HTMLDivElement>(null);

  const handleAnimate = useCallback(() => {
    if (animating || !boxesRef.current) return;
    setAnimating(true);

    const boxes = boxesRef.current.querySelectorAll(".nesting-box");
    boxes.forEach((box) => {
      box.classList.add("nesting-animate-hidden");
      box.classList.remove("nesting-animate-visible");
    });

    boxes.forEach((box, i) => {
      setTimeout(
        () => {
          box.classList.remove("nesting-animate-hidden");
          box.classList.add("nesting-animate-visible");
        },
        300 * (i + 1),
      );
    });

    setTimeout(() => setAnimating(false), 300 * (boxes.length + 1));
  }, [animating]);

  return (
    <div className="nesting-demo">
      <div className="nesting-demo__panels">
        <div className="nesting-panel nesting-panel--correct">
          <h4 className="nesting-panel__title nesting-panel__title--correct">
            Correcto
          </h4>
          <div className="nesting-panel__boxes" ref={boxesRef}>
            <div className="nesting-box nesting-box--div">
              <span className="nesting-box__label">&lt;div&gt;</span>
              <div className="nesting-box nesting-box--section">
                <span className="nesting-box__label">&lt;section&gt;</span>
                <div className="nesting-box nesting-box--h2">
                  <span className="nesting-box__label">&lt;h2&gt;</span>
                  <span className="nesting-box__text">Titulo del articulo</span>
                </div>
                <div className="nesting-box nesting-box--p">
                  <span className="nesting-box__label">&lt;p&gt;</span>
                  <span className="nesting-box__text">Contenido del texto</span>
                </div>
              </div>
            </div>
          </div>
          <p className="nesting-panel__note nesting-panel__note--correct">
            Lo que se abre primero se cierra ultimo
          </p>
        </div>

        <div className="nesting-panel nesting-panel--incorrect">
          <h4 className="nesting-panel__title nesting-panel__title--incorrect">
            Incorrecto
          </h4>
          <div className="nesting-panel__boxes nesting-panel__boxes--broken">
            <div className="nesting-box nesting-box--div nesting-box--broken-outer">
              <span className="nesting-box__label">&lt;div&gt;</span>
              <div className="nesting-box nesting-box--section nesting-box--broken-section">
                <span className="nesting-box__label">&lt;section&gt;</span>
                <div className="nesting-box nesting-box--h2">
                  <span className="nesting-box__label">&lt;h2&gt;</span>
                  <span className="nesting-box__text">Titulo</span>
                </div>
              </div>
              <div className="nesting-box nesting-box--p nesting-box--overflow">
                <span className="nesting-box__label">&lt;p&gt;</span>
                <span className="nesting-box__text">Se sale del section</span>
              </div>
            </div>
            <svg
              className="nesting-x"
              viewBox="0 0 40 40"
              role="img"
              aria-label="Incorrecto"
            >
              <circle cx="20" cy="20" r="18" fill="#EF4444" opacity="0.15" />
              <line
                x1="12"
                y1="12"
                x2="28"
                y2="28"
                stroke="#EF4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="28"
                y1="12"
                x2="12"
                y2="28"
                stroke="#EF4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="nesting-panel__note nesting-panel__note--incorrect">
            Los tags se cruzan: esto rompe la estructura
          </p>
        </div>
      </div>
      <div className="nesting-demo__controls">
        <button
          className="btn btn-sm btn-secondary"
          onClick={handleAnimate}
          disabled={animating}
        >
          Animar
        </button>
      </div>
    </div>
  );
}
