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
      if (fixedBar != null) {
        document.body.querySelector(".share-container").classList.remove("-copied");
      }
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