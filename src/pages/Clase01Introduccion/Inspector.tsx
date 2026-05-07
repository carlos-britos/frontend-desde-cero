import { useState } from "react";

const elements = [
  { id: "titulo", html: "<h1>Mi página</h1>", content: "Mi página", tag: "h1" },
  {
    id: "parrafo",
    html: "<p>Esto es un párrafo de ejemplo.</p>",
    content: "Esto es un párrafo de ejemplo.",
    tag: "p",
  },
  {
    id: "boton",
    html: '<button class="btn">Click acá</button>',
    content: "Click acá",
    tag: "button",
  },
  {
    id: "imagen",
    html: '<img src="foto.jpg" alt="Placeholder">',
    content: "[ imagen ]",
    tag: "img",
  },
];

export function Inspector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const selectedElement = elements.find((el) => el.id === selectedId);

  function handleSelect(id: string) {
    const el = elements.find((e) => e.id === id)!;
    setSelectedId(id);
    setEditText(el.content);
  }

  function renderElement(tag: string, text: string) {
    switch (tag) {
      case "h1":
        return <h1 className="inspector__page-title">{text}</h1>;
      case "p":
        return <p>{text}</p>;
      case "button":
        return <span className="btn btn-primary btn-sm">{text}</span>;
      case "img":
        return <div className="inspector__page-image">{text}</div>;
      default:
        return <span>{text}</span>;
    }
  }

  function getDisplayText(el: (typeof elements)[number]) {
    if (el.id === selectedId) return editText;
    return el.content;
  }

  return (
    <div className="inspector">
      <div className="inspector__page">
        {elements.map((el) => (
          <div
            key={el.id}
            className={`inspector__page-element${el.id === selectedId ? " selected" : ""}`}
            onClick={() => handleSelect(el.id)}
          >
            {renderElement(el.tag, getDisplayText(el))}
          </div>
        ))}
      </div>
      <div className="inspector__panel">
        <p className="inspector__panel-title">Elementos</p>
        <div className="inspector__panel-code">
          {selectedElement
            ? selectedElement.html
            : "Hacé click en un elemento para inspeccionarlo"}
        </div>
        <label className="inspector__panel-title mt-2" htmlFor="inspector-edit">
          Editar texto:
        </label>
        <input
          id="inspector-edit"
          className="inspector__panel-edit"
          type="text"
          value={editText}
          disabled={!selectedId}
          onChange={(e) => setEditText(e.target.value)}
          placeholder={
            selectedId ? "Editá el texto..." : "Seleccioná un elemento"
          }
        />
      </div>
    </div>
  );
}
