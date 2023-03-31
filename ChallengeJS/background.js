const images = ["cliff.jpg", "aurora.jpg", "scenery.jpeg", "fantasy.jpg"];
//images folder에 저장된 image들의 파일명을 array형태로 저장해 images variable에 할당

const chosenImage = images[Math.floor(Math.random() * images.length)];
//images[x](0<=x<4)를 chosenImage variable에 저장
const bgImage = document.createElement("img");
const imgContainer = document.getElementById("img-container");
//img-container id를 갖는 html의 tag를 imgContainer variable에 저장
/*
JS DOM METHOD img html요소를 생성하고 bgImage variable에 저장  
생성된 요소는 아직 웹페이지(html)에 추가되지 않음
*/
bgImage.src = `images/${chosenImage}`;

// 생성된 html img tag에 src attribute추가, 경로는 html파일위치를 기준으로 설명
imgContainer.appendChild(bgImage);
//createElement를 통해 생성한 html요소를 body에 추가
