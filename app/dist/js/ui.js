var shareContainer = document.querySelector(".share-container"),
  btnCopy = shareContainer.querySelector(".btn-copy-link");

if (shareContainer != null) {
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
var header = document.querySelector(".header"),
  burgerMenu = header.querySelector(".burger"),
  nav = header.querySelector(".nav"),
  navScrollCont = header.querySelector(".scroll-container"),
  headerDim = header.querySelector(".header-dim"),
  btnMail = document.querySelector(".btn-mail");
var breakPoint = 1060;


var burgerEvt = {
  open: function () {
    header.classList.add("-opened"); //헤더를 엽니다.
    document.body.classList.add("-scroll-disabled"); //스크롤을 막습니다.
  },
  close: function () {
    header.classList.remove("-opened"); //헤더를 닫습니다.
    document.body.classList.remove("-scroll-disabled"); //스크롤을 허용합니다.
  },
  toggle: function () {
    header.classList.toggle("-opened");
    document.body.classList.toggle("-scroll-disabled"); //스크롤을 막습니다.
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

burgerMenu.addEventListener("click", burgerEvt.toggle);
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
      document.body.classList.add("-scroll-disabled");
    },
    close: function () {
      modal.classList.remove("-opened");
      document.body.classList.remove("-scroll-disabled");
    }
  }
  if (btnModalOkay != null) {
    btnModalOkay.addEventListener("click", modalEvt.close);
  }
  btnModalClose.addEventListener("click", modalEvt.close);
  modalDim.addEventListener("click", modalEvt.close);
  document.getElementById("ui-testor-open-modal").addEventListener("click", modalEvt.open);

}
// var btnMenu = document.querySelector(".burger");
// var header = document.querySelector(".header");
// var nav = document.querySelector(".nav");
// var btnMail = document.querySelector(".btn-mail");
// var navScrollCont = header.querySelector(".scroll-container");
// var dim = document.querySelector(".dim");

// var testor = document.querySelector(".testor");
// var modal = document.querySelector(".modal");
// var modalDim = document.querySelector(".modal-dim");
// var btnCopy = document.querySelector(".btn-copy-link");
// var shareContainer = document.querySelector(".share-container");
// var btnModalClose = document.querySelector(".btn-modal-close");
// var btnModalOkay = document.querySelector(".btn-modal-okay");




// var changeHeight = function () {
//   var winW = window.innerWidth;

//   if (winW >= 1060) {
//     navScrollCont.style.height = "80px";
//     header.classList.remove("-opened");
//     nav.classList.remove("trans");
//     // document.body.classList.remove("-scroll-disabled");
//     return false;
//   } else if (winW < 1060) {
//     nav.classList.add("trans");
//     document.body.classList.toggle("-is-mobile");
//     var headerH = header.children[0].clientHeight;
//     var winH = window.innerHeight;
//     navScrollCont.style.height = winH - headerH + "px";
//     modal.style.height = winH + "px";
//     testor.innerHTML = winH;
//   }

// }

// window.addEventListener("load", function () {
//   changeHeight();
// });

// window.addEventListener("resize", function () {
//   changeHeight();
// });

// //TODO:모달열렸을때도 바디스크롤막기

// if (btnCopy == null) {
//   console.dir("?")
// } else {
//   //카피이벵
//   btnCopy.addEventListener("click", function () {
//     //이미 붙어있는 경우는 리턴false
//     if (shareContainer.classList.contains("-copied")) {
//       return false;
//     }
//     shareContainer.classList.add("-copied");
//     setTimeout(function () {
//       shareContainer.classList.remove("-copied");
//     }, 1800);
//   });

// }




// var menuClickHandler = function (e) {
//   header.classList.toggle("-opened");
//   document.body.classList.toggle("-scroll-disabled");

//   var winW = window.innerWidth;
//   // if (winW < 1060) {
//   //   document.body.classList.toggle("-scroll-disabled");
//   // }

// }

// btnMail.addEventListener("click", function () {
//   console.log("!")
//   header.classList.toggle("-user-opened");
// });


// btnMenu.addEventListener("click", menuClickHandler);
// // dim.addEventListener("click", menuClickHandler);





// // //모달 이벤트~~~
// // var modal = document.querySelector(".modal");
// // var modalClose = function () {
// //   modal.classList.remove("-opened");
// //   document.body.classList.remove("-scroll-disabled");
// // }
// // var modalOpen = function () {
// //   modal.classList.add("-opened");
// //   document.body.classList.add("-scroll-disabled");
// // }

// // //모달이벤트
// // btnModalClose.addEventListener("click", function () {
// //   modalClose();
// // });
// // modalDim.addEventListener("click", function () {
// //   modalClose();
// // });
// // btnModalOkay.addEventListener("click", function () {
// //   modalClose();
// // });