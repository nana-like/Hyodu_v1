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