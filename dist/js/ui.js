var btnMenu = document.querySelector(".burger");
var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var btnMail = document.querySelector(".btn-mail");
var navScrollCont = header.querySelector(".scroll-container");
var dim = document.querySelector(".dim");



var menuClickHandler = function (e) {
  header.classList.toggle("-opened");
}

btnMail.addEventListener("click", function () {
  console.log("!")
  header.classList.toggle("-user-opened");
});


btnMenu.addEventListener("click", menuClickHandler);
// dim.addEventListener("click", menuClickHandler);



var changeHeight = function () {
  var winW = window.innerWidth;

  if (winW >= 1060) {
    navScrollCont.style.height = "80px";
    header.classList.remove("-opened");
    nav.classList.remove("trans");
    return false;
  } else if (winW < 1060) {
    nav.classList.add("trans");
    var headerH = header.children[0].clientHeight;
    var winH = window.innerHeight;
    navScrollCont.style.height = winH - headerH + "px";
  }

}

window.addEventListener("load", function () {
  changeHeight();
});

window.addEventListener("resize", function () {
  changeHeight();
});