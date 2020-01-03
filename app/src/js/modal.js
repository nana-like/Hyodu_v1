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