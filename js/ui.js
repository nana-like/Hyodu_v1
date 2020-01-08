var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header"),
  headerContainer = header.querySelector(".header-container"),
  burgerMenu = header.querySelector(".burger"),
  navScrollCont = header.querySelector(".scroll-container");
var nav = header.querySelector(".nav"),
  navBtns = nav.querySelector(".nav-btn-wrap");
var fixedBar = document.querySelector(".fixed-bar");
var footer = document.querySelector(".footer");

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

  if (window.scrollY <= 0) {
    return false;
  }

  /*
   */
  var paddingR = getScrollBarWidth();
  wrap.style.paddingRight = paddingR + "px";
  headerContainer.style.paddingRight = paddingR + "px";
  if (fixedBar != null) { //단, 모달창을 연 경우에만
    fixedBar.style.paddingRight = paddingR + "px";
  }
  if (type === "modal") { //단, 모달창을 연 경우에만
    navScrollCont.style.right = paddingR + "px"; //네비게이션에도 패딩값을 부여합니다.
  }

  document.body.classList.add("-scroll-disabled"); //스크롤을 막는 클래스네임을 추가합니다.
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
var headerDim = header.querySelector(".header-dim"),
  btnMail = document.querySelector(".btn-mail");
var breakPoint = 1060;


var burgerEvt = {
  open: function () {
    header.classList.add("-opened"); //헤더를 엽니다.
    preventScroll(); //스크롤을 막습니다.
  },
  close: function () {
    header.classList.remove("-opened"); //헤더를 닫습니다.
    allowScroll(); //스크롤을 허용합니다.
  }
}

var userMenuEvt = {
  toggle: function () {
    header.classList.toggle("-user-opened"); //데스크탑에서 보여지는 작은 메뉴를 열고 닫습니다.
  }
}

var headerSizeEvt = function () {
  //모바일에서 헤더 높이를 구해 유동적으로 바꾸는 이벤트
  //(모바일에서는 주소창 때문에 CSS만으로 브라우저 높이를 정확하게 구하기 어려워서, 따로 스크립트로 작성했습니다. 버거메뉴를 열었을 때 내부 스크롤이 생기지 않는다면 크게 의미있는 이벤트는 아닙니다.)
  var headerH = header.children[0].clientHeight; //헤더의 높이
  var winH = window.innerHeight; //윈도 높이
  navScrollCont.style.height = winH - headerH + "px"; //네비게이션 내 스크롤 가능한 높이값 변경
}


var mobileEvt = function () {
  var winW = window.innerWidth;
  // console.dir(winW);
  if (winW < breakPoint) { //윈도가 모바일 크기라면
    nav.classList.add("-trans"); //버거 메뉴를 여는 애니메이션을 보여주도록 설정합니다.
    headerSizeEvt(); //헤더높이를 유동적으로 구합니다.
  } else { //윈도가 모바일 크기보다 커진다면
    nav.classList.remove("-trans"); //버거 메뉴 애니메이션을 숨깁니다.
    burgerEvt.close(); //메뉴를 닫습니다.
    navScrollCont.style.height = "80px"; //스크롤 가능 높이값은 80px로 고정합니다.
  }
};

var resizeHandler = function () {
  mobileEvt();
}
var loadHandler = function () {
  mobileEvt();
}

burgerMenu.addEventListener("click", function () {
  if (header.classList.contains("-opened")) {
    burgerEvt.close();
  } else {
    burgerEvt.open()
  }
});
headerDim.addEventListener("click", burgerEvt.close);
btnMail.addEventListener("click", userMenuEvt.toggle);
window.addEventListener("resize", resizeHandler);
window.addEventListener("load", loadHandler);
var modal = document.querySelector(".modal");

if (modal != null) {
  var btnModalClose = modal.querySelector(".btn-modal-close"),
    btnModalOkay = modal.querySelector(".btn-modal-okay"),
    modalDim = modal.querySelector(".modal-dim");
  var modalEvt = {
    open: function (e) {
      e.preventDefault();
      modal.classList.add("-opened");
      preventScroll("modal");
    },
    close: function () {
      modal.classList.remove("-opened");
      allowScroll();
    }
  }
  if (btnModalOkay != null) {
    btnModalOkay.addEventListener("click", modalEvt.close);
  }
  btnModalClose.addEventListener("click", modalEvt.close);
  modalDim.addEventListener("click", modalEvt.close);


  // TEST
  var modalTestor = document.getElementById("ui-testor-open-modal");
  if (modalTestor != null) {
    modalTestor.addEventListener("click", modalEvt.open);
  }

}
var shareContainer = document.querySelector(".share-container");
var listCardContainer = document.querySelectorAll(".listcard-container")

if (shareContainer != null) {
  var btnCopy = shareContainer.querySelector(".btn-copy-link");
  var showCopyAniEvt = function () {
    if (shareContainer.classList.contains("-copied")) {
      return false;
    }
    shareContainer.classList.add("-copied");
    setTimeout(function () {
      shareContainer.classList.remove("-copied");
    }, 1800);
  }
  btnCopy.addEventListener("click", showCopyAniEvt);
}


if (listCardContainer != null) {

  var listCardAnswer = document.querySelectorAll(".listcard-answer");
  var accordionEvt = function (e) {
    e.currentTarget.classList.toggle("-opened");
  }

  listCardContainer.forEach(function (el) {
    el.addEventListener("click", accordionEvt);
  })
  listCardAnswer.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  })

}