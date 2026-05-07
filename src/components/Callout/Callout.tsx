import type { ReactNode } from "react";
import "./Callout.css";

type CalloutVariant = "info" | "warning" | "success";

const ICONS: Record<CalloutVariant, string> = {
  info: "💡",
  warning: "⚠️",
  success: "✅",
};

interface CalloutProps {
  variant?: CalloutVariant;
  children: ReactNode;
}

export function Callout({ variant = "info", children }: CalloutProps) {
  return (
    <div className={`callout callout-${variant}`}>
      <div className="callout-icon" aria-hidden="true">
        {ICONS[variant]}
      </div>
      {children}
    </div>
  );
}
