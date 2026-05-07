/* ==========================================================================
   html.js — Interactividad de la Clase 3: Fundamentos de HTML
   ========================================================================== */

(function () {
  "use strict";

  // --- Barra de progreso ---
  var progressBar = document.querySelector(".progress-bar");

  function updateProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = percent + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // --- Smooth scroll del boton hero ---
  var heroBtn = document.querySelector(".hero__cta");
  if (heroBtn) {
    heroBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(heroBtn.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // --- Badge de progreso "Bloque X de 8" ---
  var badge = document.querySelector(".progress-badge");
  var sections = document.querySelectorAll("[data-block]");

  if (badge && sections.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var blockNum = entry.target.getAttribute("data-block");
            badge.textContent = "Bloque " + blockNum + " de 8";
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Diagrama del esqueleto HTML (Block 1) ---
  var skeletonData = {
    doctype: {
      name: "<!DOCTYPE html>",
      desc: "Le dice al navegador: 'Esto es HTML5 moderno, usa las reglas actuales'. Siempre va en la primera linea.",
      warning:
        "El navegador entra en 'quirks mode' y las cosas pueden verse raro.",
    },
    html: {
      name: '<html lang="es">',
      desc: "El elemento raiz. TODO va adentro. El lang le dice al navegador y a los lectores de pantalla el idioma.",
      warning:
        "Los lectores de pantalla pronuncian mal. Google no sabe en que idioma estas.",
    },
    head: {
      name: "<head>",
      desc: "Informacion SOBRE la pagina que no se ve: charset, titulo de la pestana, links a CSS.",
      warning:
        "Las tildes se ven como simbolos raros. La pestana no tiene titulo.",
    },
    body: {
      name: "<body>",
      desc: "TODO lo que el usuario ve: textos, imagenes, botones, formularios. Si no esta en body, no se ve.",
      warning: "La pagina queda en blanco.",
    },
  };

  var skeletonBtns = document.querySelectorAll("[data-skeleton]");
  var skeletonInfo = document.querySelector(".skeleton-info");
  var skeletonInfoName = skeletonInfo
    ? skeletonInfo.querySelector(".skeleton-info__name")
    : null;
  var skeletonInfoDesc = skeletonInfo
    ? skeletonInfo.querySelector(".skeleton-info__desc")
    : null;
  var skeletonInfoWarn = skeletonInfo
    ? skeletonInfo.querySelector(".skeleton-info__warning")
    : null;
  var activeSkeletonKey = null;

  function showSkeletonInfo(key) {
    var data = skeletonData[key];
    if (!data || !skeletonInfo) return;

    if (activeSkeletonKey === key) {
      skeletonInfo.hidden = true;
      activeSkeletonKey = null;
      skeletonBtns.forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
      });
      return;
    }

    skeletonInfoName.textContent = data.name;
    skeletonInfoDesc.textContent = data.desc;
    skeletonInfoWarn.textContent = "Si lo olvidas: " + data.warning;
    skeletonInfo.hidden = false;
    activeSkeletonKey = key;

    skeletonBtns.forEach(function (b) {
      b.setAttribute(
        "aria-expanded",
        b.getAttribute("data-skeleton") === key ? "true" : "false",
      );
    });
  }

  skeletonBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showSkeletonInfo(this.getAttribute("data-skeleton"));
    });
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showSkeletonInfo(this.getAttribute("data-skeleton"));
      }
    });
  });

  // --- Visualizador de anidamiento (Block 2) ---
  var nestingAnimateBtn = document.querySelector("[data-nesting-animate]");
  if (nestingAnimateBtn) {
    nestingAnimateBtn.addEventListener("click", function () {
      var boxes = document.querySelectorAll(
        ".nesting-panel--correct .nesting-box",
      );
      boxes.forEach(function (box) {
        box.classList.add("nesting-animate-hidden");
        box.classList.remove("nesting-animate-visible");
      });

      boxes.forEach(function (box, i) {
        setTimeout(
          function () {
            box.classList.remove("nesting-animate-hidden");
            box.classList.add("nesting-animate-visible");
          },
          300 * (i + 1),
        );
      });
    });
  }

  // --- Playground HTML en vivo ---
  function initPlayground(container) {
    if (!container) return;

    var textarea = container.querySelector(".playground__textarea");
    var highlight = container.querySelector(".playground__highlight code");
    var lineNumbers = container.querySelector(".playground__line-numbers");
    var iframe = container.querySelector(".playground__iframe");
    var resetBtn = container.querySelector(".playground__btn-reset");
    var copyBtn = container.querySelector(".playground__btn-copy");
    var tabs = container.querySelectorAll("[data-playground-tab]");
    var editorWrap = container.querySelector(".playground__editor-wrap");
    var previewWrap = container.querySelector(".playground__preview-wrap");
    var divider = container.querySelector(".playground__divider");

    var templateId = container.getAttribute("data-default-code");
    var template = document.getElementById(templateId);
    var defaultCode = template ? template.innerHTML.trim() : "";

    // Cleanup template indentation - remove leading common whitespace
    var lines = defaultCode.split("\n");
    if (lines.length > 1) {
      var minIndent = Infinity;
      lines.forEach(function (line) {
        if (line.trim().length > 0) {
          var leadingSpaces = line.match(/^(\s*)/)[1].length;
          if (leadingSpaces < minIndent) minIndent = leadingSpaces;
        }
      });
      if (minIndent < Infinity && minIndent > 0) {
        defaultCode = lines
          .map(function (line) {
            return line.substring(minIndent);
          })
          .join("\n");
      }
    }

    textarea.value = defaultCode;

    var debounceTimer = null;

    function highlightSyntax(code) {
      var escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return escaped.replace(
        /&lt;!--[\s\S]*?--&gt;|&lt;\/?!?[\w-]+|\/?\s*&gt;|([\w-]+)="([^"]*)"/g,
        function (match, attrName, attrVal) {
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

    function updateLineNumbers(code) {
      var count = code.split("\n").length;
      var nums = [];
      for (var i = 1; i <= count; i++) {
        nums.push(i);
      }
      lineNumbers.textContent = nums.join("\n");
    }

    function updatePreview(code) {
      var srcdoc =
        "<!DOCTYPE html><html><head><style>body{font-family:system-ui,sans-serif;padding:1rem;margin:0;font-size:14px;line-height:1.5;color:#1e293b;}img{max-width:100%;height:auto;}input,select,textarea,button{font:inherit;padding:0.4rem 0.6rem;margin:0.25rem 0;display:block;width:100%;box-sizing:border-box;}label{display:block;margin-top:0.75rem;font-weight:600;}button{width:auto;cursor:pointer;background:#f97316;color:#fff;border:none;border-radius:6px;padding:0.5rem 1.25rem;}select{width:100%;}textarea{resize:vertical;}ul,ol{padding-left:1.5rem;}</style></head><body>" +
        code +
        "</body></html>";
      iframe.setAttribute("srcdoc", srcdoc);
    }

    function sync() {
      var code = textarea.value;
      highlight.innerHTML = highlightSyntax(code);
      updateLineNumbers(code);

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        updatePreview(code);
      }, 300);
    }

    textarea.addEventListener("input", sync);

    textarea.addEventListener("scroll", function () {
      var pre = highlight.parentElement;
      pre.scrollTop = textarea.scrollTop;
      pre.scrollLeft = textarea.scrollLeft;
      lineNumbers.scrollTop = textarea.scrollTop;
    });

    textarea.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value =
          this.value.substring(0, start) + "  " + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 2;
        sync();
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        textarea.value = defaultCode;
        sync();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        navigator.clipboard
          .writeText(textarea.value)
          .then(function () {
            var original = copyBtn.textContent;
            copyBtn.textContent = "Copiado!";
            setTimeout(function () {
              copyBtn.textContent = original;
            }, 1500);
          })
          .catch(function () {});
      });
    }

    // Mobile: start with only editor visible
    if (window.innerWidth < 1024) {
      previewWrap.hidden = true;
    }

    // Mobile tabs
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = this.getAttribute("data-playground-tab");

        tabs.forEach(function (t) {
          t.classList.remove("playground__tab--active");
          t.setAttribute("aria-selected", "false");
        });
        this.classList.add("playground__tab--active");
        this.setAttribute("aria-selected", "true");

        if (target === "editor") {
          editorWrap.hidden = false;
          previewWrap.hidden = true;
        } else {
          editorWrap.hidden = true;
          previewWrap.hidden = false;
        }
      });
    });

    // Desktop draggable divider
    if (divider) {
      var isDragging = false;
      var bodyEl = container.querySelector(".playground__body");

      divider.addEventListener("mousedown", function (e) {
        isDragging = true;
        e.preventDefault();
      });

      document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        var rect = bodyEl.getBoundingClientRect();
        var offsetX = e.clientX - rect.left;
        var totalW = rect.width;
        var percent = Math.max(20, Math.min(80, (offsetX / totalW) * 100));
        editorWrap.style.flex = "0 0 " + percent + "%";
        previewWrap.style.flex = "0 0 " + (100 - percent) + "%";
      });

      document.addEventListener("mouseup", function () {
        isDragging = false;
      });
    }

    sync();
  }

  // Init both playgrounds
  document.querySelectorAll("[data-playground]").forEach(initPlayground);

  // --- Comparador semantico (Block 4) ---
  var semanticToggle = document.querySelector(".semantic-toggle");
  var semanticCompare = document.querySelector(".semantic-compare");

  if (semanticToggle && semanticCompare) {
    var divPre = semanticCompare.querySelector(".semantic-compare__pre--div");
    var semPre = semanticCompare.querySelector(
      ".semantic-compare__pre--semantic",
    );

    function toggleSemantic() {
      var isChecked = semanticToggle.getAttribute("aria-checked") === "true";
      var newState = !isChecked;
      semanticToggle.setAttribute("aria-checked", String(newState));

      var divLabel = semanticToggle.querySelector(
        ".semantic-toggle__label--div",
      );
      var semLabel = semanticToggle.querySelector(
        ".semantic-toggle__label--semantic",
      );

      if (newState) {
        semanticCompare.classList.add("semantic-compare--semantic");
        divPre.classList.remove("semantic-compare__pre--active");
        semPre.classList.add("semantic-compare__pre--active");
        divLabel.classList.remove("semantic-toggle__label--active");
        semLabel.classList.add("semantic-toggle__label--active");
      } else {
        semanticCompare.classList.remove("semantic-compare--semantic");
        semPre.classList.remove("semantic-compare__pre--active");
        divPre.classList.add("semantic-compare__pre--active");
        semLabel.classList.remove("semantic-toggle__label--active");
        divLabel.classList.add("semantic-toggle__label--active");
      }
    }

    semanticToggle.addEventListener("click", toggleSemantic);
    semanticToggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleSemantic();
      }
    });
  }

  // --- Mapa de zonas semanticas (Block 4) ---
  var zoneData = {
    header: {
      tag: "<header>",
      desc: "Encabezado de la pagina. Logo, titulo, navegacion.",
      example: "El logo y menu de arriba de todo.",
    },
    nav: {
      tag: "<nav>",
      desc: "Seccion de navegacion. Links a otras paginas.",
      example: "Home, Nosotros, Contacto.",
    },
    main: {
      tag: "<main>",
      desc: "Contenido principal. Solo UNO por pagina.",
      example: "Los posts del blog, los productos.",
    },
    article: {
      tag: "<article>",
      desc: "Contenido independiente y auto-contenido.",
      example: "Un post, una noticia, un producto.",
    },
    section: {
      tag: "<section>",
      desc: "Seccion tematica del contenido.",
      example: 'Seccion "Sobre nosotros".',
    },
    aside: {
      tag: "<aside>",
      desc: "Contenido lateral, relacionado pero secundario.",
      example: "Barra lateral, datos extra.",
    },
    footer: {
      tag: "<footer>",
      desc: "Pie de pagina. Copyright, links legales, contacto.",
      example: "© 2026, politica de privacidad.",
    },
  };

  var mapBtns = document.querySelectorAll(".semantic-map__btn");
  var mapInfo = document.querySelector(".semantic-map__info");
  var mapInfoTag = mapInfo
    ? mapInfo.querySelector(".semantic-map__info-tag")
    : null;
  var mapInfoDesc = mapInfo
    ? mapInfo.querySelector(".semantic-map__info-desc")
    : null;
  var mapInfoExample = mapInfo
    ? mapInfo.querySelector(".semantic-map__info-example")
    : null;
  var activeZone = null;

  mapBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var zone = this.getAttribute("data-zone");
      var data = zoneData[zone];
      if (!data || !mapInfo) return;

      if (activeZone === zone) {
        mapInfo.hidden = true;
        activeZone = null;
        mapBtns.forEach(function (b) {
          b.classList.remove("semantic-map__btn--active");
        });
        return;
      }

      mapInfoTag.textContent = data.tag;
      mapInfoDesc.textContent = data.desc;
      mapInfoExample.textContent = "Ejemplo: " + data.example;
      mapInfo.hidden = false;
      activeZone = zone;

      mapBtns.forEach(function (b) {
        b.classList.remove("semantic-map__btn--active");
      });
      this.classList.add("semantic-map__btn--active");
    });
  });

  // --- Tabla de atributos expandible (Block 5) ---
  var attrRows = document.querySelectorAll(".attr-table__row");

  attrRows.forEach(function (row) {
    var detail = row.querySelector(".attr-table__detail");
    if (!detail) return;

    function toggleRow() {
      var isExpanded = row.getAttribute("aria-expanded") === "true";
      var newState = !isExpanded;

      attrRows.forEach(function (r) {
        var d = r.querySelector(".attr-table__detail");
        if (r !== row && d) {
          r.setAttribute("aria-expanded", "false");
          d.hidden = true;
        }
      });

      row.setAttribute("aria-expanded", String(newState));
      detail.hidden = !newState;
    }

    row.addEventListener("click", toggleRow);
    row.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleRow();
      }
    });
  });

  // --- Visualizador de alt text (Block 6) ---
  var altBtns = document.querySelectorAll("[data-alt-action]");

  altBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var action = this.getAttribute("data-alt-action");
      var loadedState = document.querySelector(".alt-demo__state--loaded");
      var brokenState = document.querySelector(".alt-demo__state--broken");

      if (action === "break") {
        loadedState.classList.remove("alt-demo__state--active");
        brokenState.classList.add("alt-demo__state--active");
      } else {
        brokenState.classList.remove("alt-demo__state--active");
        loadedState.classList.add("alt-demo__state--active");
      }
    });
  });

  // --- Demo de tipos de input (Block 7) ---
  var inputTypeData = {
    text: {
      explanation: "Campo de texto comun. El tipo por defecto.",
      code: '<input type="text">',
    },
    email: {
      explanation:
        "Valida que tenga formato de email. En el celular muestra la @.",
      code: '<input type="email">',
    },
    password: {
      explanation: "Oculta lo que escribis con puntitos.",
      code: '<input type="password">',
    },
    number: {
      explanation: "Solo acepta numeros. Aparecen flechitas para subir/bajar.",
      code: '<input type="number">',
    },
    date: {
      explanation: "Abre un selector de fecha nativo.",
      code: '<input type="date">',
    },
    tel: {
      explanation: "En celulares abre el teclado numerico.",
      code: '<input type="tel">',
    },
    url: {
      explanation:
        "Valida que sea una URL. En celulares muestra .com en el teclado.",
      code: '<input type="url">',
    },
    checkbox: {
      explanation: "Casilla de verificacion. Se puede marcar o desmarcar.",
      code: '<input type="checkbox">',
    },
    radio: {
      explanation: "Boton de opcion. De un grupo, solo se puede elegir uno.",
      code: '<input type="radio">',
    },
  };

  var inputTypeBtns = document.querySelectorAll("[data-input-type]");
  var inputField = document.getElementById("input-demo-field");
  var inputFieldWrap = document.querySelector(".input-demo__field-wrap");
  var inputExplanation = document.querySelector(".input-demo__explanation");
  var inputCodeEl = document.querySelector(".input-demo__code code");

  inputTypeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var type = this.getAttribute("data-input-type");
      var data = inputTypeData[type];
      if (!data) return;

      inputTypeBtns.forEach(function (b) {
        b.classList.remove("input-demo__type--active");
      });
      this.classList.add("input-demo__type--active");

      // For checkbox/radio, we rebuild the HTML
      if (type === "checkbox" || type === "radio") {
        inputFieldWrap.innerHTML =
          '<label style="display:inline-flex;align-items:center;gap:0.5rem;cursor:pointer;">' +
          '<input type="' +
          type +
          '" id="input-demo-field" class="input-demo__input" />' +
          " Opcion de ejemplo</label>";
      } else {
        inputFieldWrap.innerHTML =
          '<input type="' +
          type +
          '" id="input-demo-field" class="input-demo__input" />';
      }

      inputExplanation.textContent = data.explanation;
      inputCodeEl.textContent = data.code;

      // fade effect
      inputExplanation.style.opacity = "0";
      setTimeout(function () {
        inputExplanation.style.opacity = "1";
      }, 50);
    });
  });

  // --- Checklist persistente (Block 9) ---
  function initChecklist(container, storageKey) {
    if (!container) return;

    var checkboxes = container.querySelectorAll('input[type="checkbox"]');
    var completion = container.querySelector(".checklist__completion");

    var saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    checkboxes.forEach(function (cb, i) {
      if (saved[i]) {
        cb.checked = true;
        cb.closest(".checklist__item").classList.add("completed");
      }
    });

    function updateState() {
      var state = {};
      var completedCount = 0;
      checkboxes.forEach(function (cb, i) {
        state[i] = cb.checked;
        if (cb.checked) completedCount++;
        cb.closest(".checklist__item").classList.toggle(
          "completed",
          cb.checked,
        );
      });
      localStorage.setItem(storageKey, JSON.stringify(state));

      var progressText = container.querySelector(
        ".persistent-checklist__progress",
      );
      var progressFill = container.querySelector(
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
    document.querySelector("#checklist-tarea-html"),
    "clase3-checklist-tarea",
  );

  // --- Copy buttons for code blocks ---
  document.querySelectorAll(".code-block__copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = this.closest(".code-block").querySelector(".code-block__pre");
      if (!pre) return;

      var text = pre.textContent;
      navigator.clipboard
        .writeText(text)
        .then(function () {
          var original = btn.textContent;
          btn.textContent = "Copiado!";
          setTimeout(function () {
            btn.textContent = original;
          }, 1500);
        })
        .catch(function () {});
    });
  });
})();
