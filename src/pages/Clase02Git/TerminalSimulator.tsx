import { useReducer, useRef, useCallback, type KeyboardEvent } from "react";

interface FileEntry {
  name: string;
  status: "untracked" | "modified";
}

interface Commit {
  hash: string;
  message: string;
  branch: string;
}

interface TerminalState {
  files: FileEntry[];
  staged: string[];
  commits: Commit[];
  branch: string;
  branches: string[];
  history: string[];
  historyIndex: number;
  tutorialStep: number;
}

interface OutputLine {
  text: string;
  className?: string;
}

type Action =
  | { type: "EXECUTE"; cmd: string }
  | { type: "HISTORY_UP" }
  | { type: "HISTORY_DOWN" }
  | { type: "ADVANCE_TUTORIAL" };

const TUTORIAL_COMMANDS = [
  "git status",
  "git add index.html",
  "git status",
  "git commit -m",
  "git log",
];

function generateHash(): string {
  const chars = "0123456789abcdef";
  let hash = "";
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

const initialState: TerminalState = {
  files: [{ name: "index.html", status: "untracked" }],
  staged: [],
  commits: [],
  branch: "main",
  branches: ["main"],
  history: [],
  historyIndex: -1,
  tutorialStep: 0,
};

function reducer(state: TerminalState, action: Action): TerminalState {
  switch (action.type) {
    case "EXECUTE":
      return {
        ...state,
        history: [...state.history, action.cmd],
        historyIndex: state.history.length + 1,
      };
    case "HISTORY_UP": {
      const newIdx = Math.max(0, state.historyIndex - 1);
      return { ...state, historyIndex: newIdx };
    }
    case "HISTORY_DOWN": {
      const newIdx = Math.min(state.history.length, state.historyIndex + 1);
      return { ...state, historyIndex: newIdx };
    }
    case "ADVANCE_TUTORIAL":
      return { ...state, tutorialStep: state.tutorialStep + 1 };
    default:
      return state;
  }
}

export function TerminalSimulator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const filesRef = useRef<FileEntry[]>([...initialState.files]);
  const stagedRef = useRef<string[]>([]);
  const commitsRef = useRef<Commit[]>([]);
  const branchRef = useRef("main");
  const branchesRef = useRef(["main"]);
  const tutorialRef = useRef(0);

  const outputRef = useRef<OutputLine[]>([
    {
      text: 'Bienvenido al simulador de Git. Escribí "help" para ver los comandos.',
      className: "terminal__output-line--info",
    },
  ]);
  const [, forceRender] = useReducer((x: number) => x + 1, 0);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  function addOutput(text: string, className?: string) {
    outputRef.current = [...outputRef.current, { text, className }];
  }

  function checkTutorial(cmd: string) {
    if (tutorialRef.current >= TUTORIAL_COMMANDS.length) return;
    const expected = TUTORIAL_COMMANDS[tutorialRef.current];
    if (cmd.startsWith(expected)) {
      tutorialRef.current++;
      dispatch({ type: "ADVANCE_TUTORIAL" });
    }
  }

  const executeCommand = useCallback((input: string) => {
    const cmd = input.trim();
    if (!cmd) return;

    dispatch({ type: "EXECUTE", cmd });
    addOutput(`~/mi-proyecto $ ${cmd}`);

    if (cmd === "clear") {
      outputRef.current = [];
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd === "help") {
      addOutput("Comandos disponibles:");
      addOutput("  git init          — Inicializar repositorio");
      addOutput("  git status        — Ver estado de archivos");
      addOutput("  git add <archivo> — Agregar al staging");
      addOutput("  git add .         — Agregar todos al staging");
      addOutput('  git commit -m "msg" — Crear commit');
      addOutput("  git log           — Ver historial");
      addOutput("  git branch        — Ver ramas");
      addOutput("  git switch -c <nombre> — Crear rama");
      addOutput("  git switch <nombre>    — Cambiar de rama");
      addOutput("  clear             — Limpiar pantalla");
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd === "git init") {
      addOutput(
        "Initialized empty Git repository in ~/mi-proyecto/.git/",
        "terminal__output-line--success",
      );
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd === "git status") {
      addOutput(`On branch ${branchRef.current}`);
      const untracked = filesRef.current.filter(
        (f) => f.status === "untracked",
      );
      const modified = filesRef.current.filter((f) => f.status === "modified");
      const staged = stagedRef.current;

      if (
        untracked.length === 0 &&
        modified.length === 0 &&
        staged.length === 0
      ) {
        addOutput("nothing to commit, working tree clean");
      } else {
        if (staged.length > 0) {
          addOutput("Changes to be committed:");
          staged.forEach((f) =>
            addOutput(`    new file:   ${f}`, "terminal__output-line--staged"),
          );
          addOutput("");
        }
        if (modified.length > 0) {
          addOutput("Changes not staged for commit:");
          modified.forEach((f) =>
            addOutput(
              `    modified:   ${f.name}`,
              "terminal__output-line--modified",
            ),
          );
          addOutput("");
        }
        if (untracked.length > 0) {
          addOutput("Untracked files:");
          untracked.forEach((f) =>
            addOutput(`    ${f.name}`, "terminal__output-line--modified"),
          );
        }
      }
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd.startsWith("git add ")) {
      const fileName = cmd.replace("git add ", "").trim();
      if (fileName === ".") {
        const toStage = filesRef.current.filter(
          (f) => f.status === "untracked" || f.status === "modified",
        );
        toStage.forEach((f) => stagedRef.current.push(f.name));
        filesRef.current = filesRef.current.filter(
          (f) => f.status !== "untracked" && f.status !== "modified",
        );
      } else {
        const idx = filesRef.current.findIndex((f) => f.name === fileName);
        if (idx !== -1) {
          stagedRef.current.push(filesRef.current[idx].name);
          filesRef.current.splice(idx, 1);
        } else {
          addOutput(
            `fatal: pathspec '${fileName}' did not match any files`,
            "terminal__output-line--error",
          );
          checkTutorial(cmd);
          forceRender();
          return;
        }
      }
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd.startsWith("git commit")) {
      if (stagedRef.current.length === 0) {
        addOutput(
          "nothing to commit (use git add to stage files)",
          "terminal__output-line--error",
        );
        forceRender();
        return;
      }

      const msgMatch = cmd.match(/git commit -m ["'](.+?)["']/);
      const msg = msgMatch ? msgMatch[1] : "Initial commit";
      const hash = generateHash();
      const fileCount = stagedRef.current.length;

      commitsRef.current = [
        { hash, message: msg, branch: branchRef.current },
        ...commitsRef.current,
      ];
      stagedRef.current = [];

      addOutput(
        `[${branchRef.current} ${hash}] ${msg}`,
        "terminal__output-line--success",
      );
      addOutput(` ${fileCount} file${fileCount > 1 ? "s" : ""} changed`);

      if (commitsRef.current.length === 1 && filesRef.current.length === 0) {
        filesRef.current.push({ name: "style.css", status: "untracked" });
      }

      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd === "git log") {
      if (commitsRef.current.length === 0) {
        addOutput(
          "fatal: your current branch does not have any commits yet",
          "terminal__output-line--error",
        );
      } else {
        commitsRef.current.forEach((c) => {
          addOutput(
            `commit ${c.hash} (${c.branch})`,
            "terminal__output-line--info",
          );
          addOutput(`    ${c.message}`);
          addOutput("");
        });
      }
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd === "git branch") {
      branchesRef.current.forEach((b) => {
        const prefix = b === branchRef.current ? "* " : "  ";
        addOutput(
          prefix + b,
          b === branchRef.current ? "terminal__output-line--success" : "",
        );
      });
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd.startsWith("git switch -c ")) {
      const name = cmd.replace("git switch -c ", "").trim();
      if (branchesRef.current.includes(name)) {
        addOutput(
          `fatal: a branch named '${name}' already exists`,
          "terminal__output-line--error",
        );
      } else {
        branchesRef.current.push(name);
        branchRef.current = name;
        addOutput(
          `Switched to a new branch '${name}'`,
          "terminal__output-line--success",
        );
      }
      checkTutorial(cmd);
      forceRender();
      return;
    }

    if (cmd.startsWith("git switch ")) {
      const name = cmd.replace("git switch ", "").trim();
      if (!branchesRef.current.includes(name)) {
        addOutput(
          `fatal: invalid reference: ${name}`,
          "terminal__output-line--error",
        );
      } else {
        branchRef.current = name;
        addOutput(
          `Switched to branch '${name}'`,
          "terminal__output-line--success",
        );
      }
      checkTutorial(cmd);
      forceRender();
      return;
    }

    addOutput(
      `comando no reconocido: ${cmd}. Escribí "help" para ver los disponibles.`,
      "terminal__output-line--error",
    );
    checkTutorial(cmd);
    forceRender();
  }, []);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const input = inputRef.current;
    if (!input) return;

    if (e.key === "Enter") {
      executeCommand(input.value);
      input.value = "";
      setTimeout(() => {
        if (bodyRef.current) {
          bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
      }, 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      dispatch({ type: "HISTORY_UP" });
      const s = stateRef.current;
      const idx = Math.max(0, s.historyIndex - 1);
      input.value = s.history[idx] ?? "";
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      dispatch({ type: "HISTORY_DOWN" });
      const s = stateRef.current;
      const idx = Math.min(s.history.length, s.historyIndex + 1);
      input.value = idx < s.history.length ? s.history[idx] : "";
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "git init",
        "git status",
        "git add",
        "git commit",
        "git log",
        "git branch",
        "git switch",
        "clear",
        "help",
      ];
      const match = commands.find(
        (c) => c.startsWith(input.value) && c !== input.value,
      );
      if (match) input.value = match;
    }
  }

  const tutorialSteps = [
    "Escribí git status para ver los archivos",
    "Escribí git add index.html para prepararlo",
    "Escribí git status de nuevo — fijate cómo cambió",
    'Hacé el commit: git commit -m "Creo pagina principal"',
    "Escribí git log para ver tu historial",
  ];

  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="terminal__header">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
          <span className="terminal__title">Terminal — mi-proyecto</span>
        </div>
        <div
          className="terminal__body"
          ref={bodyRef}
          aria-live="polite"
          onClick={() => inputRef.current?.focus()}
        >
          {outputRef.current.map((line, i) => (
            <div
              key={i}
              className={`terminal__output-line${line.className ? ` ${line.className}` : ""}`}
            >
              {line.text}
            </div>
          ))}
          <div className="terminal__input-line">
            <span className="terminal__prompt">~/mi-proyecto $</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal__input"
              aria-label="Entrada de comando de terminal"
              autoComplete="off"
              spellCheck={false}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>

      <div className="terminal-visual">
        <div className="terminal-visual__title">Estado del repo</div>
        <div className="terminal-visual__branch">rama: {branchRef.current}</div>

        <div className="terminal-visual__section terminal-visual__section--working">
          <div className="terminal-visual__section-title">
            Working Directory
          </div>
          <div className="terminal-visual__content">
            {filesRef.current.length === 0 ? (
              <span className="text-secondary" style={{ fontSize: "0.75rem" }}>
                Vacío
              </span>
            ) : (
              filesRef.current.map((f) => (
                <div
                  key={f.name}
                  className={`terminal-visual__file terminal-visual__file--${f.status}`}
                >
                  {f.name} ({f.status})
                </div>
              ))
            )}
          </div>
        </div>

        <div className="terminal-visual__section terminal-visual__section--staging">
          <div className="terminal-visual__section-title">Staging Area</div>
          <div className="terminal-visual__content">
            {stagedRef.current.length === 0 ? (
              <span className="text-secondary" style={{ fontSize: "0.75rem" }}>
                Vacío
              </span>
            ) : (
              stagedRef.current.map((name) => (
                <div
                  key={name}
                  className="terminal-visual__file terminal-visual__file--staged"
                >
                  {name}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="terminal-visual__section terminal-visual__section--commits">
          <div className="terminal-visual__section-title">Commits</div>
          <div className="terminal-visual__content">
            {commitsRef.current.length === 0 ? (
              <span className="text-secondary" style={{ fontSize: "0.75rem" }}>
                Sin commits
              </span>
            ) : (
              commitsRef.current.map((c) => (
                <div key={c.hash} className="terminal-visual__commit">
                  <span className="terminal-visual__commit-hash">{c.hash}</span>{" "}
                  {c.message}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="terminal-tutorial">
          <div className="terminal-tutorial__title">Guía paso a paso</div>
          {tutorialSteps.map((text, i) => (
            <div
              key={i}
              className={`terminal-tutorial__step${
                i === tutorialRef.current &&
                tutorialRef.current < tutorialSteps.length
                  ? " active"
                  : ""
              }${i < tutorialRef.current ? " completed" : ""}`}
            >
              <span className="terminal-tutorial__step-icon">
                {i < tutorialRef.current ? "✓" : ""}
              </span>
              <span>{text}</span>
            </div>
          ))}
          {tutorialRef.current >= tutorialSteps.length && (
            <div className="terminal-tutorial__congrats visible">
              Felicitaciones! Completaste tu primer flujo de Git.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
