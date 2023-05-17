//Variables and Constants

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("myBtn");
const closeBtn = modal.querySelector(".close");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const saveBtn = modal.querySelector(".save-button");
const toggleBtn = modal.querySelector("#toggle-button");
const toggleTextOff = modal.querySelector("#toggle-text-off");
const toggleTextOn = modal.querySelector("#toggle-text-on");
const toggleBtn2 = modal.querySelector("#toggle-button-2");
const toggleTextOff2 = modal.querySelector("#toggle-text-off-2");
const toggleTextOn2 = modal.querySelector("#toggle-text-on-2");

const GA_TRACKING_ID = 'G-R83T9H4V702581';

//Event Listeners

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  giveConsent(); // adds ga when modal is open
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
  const banner = document.querySelector(".banner");
  banner.classList.add("hide");
  setTimeout(() => {
    banner.style.display = "none";
   
  }, 5000);
  modal.style.display = "none";
  document.body.style.pointerEvents = "auto"; ///teststststs
});

//Helper Functions

// Define giveConsent function
function giveConsent() {
  console.log('User has given consent');
  window['ga-disable-' + GA_TRACKING_ID] = false;
  enableTracking();
}

// Define enableTracking function
function enableTracking() {
  console.log('Enabling Google Analytics tracking');
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    client_storage: 'none'
  });

  // Add Google Analytics tracking code here
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', GA_TRACKING_ID, 'auto');
  ga('send', 'pageview');
}

// Define resetCookies function
function resetCookies() {
  console.log('Resetting GA cookies');
  document.cookie.split(";").forEach(function(c) { 
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
  });
  console.log('GA cookies reset');
  window['ga-disable-' + GA_TRACKING_ID] = true;
}

// Toggle Button

// Add event listener to toggle button
toggleBtn.addEventListener("change", () => {
  toggleTextOff.style.display = toggleBtn.checked ? "none" : "inline-block";
  toggleTextOn.style.display = toggleBtn.checked ? "inline-block" : "none";
  
  if (toggleBtn.checked) {
    console.log("ON");
    // Call your function here if you want
    giveConsent(); // Call the giveConsent() function here
  } else {
    console.log("OFF");
    // Call another function here if you want
    resetCookies();
    // Check the banner cookie on page load
    if (document.cookie.indexOf('ga_consent=true') === -1) {
      window['ga-disable-' + GA_TRACKING_ID] = true;
    }
  }
});

// Set initial state of toggle button
toggleBtn.checked = true;
toggleTextOff.style.display = toggleBtn.checked ? "none" : "inline-block";
toggleTextOn.style.display = toggleBtn.checked ? "inline-block" : "none";


// Set initial state of toggle button 2
toggleBtn2.checked = true;
toggleTextOff2.style.display = toggleBtn2.checked ? "none" : "inline-block";
toggleTextOn2.style.display = toggleBtn2.checked ? "inline-block" : "none";

// Disable toggle button 2
toggleBtn2.disabled = true;