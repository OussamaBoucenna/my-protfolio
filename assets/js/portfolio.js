// Resume Tabs Navigation
const resumeBtns = document.querySelectorAll("[data-resume-btn]");
const resumeTabs = document.querySelectorAll("[data-resume-tab]");

resumeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.dataset.resumeTab === target) {
        tab.classList.add("active");
      }
    });
  });
});

// Gallery State
let currentImages = [];
let currentImageIndex = 0;

const projectsData = {
  irchad: {
    title: "IRCHAD",
    category: "Web Development",
    images: [
      "./images/irchad/1.png",
      "./images/irchad/2.png",
      "./images/irchad/3.png",
      "./images/irchad/4.png",
      "./images/irchad/5.png",
      "./images/irchad/6.png",
      "./images/irchad/7.png",
      "./images/irchad/8.png",
      "./images/irchad/9.png",
    ],
    description:
      "Indoor navigation system for visually impaired people: mapping, real-time localization and obstacle detection.",
    tech: [
      "Kotlin",
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "YOLOv8",
      "OCR",
      "OpenCV",
      "Arduino",
      "ESP32",
      "BLE",
      "MQTT",
    ],
    features: [
      "Automatic cartography generation from floor plans",
      "Real-time navigation with voice/haptic guidance",
      "Obstacle detection via ultrasonic sensors and YOLOv8",
      "IoT integration with Arduino, ESP32, BLE",
    ],
    github: "https://github.com/Orama4",
  },
  teratalent: {
    title: "TeraTalent",
    category: "Web Development",
    images: [
      "./images/teratalent/1.png",
      "./images/teratalent/2.png",
      "./images/teratalent/3.png",
      "./images/teratalent/4.png",
    ],
    description:
      "Mission management platform between service providers, employees and clients.",
    tech: [
      "Django REST Framework",
      "PostgreSQL",
      "React.js",
      "Microsoft Azure",
    ],
    features: [
      "Employee planning and scheduling",
      "Real-time mission tracking",
      "Collaborative communication tools",
      "Post-mission evaluation system",
    ],
    github:
      "https://drive.google.com/file/d/1Sc54bVojvBmlxIMNOP5fGeovO06zG_uA/view",
    demo: "https://drive.google.com/file/d/1Sc54bVojvBmlxIMNOP5fGeovO06zG_uA/view",
  },
  texy: {
    title: "Texy",
    category: "Mobile & IoT & Embedded Systems",
    images: [
      "./images/texy/1.jpg",
      "./images/texy/2.jpg",
      "./images/texy/3.jpg",
      "./images/texy/4.jpg",
      "./images/texy/5.jpg",
    ],
    description:
    "Developer-oriented smart SMS gateway built on ESP32 and SIM800L, enabling reliable, secure, and offline-capable SMS delivery through REST APIs and MQTT without relying on cloud SMS providers.",
    tech: [
        "ESP32",
        "SIM800L",
        "MQTT (HiveMQ)",
        "Express.js",
        "Flutter",
        "React",
    ],
    features: [
    "Offline-capable SMS delivery using ESP32 and GSM module",
    "REST API for secure SMS sending with JWT and API keys",
    "MQTT-based message routing between server and microcontroller",
    "Web and mobile applications for SMS management and monitoring",
    "Detailed delivery logs with status tracking and error handling",
    "Developer-friendly architecture optimized for IoT and automation use cases"
  ],
    github: "https://github.com/orgs/TexyICS/repositories",
  },
  filahatech: {
        title: "FilahaTech",
        category: "AgriTech / Web Development",
        images: [
            "./images/filahatech/1.png",
            "./images/filahatech/2.png",
            "./images/filahatech/3.png",
        ],
        description:
            "Agricultural platform that provides satellite-based parcel monitoring, subscription-based services, and a multi-role marketplace for farmers, suppliers, and service providers.",
        tech: [
            "React.js",
            "Node.js & Express ",
            "MySQL",
            "Satellite API Integration",
        ],
        features: [
            "Parcel monitoring using satellite data",
            "Subscription system to access satellite services",
            "Multi-role platform: Admin, Farmer, Supplier",
            "Marketplace for agricultural products and services",
            "User management and role-based access control"
        ],
        demo: "https://filahatech.dz", // ou lien Drive pour vidéo
     },

     exosky: {
            title: "Exosky",
            category: "Web development / Hackathon Project",
            images: [
                "./images/exosky/1.png",
                "./images/exosky/2.png",
                "./images/exosky/3.png",
                "./images/exosky/4.png",
            ],
            description:
                "Explore the cosmos and discover exoplanets along with their unique characteristics. Developed during the NASA App Challenge hackathon to provide an interactive, educational experience about space and planetary science.",
            tech: [
                "React.js (Frontend)",
                "Node.js & Express (Backend)",
                "NASA Open APIs",
                "MongoDB (Database)",
                "Mapbox / D3.js (Data Visualization)"
            ],
            features: [
                "Browse exoplanets and view detailed planetary data",
                "Interactive visualizations of orbits and planetary features",
                "Search and filter exoplanets based on characteristics",
                "Educational content with facts about planets and stars"
            ],
            github: "https://github.com/OussamaBoucenna/EXOSky",
         },

         "7ela9i": {
            title: "7ela9i",
            category: "Web Development / Service Platform",
            images: [
                "./images/7ela9i/1.png",
                "./images/7ela9i/2.png",
                "./images/7ela9i/3.png",
                "./images/7ela9i/4.png",
                "./images/7ela9i/5.png",
                "./images/7ela9i/6.png",
                "./images/7ela9i/7.png",
            ],
            description:
                "7ela9i is a web platform designed for barbers and their clients. It allows clients to book appointments, view waiting lists, and track their favorite barber’s availability. Barbers can manage requests, monitor statistics, and control their shop status.",
            tech: [
                "React.js (Frontend)",
                "Node.js & Express (Backend)",
                "MySQL (Database)",
            ],
            features: [
                "Client login and signup with profile management",
                "View barber availability and waiting list",
                "Barbers can accept, reject, or delete booking requests",
                "Barbers can open or close their shop anytime",
                "Dashboard with statistics: number of clients, appointments, and earnings",
                "Role-based access control for clients and barbers"
            ],
            github: "https://github.com/7ele9i",
            },
            rahma: {
        title: "Rahma",
        category: "Desktop Application / Business Management",
        images: [
          "./images/rahma/5.png",
          "./images/rahma/1.png",
          "./images/rahma/2.png",
          "./images/rahma/3.png",
          "./images/rahma/4.png",
        ],
        description:
          "Rahma is a desktop management application developed for a factory environment. It handles client management, sales documents, invoices, and customer credit tracking, with detailed financial statistics and employee expense monitoring.",
        tech: [
          "Flutter (Desktop Application)",
          "Node.js & Express (Backend API)",
          "MySQL (Database)",
          "REST API",
        ],
        features: [
          "Client management with credit tracking per user",
          "Creation and management of sales orders, delivery notes, and invoices",
          "Multi-role system (Admin, Accountant, Employee)",
          "User-based credit management for clients",
          "Financial dashboard with revenues, expenses, and profits",
          "Employee salary and operational cost tracking",
          "Printing of orders and invoices directly from the application"
        ],
        github: "https://github.com/orgs/GESTION-USINE/repositories",
     },
       doccare: {
          title: "DocCare",
          category: "Mobile Application / Healthcare",
          images: [
            "./images/doccare/1.png",
            "./images/doccare/2.png",
            "./images/doccare/3.png",
            "./images/doccare/4.png",
            "./images/doccare/5.png",
            "./images/doccare/6.png",
            "./images/doccare/7.png",
          ],
          description:
            "DocCare is a mobile healthcare application that connects doctors and patients. It allows appointment management, medical prescriptions, real-time notifications, and offline access with automatic data synchronization.",
          tech: [
            "Kotlin",
            "Jetpack Compose",
            "Node.js & Express (Backend API)",
            "SQLite (Offline Storage)",
            "Firebase Cloud Messaging",
            "REST API"
          ],
          features: [
            "Multi-role system: Doctor and Patient",
            "Doctors can manage daily patients and appointment requests",
            "Appointment status management: accepted, rejected, delayed",
            "Doctors can create and manage working time slots",
            "Digital prescription creation for patients",
            "Push notifications for appointment updates",
            "Automatic reminder notification 24 hours before appointment",
            "Offline mode using SQLite for both doctors and patients",
            "Automatic synchronization between local SQLite and cloud database when connection is restored"
          ],
          github: "https://github.com/mohameddbz/HealthCareApp",
        },



 
 
};

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  currentImages = project.images;
  currentImageIndex = 0;

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalDescription").textContent =
    project.description;

  const techList = document.getElementById("modalTech");
  techList.innerHTML = project.tech.map((t) => `<li>${t}</li>`).join("");

  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = project.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  document.getElementById("modalGithub").href = project.github;

  const demoBtn = document.getElementById("modalDemo");
  if (project.demo) {
    demoBtn.href = project.demo;
    demoBtn.style.display = "inline-flex";
  } else {
    demoBtn.style.display = "none";
  }

  // Setup gallery
  updateGallery();
  renderThumbnails();

  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateGallery() {
  const mainImg = document.getElementById("galleryMainImg");
  mainImg.src = currentImages[currentImageIndex];
  mainImg.alt = `Image ${currentImageIndex + 1}`;

  document.getElementById("galleryCounter").textContent = `${
    currentImageIndex + 1
  } / ${currentImages.length}`;

  // Update thumbnails active state
  document.querySelectorAll(".gallery-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentImageIndex);
  });
}

function renderThumbnails() {
  const thumbsContainer = document.getElementById("galleryThumbs");
  thumbsContainer.innerHTML = currentImages
    .map(
      (img, i) =>
        `<div class="gallery-thumb ${
          i === 0 ? "active" : ""
        }" onclick="goToImage(${i})">
      <img src="${img}" alt="Thumbnail ${i + 1}">
    </div>`
    )
    .join("");
}

function goToImage(index) {
  currentImageIndex = index;
  updateGallery();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  updateGallery();
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  updateGallery();
}

function openFullscreen() {
  document.getElementById("fullscreenImg").src =
    currentImages[currentImageIndex];
  document.getElementById("fullscreenViewer").classList.add("active");
}

function updateFullscreen() {
  document.getElementById("fullscreenImg").src =
    currentImages[currentImageIndex];
}

function closeFullscreen() {
  document.getElementById("fullscreenViewer").classList.remove("active");
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document
  .getElementById("projectModal")
  .addEventListener("click", function (e) {
    if (e.target === this) closeProjectModal();
  });

document
  .getElementById("fullscreenViewer")
  .addEventListener("click", function (e) {
    if (e.target === this) closeFullscreen();
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeFullscreen();
    closeProjectModal();
  }
  if (
    document
      .getElementById("projectModal")
      .classList.contains("active") ||
    document
      .getElementById("fullscreenViewer")
      .classList.contains("active")
  ) {
    if (e.key === "ArrowRight") {
      nextImage();
      updateFullscreen();
    }
    if (e.key === "ArrowLeft") {
      prevImage();
      updateFullscreen();
    }
  }
});
