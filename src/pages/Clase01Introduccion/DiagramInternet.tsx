import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | "all";

const explanations: Record<string, string> = {
  "1": 'Tu compu le pregunta al DNS: "¿En qué dirección queda youtube.com?"',
  "2": "Con la dirección IP, tu compu le pide la página al servidor a través de internet.",
  "3": "El servidor responde con los archivos: HTML, CSS y JS. Tu navegador los muestra.",
  all: "Todo esto pasa en milisegundos cada vez que abrís una página web.",
  default:
    "Hacé click en los pasos para ver cómo se comunica tu compu con un servidor.",
};

export function DiagramInternet() {
  const [currentStep, setCurrentStep] = useState<Step>(0);

  function isVisible(step: number): string {
    if (currentStep === "all") return "diagram-step visible";
    return `diagram-step${typeof currentStep === "number" && currentStep >= step ? " visible" : ""}`;
  }

  function arrowClass(step: number): string {
    if (currentStep === "all") return "diagram-step arrow-animated visible";
    return `diagram-step arrow-animated${typeof currentStep === "number" && currentStep >= step ? " visible" : ""}`;
  }

  function getExplanation(): string {
    if (currentStep === "all") return explanations.all;
    if (currentStep === 0) return explanations.default;
    return explanations[String(currentStep)];
  }

  return (
    <div className="diagram-internet">
      <svg
        className="diagram-internet__svg"
        viewBox="0 0 800 250"
        role="img"
        aria-label="Diagrama: cómo tu computadora se comunica con un servidor a través de internet"
      >
        <g className={isVisible(0)}>
          <rect
            x="20"
            y="80"
            width="140"
            height="90"
            rx="12"
            fill="#EFF6FF"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <rect
            x="50"
            y="100"
            width="80"
            height="50"
            rx="4"
            fill="#3B82F6"
            opacity="0.2"
          />
          <rect
            x="60"
            y="105"
            width="60"
            height="35"
            rx="2"
            fill="#3B82F6"
            opacity="0.4"
          />
          <text
            x="90"
            y="165"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#1E293B"
          >
            Vos (el cliente)
          </text>
        </g>

        <g className={isVisible(1)}>
          <rect
            x="250"
            y="20"
            width="130"
            height="80"
            rx="12"
            fill="#F5F3FF"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          <rect
            x="275"
            y="35"
            width="40"
            height="50"
            rx="4"
            fill="#8B5CF6"
            opacity="0.2"
          />
          <circle cx="340" cy="55" r="12" fill="#8B5CF6" opacity="0.3" />
          <text
            x="315"
            y="95"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#1E293B"
          >
            DNS (la guía)
          </text>
        </g>

        <g className={isVisible(2)}>
          <rect
            x="420"
            y="80"
            width="130"
            height="90"
            rx="12"
            fill="#FFFBEB"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <circle cx="485" cy="110" r="12" fill="#F59E0B" opacity="0.3" />
          <rect
            x="475"
            y="122"
            width="20"
            height="30"
            rx="4"
            fill="#F59E0B"
            opacity="0.3"
          />
          <text
            x="485"
            y="165"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#1E293B"
          >
            Internet (el mozo)
          </text>
        </g>

        <g className={isVisible(2)}>
          <rect
            x="630"
            y="80"
            width="150"
            height="90"
            rx="12"
            fill="#ECFDF5"
            stroke="#10B981"
            strokeWidth="2"
          />
          <rect
            x="670"
            y="100"
            width="70"
            height="50"
            rx="4"
            fill="#10B981"
            opacity="0.2"
          />
          <line
            x1="685"
            y1="110"
            x2="685"
            y2="140"
            stroke="#10B981"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="705"
            y1="110"
            x2="705"
            y2="140"
            stroke="#10B981"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="725"
            y1="110"
            x2="725"
            y2="140"
            stroke="#10B981"
            strokeWidth="2"
            opacity="0.5"
          />
          <text
            x="705"
            y="165"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#1E293B"
          >
            Servidor (la cocina)
          </text>
        </g>

        <path
          className={arrowClass(1)}
          d="M160 110 Q 200 60 250 55"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          markerEnd="url(#arrowhead-purple)"
        />
        <text
          className={isVisible(1)}
          x="190"
          y="55"
          fontSize="9"
          fill="#8B5CF6"
        >
          ¿Qué número tiene youtube.com?
        </text>
        <path
          className={arrowClass(1)}
          d="M250 70 Q 200 90 160 120"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="5,3"
        />
        <text
          className={isVisible(1)}
          x="180"
          y="110"
          fontSize="9"
          fill="#8B5CF6"
        >
          142.250.185.46
        </text>

        <path
          className={arrowClass(2)}
          d="M160 135 Q 300 200 420 130"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          markerEnd="url(#arrowhead-amber)"
        />
        <path
          className={arrowClass(2)}
          d="M550 125 L 630 125"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          markerEnd="url(#arrowhead-amber)"
        />
        <text
          className={isVisible(2)}
          x="350"
          y="195"
          fontSize="9"
          fill="#F59E0B"
        >
          Mandame tu página
        </text>

        <path
          className={arrowClass(3)}
          d="M630 140 Q 400 220 160 145"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrowhead-green)"
          strokeDasharray="5,3"
        />
        <text
          className={isVisible(3)}
          x="380"
          y="225"
          fontSize="9"
          fill="#10B981"
        >
          Acá tenés: HTML + CSS + JS
        </text>

        <defs>
          <marker
            id="arrowhead-purple"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#8B5CF6" />
          </marker>
          <marker
            id="arrowhead-amber"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#F59E0B" />
          </marker>
          <marker
            id="arrowhead-green"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
          </marker>
        </defs>
      </svg>

      <div className="diagram-internet__controls">
        <button
          className={`btn btn-sm${currentStep === 1 ? " btn-active" : " btn-secondary"}`}
          onClick={() => setCurrentStep(1)}
        >
          Paso 1
        </button>
        <button
          className={`btn btn-sm${currentStep === 2 ? " btn-active" : " btn-secondary"}`}
          onClick={() => setCurrentStep(2)}
        >
          Paso 2
        </button>
        <button
          className={`btn btn-sm${currentStep === 3 ? " btn-active" : " btn-secondary"}`}
          onClick={() => setCurrentStep(3)}
        >
          Paso 3
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
