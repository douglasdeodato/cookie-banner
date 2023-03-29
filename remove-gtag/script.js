const GA_TRACKING_ID = 'G-R83T9H4V702581';

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