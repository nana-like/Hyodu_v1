var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header"),
  headerContainer = header.querySelector(".header-container"),
  burgerMenu = header.querySelector(".burger"),
  navScrollCont = header.querySelector(".scroll-container");
var nav = header.querySelector(".nav"),
  navBtns = nav.querySelector(".nav-btn-wrap");
var fixedBar = document.querySelector(".fixed-bar");

// 해당 브라우저의 스크롤바 너비를 구합니다.
var getScrollBarWidth = function () {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

// 스크롤 막는 이벤트
var preventScroll = function (type) {
  var paddingR = getScrollBarWidth();
  wrap.style.paddingRight = paddingR + "px"; //상위 부모요소에게 사라진 스크롤바 너비만큼 패딩값을 부여합니다.
  headerContainer.style.paddingRight = paddingR + "px"; //헤더 컨테이너에게 사라진 스크롤바 너비만큼 패딩값을 부여합니다.
  fixedBar.style.paddingRight = paddingR + "px";
  document.body.classList.add("-scroll-disabled"); //스크롤을 막는 클래스네임을 추가합니다.

  if (type === "modal") { //단, 모달창을 연 경우에만
    navScrollCont.style.right = paddingR + "px"; //네비게이션에도 패딩값을 부여합니다.
  }
}

// 스크롤 허용하는 이벤트
var allowScroll = function () {
  wrap.style.paddingRight = 0;
  headerContainer.style.paddingRight = 0;
  navScrollCont.style.right = 0;
  if (fixedBar != null) {
    fixedBar.style.paddingRight = 0;
  }
  document.body.classList.remove("-scroll-disabled");
}