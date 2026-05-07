import { useState } from "react";

type ActiveState = "html" | "css" | "js";

export function TriadaDemo() {
  const [activeState, setActiveState] = useState<ActiveState>("html");

  return (
    <div className="triada">
      <div className="triada__controls">
        <button
          className={`triada__btn${activeState === "html" ? " active" : ""}`}
          data-state="html"
          onClick={() => setActiveState("html")}
        >
          Solo HTML
        </button>
        <button
          className={`triada__btn${activeState === "css" ? " active" : ""}`}
          data-state="css"
          onClick={() => setActiveState("css")}
        >
          HTML + CSS
        </button>
        <button
          className={`triada__btn${activeState === "js" ? " active" : ""}`}
          data-state="js"
          onClick={() => setActiveState("js")}
        >
          HTML + CSS + JS
        </button>
      </div>

      <div className="triada__display">
        <div
          className={`triada__state${activeState === "html" ? " active" : ""}`}
        >
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <text
              x="150"
              y="25"
              textAnchor="middle"
              fill="#F97316"
              fontSize="16"
              fontWeight="bold"
            >
              HTML = Estructura
            </text>
            <polygon
              points="150,50 80,110 220,110"
              fill="none"
              stroke="#1E293B"
              strokeWidth="2"
            />
            <rect
              x="95"
              y="110"
              width="110"
              height="90"
              fill="none"
              stroke="#1E293B"
              strokeWidth="2"
            />
            <rect
              x="130"
              y="140"
              width="40"
              height="60"
              fill="none"
              stroke="#1E293B"
              strokeWidth="2"
            />
            <rect
              x="100"
              y="120"
              width="25"
              height="25"
              fill="none"
              stroke="#1E293B"
              strokeWidth="2"
            />
            <rect
              x="175"
              y="120"
              width="25"
              height="25"
              fill="none"
              stroke="#1E293B"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div
          className={`triada__state${activeState === "css" ? " active" : ""}`}
        >
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <text
              x="150"
              y="25"
              textAnchor="middle"
              fill="#8B5CF6"
              fontSize="16"
              fontWeight="bold"
            >
              CSS = Presentación
            </text>
            <polygon
              points="150,50 80,110 220,110"
              fill="#DC2626"
              stroke="#991B1B"
              strokeWidth="2"
            />
            <rect
              x="95"
              y="110"
              width="110"
              height="90"
              fill="#FEF3C7"
              stroke="#92400E"
              strokeWidth="2"
            />
            <rect
              x="130"
              y="140"
              width="40"
              height="60"
              fill="#7C3AED"
              stroke="#5B21B6"
              strokeWidth="2"
            />
            <circle cx="165" cy="170" r="3" fill="#EAB308" />
            <rect
              x="100"
              y="120"
              width="25"
              height="25"
              fill="#BFDBFE"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <line
              x1="112"
              y1="120"
              x2="112"
              y2="145"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="132"
              x2="125"
              y2="132"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <rect
              x="175"
              y="120"
              width="25"
              height="25"
              fill="#BFDBFE"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <line
              x1="187"
              y1="120"
              x2="187"
              y2="145"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <line
              x1="175"
              y1="132"
              x2="200"
              y2="132"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <rect
              x="70"
              y="200"
              width="160"
              height="20"
              rx="10"
              fill="#86EFAC"
            />
          </svg>
        </div>

        <div
          className={`triada__state${activeState === "js" ? " active" : ""}`}
        >
          <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <text
              x="150"
              y="25"
              textAnchor="middle"
              fill="#EAB308"
              fontSize="16"
              fontWeight="bold"
            >
              JavaScript = Comportamiento
            </text>
            <polygon
              points="150,50 80,110 220,110"
              fill="#DC2626"
              stroke="#991B1B"
              strokeWidth="2"
            />
            <rect
              x="95"
              y="110"
              width="110"
              height="90"
              fill="#FEF3C7"
              stroke="#92400E"
              strokeWidth="2"
            />
            <rect
              x="130"
              y="140"
              width="40"
              height="60"
              fill="#7C3AED"
              stroke="#5B21B6"
              strokeWidth="2"
            >
              <animate
                attributeName="width"
                values="40;30;40"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            <circle cx="165" cy="170" r="3" fill="#EAB308" />
            <rect
              x="100"
              y="120"
              width="25"
              height="25"
              stroke="#1E40AF"
              strokeWidth="1"
            >
              <animate
                attributeName="fill"
                values="#FEF08A;#BFDBFE;#FEF08A"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </rect>
            <line
              x1="112"
              y1="120"
              x2="112"
              y2="145"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="132"
              x2="125"
              y2="132"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <rect
              x="175"
              y="120"
              width="25"
              height="25"
              stroke="#1E40AF"
              strokeWidth="1"
            >
              <animate
                attributeName="fill"
                values="#BFDBFE;#FEF08A;#BFDBFE"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </rect>
            <line
              x1="187"
              y1="120"
              x2="187"
              y2="145"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <line
              x1="175"
              y1="132"
              x2="200"
              y2="132"
              stroke="#1E40AF"
              strokeWidth="1"
            />
            <rect
              x="195"
              y="80"
              width="15"
              height="30"
              fill="#92400E"
              stroke="#78350F"
              strokeWidth="1"
            />
            <circle cx="202" cy="65" r="8" fill="#9CA3AF" opacity="0.6">
              <animate
                attributeName="cy"
                values="65;50;65"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="208" cy="58" r="6" fill="#9CA3AF" opacity="0.4">
              <animate
                attributeName="cy"
                values="58;43;58"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <rect
              x="70"
              y="200"
              width="160"
              height="20"
              rx="10"
              fill="#86EFAC"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
