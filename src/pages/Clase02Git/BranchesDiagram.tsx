import { useState } from "react";

export function BranchesDiagram() {
  const [step, setStep] = useState(0);

  const explanations = [
    "Estás en main. Tu código funciona bien.",
    "Creaste una rama. Ahora podés probar cosas sin romper main.",
    "Hiciste un commit en la rama. Main sigue igual.",
    "Volviste a main. Los cambios de la rama no están acá.",
    "Merge: los cambios de la rama ahora están en main.",
  ];

  return (
    <div className="branches-diagram">
      <svg className="branches-diagram__svg" viewBox="0 0 600 200">
        <line
          x1="60"
          y1="120"
          x2="540"
          y2="120"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="100" cy="120" r="10" fill="#3B82F6" />
        <circle cx="200" cy="120" r="10" fill="#3B82F6" />
        <circle cx="300" cy="120" r="10" fill="#3B82F6" />

        {step >= 1 && (
          <>
            <path
              d="M200 120 Q230 70 280 60"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <text x="260" y="45" fontSize="11" fill="#8B5CF6" fontWeight="600">
              feature/estilos
            </text>
          </>
        )}

        {step >= 2 && (
          <>
            <circle cx="280" cy="60" r="10" fill="#8B5CF6" />
            <path
              d="M280 60 Q330 55 370 60"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="370" cy="60" r="10" fill="#8B5CF6" />
          </>
        )}

        {step >= 3 && (
          <>
            <circle cx="400" cy="120" r="10" fill="#3B82F6" />
            <text x="395" y="150" fontSize="10" fill="#3B82F6" fontWeight="600">
              * main
            </text>
          </>
        )}

        {step >= 4 && (
          <>
            <path
              d="M370 60 Q420 80 450 120"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="450"
              cy="120"
              r="12"
              fill="#10B981"
              stroke="#065F46"
              strokeWidth="2"
            />
            <text x="440" y="150" fontSize="10" fill="#10B981" fontWeight="600">
              merge
            </text>
          </>
        )}
      </svg>

      <div className="branches-diagram__controls">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => step < 1 && setStep(1)}
        >
          Crear rama
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => step >= 1 && step < 2 && setStep(2)}
        >
          Commit en rama
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => step >= 2 && step < 3 && setStep(3)}
        >
          Volver a main
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => step >= 3 && step < 4 && setStep(4)}
        >
          Merge
        </button>
        <button className="btn btn-sm btn-secondary" onClick={() => setStep(0)}>
          Reiniciar
        </button>
      </div>

      <p className="branches-diagram__explanation">{explanations[step]}</p>
    </div>
  );
}
