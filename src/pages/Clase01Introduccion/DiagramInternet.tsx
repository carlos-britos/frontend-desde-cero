import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | "all";

const explanations: Record<string, string> = {
  "1": 'Tu compu le pregunta al DNS: "Quiero ir a youtube.com, ¿cuál es su número?". El DNS busca en su agenda y responde con la IP: 142.250.185.46. Ahora tu compu sabe a dónde mandar el pedido.',
  "2": 'Con el número (la IP), tu compu le manda un mensaje al servidor a través de internet: "Hola, mandame tu página". Es como hacer un pedido de delivery con la dirección exacta.',
  "3": "El servidor recibe el pedido y responde con 3 archivos: HTML (la estructura), CSS (el diseño) y JS (la interactividad). Tu navegador los junta y te muestra la página armada.",
  all: "Todo esto pasa en milisegundos, cada vez que abrís una página web. Pedido → respuesta, siempre.",
  default:
    "Hacé click en cada paso para ver cómo tu compu se comunica con un servidor.",
};

function Arrow({
  label,
  direction,
  color,
  mono,
}: {
  label: string;
  direction: "right" | "left";
  color: string;
  mono?: boolean;
}) {
  return (
    <div className="diagram-arrow">
      <span
        className={`diagram-arrow__label${mono ? " diagram-arrow__label--mono" : ""}`}
        style={{ color }}
      >
        {label}
      </span>
      <div className="diagram-arrow__line">
        <svg viewBox="0 0 200 12" preserveAspectRatio="none">
          {direction === "right" ? (
            <>
              <line
                x1="0"
                y1="6"
                x2="190"
                y2="6"
                stroke={color}
                strokeWidth="2"
              />
              <polygon points="190,1 200,6 190,11" fill={color} />
            </>
          ) : (
            <>
              <polygon points="10,1 0,6 10,11" fill={color} />
              <line
                x1="10"
                y1="6"
                x2="200"
                y2="6"
                stroke={color}
                strokeWidth="2"
                strokeDasharray="6,4"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}

export function DiagramInternet() {
  const [currentStep, setCurrentStep] = useState<Step>(0);

  function isVisible(step: number): boolean {
    if (currentStep === "all") return true;
    return typeof currentStep === "number" && currentStep >= step;
  }

  function getExplanation(): string {
    if (currentStep === "all") return explanations.all;
    if (currentStep === 0) return explanations.default;
    return explanations[String(currentStep)];
  }

  return (
    <div className="diagram-internet">
      <div className="diagram-steps">
        {/* Paso 1: ida y vuelta con DNS */}
        <div
          className={`diagram-step${isVisible(1) ? " diagram-step--visible" : ""}`}
        >
          <div className="diagram-step__badge diagram-step__badge--purple">
            1
          </div>
          <div className="diagram-step__content">
            <div className="diagram-step__row">
              <div className="diagram-box diagram-box--blue">Tu compu</div>
              <Arrow label="youtube.com?" direction="right" color="#8B5CF6" />
              <div className="diagram-box diagram-box--purple">DNS</div>
            </div>
            <div className="diagram-step__row">
              <div className="diagram-box diagram-box--purple">DNS</div>
              <Arrow
                label="142.250.185.46"
                direction="left"
                color="#8B5CF6"
                mono
              />
              <div className="diagram-box diagram-box--blue">Tu compu</div>
            </div>
          </div>
        </div>

        {/* Paso 2: pedido al servidor */}
        <div
          className={`diagram-step${isVisible(2) ? " diagram-step--visible" : ""}`}
        >
          <div className="diagram-step__badge diagram-step__badge--amber">
            2
          </div>
          <div className="diagram-step__content">
            <div className="diagram-step__row">
              <div className="diagram-box diagram-box--blue">Tu compu</div>
              <Arrow
                label="Mandame tu página"
                direction="right"
                color="#F59E0B"
              />
              <div className="diagram-box diagram-box--green">Servidor</div>
            </div>
          </div>
        </div>

        {/* Paso 3: respuesta del servidor */}
        <div
          className={`diagram-step${isVisible(3) ? " diagram-step--visible" : ""}`}
        >
          <div className="diagram-step__badge diagram-step__badge--green">
            3
          </div>
          <div className="diagram-step__content">
            <div className="diagram-step__row">
              <div className="diagram-box diagram-box--green">Servidor</div>
              <Arrow
                label="HTML + CSS + JS"
                direction="right"
                color="#10B981"
              />
              <div className="diagram-box diagram-box--blue">Tu compu</div>
            </div>
          </div>
        </div>
      </div>

      <div className="diagram-internet__controls">
        <button
          className={`btn btn-sm${currentStep === 1 ? " btn-active" : " btn-secondary"}`}
          onClick={() => setCurrentStep(1)}
        >
          Paso 1: DNS
        </button>
        <button
          className={`btn btn-sm${currentStep === 2 ? " btn-active" : " btn-secondary"}`}
          onClick={() => setCurrentStep(2)}
        >
          Paso 2: Pedido
        </button>
        <button
          className={`btn btn-sm${currentStep === 3 ? " btn-active" : " btn-secondary"}`}
          onClick={() => setCurrentStep(3)}
        >
          Paso 3: Respuesta
        </button>
        <button
          className={`btn btn-sm${currentStep === "all" ? " btn-active" : " btn-primary"}`}
          onClick={() => setCurrentStep("all")}
        >
          Ver todo junto
        </button>
      </div>

      <p className="diagram-internet__explanation">{getExplanation()}</p>
    </div>
  );
}
