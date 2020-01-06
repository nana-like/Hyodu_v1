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