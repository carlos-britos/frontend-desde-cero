import { useState } from "react";

const STEPS = [
  { icon: "↓", cmd: "git pull", desc: "Bajo lo último de main" },
  {
    icon: "⑂",
    cmd: "git switch -c feature/mi-tarea",
    desc: "Creo mi espacio de trabajo",
  },
  {
    icon: "●",
    cmd: 'git add . && git commit -m "..."',
    desc: "Trabajo y voy guardando",
  },
  { icon: "↑", cmd: "git push", desc: "Subo mi trabajo a GitHub" },
  { icon: "✓", cmd: "Abrir Pull Request", desc: "Pido que revisen y aprueben" },
];

export function TeamFlow() {
  const [visibleCount, setVisibleCount] = useState(0);

  function showNext() {
    if (visibleCount >= STEPS.length) {
      setVisibleCount(0);
      return;
    }
    setVisibleCount((c) => c + 1);
  }

  function showAll() {
    setVisibleCount(STEPS.length);
  }

  return (
    <div className="team-flow">
      <div className="team-flow__controls">
        <button className="btn btn-sm btn-primary" onClick={showNext}>
          Ver paso a paso
        </button>
        <button className="btn btn-sm btn-secondary" onClick={showAll}>
          Ver todo junto
        </button>
      </div>

      <div className="team-flow__steps">
        {STEPS.map((step, i) => (
          <div
            key={i}
            className={`team-flow__step${i < visibleCount ? " visible" : ""}`}
          >
            <span className="team-flow__step-icon">{step.icon}</span>
            <div className="team-flow__step-content">
              <div className="team-flow__step-cmd">{step.cmd}</div>
              <div className="team-flow__step-desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
