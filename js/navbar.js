/* window.addEventListener("load", function() { fixNav();}); */

function fixNav() {
   if (document.getElementById("myNav").style.height == "100%") {
     document.getElementById("myNav").style.height = "0%";    
   }
  else {
  document.getElementById("myNav").style.height = "100%";
  }
}
