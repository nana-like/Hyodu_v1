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
var headerDim = header.querySelector(".header-dim"),
  btnMail = document.querySelector(".btn-mail");

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
var modal = document.querySelector(".modal");

if (modal != null) {
  var btnModalClose = modal.querySelector(".btn-modal-close"),
    btnModalOkay = modal.querySelector(".btn-modal-okay"),
    modalDim = modal.querySelector(".modal-dim");
  var modalEvt = {
    open: function (e) {
      e.preventDefault();
      modal.classList.add("-modal-opened");
      // 👆 .modal에 .-modal-opened가 붙으면 화면에 보입니다.
    },
    close: function () {
      modal.classList.remove("-modal-opened");
    }
  }
  if (btnModalOkay != null) {
    btnModalOkay.addEventListener("click", modalEvt.close);
    // 👆 확인 버튼 클릭 시 모달을 닫습니다.
  }
  btnModalClose.addEventListener("click", modalEvt.close);
  // 👆 닫기 버튼 클릭 시 모달을 닫습니다.
  modalDim.addEventListener("click", modalEvt.close);
  // 👆 딤(검정 배경) 클릭 시 모달을 닫습니다.


  // !! 🤓 TEST 🤓 !!
  var modalTestor = document.getElementById("ui-testor-open-modal");
  if (modalTestor != null) {
    modalTestor.addEventListener("click", modalEvt.open);
    // 👆 ui-testor-open-modal라는 ID를 갖고 있는 요소 클릭 시 모달을 보이게 했습니다. 이 부분은 확인 후 지워주세요.
  }

}
var listCardContainer = document.querySelectorAll(".listcard-container")


/* ** fixed bar ** */



if (fixedBar != null) {
  /* * 좋아요 버튼 * */
  var hartIcon = fixedBar.querySelector(".-icon-heart");
  hartIcon.addEventListener("click", function (e) {
    if (hartIcon.classList.contains("popIn")) {
      return false;
    }
    if (hartIcon.classList.contains("-icon-loveit")) {
      hartIcon.classList.remove("-icon-loveit");
    } else {
      e.target.classList.add("-icon-loveit");
      e.target.classList.add("popIn");
      hartIcon.addEventListener('animationend', function () {
        e.target.classList.remove("popIn");
      });
      hartIcon.addEventListener('webkitAnimationEnd', function () {
        e.target.classList.remove("popIn");
      });
    }
  });


  /* * 공유하기 모달 * */
  var shareContainer = document.body.querySelector(".share-container");
  var btnCopy = shareContainer.querySelector(".btn-copy-link");

  // 💪 공유하기 모달에서 주소 복사 버튼 클릭 시, 복사 완료 문구를 보여주는 함수
  var showCopyAniEvt = function () {

    var showText = function () {
      shareContainer.classList.add("-copied");
    }

    var hideText = function () {
      shareContainer.classList.remove("-copied");
    }

    showText();
    shareContainer.addEventListener('animationend', hideText);
    shareContainer.addEventListener('webkitAnimationEnd', hideText);
    // 👆 애니메이션 종료 후 클래스 제거

  }

  btnCopy.addEventListener("click", showCopyAniEvt);
  // 👆 주소 복사 버튼을 클릭하면 위 함수 실행
}


/* ** 문의 목록 ** */
if (listCardContainer != null) {

  var listCardAnswer = document.querySelectorAll(".listcard-answer");

  // 💪 .-listcard-opened 클래스를 토글하는 함수
  var accordionEvt = function (e) {
    e.currentTarget.classList.toggle("-listcard-opened");
  }

  listCardContainer.forEach(function (el) {
    el.addEventListener("click", accordionEvt);
    // 👆 .listcard-container 클릭 시 .-listcard-opened 클래스를 토글합니다.
  })

  listCardAnswer.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      // 👆 자식 요소(답변 카드 등)를 눌렀을 때 토글 이벤트 발생을 방지합니다.
    });
  })

}

/* ** 리뷰 작성 ** */
var selectStarIcon = document.querySelectorAll(".select-star-icon");
selectStarIcon.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    for (var i = 0; i < selectStarIcon.length; i++) {
      selectStarIcon[i].classList.remove("-star-active");
    }
    var score = e.target.dataset.score;
    for (var i = 0; i < score; i++) {
      selectStarIcon[i].classList.add("-star-active");
    }
    // 👆 리뷰 작성에서 .select-star-icon을 눌렀을 때 별이 활성화 처리되도록 합니다. -star-active 클래스가 붙으면 별의 색이 바뀝니다.
  });
})