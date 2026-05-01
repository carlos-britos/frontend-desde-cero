/* ==========================================================================
   git.js — Interactividad de la Clase 2: Git
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

  // --- Smooth scroll del boton hero ---
  const heroBtn = document.querySelector(".hero__cta");
  if (heroBtn) {
    heroBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(heroBtn.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // --- Seccion 1: Reveal "Con Git" ---
  const revealBtn = document.querySelector("[data-reveal-git]");
  const orderPanel = document.querySelector(".git-compare__panel--order");

  if (revealBtn && orderPanel) {
    revealBtn.addEventListener("click", function () {
      orderPanel.classList.add("visible");
      this.disabled = true;
      this.textContent = "Mucho mejor, no?";
    });
  }

  // --- Seccion 3: Diagrama de flujo de 3 pasos ---
  const flowDiagram = document.querySelector(".flow-diagram");
  if (flowDiagram) {
    const flowState = { step: 0 };
    const workingZone = flowDiagram.querySelector("[data-flow-zone='working']");
    const stagingZone = flowDiagram.querySelector("[data-flow-zone='staging']");
    const repoZone = flowDiagram.querySelector("[data-flow-zone='repo']");
    const flowExplanation = flowDiagram.querySelector(
      ".flow-diagram__explanation",
    );
    const flowExplanations = [
      "Editaste archivos. Git los ve en rojo porque cambiaron.",
      "Con `git add` los moves al carrito. Estan listos para commitear.",
      "Con `git commit` sacas la foto. Quedan guardados para siempre.",
    ];

    function renderFlowState() {
      const workingFiles = workingZone.querySelector(".flow-diagram__files");
      const stagingFiles = stagingZone.querySelector(".flow-diagram__files");
      const repoFiles = repoZone.querySelector(".flow-diagram__files");

      workingFiles.innerHTML = "";
      stagingFiles.innerHTML = "";
      repoFiles.innerHTML = "";

      if (flowState.step === 0) {
        workingFiles.innerHTML =
          '<span class="flow-diagram__file flow-diagram__file--modified">index.html</span>' +
          '<span class="flow-diagram__file flow-diagram__file--modified">style.css</span>';
      } else if (flowState.step === 1) {
        stagingFiles.innerHTML =
          '<span class="flow-diagram__file flow-diagram__file--staged">index.html</span>' +
          '<span class="flow-diagram__file flow-diagram__file--staged">style.css</span>';
      } else if (flowState.step === 2) {
        repoFiles.innerHTML =
          '<span class="flow-diagram__file flow-diagram__file--committed">index.html</span>' +
          '<span class="flow-diagram__file flow-diagram__file--committed">style.css</span>';
      }

      if (flowExplanation) {
        flowExplanation.textContent = flowExplanations[flowState.step] || "";
      }
    }

    const btnAdd = flowDiagram.querySelector("[data-flow-action='add']");
    const btnCommit = flowDiagram.querySelector("[data-flow-action='commit']");
    const btnReset = flowDiagram.querySelector("[data-flow-action='reset']");

    if (btnAdd) {
      btnAdd.addEventListener("click", function () {
        if (flowState.step === 0) {
          flowState.step = 1;
          renderFlowState();
        }
      });
    }
    if (btnCommit) {
      btnCommit.addEventListener("click", function () {
        if (flowState.step === 1) {
          flowState.step = 2;
          renderFlowState();
        }
      });
    }
    if (btnReset) {
      btnReset.addEventListener("click", function () {
        flowState.step = 0;
        renderFlowState();
      });
    }

    renderFlowState();
  }

  // =========================================================================
  // SIMULADOR DE TERMINAL
  // =========================================================================
  const terminalEl = document.querySelector(".terminal");
  if (terminalEl) {
    const termBody = terminalEl.querySelector(".terminal__body");
    const termInput = terminalEl.querySelector(".terminal__input");
    const visualPanel = document.querySelector(".terminal-visual");

    // Estado interno
    const state = {
      files: [{ name: "index.html", status: "untracked" }],
      staged: [],
      commits: [],
      branch: "main",
      branches: ["main"],
      history: [],
      historyIndex: -1,
    };

    // Tutorial steps
    const tutorialSteps = [
      { cmd: "git status", text: 'Escribi "git status" para ver los archivos' },
      {
        cmd: "git add index.html",
        text: 'Ahora escribi "git add index.html" para prepararlo',
      },
      {
        cmd: "git status",
        text: 'Escribi "git status" de nuevo — fijate como cambio',
      },
      {
        cmd: "git commit -m",
        text: 'Ahora hace el commit: git commit -m "Creo pagina principal"',
      },
      { cmd: "git log", text: 'Escribi "git log" para ver tu historial' },
    ];
    let tutorialCurrent = 0;

    function generateHash() {
      const chars = "0123456789abcdef";
      let hash = "";
      for (let i = 0; i < 7; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
      }
      return hash;
    }

    function addOutput(text, className) {
      const line = document.createElement("div");
      line.className =
        "terminal__output-line" + (className ? " " + className : "");
      line.textContent = text;
      const inputLine = termBody.querySelector(".terminal__input-line");
      termBody.insertBefore(line, inputLine);
      termBody.scrollTop = termBody.scrollHeight;
    }

    function addPromptLine(cmd) {
      const line = document.createElement("div");
      line.className = "terminal__output-line";
      line.textContent = "~/mi-proyecto $ " + cmd;
      const inputLine = termBody.querySelector(".terminal__input-line");
      termBody.insertBefore(line, inputLine);
    }

    function executeCommand(input) {
      const cmd = input.trim();
      if (!cmd) return;

      state.history.push(cmd);
      state.historyIndex = state.history.length;

      addPromptLine(cmd);

      if (cmd === "clear") {
        const inputLine = termBody.querySelector(".terminal__input-line");
        const lines = termBody.querySelectorAll(".terminal__output-line");
        lines.forEach(function (l) {
          l.remove();
        });
        updateVisual();
        checkTutorial(cmd);
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
        addOutput("  help              — Mostrar esta ayuda");
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd === "git init") {
        addOutput(
          "Initialized empty Git repository in ~/mi-proyecto/.git/",
          "terminal__output-line--success",
        );
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd === "git status") {
        addOutput("On branch " + state.branch);

        const untracked = state.files.filter(function (f) {
          return f.status === "untracked";
        });
        const modified = state.files.filter(function (f) {
          return f.status === "modified";
        });
        const staged = state.staged;

        if (
          untracked.length === 0 &&
          modified.length === 0 &&
          staged.length === 0
        ) {
          addOutput("nothing to commit, working tree clean");
        } else {
          if (staged.length > 0) {
            addOutput("Changes to be committed:");
            staged.forEach(function (f) {
              addOutput(
                "    new file:   " + f.name,
                "terminal__output-line--staged",
              );
            });
            addOutput("");
          }
          if (modified.length > 0) {
            addOutput("Changes not staged for commit:");
            modified.forEach(function (f) {
              addOutput(
                "    modified:   " + f.name,
                "terminal__output-line--modified",
              );
            });
            addOutput("");
          }
          if (untracked.length > 0) {
            addOutput("Untracked files:");
            untracked.forEach(function (f) {
              addOutput("    " + f.name, "terminal__output-line--modified");
            });
          }
        }
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd.startsWith("git add ")) {
        const fileName = cmd.replace("git add ", "").trim();

        if (fileName === ".") {
          const toStage = state.files.filter(function (f) {
            return f.status === "untracked" || f.status === "modified";
          });
          toStage.forEach(function (f) {
            state.staged.push({ name: f.name });
          });
          state.files = state.files.filter(function (f) {
            return f.status !== "untracked" && f.status !== "modified";
          });
        } else {
          const fileIdx = state.files.findIndex(function (f) {
            return f.name === fileName;
          });
          if (fileIdx !== -1) {
            state.staged.push({ name: state.files[fileIdx].name });
            state.files.splice(fileIdx, 1);
          } else {
            addOutput(
              "fatal: pathspec '" + fileName + "' did not match any files",
              "terminal__output-line--error",
            );
            updateVisual();
            checkTutorial(cmd);
            return;
          }
        }
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd.startsWith("git commit")) {
        if (state.staged.length === 0) {
          addOutput(
            "nothing to commit (use git add to stage files)",
            "terminal__output-line--error",
          );
          updateVisual();
          return;
        }

        const msgMatch = cmd.match(/git commit -m ["'](.+?)["']/);
        const msg = msgMatch ? msgMatch[1] : "Initial commit";
        const hash = generateHash();
        const fileCount = state.staged.length;

        state.commits.unshift({
          hash: hash,
          message: msg,
          branch: state.branch,
          date: new Date().toLocaleDateString("es-AR"),
        });

        state.staged = [];

        addOutput(
          "[" + state.branch + " " + hash + "] " + msg,
          "terminal__output-line--success",
        );
        addOutput(
          " " + fileCount + " file" + (fileCount > 1 ? "s" : "") + " changed",
        );

        // Agregar un nuevo archivo modificado para que siga habiendo interaccion
        if (state.commits.length === 1 && state.files.length === 0) {
          state.files.push({ name: "style.css", status: "untracked" });
        }

        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd === "git log") {
        if (state.commits.length === 0) {
          addOutput(
            "fatal: your current branch does not have any commits yet",
            "terminal__output-line--error",
          );
        } else {
          state.commits.forEach(function (c) {
            addOutput(
              "commit " + c.hash + " (" + c.branch + ")",
              "terminal__output-line--info",
            );
            addOutput("    " + c.message);
            addOutput("");
          });
        }
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd === "git branch") {
        state.branches.forEach(function (b) {
          const prefix = b === state.branch ? "* " : "  ";
          addOutput(
            prefix + b,
            b === state.branch ? "terminal__output-line--success" : "",
          );
        });
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd.startsWith("git switch -c ")) {
        const branchName = cmd.replace("git switch -c ", "").trim();
        if (state.branches.indexOf(branchName) !== -1) {
          addOutput(
            "fatal: a branch named '" + branchName + "' already exists",
            "terminal__output-line--error",
          );
        } else {
          state.branches.push(branchName);
          state.branch = branchName;
          addOutput(
            "Switched to a new branch '" + branchName + "'",
            "terminal__output-line--success",
          );
        }
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      if (cmd.startsWith("git switch ")) {
        const branchName = cmd.replace("git switch ", "").trim();
        if (state.branches.indexOf(branchName) === -1) {
          addOutput(
            "fatal: invalid reference: " + branchName,
            "terminal__output-line--error",
          );
        } else {
          state.branch = branchName;
          addOutput(
            "Switched to branch '" + branchName + "'",
            "terminal__output-line--success",
          );
        }
        checkTutorial(cmd);
        updateVisual();
        return;
      }

      addOutput(
        "comando no reconocido: " +
          cmd +
          '. Escribi "help" para ver los disponibles.',
        "terminal__output-line--error",
      );
      checkTutorial(cmd);
      updateVisual();
    }

    function checkTutorial(cmd) {
      if (tutorialCurrent >= tutorialSteps.length) return;

      const expected = tutorialSteps[tutorialCurrent].cmd;
      if (cmd.startsWith(expected)) {
        const stepEl = document.querySelector(
          '[data-tutorial-step="' + tutorialCurrent + '"]',
        );
        if (stepEl) {
          stepEl.classList.remove("active");
          stepEl.classList.add("completed");
          const icon = stepEl.querySelector(".terminal-tutorial__step-icon");
          if (icon) icon.textContent = "✓";
        }

        tutorialCurrent++;

        if (tutorialCurrent < tutorialSteps.length) {
          const nextEl = document.querySelector(
            '[data-tutorial-step="' + tutorialCurrent + '"]',
          );
          if (nextEl) nextEl.classList.add("active");
        } else {
          const congrats = document.querySelector(
            ".terminal-tutorial__congrats",
          );
          if (congrats) congrats.classList.add("visible");
        }
      }
    }

    function updateVisual() {
      if (!visualPanel) return;

      // Branch
      const branchEl = visualPanel.querySelector(".terminal-visual__branch");
      if (branchEl) branchEl.textContent = "rama: " + state.branch;

      // Working dir
      const workingSection = visualPanel.querySelector(
        ".terminal-visual__section--working",
      );
      const workingContent = workingSection.querySelector(
        ".terminal-visual__content",
      );
      if (workingContent) {
        workingContent.innerHTML = "";
        if (state.files.length === 0) {
          workingContent.innerHTML =
            '<span class="text-secondary" style="font-size:0.75rem">Vacio</span>';
        } else {
          state.files.forEach(function (f) {
            const el = document.createElement("div");
            el.className =
              "terminal-visual__file terminal-visual__file--" + f.status;
            el.textContent = f.name + " (" + f.status + ")";
            workingContent.appendChild(el);
          });
        }
      }

      // Staging
      const stagingSection = visualPanel.querySelector(
        ".terminal-visual__section--staging",
      );
      const stagingContent = stagingSection.querySelector(
        ".terminal-visual__content",
      );
      if (stagingContent) {
        stagingContent.innerHTML = "";
        if (state.staged.length === 0) {
          stagingContent.innerHTML =
            '<span class="text-secondary" style="font-size:0.75rem">Vacio</span>';
        } else {
          state.staged.forEach(function (f) {
            const el = document.createElement("div");
            el.className =
              "terminal-visual__file terminal-visual__file--staged";
            el.textContent = f.name;
            stagingContent.appendChild(el);
          });
        }
      }

      // Commits
      const commitsSection = visualPanel.querySelector(
        ".terminal-visual__section--commits",
      );
      const commitsContent = commitsSection.querySelector(
        ".terminal-visual__content",
      );
      if (commitsContent) {
        commitsContent.innerHTML = "";
        if (state.commits.length === 0) {
          commitsContent.innerHTML =
            '<span class="text-secondary" style="font-size:0.75rem">Sin commits</span>';
        } else {
          state.commits.forEach(function (c) {
            const el = document.createElement("div");
            el.className = "terminal-visual__commit";
            el.innerHTML =
              '<span class="terminal-visual__commit-hash">' +
              c.hash +
              "</span> " +
              c.message;
            commitsContent.appendChild(el);
          });
        }
      }
    }

    // Eventos del input
    termInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        executeCommand(this.value);
        this.value = "";
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (state.historyIndex > 0) {
          state.historyIndex--;
          this.value = state.history[state.historyIndex];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (state.historyIndex < state.history.length - 1) {
          state.historyIndex++;
          this.value = state.history[state.historyIndex];
        } else {
          state.historyIndex = state.history.length;
          this.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const val = this.value;
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
        const match = commands.find(function (c) {
          return c.startsWith(val) && c !== val;
        });
        if (match) this.value = match;
      }
    });

    // Click en terminal enfoca input
    termBody.addEventListener("click", function () {
      termInput.focus();
    });

    // Init visual
    updateVisual();

    // Init tutorial
    const firstStep = document.querySelector('[data-tutorial-step="0"]');
    if (firstStep) firstStep.classList.add("active");
  }

  // =========================================================================
  // SECCION 4: DIAGRAMA DE RAMAS INTERACTIVO
  // =========================================================================
  const branchesDiagram = document.querySelector(".branches-diagram");
  if (branchesDiagram) {
    const svg = branchesDiagram.querySelector(".branches-diagram__svg");
    const explanation = branchesDiagram.querySelector(
      ".branches-diagram__explanation",
    );
    let branchStep = 0;

    const branchExplanations = [
      "Estas en main. Tu codigo funciona bien.",
      "Creaste una rama. Ahora podes probar cosas sin romper main.",
      "Hiciste un commit en la rama. Main sigue igual.",
      "Volviste a main. Los cambios de la rama no estan aca.",
      "Merge: los cambios de la rama ahora estan en main.",
    ];

    function renderBranches() {
      // Base: main line with 3 commits
      let svgContent = "";
      svgContent +=
        '<line x1="60" y1="120" x2="540" y2="120" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>';
      svgContent += '<circle cx="100" cy="120" r="10" fill="#3B82F6"/>';
      svgContent += '<circle cx="200" cy="120" r="10" fill="#3B82F6"/>';
      svgContent += '<circle cx="300" cy="120" r="10" fill="#3B82F6"/>';

      if (branchStep >= 1) {
        // Branch line
        svgContent +=
          '<path d="M200 120 Q230 70 280 60" fill="none" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round"/>';
        svgContent +=
          '<text x="260" y="45" font-size="11" fill="#8B5CF6" font-weight="600">feature/estilos</text>';
      }

      if (branchStep >= 2) {
        // Commit on branch
        svgContent += '<circle cx="280" cy="60" r="10" fill="#8B5CF6"/>';
        svgContent +=
          '<path d="M280 60 Q330 55 370 60" fill="none" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round"/>';
        svgContent += '<circle cx="370" cy="60" r="10" fill="#8B5CF6"/>';
      }

      if (branchStep >= 3) {
        // Highlight main
        svgContent += '<circle cx="400" cy="120" r="10" fill="#3B82F6"/>';
        svgContent +=
          '<text x="395" y="150" font-size="10" fill="#3B82F6" font-weight="600">* main</text>';
      }

      if (branchStep >= 4) {
        // Merge
        svgContent +=
          '<path d="M370 60 Q420 80 450 120" fill="none" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round"/>';
        svgContent +=
          '<circle cx="450" cy="120" r="12" fill="#10B981" stroke="#065F46" stroke-width="2"/>';
        svgContent +=
          '<text x="440" y="150" font-size="10" fill="#10B981" font-weight="600">merge</text>';
      }

      svg.innerHTML = svgContent;
      if (explanation) {
        explanation.textContent = branchExplanations[branchStep] || "";
      }
    }

    const btnCreate = branchesDiagram.querySelector(
      "[data-branch-action='create']",
    );
    const btnBranchCommit = branchesDiagram.querySelector(
      "[data-branch-action='commit']",
    );
    const btnBack = branchesDiagram.querySelector(
      "[data-branch-action='back']",
    );
    const btnMerge = branchesDiagram.querySelector(
      "[data-branch-action='merge']",
    );
    const btnBranchReset = branchesDiagram.querySelector(
      "[data-branch-action='reset']",
    );

    if (btnCreate)
      btnCreate.addEventListener("click", function () {
        if (branchStep < 1) {
          branchStep = 1;
          renderBranches();
        }
      });
    if (btnBranchCommit)
      btnBranchCommit.addEventListener("click", function () {
        if (branchStep < 2) {
          branchStep = 2;
          renderBranches();
        }
      });
    if (btnBack)
      btnBack.addEventListener("click", function () {
        if (branchStep < 3) {
          branchStep = 3;
          renderBranches();
        }
      });
    if (btnMerge)
      btnMerge.addEventListener("click", function () {
        if (branchStep < 4) {
          branchStep = 4;
          renderBranches();
        }
      });
    if (btnBranchReset)
      btnBranchReset.addEventListener("click", function () {
        branchStep = 0;
        renderBranches();
      });

    renderBranches();
  }

  // =========================================================================
  // SECCION 5: DIAGRAMA REMOTO (push/pull animation)
  // =========================================================================
  const remoteDiagram = document.querySelector(".remote-diagram");
  if (remoteDiagram) {
    const particle = remoteDiagram.querySelector(".remote-particle");
    const svgEl = remoteDiagram.querySelector(".remote-diagram__svg");

    function animateParticle(startX, startY, endX, endY, color) {
      if (!particle || !svgEl) return;
      particle.setAttribute("cx", startX);
      particle.setAttribute("cy", startY);
      particle.setAttribute("fill", color);
      particle.classList.add("animating");

      let progress = 0;
      const duration = 800;
      const startTime = performance.now();

      function step(currentTime) {
        progress = (currentTime - startTime) / duration;
        if (progress > 1) progress = 1;

        const x = startX + (endX - startX) * progress;
        const y = startY + (endY - startY) * progress;
        particle.setAttribute("cx", x);
        particle.setAttribute("cy", y);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          particle.classList.remove("animating");
        }
      }

      requestAnimationFrame(step);
    }

    const btnPush = remoteDiagram.querySelector("[data-remote-action='push']");
    const btnPull = remoteDiagram.querySelector("[data-remote-action='pull']");
    const btnClone = remoteDiagram.querySelector(
      "[data-remote-action='clone']",
    );

    if (btnPush)
      btnPush.addEventListener("click", function () {
        animateParticle(200, 140, 500, 140, "#10B981");
      });
    if (btnPull)
      btnPull.addEventListener("click", function () {
        animateParticle(500, 160, 200, 160, "#F59E0B");
      });
    if (btnClone)
      btnClone.addEventListener("click", function () {
        animateParticle(500, 180, 200, 180, "#3B82F6");
      });
  }

  // =========================================================================
  // SECCION 6: FLUJO DE EQUIPO ANIMADO
  // =========================================================================
  const teamFlow = document.querySelector(".team-flow");
  if (teamFlow) {
    const steps = teamFlow.querySelectorAll(".team-flow__step");
    const btnStepByStep = teamFlow.querySelector("[data-team-action='step']");
    const btnAll = teamFlow.querySelector("[data-team-action='all']");

    let teamStepIndex = 0;

    function showStep(index) {
      if (index < steps.length) {
        steps[index].classList.add("visible");
      }
    }

    function showAll() {
      steps.forEach(function (s) {
        s.classList.add("visible");
      });
      teamStepIndex = steps.length;
    }

    function resetTeam() {
      steps.forEach(function (s) {
        s.classList.remove("visible");
      });
      teamStepIndex = 0;
    }

    if (btnStepByStep) {
      btnStepByStep.addEventListener("click", function () {
        if (teamStepIndex >= steps.length) {
          resetTeam();
        }
        showStep(teamStepIndex);
        teamStepIndex++;
      });
    }

    if (btnAll) {
      btnAll.addEventListener("click", function () {
        showAll();
      });
    }
  }

  // =========================================================================
  // SECCION 7: TARJETAS FLIP
  // =========================================================================
  document.querySelectorAll(".git-flip-card").forEach(function (card) {
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

  // =========================================================================
  // SECCION 8: CHECKLIST PERSISTENTE
  // =========================================================================
  function initChecklist(container, storageKey) {
    if (!container) return;

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const completion = container.querySelector(".checklist__completion");

    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    checkboxes.forEach(function (cb, i) {
      if (saved[i]) {
        cb.checked = true;
        cb.closest(".checklist__item").classList.add("completed");
      }
    });

    function updateState() {
      const stateObj = {};
      let completedCount = 0;
      checkboxes.forEach(function (cb, i) {
        stateObj[i] = cb.checked;
        if (cb.checked) completedCount++;
        cb.closest(".checklist__item").classList.toggle(
          "completed",
          cb.checked,
        );
      });
      localStorage.setItem(storageKey, JSON.stringify(stateObj));

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
    document.querySelector("#checklist-tarea-git"),
    "clase2-checklist-tarea",
  );
})();
