import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ChangeEvent,
} from "react";
import "./Playground.css";

interface PlaygroundProps {
  defaultCode: string;
}

function highlightSyntax(code: string): string {
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped.replace(
    /&lt;!--[\s\S]*?--&gt;|&lt;\/?!?[\w-]+|\/?\s*&gt;|([\w-]+)="([^"]*)"/g,
    (match, attrName?: string, attrVal?: string) => {
      if (attrName !== undefined) {
        return (
          '<span class="token-attr">' +
          attrName +
          '</span>=<span class="token-value">"' +
          attrVal +
          '"</span>'
        );
      }
      if (match.indexOf("!--") !== -1) {
        return '<span class="token-comment">' + match + "</span>";
      }
      return '<span class="token-tag">' + match + "</span>";
    },
  );
}

function buildSrcdoc(code: string): string {
  return (
    "<!DOCTYPE html><html><head><style>body{font-family:system-ui,sans-serif;padding:1rem;margin:0;font-size:14px;line-height:1.5;color:#1e293b;}img{max-width:100%;height:auto;}input,select,textarea,button{font:inherit;padding:0.4rem 0.6rem;margin:0.25rem 0;display:block;width:100%;box-sizing:border-box;}label{display:block;margin-top:0.75rem;font-weight:600;}button{width:auto;cursor:pointer;background:#f97316;color:#fff;border:none;border-radius:6px;padding:0.5rem 1.25rem;}select{width:100%;}textarea{resize:vertical;}ul,ol{padding-left:1.5rem;}</style></head><body>" +
    code +
    "</body></html>"
  );
}

export function Playground({ defaultCode }: PlaygroundProps) {
  const [code, setCode] = useState(defaultCode);
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const lineCount = code.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join(
    "\n",
  );

  const updatePreview = useCallback((value: string) => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = buildSrcdoc(value);
    }
  }, []);

  useEffect(() => {
    updatePreview(code);
  }, []);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setCode(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => updatePreview(value), 300);
  }

  function handleScroll() {
    const ta = textareaRef.current;
    const pre = highlightRef.current?.parentElement;
    const ln = lineNumbersRef.current;
    if (ta && pre) {
      pre.scrollTop = ta.scrollTop;
      pre.scrollLeft = ta.scrollLeft;
    }
    if (ta && ln) {
      ln.scrollTop = ta.scrollTop;
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const value =
        ta.value.substring(0, start) + "  " + ta.value.substring(end);
      setCode(value);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
  }

  function handleReset() {
    setCode(defaultCode);
    updatePreview(defaultCode);
  }

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <div className="playground">
      <div className="playground__header">
        <div className="playground__dots" aria-hidden="true">
          <span className="playground__dot playground__dot--red" />
          <span className="playground__dot playground__dot--yellow" />
          <span className="playground__dot playground__dot--green" />
        </div>

        <div className="playground__tabs" role="tablist">
          <button
            className={`playground__tab${activeTab === "editor" ? " playground__tab--active" : ""}`}
            onClick={() => setActiveTab("editor")}
            role="tab"
            aria-selected={activeTab === "editor"}
          >
            HTML
          </button>
          <button
            className={`playground__tab${activeTab === "preview" ? " playground__tab--active" : ""}`}
            onClick={() => setActiveTab("preview")}
            role="tab"
            aria-selected={activeTab === "preview"}
          >
            Resultado
          </button>
        </div>

        <div className="playground__actions">
          <button className="btn btn-sm btn-secondary" onClick={handleReset}>
            Resetear
          </button>
          <button className="btn btn-sm btn-secondary" onClick={handleCopy}>
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>

      <div className="playground__body">
        <div
          className="playground__editor-wrap"
          hidden={!isDesktop && activeTab !== "editor"}
        >
          <div
            className="playground__line-numbers"
            ref={lineNumbersRef}
            aria-hidden="true"
          >
            {lineNumbers}
          </div>
          <div className="playground__editor-container">
            <pre className="playground__highlight" aria-hidden="true">
              <code
                ref={highlightRef}
                dangerouslySetInnerHTML={{
                  __html: highlightSyntax(code),
                }}
              />
            </pre>
            <textarea
              ref={textareaRef}
              className="playground__textarea"
              value={code}
              onChange={handleChange}
              onScroll={handleScroll}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              aria-label="Editor de codigo HTML"
            />
          </div>
        </div>

        <div className="playground__divider" aria-hidden="true">
          <div className="playground__divider-handle" />
        </div>

        <div
          className="playground__preview-wrap"
          hidden={!isDesktop && activeTab !== "preview"}
        >
          <span className="playground__preview-label">Vista previa</span>
          <iframe
            ref={iframeRef}
            className="playground__iframe"
            sandbox="allow-scripts"
            title="Vista previa del codigo"
          />
        </div>
      </div>
    </div>
  );
}
