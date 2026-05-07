import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Checklist.css";

interface ChecklistProps {
  items: string[];
  storageKey: string;
  completionMessage?: string;
  showProgress?: boolean;
}

export function Checklist({
  items,
  storageKey,
  completionMessage = "Completaste todo!",
  showProgress = false,
}: ChecklistProps) {
  const [checked, setChecked] = useLocalStorage<Record<number, boolean>>(
    storageKey,
    {},
  );

  const completedCount = items.filter((_, i) => checked[i]).length;
  const allDone = completedCount === items.length;

  function toggle(index: number) {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <div className={showProgress ? "persistent-checklist" : undefined}>
      {showProgress && (
        <>
          <div className="persistent-checklist__progress">
            {completedCount}/{items.length} completadas
          </div>
          <div className="persistent-checklist__bar">
            <div
              className="persistent-checklist__bar-fill"
              style={{
                width: `${(completedCount / items.length) * 100}%`,
              }}
            />
          </div>
        </>
      )}

      <ul className="checklist">
        {items.map((label, i) => (
          <li
            key={i}
            className={`checklist__item${checked[i] ? " completed" : ""}`}
          >
            <input
              type="checkbox"
              className="checklist__checkbox"
              id={`${storageKey}-${i}`}
              checked={!!checked[i]}
              onChange={() => toggle(i)}
            />
            <label className="checklist__label" htmlFor={`${storageKey}-${i}`}>
              {label}
            </label>
          </li>
        ))}
      </ul>

      {allDone && (
        <div className="checklist__completion visible">{completionMessage}</div>
      )}
    </div>
  );
}
