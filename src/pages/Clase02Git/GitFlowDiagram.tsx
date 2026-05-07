import { useState } from "react";

type FlowStep = 0 | 1 | 2;

export function GitFlowDiagram() {
  const [step, setStep] = useState<FlowStep>(0);

  const explanations = [
    "Editaste archivos. Git los ve en rojo porque cambiaron.",
    "Con `git add` los movés al carrito. Están listos para commitear.",
    "Con `git commit` sacás la foto. Quedan guardados para siempre.",
  ];

  function handleAdd() {
    if (step === 0) setStep(1);
  }

  function handleCommit() {
    if (step === 1) setStep(2);
  }

  return (
    <div className="flow-diagram">
      <div className="flow-diagram__zones">
        <div className="flow-diagram__zone flow-diagram__zone--working">
          <div className="flow-diagram__zone-title">Working Directory</div>
          <div className="flow-diagram__zone-desc">
            Tus archivos (donde editás)
          </div>
          <div className="flow-diagram__files">
            {step === 0 && (
              <>
                <span className="flow-diagram__file flow-diagram__file--modified">
                  index.html
                </span>
                <span className="flow-diagram__file flow-diagram__file--modified">
                  style.css
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flow-diagram__arrows">
          <div className="flow-diagram__arrow flow-diagram__arrow--add">
            git add →
          </div>
        </div>

        <div className="flow-diagram__zone flow-diagram__zone--staging">
          <div className="flow-diagram__zone-title">Staging Area</div>
          <div className="flow-diagram__zone-desc">La zona de preparación</div>
          <div className="flow-diagram__files">
            {step === 1 && (
              <>
                <span className="flow-diagram__file flow-diagram__file--staged">
                  index.html
                </span>
                <span className="flow-diagram__file flow-diagram__file--staged">
                  style.css
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flow-diagram__arrows">
          <div className="flow-diagram__arrow flow-diagram__arrow--commit">
            git commit →
          </div>
        </div>

        <div className="flow-diagram__zone flow-diagram__zone--repo">
          <div className="flow-diagram__zone-title">Repository</div>
          <div className="flow-diagram__zone-desc">El historial (commits)</div>
          <div className="flow-diagram__files">
            {step === 2 && (
              <>
                <span className="flow-diagram__file flow-diagram__file--committed">
                  index.html
                </span>
                <span className="flow-diagram__file flow-diagram__file--committed">
                  style.css
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flow-diagram__controls">
        <button className="btn btn-sm btn-secondary" onClick={handleAdd}>
          git add
        </button>
        <button className="btn btn-sm btn-secondary" onClick={handleCommit}>
          git commit
        </button>
        <button className="btn btn-sm btn-secondary" onClick={() => setStep(0)}>
          Reiniciar
        </button>
      </div>

      <p className="flow-diagram__explanation">{explanations[step]}</p>
    </div>
  );
}
