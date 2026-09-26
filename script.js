// Data for Page 1 & Page 2 with hardcoded image links
const DATA = {
  page1: [
    {
      id: "p1-1",
      title: "Obstacle Avoidance+RC Robot",
      colorClass: "color-teal",
      imageSrc: "photo1", // <-- Paste your photo 1 link here
      specs: [
        "A 2 in 1 robot with two modes",
        "• Obstacle Avoidance mode: In which it senses the obstacles using its ultrasonic sensor and navigates by itself",
        "• RC Mode: It is equipped with a bluetooth module through which it can be controlled by your phone using a custom-built app",
        "Components :",
        "• Arduino UNO",
        "• L298N motor driver",
        "• 1x servo motor",
        "• 1x ultrasonic sensor",
        "• 1x hc-05 bluetooth module",
        "• 4x bo motors with wheels",
        "• 2x 3.7 lithium ion batteries",
        "• 1x switch"
      ],
      slotText: "IMAGE SLOT",
      layout: "image-right"
    },
    {
      id: "p1-2",
      title: "A 3 in 1 Robot CAR",
      subtitle: "Features",
      colorClass: "color-teal",
      imageSrc: "photo2", // <-- Paste your photo 2 link here
      specs: [
        "Mode 1 (Voice Control)= It connects to your phone and takes voice commands through an app like (forward, backward, left, right, etc.) and moves accordingly .",
        "Mode 2 (Obstacle Avoidance)= In this mode it works as same as other obstacle avoidance robots .",
        "Mode 3 (Gesture Control)= In this mode it takes hand gesture commands to move ."
      ],
      slotText: "IMAGE\nSLOT",
      layout: "image-left"
    },
    {
      id: "p1-3",
      title: "FIRE FIGHTER ROBOT",
      colorClass: "color-yellow",
      hasUnderline: true,
      imageSrc: "photo3", // <-- Paste your photo 3 link here
      enableTypewriter: true,
      specs: [
        "• This robot is a very incredible idea for emergency situations where no human interaction is needed and every thing is being controlled by a computer",
        "• If this project is made on a very huge scale using very advanced system then it can become a life saver for the victims as well as the fire fighters who put their lives on risk to neutralize a fire .",
        "Components: It also have the same components as other rc robots have but it has some special components also which are",
        "• Heat sensing sensors",
        "• A container with a water pump in it",
        "It finds out the fire through the heat sensor and extinguishes it immediately with precision else it keeps petrolling around"
      ],
      slotText: "IMAGE SLOT",
      layout: "image-top-centered"
    },
    {
      id: "p1-4",
      title: "Blind Stick",
      subtitle: "This is a very useful project which can guide a blind person to search his way .",
      colorClass: "color-orange",
      imageSrc: "photo4", // <-- Paste your photo 4 link here
      specs: [
        "Components :",
        "• Arduino UNO",
        "• A 9 volt battery (The small one)",
        "• 1x ultrasonic sensor (The number of sensors depends on the prototype)",
        "• A long stick or a strong plastic pipe.",
        "• And some jumper wires.",
        "• 1x buzzer",
        "Functioning:",
        "Its ultrasonic sensor's can be customised for the needed distance .As the blind person moves, the sensor keeps on measuring the distance between the stick and the obstacle ,if sensor detects an obstacle closer than the coded distance then it sends signals to the arduino activating the buzzer to give the person a warning."
      ],
      slotText: "blind stick\nslot",
      layout: "image-right"
    },
    {
      id: "p1-5",
      title: "E-nose",
      subtitle: "This is a DIY project which can detect different kinds of smells and tell what is the source of it.",
      colorClass: "color-red",
      imageSrc: "photo5", // <-- Paste your photo 5 link here
      enableTypewriter: true,
      specs: [
        "Components :",
        "• Esp 32",
        "• 1x mq 2",
        "• 1x mq 3",
        "• 1x mq 135",
        "• 1x DHT 11",
        "• 1x mq 7",
        "• 1x breadboard",
        "Feature : The combination of these sensors work in coordination to send the air quality, alcohol presence, smoke presence, the temperature of the enviornment as well as humidity in air. All the reports are being send live on the web.",
        "Real Life Application: This device can be installed anywhere in the house or building to alert early accidental fires."
      ],
      slotText: "Image Slot\nfor E-nose",
      layout: "image-top-centered"
    }
  ],
  page2: [
    {
      id: "p2-1",
      title: "ULTRA--SONIC -- SENSOR",
      colorClass: "color-white",
      imageSrc: "photo6", // <-- Paste your photo 6 link here
      specs: [
        "This sensor uses ultrasonic waves to measure the distance between itself and the obstacle .",
        "It has 4 pins in total",
        "• Vcc (for 5 volt input)",
        "• GND (for a common ground)",
        "• Echo and Trig as signal pins."
      ],
      slotText: "",
      layout: "image-right"
    },
    {
      id: "p2-2",
      title: "Esp- 32",
      colorClass: "color-white",
      imageSrc: "photo7", // <-- Paste your photo 7 link here
      specs: [
        "It is a micro-controller which has both wifi and bluetooth embeddedin it.",
        "It works on both 5 volt and 3.3 volt strictly.",
        "It comes with a micro USB port which is used to power it as well as upload code in it",
        "It runs with a speed of 250 Mhz (which is actually great)"
      ],
      slotText: "",
      layout: "image-left"
    },
    {
      id: "p2-3",
      title: "Arduino--UNO",
      colorClass: "color-white",
      imageSrc: "photo8", // <-- Paste your photo 8 link here
      specs: [
        "Arduino uno is a very popular microcontroller used in various DIY projects .It uses ATmega 328p chip.",
        "It has 14 digital pins and 6 analog pins which are programmable using Arduino IDE(Integrated Development Enviornment).",
        "In my POV it is a quite fragile and expensive board as it does not have any bluetooth or wifi modules where esp is far more better in this case"
      ],
      slotText: "",
      layout: "image-right"
    },
    {
      id: "p2-4",
      isBonus: true,
      bonusTitle: "BONUS!",
      title: "Heat Sensor",
      imageSrc: "photo9", // <-- Paste your photo 9 link here
      specs: [
        "this sensor detects heat in its enviornment and convert them into electrical impulse to send the readings to the controller"
      ],
      slotText: "",
      layout: "image-top-centered"
    }
  ]
};

let currentPage = 1;

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
          ${renderImageSlot(item.imageSrc, item.slotText, item.title)}
        </div>
        <h3 class="bonus-subtitle">${item.title}</h3>
        <p class="bonus-desc">${item.specs.join("<br />")}</p>
      `;
      container.appendChild(bonusEl);
      return;
    }

    // Standard Project Card
    const cardEl = document.createElement("section");
    cardEl.className = `project-card layout-${item.layout}`;

    const rawFullText = item.specs.join("\n");

    const textContent = `
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
    `;

    const slotContent = renderImageSlot(item.imageSrc, item.slotText, item.title);

    if (item.layout === "image-left") {
      cardEl.innerHTML = `${slotContent}${textContent}`;
    } else {
      cardEl.innerHTML = `${textContent}${slotContent}`;
    }

    container.appendChild(cardEl);
  });

  setupScrollRevealAndTypewriter();
}

// Display-only Image Box (No file inputs, No upload buttons)
function renderImageSlot(imageSrc, slotText, altText) {
  const isRealImage = imageSrc && (
    imageSrc.startsWith("http") || 
    imageSrc.startsWith("data:") || 
    imageSrc.startsWith("/") || 
    imageSrc.includes(".") || 
    imageSrc.includes("/")
  );

  return `
    <div class="card-image-slot" style="background-color: ${isRealImage ? '#0a0a0a' : '#cfd3db'}">
      ${
        isRealImage
          ? `<img src="${imageSrc}" alt="${altText}" class="slot-image-preview" loading="lazy" />`
          : `<div class="slot-inner-text">${slotText || imageSrc || "IMAGE SLOT"}</div>`
      }
    </div>
  `;
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
