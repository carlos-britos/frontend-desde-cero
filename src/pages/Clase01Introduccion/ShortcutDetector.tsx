import { useState, useEffect, useRef } from "react";

const shortcuts = [
  {
    keys: ["Alt", "Tab"],
    action: "Cambiar entre programas",
    desc: "Saltá de una ventana a otra sin usar el mouse.",
    mac: "Cmd + Tab",
    tip: "Mantené Alt apretado y apretá Tab varias veces para elegir.",
  },
  {
    keys: ["Ctrl", "C / V / X"],
    action: "Copiar, pegar, cortar",
    desc: "Los tres atajos más usados del universo.",
    mac: "Cmd + C / V / X",
    tip: "X es como cortar con tijera (eXtirpar).",
  },
  {
    keys: ["Ctrl", "F"],
    action: "Buscar en cualquier lado",
    desc: "Funciona en el navegador, en el editor, en PDFs...",
    mac: "Cmd + F",
    tip: "Probá apretar Ctrl+F ahora mismo en esta página.",
  },
  {
    keys: ["Ctrl", "T / W"],
    action: "Nueva pestaña / cerrar pestaña",
    desc: 'T de "Tab" nueva, W de "Window close".',
    mac: "Cmd + T / W",
    tip: "Ctrl+Shift+T reabre la última pestaña que cerraste.",
  },
  {
    keys: ["Win", "← →"],
    action: "Dividir pantalla",
    desc: "Poné el editor a un lado y el navegador al otro.",
    mac: "Mantené el botón verde de la ventana.",
    tip: "Ideal para programar: código a la izquierda, resultado a la derecha.",
  },
];

const shortcutMap: Record<string, number> = {
  "alt+tab": 0,
  "ctrl+c": 1,
  "ctrl+v": 1,
  "ctrl+x": 1,
  "ctrl+f": 2,
  "ctrl+t": 3,
  "ctrl+w": 3,
  "meta+arrowleft": 4,
  "meta+arrowright": 4,
};

export function ShortcutDetector() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [detectedIndex, setDetectedIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const parts: string[] = [];
      if (e.ctrlKey) parts.push("ctrl");
      if (e.altKey) parts.push("alt");
      if (e.metaKey) parts.push("meta");
      parts.push(e.key.toLowerCase());

      const combo = parts.join("+");
      const matchIndex = shortcutMap[combo];

      if (matchIndex !== undefined) {
        e.preventDefault();
        setDetectedIndex(matchIndex);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setDetectedIndex(null), 600);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="shortcuts-grid">
      {shortcuts.map((shortcut, index) => {
        const isDetected = detectedIndex === index;
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={index}
            className={`shortcut-card${isDetected ? " detected" : ""}${isExpanded ? " expanded" : ""}`}
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpandedIndex(isExpanded ? null : index);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="shortcut-card__keys">
              {shortcut.keys.map((key, i) => (
                <span key={key}>
                  {i > 0 && " + "}
                  <kbd>{key}</kbd>
                </span>
              ))}
            </div>
            <p className="shortcut-card__action">{shortcut.action}</p>
            <p className="shortcut-card__desc">{shortcut.desc}</p>
            <div className="shortcut-card__extra">
              <p>
                <strong>Mac:</strong> <kbd>{shortcut.mac}</kbd>
              </p>
              <p>Tip: {shortcut.tip}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
