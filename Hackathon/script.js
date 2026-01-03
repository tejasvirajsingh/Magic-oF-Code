// ✅ Safe click handler for Scan button
const scanBtn = document.querySelector(".primary");
if (scanBtn) {
  scanBtn.addEventListener("click", () => {
    alert("🚀 Demo coming soon! AI model will analyze crop image.");
  });
}

// ✅ Open one section & close others
function openSection(sectionId) {
  const sections = document.querySelectorAll(".upload-section");

  // Close all sections
  sections.forEach(section => {
    section.style.display = "none";
  });

  // Open selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
    activeSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ✅ Preview uploaded leaf image
function previewLeaf(event) {
  const file = event.target.files[0];
  if (!file) return;

  const img = document.getElementById("leafPreview");
  const analyzeBtn = document.querySelector(".analyze-btn");

  img.src = URL.createObjectURL(file);
  img.style.display = "block";

  // Enable Analyze button after image upload
  if (analyzeBtn) {
    analyzeBtn.disabled = false;
    analyzeBtn.textContent = "🔍 Analyze Leaf";
  }
}

// ✅ Analyze button action (demo)
function analyzeLeaf() {
  alert("🧠 AI is analyzing the leaf...\n(Demo result will be shown)");
}
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
  } else {
    nav.style.boxShadow = "none";
  }
});
