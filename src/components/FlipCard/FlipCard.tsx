import { useState, type ReactNode } from "react";
import "./FlipCard.css";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
}

export function FlipCard({ front, back }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={
        flipped
          ? "Mostrando respuesta, click para volver"
          : "Click para ver la respuesta"
      }
    >
      <div className="flip-card__inner">
        <div className="flip-card__front">{front}</div>
        <div className="flip-card__back">{back}</div>
      </div>
    </div>
  );
}
