import { useState } from "react";

const ZONE_DATA: Record<
  string,
  { tag: string; desc: string; example: string }
> = {
  header: {
    tag: "<header>",
    desc: "Encabezado de la pagina. Logo, titulo, navegacion.",
    example: "El logo y menu de arriba de todo.",
  },
  nav: {
    tag: "<nav>",
    desc: "Seccion de navegacion. Links a otras paginas.",
    example: "Home, Nosotros, Contacto.",
  },
  main: {
    tag: "<main>",
    desc: "Contenido principal. Solo UNO por pagina.",
    example: "Los posts del blog, los productos.",
  },
  article: {
    tag: "<article>",
    desc: "Contenido independiente y auto-contenido.",
    example: "Un post, una noticia, un producto.",
  },
  section: {
    tag: "<section>",
    desc: "Seccion tematica del contenido.",
    example: 'Seccion "Sobre nosotros".',
  },
  aside: {
    tag: "<aside>",
    desc: "Contenido lateral, relacionado pero secundario.",
    example: "Barra lateral, datos extra.",
  },
  footer: {
    tag: "<footer>",
    desc: "Pie de pagina. Copyright, links legales, contacto.",
    example: "© 2026, politica de privacidad.",
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
        aria-label="Mapa de zonas semanticas de una pagina web"
      >
        {/* Header */}
        <rect
          x="10"
          y="10"
          width="380"
          height="50"
          rx="6"
          fill="#F97316"
          opacity="0.15"
          stroke="#F97316"
          strokeWidth="2"
        />
        <text
          x="200"
          y="40"
          textAnchor="middle"
          fontSize="13"
          fill="#F97316"
          fontFamily="monospace"
          fontWeight="600"
        >
          &lt;header&gt;
        </text>
        {/* Nav dentro de header */}
        <rect
          x="25"
          y="25"
          width="350"
          height="22"
          rx="4"
          fill="#3B82F6"
          opacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <text
          x="200"
          y="41"
          textAnchor="middle"
          fontSize="9"
          fill="#3B82F6"
          fontFamily="monospace"
          opacity="0.8"
        >
          &lt;nav&gt;
        </text>
        {/* Main */}
        <rect
          x="10"
          y="70"
          width="280"
          height="190"
          rx="6"
          fill="#10B981"
          opacity="0.15"
          stroke="#10B981"
          strokeWidth="2"
        />
        <text
          x="150"
          y="90"
          textAnchor="middle"
          fontSize="13"
          fill="#10B981"
          fontFamily="monospace"
          fontWeight="600"
        >
          &lt;main&gt;
        </text>
        {/* Article */}
        <rect
          x="25"
          y="100"
          width="250"
          height="55"
          rx="4"
          fill="#F59E0B"
          opacity="0.15"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <text
          x="150"
          y="132"
          textAnchor="middle"
          fontSize="11"
          fill="#F59E0B"
          fontFamily="monospace"
        >
          &lt;article&gt;
        </text>
        {/* Section */}
        <rect
          x="25"
          y="165"
          width="250"
          height="55"
          rx="4"
          fill="#EAB308"
          opacity="0.15"
          stroke="#EAB308"
          strokeWidth="1.5"
        />
        <text
          x="150"
          y="197"
          textAnchor="middle"
          fontSize="11"
          fill="#EAB308"
          fontFamily="monospace"
        >
          &lt;section&gt;
        </text>
        {/* Aside */}
        <rect
          x="300"
          y="70"
          width="90"
          height="190"
          rx="6"
          fill="#8B5CF6"
          opacity="0.15"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
        <text
          x="345"
          y="170"
          textAnchor="middle"
          fontSize="13"
          fill="#8B5CF6"
          fontFamily="monospace"
          fontWeight="600"
        >
          &lt;aside&gt;
        </text>
        {/* Footer */}
        <rect
          x="10"
          y="270"
          width="380"
          height="40"
          rx="6"
          fill="#64748B"
          opacity="0.15"
          stroke="#64748B"
          strokeWidth="2"
        />
        <text
          x="200"
          y="295"
          textAnchor="middle"
          fontSize="13"
          fill="#64748B"
          fontFamily="monospace"
          fontWeight="600"
        >
          &lt;footer&gt;
        </text>
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
