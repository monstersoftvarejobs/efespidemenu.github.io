

const logoChangeWhite = document.getElementById("logo-change-white");
const logoChangeDark =  document.getElementById("logo-change-dark");
const navBarChange =  document.querySelector(".nav-bar");
const aboutTextChange = document.getElementById("about-text-part");
const menuGroupsChange = document.querySelector(".menu-groups");

console.log(navBarChange);

//  logoChangeWhite.addEventListener("click",run);

//  function run(){
//    document.body.style.backgroundImage = "url('assets/hisar-burger-logo-1.jpg')";
// };




//  logoChangeDark.addEventListener("click",run2);

//    function run2(){
//      document.body.style.backgroundImage = "url('assets/hisar-burger-logo-2.jpg')";
// };

logoChangeWhite.addEventListener("click",run);
function run(){
    document.body.style.backgroundColor = "white";
    navBarChange.style.color = "black";
    aboutTextChange.style.color =   "black";
    // menuGroupsChange.style.backgroundColor = "#000000ce";



 };

logoChangeDark.addEventListener("click",run2);
function run2(){
    document.body.style.backgroundColor = "black";
    navBarChange.style.color = "white";
    aboutTextChange.style.color =   "white";
    // menuGroupsChange.style.backgroundColor="#cacacace";



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





// const map = document.getElementById("rez-maps-id");


// console.log(map);









