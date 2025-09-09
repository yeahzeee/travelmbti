// 문제 번호
let num = 1;

// 문제 데이터
const q = {
  1: { title: "한 달 뒤 여행을 떠나기로 <br><br> 했다! ", type: "EI", A: "난 대충 잘 곳만 정하면 돼!!", B: "가서 우왕좌왕하기 싫어. 계획짜야겠다!" },
  2: { title: "나는 여행지를 선택할 때 주로 ", type: "SN", A: "사람이 많은 도시로!", B: "공기 좋은 자연으로~" },
  3: { title: "내가 선호하는 여행 분위기는~ ", type: "TF", A: "혼자만의 쫓기지 않는 힐링여행", B: "왁자지껄 신나게 관광하기!" },
  4: { title: "드디어 숙소에 도착했다! ", type: "JP", A: "여행은 여유로워야지~ <br> 잠깐 쉬자!", B: "여행을 왔으면 뽕을 뽑아야지! <br> 바로 숙소 밖으로 나간다." },
  5: { title: "아침에 먼저 일어난 친구가 자고 있는 <br><br> 나를 깨워 조식을 먹자고 한다.", type: "SN", A: "조식?!! 벌떡 일어난다.", B: "너무 피곤해.. 난 더 잘래 ㅠㅠ" },
  6: { title: "돌아다녔더니 배가 고프다! 여행지에서 식사할 곳을 고를 때!", type: "EI", A: "웨이팅도 괜찮아! 인터넷에서 유~명한 맛집가기", B: "현지인에게 숨은 맛있는 식당 추천받기>< " },
  7: { title: "인터넷이 터지지않는 곳에서 길을 잃게 되었다! ", type: "TF", A: "왔던 길로 되돌아가 무작정 길을 찾아본다", B: "가만히 제자리에 서서 다른 사람이 올 때까지 기다린다." },
  8: { title: "어떡해.. 여행 중 지갑을 잃어버렸다.<br><br>(※ 결제 가능한 다른 카드는 있음)", type: "JP", A: "안절부절.. 하던 거 다 멈추고 지갑을 찾아본다.", B: "일단 다른 카드는 있으니까 분위기 깨지말고 나중에 생각하자!" },
  9: { title: "랜드마크를 보러왔다! 나는 ", type: "EI", A: "역사가 뭐가 중요해? 예쁘면 장땡이지ㅋ", B: "저 상징물의 역사가 궁금하다." },
  10: { title: "차를 타고 이동하다 창문을 통해 신기한 가게를 발견했다!", type: "SN", A: "우와!! 저기 한 번 들려보자~ 차 세워!", B: "다음 장소로 얼른 넘어가야해! 그냥 지나친다." },
  11: { title: "여행이 끝나고 집으로 돌아가는 길에", type: "TF", A: "재밌었다! 다음에 또 와야지~", B: "어느 부분에서 감명받았다는 세세한 감정을 정리한다." },
  12: { title: "해당지역에서만 살 수 있는 <br><br>아기자기한 기념품을 팔고있다!", type: "JP", A: "여행을 갔으면 기념품은<br>사가야지!", B: "그거 나중엔 쓰레기 된다~ <br>안 살래~" },
};

// 결과 데이터
const result = {
  ISTJ: { img: "img/timetable.png" },
  ISFJ: { img: "img/healingcamp.png" },
  INFJ: { img: "img/romantic.png" },
  INTJ: { img: "img/free.png" },

  ISTP: { img: "img/free.png" },
  ISFP: { img: "img/free.png" },
  INFP: { img: "img/romantic.png" },
  INTP: { img: "img/detective.png" },

  ESTP: { img: "img/proflexer.png" },
  ESFP: { img: "img/challenge.png" },
  ENFP: { img: "img/pioneer.png" },
  ENTP: { img: "img/free.png" },

  ESTJ: { img: "img/timetable.png" },
  ESFJ: { img: "img/mz.png" },
  ENFJ: { img: "img/free.png" },
  ENTJ: { img: "img/free.png" },
};

let mbtiImgName = "";

// 시작
function start() {
  $(".start").hide();
  $(".question").show();
  next();
}

// 뒤로 가기
function goBack() {
  if (num > 1) {
    num -= 2;
    next();
  }
}

// A 버튼
$("#A").click(function () {
  const type = $("#type").val();
  const preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});

// B 버튼
$("#B").click(function () {
  next();
});

// 다음 문제
function next() {
  if (num === 13) {
    // 마지막 문제 → 결과 화면
    $(".question").hide();
    $(".result").show();

    let mbti = "";
    $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
    $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
    $("#TF").val() < 2 ? (mbti += "T") : (mbti += "F");
    $("#JP").val() < 2 ? (mbti += "J") : (mbti += "P");

    // 결과 이미지 적용
    $("#img").attr("src", result[mbti]["img"]);
    mbtiImgName = result[mbti]["img"].split(".", 1);
  } else {
    // 문제 화면 갱신
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}

function addMbtiParam() {
  // 현재 테스트 결과 MBTI 추출
  let mbti = "";
  $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
  $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
  $("#TF").val() < 2 ? (mbti += "T") : (mbti += "F");
  $("#JP").val() < 2 ? (mbti += "J") : (mbti += "P");

  // 현재 URL + MBTI 타입
  const shareUrl = window.location.origin + window.location.pathname + "?mbti=" + mbti;

  // 복사하기
  navigator.clipboard.writeText(shareUrl).then(() => {
    alert("결과 링크가 복사되었습니다! 친구에게 붙여넣기 해보세요 😆");
  }).catch(err => {
    console.error("링크 복사 실패:", err);
  });
}
