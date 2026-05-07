import { useState } from "react";

interface AttrRow {
  attr: string;
  where: string;
  what: string;
  code: string;
  detail: string;
}

const ATTRS: AttrRow[] = [
  {
    attr: "href",
    where: "<a>",
    what: "La URL a donde lleva el link",
    code: '<a href="https://google.com">Ir a Google</a>',
    detail: "Puede ser una URL absoluta o relativa.",
  },
  {
    attr: "src",
    where: "<img>, <script>",
    what: "La ruta del archivo (imagen, script)",
    code: '<img src="fotos/mi-gato.jpg">',
    detail: "Puede ser ruta relativa o absoluta.",
  },
  {
    attr: "alt",
    where: "<img>",
    what: "Texto alternativo (accesibilidad)",
    code: '<img src="foto.jpg" alt="Gato negro durmiendo">',
    detail: "OBLIGATORIO. Lo leen los lectores de pantalla.",
  },
  {
    attr: "class",
    where: "Cualquier tag",
    what: "Asigna clases CSS para estilos",
    code: '<p class="destacado">Texto</p>',
    detail: "Se puede repetir. Varios elementos con la misma clase.",
  },
  {
    attr: "id",
    where: "Cualquier tag",
    what: "Identificador unico en la pagina",
    code: '<div id="contacto">...</div>',
    detail: "UNICO. No repetir en la pagina.",
  },
  {
    attr: "type",
    where: "<input>, <button>",
    what: "Tipo de input o boton",
    code: '<input type="email">',
    detail: "Cambia el comportamiento y el teclado en celulares.",
  },
  {
    attr: "placeholder",
    where: "<input>, <textarea>",
    what: "Texto gris de ejemplo",
    code: '<input placeholder="tu@email.com">',
    detail: "Desaparece cuando escribis. NO reemplaza al label.",
  },
  {
    attr: "name",
    where: "<input>, <select>",
    what: "Nombre del campo para envio",
    code: '<input name="correo">',
    detail: "Sin name, el dato no se envia.",
  },
  {
    attr: "required",
    where: "<input>, <select>",
    what: "Campo obligatorio",
    code: "<input required>",
    detail: "Atributo booleano: no necesita valor.",
  },
  {
    attr: "disabled",
    where: "<input>, <button>",
    what: "Desactiva el elemento",
    code: "<button disabled>Enviar</button>",
    detail: "El usuario no puede interactuar.",
  },
];

export function AttrTable() {
  const [expandedAttr, setExpandedAttr] = useState<string | null>(null);

  function handleClick(attr: string) {
    setExpandedAttr((prev) => (prev === attr ? null : attr));
  }

  return (
    <div
      className="attr-table"
      role="table"
      aria-label="Tabla de atributos HTML comunes"
    >
      <div className="attr-table__header" role="row">
        <span role="columnheader">Atributo</span>
        <span role="columnheader">Donde se usa</span>
        <span role="columnheader">Que hace</span>
      </div>
      {ATTRS.map((row) => (
        <div
          key={row.attr}
          className="attr-table__row"
          role="row"
          tabIndex={0}
          aria-expanded={expandedAttr === row.attr}
          onClick={() => handleClick(row.attr)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick(row.attr);
            }
          }}
        >
          <span className="attr-table__attr" role="cell">
            {row.attr}
          </span>
          <span className="attr-table__where" role="cell">
            {row.where}
          </span>
          <span className="attr-table__what" role="cell">
            {row.what}
          </span>
          {expandedAttr === row.attr && (
            <div className="attr-table__detail">
              <code>{row.code}</code>
              <p>{row.detail}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
