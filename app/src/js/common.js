var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header"),
  headerContainer = header.querySelector(".header-container"),
  burgerMenu = header.querySelector(".burger"),
  navScrollCont = header.querySelector(".scroll-container");
var nav = header.querySelector(".nav"),
  navBtns = nav.querySelector(".nav-btn-wrap");
var fixedBar = document.querySelector(".fixed-bar");
var footer = document.querySelector(".footer");

// 💪 해당 브라우저의 스크롤바 너비를 구하는 함수
var getScrollBarWidth = function () {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

// 💪 스크롤을 막는 함수
var preventScroll = function (type) {

  var body = document.body;
  var paddingR = getScrollBarWidth();

  if (body.scrollHeight <= body.clientHeight) {
    // 👆 스크롤바가 생길 만큼 길지 않은 경우, 이 이벤트를 무시합니다.
    return false;
  }

  document.body.classList.add("-scroll-disabled");
  // 👆 스크롤을 막는 클래스네임을 body에 추가합니다.


  // 💪 사라진 스크롤바 만큼의 패딩값을 추가해 주는 함수
  // .scroll-disabled가 추가되면 윈도우의 브라우저에서는 스크롤바가 사라지기 때문에 페이지 밀림 현상이 발생하는데, 이를 막아주기 위함입니다. (맥에서는 스크롤바가 보통 숨김 상태라 무관합니다)

  function getPadding() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].style.paddingRight = paddingR + "px";
    }
  }

  getPadding(wrap, headerContainer);

  if (fixedBar != null) {
    // 👆 fixed bar가 있을 경우 fixed bar에도 패딩값 추가
    getPadding(fixedBar);
  }
  if (type === "modal") {
    // 👆 모달을 열었을 경우에는 네비게이션에도 패딩값 추가
    getPadding(navScrollCont);
  }

}

// 💪 스크롤을 허용하는 함수
var allowScroll = function () {

  wrap.style.paddingRight = 0;
  headerContainer.style.paddingRight = 0;
  navScrollCont.style.right = 0;
  if (fixedBar != null) {
    fixedBar.style.paddingRight = 0;
  }
  // 👆 임시로 추가해놓은 패딩값을 모두 제거합니다.

  document.body.classList.remove("-scroll-disabled");
  // 👆 스크롤을 막는 클래스네임을 body에서 제거합니다.
}