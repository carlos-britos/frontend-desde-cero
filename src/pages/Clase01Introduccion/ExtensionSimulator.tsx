import { useState } from "react";

const extensionMap: Record<string, { color: string; label: string }> = {
  html: {
    color: "#F97316",
    label: "Documento HTML — se abre con el navegador",
  },
  css: {
    color: "#8B5CF6",
    label: "Hoja de estilos — define los colores y diseño",
  },
  js: { color: "#EAB308", label: "JavaScript — agrega interactividad" },
  txt: {
    color: "#64748B",
    label: "Texto plano — se abre con el bloc de notas",
  },
  jpg: {
    color: "#EC4899",
    label: "Imagen JPEG — se abre con el visor de fotos",
  },
  jpeg: {
    color: "#EC4899",
    label: "Imagen JPEG — se abre con el visor de fotos",
  },
  png: {
    color: "#EC4899",
    label: "Imagen PNG — se abre con el visor de fotos",
  },
  pdf: { color: "#EF4444", label: "Documento PDF — se abre con un lector PDF" },
};

export function ExtensionSimulator() {
  const [filename, setFilename] = useState("documento.txt");

  const extension = filename.includes(".")
    ? (filename.split(".").pop()?.toLowerCase() ?? "")
    : "";
  const match = extensionMap[extension];
  const color = match?.color ?? "#94A3B8";
  const label = match?.label ?? "Extensión no reconocida";

  return (
    <div className="extension-simulator">
      <div className="extension-simulator__icon">
        <svg
          viewBox="0 0 64 64"
          role="img"
          aria-label="Icono del archivo según su extensión"
        >
          <circle cx="32" cy="32" r="28" fill={color} />
          <text
            x="32"
            y="38"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#fff"
          >
            {extension ? `.${extension}` : "??"}
          </text>
        </svg>
      </div>
      <input
        className="extension-simulator__input"
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        aria-label="Nombre del archivo — editá la extensión para ver cómo cambia el icono"
      />
      <p className="extension-simulator__message">{label}</p>
      <p className="mt-2 text-secondary extension-simulator__note">
        La extensión NO cambia el contenido. Solo le dice a la compu cómo
        tratarlo.
      </p>
    </div>
  );
}
