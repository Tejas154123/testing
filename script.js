// Configuration for your GitHub Repository
const REPO_CONFIG = {
  githubUsername: "prahaar911", // Your GitHub username
  repoName: "",                 // Your repo name (e.g. "robo-lab")
  branch: "main",
  folder: "images",
  localFolder: "./images"
};

const THEME_COLORS = {
  "color-teal": { primary: "#00e5a3", base: "#00e5a3" },
  "color-yellow": { primary: "#f59e0b", base: "#f59e0b" },
  "color-orange": { primary: "#f97316", base: "#f97316" },
  "color-red": { primary: "#ef4444", base: "#ef4444" },
  "color-white": { primary: "#cbd5e1", base: "#64748b" }
};

const DATA = {
  page1: [
    {
      id: "p1-1",
      title: "Obstacle Avoidance+RC Robot",
      colorClass: "color-teal",
      imageKey: "photo1",
      slotText: "IMAGE SLOT",
      layout: "image-right",
      specs: [
        "A 2 in 1 robot with two modes",
        "• Obstacle Avoidance mode: Navigates by itself using ultrasonic sensor",
        "• RC Mode: Controlled by phone app via bluetooth",
        "Components:",
        "• Arduino UNO",
        "• L298N motor driver",
        "• 1x servo motor",
        "• 1x ultrasonic sensor",
        "• 1x hc-05 bluetooth module",
        "• 4x bo motors with wheels",
        "• 2x 3.7 lithium ion batteries",
        "• 1x switch"
      ]
    },
    {
      id: "p1-2",
      title: "A 3 in 1 Robot CAR",
      subtitle: "Features",
      colorClass: "color-teal",
      imageKey: "photo2",
      slotText: "IMAGE\nSLOT",
      layout: "image-left",
      specs: [
        "Mode 1 (Voice Control)= Takes voice commands via app.",
        "Mode 2 (Obstacle Avoidance)= Self-navigates around obstacles.",
        "Mode 3 (Gesture Control)= Controlled by hand gestures."
      ]
    },
    {
      id: "p1-3",
      title: "FIRE FIGHTER ROBOT",
      colorClass: "color-yellow",
      hasUnderline: true,
      imageKey: "photo3",
      enableTypewriter: true,
      slotText: "IMAGE SLOT",
      layout: "image-top-centered",
      specs: [
        "• Autonomous emergency suppression robot controlled by a computer.",
        "• Designed for hazardous fire neutralization without human risk.",
        "Components:",
        "• Heat sensing sensors",
        "• Water pump & container",
        "Finds fire through the heat sensor and extinguishes it with precision, else patrols around."
      ]
    },
    {
      id: "p1-4",
      title: "Blind Stick",
      subtitle: "Guides a blind person to search their way.",
      colorClass: "color-orange",
      imageKey: "photo4",
      slotText: "blind stick\nslot",
      layout: "image-right",
      specs: [
        "Components:",
        "• Arduino UNO",
        "• 9V battery",
        "• Ultrasonic sensor",
        "• Pipe / stick & jumper wires",
        "• Buzzer",
        "Functioning:",
        "Measures obstacle distance and activates buzzer warning if obstacle is detected closer than threshold."
      ]
    },
    {
      id: "p1-5",
      title: "E-nose",
      subtitle: "Detects different smells and alerts early hazards.",
      colorClass: "color-red",
      imageKey: "photo5",
      enableTypewriter: true,
      slotText: "Image Slot\nfor E-nose",
      layout: "image-top-centered",
      specs: [
        "Components:",
        "• Esp 32",
        "• 1x mq 2, 1x mq 3, 1x mq 135, 1x mq 7",
        "• 1x DHT 11",
        "• 1x breadboard",
        "Features: Monitors air quality, smoke, alcohol, temperature and humidity live over the web.",
        "Application: Alerts early accidental fires."
      ]
    }
  ],
  page2: [
    {
      id: "p2-1",
      title: "ULTRA--SONIC -- SENSOR",
      colorClass: "color-white",
      imageKey: "photo6",
      slotText: "",
      layout: "image-right",
      specs: [
        "Measures distance between itself and obstacles using ultrasonic sound waves.",
        "4 pins:",
        "• Vcc (5V input)",
        "• GND (common ground)",
        "• Echo and Trig (signal pins)"
      ]
    },
    {
      id: "p2-2",
      title: "Esp- 32",
      colorClass: "color-white",
      imageKey: "photo7",
      slotText: "",
      layout: "image-left",
      specs: [
        "Microcontroller with embedded Wi-Fi and Bluetooth.",
        "Works on both 5V and 3.3V.",
        "Micro USB port for power and programming.",
        "Clock speed: 250 MHz."
      ]
    },
    {
      id: "p2-3",
      title: "Arduino--UNO",
      colorClass: "color-white",
      imageKey: "photo8",
      slotText: "",
      layout: "image-right",
      specs: [
        "Popular microcontroller using ATmega 328p chip.",
        "14 digital pins and 6 analog pins programmable via Arduino IDE."
      ]
    },
    {
      id: "p2-4",
      isBonus: true,
      bonusTitle: "BONUS!",
      title: "Heat Sensor",
      imageKey: "photo9",
      slotText: "",
      layout: "image-top-centered",
      specs: [
        "Detects ambient heat and converts it into electrical signals for the controller."
      ]
    }
  ]
};

let currentPage = 1;

// Function generating the animated connecting circuit lines matching Figma
function createFlowingSvg(layout, colorClass) {
  const theme = THEME_COLORS[colorClass] || THEME_COLORS["color-teal"];

  if (layout === "image-right") {
    return `
      <svg class="flowing-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-${colorClass}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="${theme.primary}" />
          </marker>
        </defs>
        <!-- Top border leading towards image -->
        <path d="M 10 16 L 94% 16 L 102% 38 L 118% 42" fill="none" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" marker-end="url(#arrow-${colorClass})" />
        <path d="M 10 16 L 94% 16 L 102% 38 L 118% 42" fill="none" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <!-- Bottom border leading towards image -->
        <path d="M 10 98% L 94% 98% L 108% 85% L 116% 80%" fill="none" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <path d="M 10 98% L 94% 98% L 108% 85% L 116% 80%" fill="none" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <!-- Left vertical line -->
        <line x1="10" y1="16" x2="10" y2="98%" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <line x1="10" y1="16" x2="10" y2="98%" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />
      </svg>
    `;
  } else if (layout === "image-left") {
    return `
      <svg class="flowing-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Top border leading towards left image -->
        <path d="M 100% 16 L 4% 16 L -10% 28 L -22% 34" fill="none" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <path d="M 100% 16 L 4% 16 L -10% 28 L -22% 34" fill="none" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <!-- Bottom border leading towards left image -->
        <path d="M 100% 98% L 4% 98% L -10% 88% L -22% 82%" fill="none" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <path d="M 100% 98% L 4% 98% L -10% 88% L -22% 82%" fill="none" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <!-- Right vertical line -->
        <line x1="100%" y1="16" x2="100%" y2="98%" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <line x1="100%" y1="16" x2="100%" y2="98%" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />
      </svg>
    `;
  } else if (layout === "image-top-centered") {
    return `
      <svg class="flowing-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Top bracket reaching upward toward image -->
        <path d="M 2% 16 L 48% 16 L 48% -24 L 52% -24 L 52% 16 L 98% 16" fill="none" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <path d="M 2% 16 L 48% 16 L 48% -24 L 52% -24 L 52% 16 L 98% 16" fill="none" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <!-- Left & Right ticks -->
        <line x1="2%" y1="16" x2="2%" y2="98%" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <line x1="2%" y1="16" x2="2%" y2="98%" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <line x1="98%" y1="16" x2="98%" y2="98%" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <line x1="98%" y1="16" x2="98%" y2="98%" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />

        <!-- Bottom base -->
        <line x1="2%" y1="98%" x2="98%" y2="98%" stroke="${theme.base}" stroke-width="1.5" stroke-opacity="0.65" />
        <line x1="2%" y1="98%" x2="98%" y2="98%" stroke="${theme.primary}" stroke-width="2" class="flowing-line" />
      </svg>
    `;
  }
  return "";
}

function getCandidateUrls(imageKey) {
  const exts = ["jpg", "png", "webp", "jpeg", "svg"];
  const list = [];
  exts.forEach(ext => list.push(`${REPO_CONFIG.localFolder}/${imageKey}.${ext}`));
  if (REPO_CONFIG.githubUsername && REPO_CONFIG.repoName) {
    exts.forEach(ext => {
      list.push(`https://raw.githubusercontent.com/${REPO_CONFIG.githubUsername}/${REPO_CONFIG.repoName}/${REPO_CONFIG.branch}/${REPO_CONFIG.folder}/${imageKey}.${ext}`);
    });
  }
  return list;
}

function renderImageSlot(imageKey, slotText, altText) {
  const candidates = getCandidateUrls(imageKey);
  const candidatesAttr = encodeURIComponent(JSON.stringify(candidates));

  return `
    <div class="card-image-slot" data-key="${imageKey}" style="background-color: #cfd3db;">
      <img
        src="${candidates[0]}"
        alt="${altText}"
        class="slot-image-preview"
        data-index="0"
        data-candidates="${candidatesAttr}"
        onload="this.parentElement.style.backgroundColor='#0a0a0a'; this.style.display='block'; const t = this.parentElement.querySelector('.slot-inner-text'); if(t) t.style.display='none';"
        onerror="handleAutoRepoFallback(this)"
        style="display: none;"
        loading="lazy"
      />
      <div class="slot-inner-text">${slotText || "IMAGE SLOT"}</div>
    </div>
  `;
}

function handleAutoRepoFallback(imgEl) {
  try {
    const candidates = JSON.parse(decodeURIComponent(imgEl.getAttribute("data-candidates") || "[]"));
    let currentIndex = parseInt(imgEl.getAttribute("data-index") || "0", 10);
    if (currentIndex + 1 < candidates.length) {
      imgEl.setAttribute("data-index", currentIndex + 1);
      imgEl.src = candidates[currentIndex + 1];
    } else {
      imgEl.style.display = "none";
      const slotText = imgEl.parentElement.querySelector(".slot-inner-text");
      if (slotText) slotText.style.display = "block";
    }
  } catch(e) {
    imgEl.style.display = "none";
  }
}

function renderPage() {
  const container = document.getElementById("projects-container");
  const mainTitle = document.getElementById("main-title");
  const pageIndicator = document.getElementById("page-indicator");
  const footerBadge = document.getElementById("footer-page-badge");
  const footerBtnText = document.getElementById("main-page-toggle-text");
  const navBtn1 = document.getElementById("nav-btn-1");
  const navBtn2 = document.getElementById("nav-btn-2");

  if (currentPage === 1) {
    mainTitle.textContent = "ROBO LAB";
    pageIndicator.textContent = "PAGE 01";
    footerBadge.textContent = "PAGE [01 / 02]";
    footerBtnText.textContent = "PROCEED TO PAGE 2";
    navBtn1.classList.add("active");
    navBtn2.classList.remove("active");
  } else {
    mainTitle.textContent = "SENSOR-LAB";
    pageIndicator.textContent = "PAGE 02";
    footerBadge.textContent = "PAGE [02 / 02]";
    footerBtnText.textContent = "RETURN TO PAGE 1";
    navBtn1.classList.remove("active");
    navBtn2.classList.add("active");
  }

  container.innerHTML = "";
  const currentList = currentPage === 1 ? DATA.page1 : DATA.page2;

  currentList.forEach((item) => {
    // BONUS Section (Page 2)
    if (item.isBonus) {
      const bonusEl = document.createElement("section");
      bonusEl.className = "bonus-container";
      bonusEl.innerHTML = `
        <h2 class="bonus-heading">${item.bonusTitle || "BONUS!"}</h2>
        <div class="bonus-slot-wrap">
          ${renderImageSlot(item.imageKey, item.slotText, item.title)}
        </div>
        <h3 class="bonus-subtitle">${item.title}</h3>
        <p class="bonus-desc">${item.specs.join("<br />")}</p>
      `;
      container.appendChild(bonusEl);
      return;
    }

    // Standard Project Card with Animated Circuit Connecting Lines
    const cardEl = document.createElement("section");
    cardEl.className = `project-card layout-${item.layout}`;

    const rawFullText = item.specs.join("\n");

    const textContent = `
      <div class="flowing-border-wrapper">
        ${createFlowingSvg(item.layout, item.colorClass)}
        <div class="card-text">
          <h3 class="card-title ${item.colorClass}">
            ${item.hasUnderline ? `<span class="fighter-underline">${item.title}</span>` : item.title}
            ${item.subtitle ? `<span style="color:#00e5a3; font-weight:normal;"> : ${item.subtitle}</span>` : ""}
          </h3>
          ${
            item.enableTypewriter
              ? `<div class="card-specs ${item.colorClass} typewriter-target" data-full-text="${encodeURIComponent(rawFullText)}"></div>`
              : `<div class="card-specs ${item.colorClass}">${item.specs.map(s => `<div class="spec-line">${s}</div>`).join("")}</div>`
          }
        </div>
      </div>
    `;

    const slotContent = renderImageSlot(item.imageKey, item.slotText, item.title);

    if (item.layout === "image-left") {
      cardEl.innerHTML = `${slotContent}${textContent}`;
    } else {
      cardEl.innerHTML = `${textContent}${slotContent}`;
    }

    container.appendChild(cardEl);
  });

  setupScrollRevealAndTypewriter();
}

function setupScrollRevealAndTypewriter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");

        const typewriterEl = entry.target.querySelector(".typewriter-target");
        if (typewriterEl && !typewriterEl.dataset.typed) {
          typewriterEl.dataset.typed = "true";
          const fullText = decodeURIComponent(typewriterEl.dataset.fullText || "");
          let i = 0;
          typewriterEl.innerHTML = `<span class="typewriter-cursor"></span>`;

          const timer = setInterval(() => {
            i++;
            const currentSub = fullText.slice(0, i).replace(/\n/g, "<br/>");
            typewriterEl.innerHTML = `${currentSub}<span class="typewriter-cursor"></span>`;
            if (i >= fullText.length) {
              clearInterval(timer);
            }
          }, 10);
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".project-card, .bonus-container").forEach((card) => {
    observer.observe(card);
  });
}

function switchPage(pageNumber) {
  currentPage = pageNumber;
  renderPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleNextPage() {
  switchPage(currentPage === 1 ? 2 : 1);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
});
