var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header"),
  headerContainer = header.querySelector(".header-container"),
  burgerMenu = header.querySelector(".burger"),
  navScrollCont = header.querySelector(".scroll-container");
var nav = header.querySelector(".nav"),
  navBtns = nav.querySelector(".nav-btn-wrap"),
  navAccount = nav.querySelector(".nav-account");
var fixedBar = document.querySelector(".fixed-bar");
var footer = document.querySelector(".footer");
var breakPoint = 1060; //미디어쿼리의 반응형 분기점. 1060이하면 모바일로 처리.

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

// 💪 반응형(모바일 사이즈인지) 체크
var isMobileSize = function () {
  var winW = window.innerWidth;
  if (winW < breakPoint) { //breakPoint = 1060
    return true;
  } else {
    return false;
  }
}

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
  // .scroll-disabled가 추가되면 윈도우의 브라우저에서는 스크롤바가 사라지기 때문에 페이지 밀림 현상이 발생하는데, 이를 막아주기 위함입니다. (모바일, 맥에서는 스크롤바가 보통 숨김 상태라 무관합니다)

  function getPadding() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].style.paddingRight = paddingR + "px";
    }
  }

  getPadding(wrap);

  if (fixedBar != null) {
    getPadding(fixedBar);
    // 👆 fixed bar가 있을 경우 fixed bar에도 패딩값 추가
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


// 💪 모바일에서 사용하는 함수
var mobileEvt = function () {
  var winW = window.innerWidth;


  if (winW < breakPoint) {
    // 🙌 윈도 너비가 breakPoint보다 작을 때 (=모바일 사이즈)
    nav.classList.add("-trans");
    // 👆 버거 메뉴를 여는 애니메이션을 보여도록 설정합니다.
    headerSizeEvt();
    // 👆 헤더 높이를 유동적으로 구합니다.
  } else {
    // 🙌 윈도 너비가 breakPoint보다 클 때 (=랩탑 이상 사이즈)
    nav.classList.remove("-trans");
    // 👆 버거 메뉴 애니메이션을 숨깁니다.
    burgerEvt.close();
    // 👆 버거 메뉴를 무조건 닫습니다.
    navScrollCont.style.height = "80px";
    // 👆 스크롤 가능 높이값은 80px로 고정합니다.
  }
};

var resizeHandler = function () {
  mobileEvt();
  isMobileSize();
  // 👆 윈도우 리사이즈 시, 이 이벤트가 발생하도록 처리해 주세요.
}
var loadHandler = function () {
  mobileEvt();
  isMobileSize();
  // 👆 윈도우 최초 로드 시, 이 이벤트가 발생하도록 처리해 주세요.
}



window.addEventListener("resize", resizeHandler);
// 👆 리사이즈 이벤트

window.addEventListener("load", loadHandler);
// 👆 로드 이벤트