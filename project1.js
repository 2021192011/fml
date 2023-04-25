const track = [
  {
    title: `F*ck My Life`,
    producer: `Lyrics by WOOZI, BUMZU<br />
        Composed by WOOZI, BUMZU<br />
        Arranged by BUMZU, BuildingOwner`,
    time: `05:22`,
    lyrics: `이런 빌어먹을 세상 나만 혼자 바보 됐어<br />
        갈 길을 잃은 채 갈 곳을 잃은 채<br />
        나만 바보 됐어`,
    link: `https://youtu.be/SB03Cbc50i8`,
  },
  {
    title: `손오공 (Super)`,
    producer: `Lyrics by WOOZI, BUMZU, S.COUPS, Vernon<br />
    Composed by WOOZI, BUMZU, August Rigo`,
    time: `05:20`,
    lyrics: `마치 된 것 같아 손오공<br />
    우리는 쉬지 않아 매일, Make it Make it<br />
    끝까지 가보자`,
    link: `https://youtu.be/-GQg25oP0S4`,
  },
  {
    title: `Fire`,
    producer: `Lyrics by WOOZI, BUMZU, S.COUPS, 원우, 민규, Vernon<br />
    Composed by BUMZU, 원우, Vernon<br />
    Arranged by BUMZU`,
    time: `02:58`,
    lyrics: `열정은 Main Dish 덤으로 후식은 목표<br />
    접시 위에 Creative 매년 올라 가격표<br />
    모두 뒤로 Turning Back`,
    link: `https://youtu.be/HJYmVv-lOkg`,
  },
  {
    title: `I don't Understand But I Luv U`,
    producer: `Lyrics by WOOZI, BUMZU, 호시, 디노<br />
    Composed by WOOZI, BUMZU, Nmore<br />
    Arranged by BUMZU, Nmore`,
    time: `05:20`,
    lyrics: `I Got The Fire<br />
    더 높이 Higher<br />
    I Don't Retire<br />
    My Michelin Tire`,
    link: `https://youtu.be/MGK5wZJDXjo`,
  },
  {
    title: `먼지 (Dust)`,
    producer: `Lyrics by WOOZI, BUMZU<br />
    Composed by WOOZI, BUMZU, 박기태<br />
    Arranged by BUMZU, 박기태`,
    time: `02:45`,
    lyrics: `살피꽃밭 길의 기억을 버리고 버려도<br />
    먼지처럼 다시 돌아와 아직 사랑한다고요`,
    link: `https://youtu.be/QaILH-kvbR4`,
  },
  {
    title: `April shower`,
    producer: `Lyrics by WOOZI, BUMZU, SOFTSERVERBOY, Kareem James<br />
    Composed by WOOZI, BUMZU`,
    time: `03:32`,
    lyrics: `늦봄에 April Shower 내리면<br />
    우산을 접어 빗속을 걸어<br />
    우리는 5월에 필 꽃처럼`,
    link: `https://youtu.be/T8Jjbq5mRck`,
  },
];

// 위치 지정
const titleTag = document.querySelector("section.title");
const producerTag = document.querySelector("section.conL p.producer");
const timeTag = document.querySelector("section.conR h3.time");
const lyricsTag = document.querySelector("section.conR h4.lyrics");
const linkTag = document.querySelector("section.conR a.link");

const numberTag = document.querySelector("h1.number");
const LPImg = document.querySelector("figure.change-img img");
const ellipses = document.querySelectorAll(".ellipse");

const backButton = document.querySelector("button img.back-btn");
const nextButton = document.querySelector("button img.next-btn");

let currentNumber = 1;

backButton.addEventListener("click", function () {
  // 카운트
  currentNumber--;
  if (currentNumber <= 0) {
    currentNumber = 6;
  }

  // 이미지 변경
  numberTag.innerHTML = `0` + currentNumber;
  LPImg.src = `LP${currentNumber}.png`;

  // 내용 변경
  titleTag.innerHTML = track[currentNumber - 1].title;
  producerTag.innerHTML = track[currentNumber - 1].producer;
  timeTag.innerHTML = track[currentNumber - 1].time;
  lyricsTag.innerHTML = track[currentNumber - 1].lyrics;
  linkTag.href = track[currentNumber - 1].link;
});

nextButton.addEventListener("click", function () {
  // 카운트
  currentNumber++;
  if (currentNumber > 6) {
    currentNumber = 1;
  }

  // 이미지 변경
  numberTag.innerHTML = `0` + currentNumber;
  LPImg.src = `LP${currentNumber}.png`;

  // 내용 변경
  titleTag.innerHTML = track[currentNumber - 1].title;
  producerTag.innerHTML = track[currentNumber - 1].producer;
  timeTag.innerHTML = track[currentNumber - 1].time;
  lyricsTag.innerHTML = track[currentNumber - 1].lyrics;
  linkTag.href = track[currentNumber - 1].link;
});
