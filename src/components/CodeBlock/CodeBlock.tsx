import { useState, useCallback, type ReactNode } from "react";
import "./CodeBlock.css";

interface CodeBlockProps {
  code: string;
  filename?: string;
  copyable?: boolean;
  children?: ReactNode;
}

export function CodeBlock({
  code,
  filename,
  copyable = true,
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [code]);

  return (
    <div className="code-block">
      {(filename || copyable) && (
        <div className="code-block__header">
          {filename && <span className="code-block__filename">{filename}</span>}
          {copyable && (
            <button
              className="code-block__copy btn btn-sm btn-secondary"
              onClick={handleCopy}
              aria-label="Copiar codigo"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          )}
        </div>
      )}
      <pre className="code-block__pre">
        <code>{children ?? code}</code>
      </pre>
    </div>
  );
}
