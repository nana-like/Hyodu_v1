var modal = document.querySelector(".modal");

if (modal != null) {
  var btnModalClose = modal.querySelector(".btn-modal-close"),
    btnModalOkay = modal.querySelector(".btn-modal-okay"),
    modalDim = modal.querySelector(".modal-dim");
  var modalEvt = {
    open: function (e) {
      e.preventDefault();
      modal.classList.add("-opened");
      preventScroll();
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