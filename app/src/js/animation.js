var listCardContainer = document.querySelectorAll(".listcard-container")


/* ** fixed bar ** */
if (fixedBar != null) {
  /* 1. 좋아요 버튼 */
  var hartIcon = fixedBar.querySelector(".-icon-heart");
  var heartIconMotion = {
    add: function () {
      hartIcon.classList.add("-popIn");
      // 👆 이 클래스가 붙으면 하트가 튀어나오는 애니메이션이 보여집니다.
    },
    remove: function () {
      hartIcon.classList.remove("-popIn");
    }
  };
  var setHeartStatus = {
    on: function (e) {
      hartIcon.classList.add("-icon-loveit");
      // 👆 이 클래스가 붙으면 하트가 붉은 색으로 바뀝니다.
    },
    off: function (e) {
      hartIcon.classList.remove("-icon-loveit");
    }
  }


  hartIcon.addEventListener("click", function (e) {
    // 👆 좋아요 버튼을 눌렀을 때

    if (hartIcon.classList.contains("-popIn")) {
      return false;
      // 👆 아직 애니메이션이 재생중이라면 이벤트 무시
    }


    if (hartIcon.classList.contains("-icon-loveit")) {
      setHeartStatus.off();
      // 👆 좋아요가 on 상태라면 좋아요를 off (검정색으로 되돌림)
    } else {
      setHeartStatus.on();
      // 👆 그게 아니라면 좋아요를 on (붉은 색으로 바꿈)
      heartIconMotion.add();
      // 👆 애니메이션을 보여주는 클래스 추가

      hartIcon.addEventListener('animationend', heartIconMotion.remove);
      hartIcon.addEventListener('webkitAnimationEnd', heartIconMotion.remove);
      // 👆 애니메이션 종료 후 클래스 제거
    }
  });


  /* 2. 공유하기 모달 */
  var shareContainer = document.body.querySelector(".share-container");
  var btnCopy = shareContainer.querySelector(".btn-copy-link");

  // 💪 공유하기 모달에서 주소 복사 버튼 클릭 시, 복사 완료 문구를 보여주는 함수
  var showCopyAniEvt = function () {

    var showText = function () {
      shareContainer.classList.add("-copied");
    }

    var hideText = function () {
      shareContainer.classList.remove("-copied");
    }

    showText();
    shareContainer.addEventListener('animationend', hideText);
    shareContainer.addEventListener('webkitAnimationEnd', hideText);
    // 👆 애니메이션 종료 후 클래스 제거

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