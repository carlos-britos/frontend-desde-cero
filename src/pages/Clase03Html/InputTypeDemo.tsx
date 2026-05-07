import { useState } from "react";

const INPUT_TYPES = [
  {
    type: "text",
    explanation: "Campo de texto comun. El tipo por defecto.",
    code: '<input type="text">',
  },
  {
    type: "email",
    explanation:
      "Valida que tenga formato de email. En el celular muestra la @.",
    code: '<input type="email">',
  },
  {
    type: "password",
    explanation: "Oculta lo que escribis con puntitos.",
    code: '<input type="password">',
  },
  {
    type: "number",
    explanation: "Solo acepta numeros. Aparecen flechitas para subir/bajar.",
    code: '<input type="number">',
  },
  {
    type: "date",
    explanation: "Abre un selector de fecha nativo.",
    code: '<input type="date">',
  },
  {
    type: "tel",
    explanation: "En celulares abre el teclado numerico.",
    code: '<input type="tel">',
  },
  {
    type: "url",
    explanation:
      "Valida que sea una URL. En celulares muestra .com en el teclado.",
    code: '<input type="url">',
  },
  {
    type: "checkbox",
    explanation: "Casilla de verificacion. Se puede marcar o desmarcar.",
    code: '<input type="checkbox">',
  },
  {
    type: "radio",
    explanation: "Boton de opcion. De un grupo, solo se puede elegir uno.",
    code: '<input type="radio">',
  },
] as const;

export function InputTypeDemo() {
  const [activeType, setActiveType] = useState("text");

  const current = INPUT_TYPES.find((t) => t.type === activeType)!;
  const isToggleType = activeType === "checkbox" || activeType === "radio";

  return (
    <div className="input-demo">
      <div className="input-demo__types">
        {INPUT_TYPES.map(({ type }) => (
          <button
            key={type}
            className={`input-demo__type${activeType === type ? " input-demo__type--active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="input-demo__area">
        <label className="input-demo__label" htmlFor="input-demo-field">
          Tu campo de prueba:
        </label>
        <div className="input-demo__field-wrap">
          {isToggleType ? (
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
              }}
            >
              <input
                type={activeType}
                id="input-demo-field"
                className="input-demo__input"
              />{" "}
              Opcion de ejemplo
            </label>
          ) : (
            <input
              key={activeType}
              type={activeType}
              id="input-demo-field"
              className="input-demo__input"
            />
          )}
        </div>
        <p className="input-demo__explanation" key={activeType}>
          {current.explanation}
        </p>
        <div className="input-demo__code">
          <code>{current.code}</code>
        </div>
      </div>
    </div>
  );
}
