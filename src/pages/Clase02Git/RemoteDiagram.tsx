import { useRef, useCallback } from "react";

export function RemoteDiagram() {
  const particleRef = useRef<SVGCircleElement>(null);

  const animateParticle = useCallback(
    (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      color: string,
    ) => {
      const particle = particleRef.current;
      if (!particle) return;

      particle.setAttribute("cx", String(startX));
      particle.setAttribute("cy", String(startY));
      particle.setAttribute("fill", color);
      particle.classList.add("animating");

      const duration = 800;
      const startTime = performance.now();

      function step(currentTime: number) {
        let progress = (currentTime - startTime) / duration;
        if (progress > 1) progress = 1;

        const x = startX + (endX - startX) * progress;
        const y = startY + (endY - startY) * progress;
        particle!.setAttribute("cx", String(x));
        particle!.setAttribute("cy", String(y));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          particle!.classList.remove("animating");
        }
      }

      requestAnimationFrame(step);
    },
    [],
  );

  return (
    <div className="remote-diagram">
      <svg
        className="remote-diagram__svg"
        viewBox="0 0 700 280"
        role="img"
        aria-label="Diagrama de tu computadora (local) y GitHub (remoto) con flechas push, pull y clone"
      >
        {/* Local */}
        <rect
          x="30"
          y="30"
          width="250"
          height="220"
          rx="12"
          fill="#EFF6FF"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <text
          x="155"
          y="60"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#1E40AF"
        >
          Tu computadora
        </text>
        <text x="155" y="78" textAnchor="middle" fontSize="10" fill="#3B82F6">
          (LOCAL)
        </text>

        <rect
          x="60"
          y="100"
          width="60"
          height="40"
          rx="4"
          fill="#FFF7ED"
          stroke="#F97316"
          strokeWidth="1"
        />
        <text x="90" y="125" textAnchor="middle" fontSize="8" fill="#9A3412">
          Working
        </text>
        <rect
          x="130"
          y="100"
          width="60"
          height="40"
          rx="4"
          fill="#FFFBEB"
          stroke="#F59E0B"
          strokeWidth="1"
        />
        <text x="160" y="125" textAnchor="middle" fontSize="8" fill="#92400E">
          Staging
        </text>
        <rect
          x="200"
          y="100"
          width="60"
          height="40"
          rx="4"
          fill="#ECFDF5"
          stroke="#10B981"
          strokeWidth="1"
        />
        <text x="230" y="125" textAnchor="middle" fontSize="8" fill="#065F46">
          Repo
        </text>

        <circle cx="100" cy="190" r="8" fill="#3B82F6" />
        <circle cx="140" cy="190" r="8" fill="#3B82F6" />
        <circle cx="180" cy="190" r="8" fill="#3B82F6" />
        <line
          x1="108"
          y1="190"
          x2="132"
          y2="190"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <line
          x1="148"
          y1="190"
          x2="172"
          y2="190"
          stroke="#3B82F6"
          strokeWidth="2"
        />

        {/* Remote */}
        <rect
          x="420"
          y="30"
          width="250"
          height="220"
          rx="12"
          fill="#F5F3FF"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
        <text
          x="545"
          y="60"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#5B21B6"
        >
          GitHub
        </text>
        <text x="545" y="78" textAnchor="middle" fontSize="10" fill="#8B5CF6">
          (REMOTO)
        </text>

        <circle cx="490" cy="150" r="8" fill="#8B5CF6" />
        <circle cx="530" cy="150" r="8" fill="#8B5CF6" />
        <circle cx="570" cy="150" r="8" fill="#8B5CF6" />
        <line
          x1="498"
          y1="150"
          x2="522"
          y2="150"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
        <line
          x1="538"
          y1="150"
          x2="562"
          y2="150"
          stroke="#8B5CF6"
          strokeWidth="2"
        />

        {/* Arrows */}
        <defs>
          <marker
            id="arrow-green-git"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
          </marker>
          <marker
            id="arrow-amber-git"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#F59E0B" />
          </marker>
          <marker
            id="arrow-blue-git"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#3B82F6" />
          </marker>
        </defs>

        <path
          d="M280 140 L420 140"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrow-green-git)"
        />
        <text
          x="350"
          y="132"
          textAnchor="middle"
          fontSize="11"
          fill="#10B981"
          fontWeight="600"
        >
          git push
        </text>

        <path
          d="M420 170 L280 170"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          markerEnd="url(#arrow-amber-git)"
        />
        <text
          x="350"
          y="188"
          textAnchor="middle"
          fontSize="11"
          fill="#F59E0B"
          fontWeight="600"
        >
          git pull
        </text>

        <path
          d="M420 210 L280 210"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="6,3"
          markerEnd="url(#arrow-blue-git)"
        />
        <text
          x="350"
          y="228"
          textAnchor="middle"
          fontSize="11"
          fill="#3B82F6"
          fontWeight="600"
        >
          git clone
        </text>

        {/* Particle */}
        <circle
          ref={particleRef}
          className="remote-particle"
          cx="280"
          cy="140"
          r="6"
          fill="#10B981"
        />
      </svg>

      <div className="remote-diagram__controls">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => animateParticle(200, 140, 500, 140, "#10B981")}
        >
          Simular push
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => animateParticle(500, 160, 200, 160, "#F59E0B")}
        >
          Simular pull
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => animateParticle(500, 180, 200, 180, "#3B82F6")}
        >
          Simular clone
        </button>
      </div>
    </div>
  );
}
