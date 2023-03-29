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
  //alert("Saved!");
  const banner = document.querySelector(".banner");
  banner.style.transition = "opacity 1s ease-out";
  banner.style.opacity = "0";
  banner.style.pointerEvents = "none";
  setTimeout(() => {
    banner.style.display = "none";
  }, 5000);
  modal.style.display = "none";

  // Set a cookie to remember that the banner should be hidden for 6 months
  const now = new Date();
  const sixMonthsFromNow = new Date(now.getTime() + 6 * 30 * 24 * 60 * 60 * 1000); // 6 months in milliseconds
  //document.cookie = `hideBanner=true; expires=${sixMonthsFromNow.toUTCString()}; path=/`;
  document.body.style.setProperty("background-color", "#f0eeee", "important");
  document.body.style.pointerEvents = "auto";

  //// Remove _ga cookie
//document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Remove _ga_R8988888333 cookie
//document.cookie = "_ga_R83T9H4V70=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// Remove _ga cookie with specific domain and path
//document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=https://iaohipi.wildapricot.org/;";

// Remove _ga_R8988888333 cookie with specific domain and path
//document.cookie = "_ga_R8988888333=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=example.com;";

});

// Function to check the banner cookie and hide the banner if necessary
function checkBannerCookie() {
  const hideBannerCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('hideBanner='));
  const hideBanner = hideBannerCookie ? hideBannerCookie.split('=')[1] === 'true' : false;
  if (hideBanner) {
    const banner = document.querySelector(".banner");
    banner.style.display = "none";
  }
}

// Call the function to check the banner cookie on page load
checkBannerCookie();

toggleBtn.checked = true;
toggleTextOff.style.display = toggleBtn.checked ? "none" : "inline-block";
toggleTextOn.style.display = toggleBtn.checked ? "inline-block" : "none";

toggleBtn.addEventListener("change", () => {
  toggleTextOff.style.display = toggleBtn.checked ? "none" : "inline-block";
  toggleTextOn.style.display = toggleBtn.checked ? "inline-block" : "none";
  if (!toggleBtn.checked) {
    //alert("Toggle is off!");
    window['ga-disable-UA-XXXXX-Y'] = true; // Replace UA-XXXXX-Y with your property ID
    console.log("Data collection stopped for domain: " + window.location.hostname);
  }
});

//add the banner back
document.cookie = "hideBanner=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


/* for testing 

document.cookie = "hideBanner=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
console.log("Banner cookie removed, refreshing the page...");
document.cookie = "_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
location.reload();


*/

