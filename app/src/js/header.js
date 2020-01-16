var headerDim = header.querySelector(".header-dim"),
  btnMail = document.querySelector(".btn-mail");
var breakPoint = 1060; //미디어쿼리의 반응형 분기점. 1060이하면 모바일로 처리.

// 💪 메뉴 여닫는 함수
var burgerEvt = {
  open: function () {
    header.classList.add("-opened");
    // 👆 header에 .-opened가 붙으면 화면에 보입니다.
    preventScroll();
    // 👆 스크롤을 막습니다. (common.js 참고)
  },
  close: function () {
    header.classList.remove("-opened");
    // 👆 header를 숨깁니다.
    allowScroll();
    // 👆 스크롤을 허용합니다. (common.js 참고)
  }
}

// 💪 사용자 메뉴 여닫는 함수
var userMenuEvt = {
  toggle: function () {
    header.classList.toggle("-user-opened");
    // 👆 사용자 메뉴(데스크탑에서 이메일 클릭 시 나타나는 메뉴)를 열고 닫습니다.
  }
}

// 💪 모바일에서 헤더 높이를 구해 유동적으로 바꾸는 함수
// 모바일에서는 주소창 때문에 CSS만으로 브라우저 높이를 정확하게 구하기 어려워서, 따로 스크립트로 작성했습니다.
var headerSizeEvt = function () {
  var headerH = header.children[0].clientHeight; //헤더의 높이
  var winH = window.innerHeight; //윈도 높이
  navScrollCont.style.height = winH - headerH + "px";
  // 👆 헤더 내 네비게이션 컨테이너의 높이값을 변경합니다.
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
  // 👆 윈도우 리사이즈 시, 이 이벤트가 발생하도록 처리해 주세요.
}
var loadHandler = function () {
  mobileEvt();
  // 👆 윈도우 최초 로드 시, 이 이벤트가 발생하도록 처리해 주세요.
}


// 💪 버거메뉴 클릭 시 메뉴 여닫는 함수 실행
burgerMenu.addEventListener("click", function () {
  if (header.classList.contains("-opened")) {
    burgerEvt.close();
  } else {
    burgerEvt.open()
  }
});


headerDim.addEventListener("click", burgerEvt.close);
// 👆 헤더 딤(검은 배경) 클릭 시 메뉴를 닫습니다.

btnMail.addEventListener("click", userMenuEvt.toggle);
// 👆 메일 주소 클릭 시 사용자 메뉴를 열고 닫습니다. (모바일에서는 클릭 불가하도록 CSS로 처리했습니다.)

window.addEventListener("resize", resizeHandler);
// 👆 리사이즈 이벤트

window.addEventListener("load", loadHandler);
// 👆 로드 이벤트