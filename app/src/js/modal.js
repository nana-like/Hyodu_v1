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
      preventScroll("modal");
      // 👆 스크롤을 막습니다. 이때, 모달창을 연 경우와 헤더를 연 경우가 구분되어야 해서 매개변수를 넣었습니다. (common.js 참고)
    },
    close: function () {
      modal.classList.remove("-modal-opened");
      allowScroll();
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