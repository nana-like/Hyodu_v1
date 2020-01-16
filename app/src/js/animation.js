var shareContainer = document.querySelector(".share-container");
var listCardContainer = document.querySelectorAll(".listcard-container")


/* ** 공유하기 모달 ** */
if (shareContainer != null) {
  var btnCopy = shareContainer.querySelector(".btn-copy-link");

  // 💪 공유하기 모달에서 주소 복사 버튼 클릭 시, 복사 완료 문구를 보여주는 함수
  var showCopyAniEvt = function () {
    if (shareContainer.classList.contains("-copied")) {
      // 👆 아직 이벤트가 발생 중이라면 무시
      return false;
    }
    shareContainer.classList.add("-copied");
    // 👆 .share-container에게 .-copied 클래스가 붙으면 '복사 완료!' 문구가 나타나는 애니메이션이 실행됩니다.

    setTimeout(function () {
      shareContainer.classList.remove("-copied");
    }, 1800);
    // 👆 1.8초 후에 .-copied 클래스를 제거해 주세요.
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