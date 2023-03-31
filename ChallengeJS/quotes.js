const quotes = [
  {
    quote: "Good design adds value faster than it adds cost.",
    author: "Tom Gale",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    quote:
      "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "If at first you don't succeed; call it version 1.0.",
    author: "Anonymous",
  },
  {
    quote: "The best way to learn to code is to code",
    author: "Anonymous",
  },
  {
    quote:
      "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupery",
  },
];
//quotes라고 하는 variable에 object를 elements로 받는 array를 저장

const quote = document.querySelector("#quote span:first-child");
//html의 첫번째 span을 quote라는 variable에 할당
const author = document.querySelector("#quote span:last-child");
//html의 마지막 span을 author라는 variable에 할당
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
/*
todaysQuote라는 variable에  JS가 제공하는 Math함수 활용
Math.random(): 0이상 1미만의 부동소수점난수 제공
quote.length는 array elements의 개수를 의미
Math.floor()는 소수점 아래의 숫자에 상관없이 무조건 내림한다. 
결국 quotes[X]의 X는 0<=x<1o의 범위를 갖는다. 
*/

quote.innerText = todaysQuote.quote;
//todaysQuote의 object중 quote라는 property를 html의 quote에 삽입한다.
author.innerText = todaysQuote.author;
//todaysQuote의 object중 author라는 property를 html의 author에 삽입한다.

function seeAuthor() {
  quote.classList.toggle("moveDownward");
  quote.classList.add("moveUpward");
  const quoteAniStart = document.querySelector("#quote span:first-child");
  quoteAniStart.style.animation = "moveUpward 0.5s linear forwards";
  const AuthorAniStart = document.querySelector("#quote span:last-child");
  AuthorAniStart.style.animation = "appearAuthor 0.5s linear forwards";
}

function hideAuthor() {
  //이 수식에 대한 명확한 이해필요
  const quoteAniStop = document.querySelector("#quote span:first-child");
  const currentTransform = getComputedStyle(quoteAniStop).transform;
  //현재 transform 값을 가져옴
  quoteAniStop.style.transform = currentTransform;
  quoteAniStop.style.animation = "moveDownward 0.5s linear forwards";

  const authorAnistop = document.querySelector("#quote span:last-child");
  const currentTransform1 = getComputedStyle(authorAnistop).transform;
  authorAnistop.style.transform = currentTransform1;
  authorAnistop.style.animation = "disappearAuthor 0.5s linear forwards";
  quote.classList.remove("moveUpward");
  quote.classList.add("moveDownward");
}
const quotespace = document.getElementById("quote");
quotespace.addEventListener("mouseenter", seeAuthor);
quotespace.addEventListener("mouseleave", hideAuthor);
