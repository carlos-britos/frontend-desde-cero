import { useState } from "react";
import { CodeBlock } from "../../components/CodeBlock";
import { Callout } from "../../components/Callout";

interface ProjectFile {
  name: string;
  code: string;
}

interface Step {
  title: string;
  instruction: string;
  files: ProjectFile[];
  previewHtml: string;
  tip: string;
}

const STEPS: Step[] = [
  {
    title: "Creá el esqueleto",
    instruction:
      "Abrí VS Code, creá un archivo nuevo y guardalo como index.html. Escribí esto adentro:",
    files: [
      {
        name: "index.html",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Mi primera página</title>
</head>
<body>

</body>
</html>`,
      },
    ],
    previewHtml: "<!DOCTYPE html><html><head></head><body></body></html>",
    tip: 'Se ve todo blanco porque el body está vacío. Pero la página ya existe — fijate que en la pestaña del navegador dice "Mi primera página".',
  },
  {
    title: "Agregá contenido",
    instruction:
      "Agregá contenido entre las etiquetas body. Guardá con Ctrl+S y hacé doble clic en index.html para abrirlo en Chrome:",
    files: [
      {
        name: "index.html",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Mi primera página</title>
</head>
<body>
  <h1>¡Hola, mundo!</h1>
  <p>Esta es mi primera página web.</p>
  <p>Cosas que aprendí hoy:</p>
  <ul>
    <li>Cómo funciona internet</li>
    <li>Qué son HTML, CSS y JS</li>
    <li>Cómo usar VS Code</li>
  </ul>
</body>
</html>`,
      },
    ],
    previewHtml: `<!DOCTYPE html><html><head></head><body><h1>¡Hola, mundo!</h1><p>Esta es mi primera página web.</p><p>Cosas que aprendí hoy:</p><ul><li>Cómo funciona internet</li><li>Qué son HTML, CSS y JS</li><li>Cómo usar VS Code</li></ul></body></html>`,
    tip: "Se ve fea, pero funciona. Eso es HTML puro sin CSS — el navegador le pone sus estilos por defecto (letra serif, márgenes básicos). El diseño viene en el paso siguiente.",
  },
  {
    title: "Dale estilo",
    instruction:
      "Creá un archivo estilos.css en la misma carpeta. Después conectá el CSS agregando la línea con link en el head del HTML:",
    files: [
      {
        name: "index.html",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Mi primera página</title>
  <!-- NUEVO: esta línea conecta el CSS -->
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>¡Hola, mundo!</h1>
  <p>Esta es mi primera página web.</p>
  <p>Cosas que aprendí hoy:</p>
  <ul>
    <li>Cómo funciona internet</li>
    <li>Qué son HTML, CSS y JS</li>
    <li>Cómo usar VS Code</li>
  </ul>
</body>
</html>`,
      },
      {
        name: "estilos.css",
        code: `body {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f0f4f8;
}

h1 {
  color: #1e40af;
}

ul {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 8px;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

li:last-child {
  border-bottom: none;
}`,
      },
    ],
    previewHtml: `<!DOCTYPE html><html><head><style>body{font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:2rem;background-color:#f0f4f8;}h1{color:#1e40af;}ul{background:white;padding:1.5rem 2rem;border-radius:8px;}li{padding:0.5rem 0;border-bottom:1px solid #e2e8f0;}li:last-child{border-bottom:none;}</style></head><body><h1>¡Hola, mundo!</h1><p>Esta es mi primera página web.</p><p>Cosas que aprendí hoy:</p><ul><li>Cómo funciona internet</li><li>Qué son HTML, CSS y JS</li><li>Cómo usar VS Code</li></ul></body></html>`,
    tip: "Mismo HTML, pero ahora con diseño. El CSS no cambió el contenido, solo cómo se ve. Esa es la separación entre estructura y presentación.",
  },
];

export function MiniProject() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = STEPS[currentStep];

  return (
    <div className="mini-project">
      <div className="mini-project__stepper">
        {STEPS.map((s, i) => (
          <button
            key={i}
            className={`mini-project__dot ${i === currentStep ? "active" : ""} ${i < currentStep ? "done" : ""}`}
            onClick={() => setCurrentStep(i)}
            aria-label={`Paso ${i + 1}: ${s.title}`}
          >
            {i < currentStep ? "✓" : i + 1}
          </button>
        ))}
      </div>

      <h4 className="mini-project__title">
        Paso {currentStep + 1}: {step.title}
      </h4>
      <p className="mini-project__instruction">{step.instruction}</p>

      <div className="mini-project__panels">
        <div className="mini-project__code">
          {step.files.map((file) => (
            <CodeBlock
              key={file.name}
              filename={file.name}
              code={file.code}
              copyable
            />
          ))}
        </div>

        <div className="mini-project__preview">
          <div className="mini-project__browser">
            <div className="mini-project__browser-bar">
              <div className="mini-project__browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="mini-project__browser-url">
                file:///mi-proyecto/index.html
              </div>
            </div>
            <iframe
              className="mini-project__browser-frame"
              srcDoc={step.previewHtml}
              sandbox=""
              title={`Vista previa — paso ${currentStep + 1}`}
            />
          </div>
        </div>
      </div>

      <Callout variant="info">
        <p>{step.tip}</p>
      </Callout>

      <div className="mini-project__nav">
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentStep((s) => s - 1)}
          disabled={currentStep === 0}
        >
          &larr; Anterior
        </button>
        <span className="mini-project__counter">
          {currentStep + 1} / {STEPS.length}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentStep((s) => s + 1)}
          disabled={currentStep === STEPS.length - 1}
        >
          Siguiente &rarr;
        </button>
      </div>
    </div>
  );
}
