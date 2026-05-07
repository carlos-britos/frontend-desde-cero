import { useState } from "react";

const ZONE_DATA: Record<
  string,
  { tag: string; desc: string; example: string; color: string }
> = {
  header: {
    tag: "<header>",
    desc: "Encabezado de la pagina. Logo, titulo, navegacion.",
    example: "El logo y menu de arriba de todo.",
    color: "#F97316",
  },
  nav: {
    tag: "<nav>",
    desc: "Seccion de navegacion. Links a otras paginas.",
    example: "Home, Nosotros, Contacto.",
    color: "#3B82F6",
  },
  main: {
    tag: "<main>",
    desc: "Contenido principal. Solo UNO por pagina.",
    example: "Los posts del blog, los productos.",
    color: "#10B981",
  },
  article: {
    tag: "<article>",
    desc: "Contenido independiente y auto-contenido.",
    example: "Un post, una noticia, un producto.",
    color: "#F59E0B",
  },
  section: {
    tag: "<section>",
    desc: "Seccion tematica del contenido.",
    example: 'Seccion "Sobre nosotros".',
    color: "#EAB308",
  },
  aside: {
    tag: "<aside>",
    desc: "Contenido lateral, relacionado pero secundario.",
    example: "Barra lateral, datos extra.",
    color: "#8B5CF6",
  },
  footer: {
    tag: "<footer>",
    desc: "Pie de pagina. Copyright, links legales, contacto.",
    example: "© 2026, politica de privacidad.",
    color: "#64748B",
  },
};

const ZONES = [
  "header",
  "nav",
  "main",
  "article",
  "section",
  "aside",
  "footer",
] as const;

interface ZoneRectProps {
  zone: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
  color: string;
  fontSize: number;
  textX: number;
  textY: number;
  isActive: boolean;
  onClick: (zone: string) => void;
}

function ZoneRect({
  zone,
  x,
  y,
  width,
  height,
  rx,
  color,
  fontSize,
  textX,
  textY,
  isActive,
  onClick,
}: ZoneRectProps) {
  return (
    <g
      className="semantic-map__zone"
      style={{ cursor: "pointer" }}
      onClick={() => onClick(zone)}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={rx}
        fill={color}
        opacity={isActive ? 0.35 : 0.12}
        stroke={color}
        strokeWidth={isActive ? 3 : 1.5}
        style={{ transition: "opacity 0.2s, stroke-width 0.2s" }}
      />
      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        fontSize={fontSize}
        fill={color}
        fontFamily="monospace"
        fontWeight={isActive ? "700" : "600"}
        style={{ pointerEvents: "none" }}
      >
        &lt;{zone}&gt;
      </text>
    </g>
  );
}

export function SemanticMap() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  function handleClick(zone: string) {
    setActiveZone((prev) => (prev === zone ? null : zone));
  }

  const data = activeZone ? ZONE_DATA[activeZone] : null;

  return (
    <div className="semantic-map">
      <svg
        className="semantic-map__svg"
        viewBox="0 0 400 320"
        role="img"
        aria-label="Mapa interactivo de zonas semanticas de una pagina web"
      >
        <ZoneRect
          zone="header"
          x={10}
          y={10}
          width={380}
          height={50}
          rx={6}
          color="#F97316"
          fontSize={13}
          textX={200}
          textY={40}
          isActive={activeZone === "header"}
          onClick={handleClick}
        />
        <ZoneRect
          zone="nav"
          x={25}
          y={25}
          width={350}
          height={22}
          rx={4}
          color="#3B82F6"
          fontSize={9}
          textX={200}
          textY={41}
          isActive={activeZone === "nav"}
          onClick={handleClick}
        />
        <ZoneRect
          zone="main"
          x={10}
          y={70}
          width={280}
          height={190}
          rx={6}
          color="#10B981"
          fontSize={13}
          textX={150}
          textY={90}
          isActive={activeZone === "main"}
          onClick={handleClick}
        />
        <ZoneRect
          zone="article"
          x={25}
          y={100}
          width={250}
          height={55}
          rx={4}
          color="#F59E0B"
          fontSize={11}
          textX={150}
          textY={132}
          isActive={activeZone === "article"}
          onClick={handleClick}
        />
        <ZoneRect
          zone="section"
          x={25}
          y={165}
          width={250}
          height={55}
          rx={4}
          color="#EAB308"
          fontSize={11}
          textX={150}
          textY={197}
          isActive={activeZone === "section"}
          onClick={handleClick}
        />
        <ZoneRect
          zone="aside"
          x={300}
          y={70}
          width={90}
          height={190}
          rx={6}
          color="#8B5CF6"
          fontSize={13}
          textX={345}
          textY={170}
          isActive={activeZone === "aside"}
          onClick={handleClick}
        />
        <ZoneRect
          zone="footer"
          x={10}
          y={270}
          width={380}
          height={40}
          rx={6}
          color="#64748B"
          fontSize={13}
          textX={200}
          textY={295}
          isActive={activeZone === "footer"}
          onClick={handleClick}
        />
      </svg>

      <div className="semantic-map__buttons">
        {ZONES.map((zone) => (
          <button
            key={zone}
            className={`semantic-map__btn${activeZone === zone ? " semantic-map__btn--active" : ""}`}
            onClick={() => handleClick(zone)}
          >
            {zone}
          </button>
        ))}
      </div>

      {data && (
        <div className="semantic-map__info" aria-live="polite">
          <p className="semantic-map__info-tag">{data.tag}</p>
          <p className="semantic-map__info-desc">{data.desc}</p>
          <p className="semantic-map__info-example">Ejemplo: {data.example}</p>
        </div>
      )}
    </div>
  );
}
