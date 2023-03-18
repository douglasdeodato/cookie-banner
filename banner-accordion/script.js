const modal = document.getElementById("myModal");
const openBtn = document.getElementById("myBtn");
const closeBtn = modal.querySelector(".close");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const saveBtn = modal.querySelector(".save-button");
const toggleBtn = modal.querySelector("#toggle-button");
const toggleTextOff = modal.querySelector("#toggle-text-off");
const toggleTextOn = modal.querySelector("#toggle-text-on");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

saveBtn.addEventListener("click", () => {
    alert("Saved!");
    const banner = document.querySelector(".banner");
    banner.style.transition = "opacity 1s ease-out";
    banner.style.opacity = "0";
    banner.style.pointerEvents = "none";
    setTimeout(() => {
      banner.style.display = "none";
    }, 5000);
    modal.style.display = "none";
  });
  

toggleBtn.checked = true;
toggleTextOff.style.display = toggleBtn.checked ? "none" : "inline-block";
toggleTextOn.style.display = toggleBtn.checked ? "inline-block" : "none";

toggleBtn.addEventListener("change", () => {
  toggleTextOff.style.display = toggleBtn.checked ? "none" : "inline-block";
  toggleTextOn.style.display = toggleBtn.checked ? "inline-block" : "none";
  if (!toggleBtn.checked) {
    alert("Toggle is off!");
    window['ga-disable-UA-XXXXX-Y'] = true; // Replace UA-XXXXX-Y with your property ID
    console.log("Data collection stopped for domain: " + window.location.hostname);

  }
});