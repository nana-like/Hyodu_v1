var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header"),
  headerContainer = header.querySelector(".header-container"),
  burgerMenu = header.querySelector(".burger"),
  navScrollCont = header.querySelector(".scroll-container");
var nav = header.querySelector(".nav"),
  navBtns = nav.querySelector(".nav-btn-wrap");
var getScrollBarWidth = function () {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

var preventScroll = function () {
  var paddingR = getScrollBarWidth();
  wrap.style.paddingRight = paddingR + "px";
  headerContainer.style.paddingRight = paddingR + "px";
  navScrollCont.style.right = paddingR + "px";
  document.body.classList.add("-scroll-disabled");
}

var allowScroll = function () {
  wrap.style.paddingRight = 0;
  headerContainer.style.paddingRight = 0;
  navScrollCont.style.right = 0;
  document.body.classList.remove("-scroll-disabled");
}