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


/* TODO:수정하기 */
var selectStarIcon = document.querySelectorAll(".select-star-icon");
selectStarIcon.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    for (var i = 0; i < selectStarIcon.length; i++) {
      selectStarIcon[i].classList.remove("-active");
    }
    var score = e.target.dataset.score;
    for (var i = 0; i < score; i++) {
      selectStarIcon[i].classList.add("-active");
    }

    // e.target.classList.add("-active");
  });
})