import { useState } from "react";

interface SkeletonItem {
  name: string;
  desc: string;
  warning: string;
}

const SKELETON_DATA: Record<string, SkeletonItem> = {
  doctype: {
    name: "<!DOCTYPE html>",
    desc: "Le dice al navegador: 'Esto es HTML5 moderno, usa las reglas actuales'. Siempre va en la primera linea.",
    warning:
      "El navegador entra en 'quirks mode' y las cosas pueden verse raro.",
  },
  html: {
    name: '<html lang="es">',
    desc: "El elemento raiz. TODO va adentro. El lang le dice al navegador y a los lectores de pantalla el idioma.",
    warning:
      "Los lectores de pantalla pronuncian mal. Google no sabe en que idioma estas.",
  },
  head: {
    name: "<head>",
    desc: "Informacion SOBRE la pagina que no se ve: charset, titulo de la pestana, links a CSS.",
    warning:
      "Las tildes se ven como simbolos raros. La pestana no tiene titulo.",
  },
  body: {
    name: "<body>",
    desc: "TODO lo que el usuario ve: textos, imagenes, botones, formularios. Si no esta en body, no se ve.",
    warning: "La pagina queda en blanco.",
  },
};

export function SkeletonDiagram() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  function handleClick(key: string) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  const data = activeKey ? SKELETON_DATA[activeKey] : null;

  return (
    <div
      className="skeleton-diagram"
      role="group"
      aria-label="Diagrama interactivo del esqueleto HTML"
    >
      <div className="skeleton-boxes">
        <button
          className="skeleton-box skeleton-box--doctype"
          aria-expanded={activeKey === "doctype"}
          onClick={() => handleClick("doctype")}
        >
          <span className="skeleton-box__tag">&lt;!DOCTYPE html&gt;</span>
          <span className="skeleton-box__label">Declaracion: soy HTML5</span>
        </button>
        <div className="skeleton-box skeleton-box--html">
          <button
            className="skeleton-box__header"
            aria-expanded={activeKey === "html"}
            onClick={() => handleClick("html")}
          >
            <span className="skeleton-box__tag">
              &lt;html lang=&quot;es&quot;&gt;
            </span>
            <span className="skeleton-box__label">El sobre (todo va aca)</span>
          </button>
          <div className="skeleton-box__children">
            <button
              className="skeleton-box skeleton-box--head"
              aria-expanded={activeKey === "head"}
              onClick={() => handleClick("head")}
            >
              <span className="skeleton-box__tag">&lt;head&gt;</span>
              <span className="skeleton-box__label">Info invisible (meta)</span>
              <div className="skeleton-box__content">
                <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>
                <code>&lt;title&gt;Mi pagina&lt;/title&gt;</code>
              </div>
            </button>
            <button
              className="skeleton-box skeleton-box--body"
              aria-expanded={activeKey === "body"}
              onClick={() => handleClick("body")}
            >
              <span className="skeleton-box__tag">&lt;body&gt;</span>
              <span className="skeleton-box__label">Lo que el usuario ve</span>
              <div className="skeleton-box__content">
                <code>&lt;h1&gt;Hola&lt;/h1&gt;</code>
                <code>&lt;p&gt;Mi primer parrafo&lt;/p&gt;</code>
              </div>
            </button>
          </div>
        </div>
      </div>

      {data && (
        <div className="skeleton-info" aria-live="polite">
          <p className="skeleton-info__name">{data.name}</p>
          <p className="skeleton-info__desc">{data.desc}</p>
          <p className="skeleton-info__warning">
            Si lo olvidas: {data.warning}
          </p>
        </div>
      )}
    </div>
  );
}
