const logoChangeWhite = document.getElementById("logo-change-white");
const logoChangeDark =  document.getElementById("logo-change-dark");
const navBarChange =  document.querySelector(".nav-bar");
const aboutTextChange = document.getElementById("about-text");
const menuGroupsChange = document.querySelector(".menu-groups");
const changeButtonSpan = document.getElementById("background-change-span");

console.log(navBarChange);











logoChangeWhite.addEventListener("click",run);
function run(){
  document.body.style.backgroundImage = "url('assets/pide-salonu-background.png')";
  navBarChange.style.color = "black";
    aboutTextChange.style.color =   "black";
    // changeButtonSpan.style.backgroundColor = "yellow";
    logoChangeWhite.style.backgroundColor="";
    logoChangeDark.style.backgroundColor="";




 };

logoChangeDark.addEventListener("click",run2);
function run2(){
  document.body.style.backgroundImage = "url('assets/pide-salonu-background-dark.png')";
  navBarChange.style.color = "white";
    aboutTextChange.style.color =   "white";
    // changeButtonSpan.style.backgroundColor = "red";
    logoChangeDark.style.backgroundColor="";
    logoChangeWhite.style.backgroundColor="";






  };





var divs = ["menu", "rezervasyon", "about",];
var visibleDivId = null;
function toggleVisibility(divId) {
 if(visibleDivId === divId) {
   //visibleDivId = null;
 } else {
   visibleDivId = divId;
 }
 hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
 var i, divId, div;
 for(i = 0; i < divs.length; i++) {
   divId = divs[i];
   div = document.getElementById(divId);
   if(visibleDivId === divId) {
     div.style.display = "flex";
   } else {
     div.style.display = "none";
   }
 }
}
