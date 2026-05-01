/* ==========================================================================
   introduccion.js — Interactividad de la Clase 1: Introducción
   ========================================================================== */

(function () {
  "use strict";

  // --- Barra de progreso ---
  const progressBar = document.querySelector(".progress-bar");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = percent + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // --- Smooth scroll del botón hero ---
  const heroBtn = document.querySelector(".hero__cta");
  if (heroBtn) {
    heroBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector("#seccion-internet");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // --- Diagrama interactivo: Cómo funciona internet (pasos) ---
  const diagramBtns = document.querySelectorAll("[data-diagram-step]");
  const diagramExplanation = document.querySelector(
    ".diagram-internet__explanation",
  );
  const explanations = {
    1: 'Tu compu le pregunta al DNS: "¿En qué dirección queda youtube.com?"',
    2: "Con la dirección IP, tu compu le pide la página al servidor a través de internet.",
    3: "El servidor responde con los archivos: HTML, CSS y JS. Tu navegador los muestra.",
    all: "Todo esto pasa en milisegundos cada vez que abrís una página web.",
  };

  let currentStep = 0;

  diagramBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const step = this.getAttribute("data-diagram-step");

      diagramBtns.forEach(function (b) {
        b.classList.remove("btn-active");
      });
      this.classList.add("btn-active");

      if (step === "all") {
        document.querySelectorAll(".diagram-step").forEach(function (el) {
          el.classList.add("visible");
        });
        document.querySelectorAll(".arrow-animated").forEach(function (el) {
          el.classList.add("visible");
        });
        currentStep = 3;
      } else {
        const stepNum = parseInt(step);
        document.querySelectorAll(".diagram-step").forEach(function (el) {
          const elStep = parseInt(el.getAttribute("data-step"));
          el.classList.toggle("visible", elStep <= stepNum);
        });
        document.querySelectorAll(".arrow-animated").forEach(function (el) {
          const elStep = parseInt(el.getAttribute("data-step"));
          el.classList.toggle("visible", elStep <= stepNum);
        });
        currentStep = stepNum;
      }

      if (diagramExplanation) {
        diagramExplanation.textContent = explanations[step] || "";
      }
    });
  });

  // --- Tarjetas flip ---
  document.querySelectorAll(".flip-card").forEach(function (card) {
    card.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.classList.toggle("flipped");
      }
    });
  });

  // --- Simulador de cambio de extensión ---
  const extInput = document.querySelector(".extension-simulator__input");
  const extIcon = document.querySelector(".extension-simulator__icon");
  const extMessage = document.querySelector(".extension-simulator__message");

  const extensionIcons = {
    html: {
      color: "#F97316",
      label: "Documento HTML — se abre con el navegador",
    },
    css: {
      color: "#8B5CF6",
      label: "Hoja de estilos — define los colores y diseño",
    },
    js: { color: "#EAB308", label: "JavaScript — agrega interactividad" },
    txt: {
      color: "#64748B",
      label: "Texto plano — se abre con el bloc de notas",
    },
    jpg: {
      color: "#EC4899",
      label: "Imagen JPEG — se abre con el visor de fotos",
    },
    jpeg: {
      color: "#EC4899",
      label: "Imagen JPEG — se abre con el visor de fotos",
    },
    png: {
      color: "#EC4899",
      label: "Imagen PNG — se abre con el visor de fotos",
    },
    pdf: {
      color: "#EF4444",
      label: "Documento PDF — se abre con un lector PDF",
    },
  };

  if (extInput) {
    extInput.addEventListener("input", function () {
      const value = this.value;
      const parts = value.split(".");
      const ext = parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";

      const iconSvg = extIcon.querySelector("svg");
      if (iconSvg) {
        const circle = iconSvg.querySelector("circle");
        const text = iconSvg.querySelector("text");

        if (extensionIcons[ext]) {
          circle.setAttribute("fill", extensionIcons[ext].color);
          text.textContent = "." + ext;
          extMessage.textContent = extensionIcons[ext].label;
          extIcon.classList.add("changed");
          setTimeout(function () {
            extIcon.classList.remove("changed");
          }, 300);
        } else {
          circle.setAttribute("fill", "#94A3B8");
          text.textContent = "??";
          extMessage.textContent = "Extensión no reconocida";
        }
      }
    });
  }

  // --- Checklists (sección 2 y 6) ---
  function initChecklist(container, storageKey) {
    if (!container) return;

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const completion = container.querySelector(".checklist__completion");

    // Restaurar estado
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    checkboxes.forEach(function (cb, i) {
      if (saved[i]) {
        cb.checked = true;
        cb.closest(".checklist__item").classList.add("completed");
      }
    });

    function updateState() {
      const state = {};
      let completedCount = 0;
      checkboxes.forEach(function (cb, i) {
        state[i] = cb.checked;
        if (cb.checked) completedCount++;
        cb.closest(".checklist__item").classList.toggle(
          "completed",
          cb.checked,
        );
      });
      localStorage.setItem(storageKey, JSON.stringify(state));

      // Actualizar barra de progreso si existe
      const progressText = container.querySelector(
        ".persistent-checklist__progress",
      );
      const progressFill = container.querySelector(
        ".persistent-checklist__bar-fill",
      );
      if (progressText) {
        progressText.textContent =
          completedCount + "/" + checkboxes.length + " completadas";
      }
      if (progressFill) {
        progressFill.style.width =
          (completedCount / checkboxes.length) * 100 + "%";
      }

      if (completion) {
        completion.classList.toggle(
          "visible",
          completedCount === checkboxes.length,
        );
      }
    }

    checkboxes.forEach(function (cb) {
      cb.addEventListener("change", updateState);
    });

    updateState();
  }

  initChecklist(
    document.querySelector("#checklist-archivos"),
    "clase1-checklist-archivos",
  );
  initChecklist(
    document.querySelector("#checklist-tarea"),
    "clase1-checklist-tarea",
  );

  // --- Detector de atajos de teclado (sección 3) ---
  const shortcutCards = document.querySelectorAll(".shortcut-card");
  const shortcutMap = {
    "alt+tab": 0,
    "ctrl+c": 1,
    "ctrl+v": 1,
    "ctrl+x": 1,
    "ctrl+f": 2,
    "ctrl+t": 3,
    "ctrl+w": 3,
    "meta+arrowleft": 4,
    "meta+arrowright": 4,
    "meta+arrowup": 4,
    "meta+arrowdown": 4,
  };

  document.addEventListener("keydown", function (e) {
    const parts = [];
    if (e.ctrlKey) parts.push("ctrl");
    if (e.altKey) parts.push("alt");
    if (e.metaKey) parts.push("meta");
    parts.push(e.key.toLowerCase());
    const combo = parts.join("+");

    if (shortcutMap.hasOwnProperty(combo)) {
      const idx = shortcutMap[combo];
      const card = shortcutCards[idx];
      if (card) {
        card.classList.add("detected");
        setTimeout(function () {
          card.classList.remove("detected");
        }, 600);
      }
    }
  });

  // Expandir tarjetas de atajo al click
  shortcutCards.forEach(function (card) {
    card.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.classList.toggle("expanded");
      }
    });
  });

  // --- Inspector simulado (sección 4) ---
  const inspectorElements = document.querySelectorAll(
    ".inspector__page-element",
  );
  const inspectorCode = document.querySelector(".inspector__panel-code");
  const inspectorEdit = document.querySelector(".inspector__panel-edit");

  inspectorElements.forEach(function (el) {
    el.addEventListener("click", function () {
      inspectorElements.forEach(function (e) {
        e.classList.remove("selected");
      });
      this.classList.add("selected");

      const htmlContent = this.getAttribute("data-html");
      if (inspectorCode) {
        inspectorCode.textContent = htmlContent;
      }
      if (inspectorEdit) {
        inspectorEdit.value = this.textContent.trim();
        inspectorEdit.dataset.target = this.getAttribute("data-inspector-id");
        inspectorEdit.disabled = false;
        inspectorEdit.placeholder = "Editá el texto acá";
      }
    });
  });

  if (inspectorEdit) {
    inspectorEdit.addEventListener("input", function () {
      const targetId = this.dataset.target;
      if (targetId) {
        const targetEl = document.querySelector(
          '[data-inspector-id="' + targetId + '"]',
        );
        if (targetEl) {
          targetEl.textContent = this.value;
        }
      }
    });
  }

  // --- Triada HTML/CSS/JS (sección 5) ---
  const triadaBtns = document.querySelectorAll(".triada__btn");
  const triadaStates = document.querySelectorAll(".triada__state");

  triadaBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const state = this.getAttribute("data-state");

      triadaBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      this.classList.add("active");

      triadaStates.forEach(function (s) {
        s.classList.toggle("active", s.getAttribute("data-state") === state);
      });
    });
  });

  // --- Drag & Drop: Frontend vs Backend (sección 5) ---
  const dragItems = document.querySelectorAll(".dragdrop__item");
  const dropZones = document.querySelectorAll(".dragdrop__zone");
  const dragResult = document.querySelector(".dragdrop__result");
  let correctCount = 0;
  const totalItems = dragItems.length;

  dragItems.forEach(function (item) {
    item.setAttribute("draggable", "true");

    item.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", this.getAttribute("data-item-id"));
      this.classList.add("dragging");
    });

    item.addEventListener("dragend", function () {
      this.classList.remove("dragging");
    });

    // Fallback: click para mobile
    item.addEventListener("click", function () {
      if (this.classList.contains("correct")) return;

      const activeItems = document.querySelectorAll(
        ".dragdrop__item.selected-for-drop",
      );
      activeItems.forEach(function (i) {
        i.classList.remove("selected-for-drop");
      });
      this.classList.add("selected-for-drop");
    });
  });

  dropZones.forEach(function (zone) {
    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", function () {
      this.classList.remove("drag-over");
    });

    zone.addEventListener("drop", function (e) {
      e.preventDefault();
      this.classList.remove("drag-over");

      const itemId = e.dataTransfer.getData("text/plain");
      handleDrop(itemId, this);
    });

    // Click fallback para mobile
    zone.addEventListener("click", function () {
      const selectedItem = document.querySelector(
        ".dragdrop__item.selected-for-drop",
      );
      if (selectedItem) {
        const itemId = selectedItem.getAttribute("data-item-id");
        handleDrop(itemId, this);
        selectedItem.classList.remove("selected-for-drop");
      }
    });
  });

  function handleDrop(itemId, zone) {
    const item = document.querySelector('[data-item-id="' + itemId + '"]');
    if (!item || item.classList.contains("correct")) return;

    const correctZone = item.getAttribute("data-correct");
    const droppedZone = zone.getAttribute("data-zone");

    if (correctZone === droppedZone) {
      item.classList.add("correct");
      item.setAttribute("draggable", "false");
      zone.appendChild(item);
      correctCount++;

      if (correctCount === totalItems) {
        showDragResult();
      }
    } else {
      item.classList.add("incorrect");
      setTimeout(function () {
        item.classList.remove("incorrect");
      }, 400);
    }
  }

  function showDragResult() {
    if (dragResult) {
      dragResult.classList.add("visible");
    }
  }

  // --- VS Code tooltips ---
  const vscodeZones = document.querySelectorAll("[data-vscode-zone]");
  vscodeZones.forEach(function (zone) {
    zone.addEventListener("click", function () {
      const tooltip = this.querySelector(".vscode-tooltip");
      if (tooltip) {
        tooltip.classList.toggle("visible");
      }
    });
  });
})();
