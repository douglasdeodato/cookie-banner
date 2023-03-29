const modal = document.getElementById("myModal");
const openBtn = document.getElementById("myBtn");
const closeBtn = modal.querySelector(".close");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const saveBtn = modal.querySelector(".save-button");
const toggleBtn = modal.querySelector("#toggle-button");
const toggleTextOff = modal.querySelector("#toggle-text-off");
const toggleTextOn = modal.querySelector("#toggle-text-on");
const GA_TRACKING_ID = 'G-R83T9H4V702581';

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
  const banner = document.querySelector(".banner");
  banner.classList.add("hide");
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
  
  if (toggleBtn.checked) {
    console.log("ON");
    // Call your function here if you want
    giveConsent(); // Call the giveConsent() function here

    function giveConsent() {
      console.log('User has given consent');
      window['ga-disable-' + GA_TRACKING_ID] = false;
      enableTracking();
    }
    
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
  } else {
    console.log("OFF");
    // Call another function here if you want
    resetCookies();
    function resetCookies() {
      console.log('Resetting GA cookies');
      document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
      });
      console.log('GA cookies reset');
      window['ga-disable-' + GA_TRACKING_ID] = true;
    }
    
    // Check the banner cookie on page load
    if (document.cookie.indexOf('ga_consent=true') === -1) {
      window['ga-disable-' + GA_TRACKING_ID] = true;
    }
  }
});


