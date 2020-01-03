var shareContainer = document.querySelector(".share-container");

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