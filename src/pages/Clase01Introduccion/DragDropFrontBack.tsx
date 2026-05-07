import { useState } from "react";

const items = [
  { id: "1", text: "Botón que cambia de color", correct: "frontend" },
  { id: "2", text: "Verificar tu contraseña", correct: "backend" },
  { id: "3", text: "Animación de carga", correct: "frontend" },
  { id: "4", text: "Guardar tu foto de perfil", correct: "backend" },
  { id: "5", text: "Formulario de login", correct: "frontend" },
  { id: "6", text: "Comprobar si el email existe", correct: "backend" },
  { id: "7", text: "Menú hamburguesa que se abre", correct: "frontend" },
  { id: "8", text: "Recomendaciones personalizadas", correct: "backend" },
] as const;

export function DragDropFrontBack() {
  const [placed, setPlaced] = useState<
    Record<string, "frontend" | "backend" | null>
  >({});
  const [shaking, setShaking] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [dragOverZone, setDragOverZone] = useState<string | null>(null);

  const allCorrect = items.every((item) => placed[item.id] === item.correct);

  function handleDrop(zone: "frontend" | "backend", itemId: string) {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    if (item.correct === zone) {
      setPlaced((prev) => ({ ...prev, [itemId]: zone }));
      setSelectedItem(null);
    } else {
      setShaking(itemId);
      setSelectedItem(null);
      setTimeout(() => setShaking(null), 400);
    }
  }

  function handleDragStart(e: React.DragEvent, itemId: string) {
    e.dataTransfer.setData("text/plain", itemId);
  }

  function handleDragOver(e: React.DragEvent, zone: string) {
    e.preventDefault();
    setDragOverZone(zone);
  }

  function handleDragLeave() {
    setDragOverZone(null);
  }

  function handleDropEvent(e: React.DragEvent, zone: "frontend" | "backend") {
    e.preventDefault();
    setDragOverZone(null);
    const itemId = e.dataTransfer.getData("text/plain");
    handleDrop(zone, itemId);
  }

  function handleItemClick(itemId: string) {
    if (placed[itemId]) return;
    setSelectedItem((prev) => (prev === itemId ? null : itemId));
  }

  function handleZoneClick(zone: "frontend" | "backend") {
    if (!selectedItem) return;
    handleDrop(zone, selectedItem);
  }

  const unplacedItems = items.filter((item) => !placed[item.id]);
  const frontendItems = items.filter((item) => placed[item.id] === "frontend");
  const backendItems = items.filter((item) => placed[item.id] === "backend");

  return (
    <div className="dragdrop">
      <div className="dragdrop__items">
        {unplacedItems.map((item) => (
          <div
            key={item.id}
            className={`dragdrop__item${selectedItem === item.id ? " selected-for-drop" : ""}${shaking === item.id ? " incorrect" : ""}`}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onClick={() => handleItemClick(item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="dragdrop__zones">
        <div
          className={`dragdrop__zone dragdrop__zone--frontend${dragOverZone === "frontend" ? " drag-over" : ""}`}
          data-zone="frontend"
          onDragOver={(e) => handleDragOver(e, "frontend")}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDropEvent(e, "frontend")}
          onClick={() => handleZoneClick("frontend")}
        >
          <span className="dragdrop__zone-title">Frontend</span>
          {frontendItems.map((item) => (
            <div key={item.id} className="dragdrop__item correct">
              {item.text}
            </div>
          ))}
        </div>
        <div
          className={`dragdrop__zone dragdrop__zone--backend${dragOverZone === "backend" ? " drag-over" : ""}`}
          data-zone="backend"
          onDragOver={(e) => handleDragOver(e, "backend")}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDropEvent(e, "backend")}
          onClick={() => handleZoneClick("backend")}
        >
          <span className="dragdrop__zone-title">Backend</span>
          {backendItems.map((item) => (
            <div key={item.id} className="dragdrop__item correct">
              {item.text}
            </div>
          ))}
        </div>
      </div>
      {allCorrect && (
        <div className="dragdrop__result visible">
          ¡Perfecto! Clasificaste todos los elementos correctamente.
        </div>
      )}
    </div>
  );
}
