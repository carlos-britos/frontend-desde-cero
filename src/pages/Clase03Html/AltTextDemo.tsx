import { useState } from "react";

export function AltTextDemo() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="alt-demo">
      <div className="alt-demo__container">
        {!broken ? (
          <div className="alt-demo__state alt-demo__state--active">
            <div className="alt-demo__image">
              <svg
                viewBox="0 0 400 250"
                role="img"
                aria-label="Paisaje con montanas y lago"
              >
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="250"
                  rx="8"
                  fill="#87CEEB"
                />
                <polygon points="60,250 160,100 260,250" fill="#228B22" />
                <polygon points="180,250 300,80 400,250" fill="#2E8B57" />
                <polygon
                  points="240,250 340,120 400,200 400,250"
                  fill="#3CB371"
                />
                <circle cx="320" cy="60" r="30" fill="#FFD700" />
                <ellipse
                  cx="200"
                  cy="230"
                  rx="180"
                  ry="30"
                  fill="#4682B4"
                  opacity="0.7"
                />
                <polygon
                  points="100,250 200,130 300,250"
                  fill="#556B2F"
                  opacity="0.3"
                />
              </svg>
            </div>
            <p className="alt-demo__label">Todo bien. La imagen se ve.</p>
            <button
              className="btn btn-sm btn-secondary alt-demo__btn"
              onClick={() => setBroken(true)}
            >
              Romper la imagen
            </button>
          </div>
        ) : (
          <div className="alt-demo__state alt-demo__state--active">
            <div className="alt-demo__image alt-demo__image--broken">
              <svg
                viewBox="0 0 400 250"
                role="img"
                aria-label="Icono de imagen rota"
              >
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="250"
                  rx="8"
                  fill="#F8FAFC"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                />
                <rect
                  x="150"
                  y="60"
                  width="100"
                  height="80"
                  rx="4"
                  fill="#E2E8F0"
                />
                <path
                  d="M160 130 L190 100 L210 115 L240 90 L250 130 Z"
                  fill="#CBD5E1"
                />
                <circle cx="180" cy="85" r="8" fill="#CBD5E1" />
                <line
                  x1="170"
                  y1="155"
                  x2="230"
                  y2="155"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <line
                  x1="180"
                  y1="170"
                  x2="220"
                  y2="170"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
              </svg>
              <p className="alt-demo__alt-text">
                Atardecer en las montanas con un lago en primer plano
              </p>
            </div>
            <p className="alt-demo__label alt-demo__label--broken">
              La imagen no cargo. El alt describe lo que deberia verse.
            </p>
            <button
              className="btn btn-sm btn-secondary alt-demo__btn"
              onClick={() => setBroken(false)}
            >
              Reparar la imagen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
