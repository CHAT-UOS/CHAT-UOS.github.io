const clock = document.getElementById("clock");
//clock이라는 id를 가진 h1을 clock이라는 variable에 할당

function getClock() {
  const date = new Date();
  /*
  date라는 variable에 JS의 내장 객체인 Date객체를 생성
  Date객체는 날짜,시간을 다루기 위한 기능 제공
  */
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
  /*
    get(time)function을 활용해 시간을 불러오고 00:00:00 default값에 맞추기
    위해 padStart를 활용해 한자릿수 X도 0X를 반환하게 한다.
    
    padStart는 문자열 method이므로 불러온 number값을 string으로 변환한다. 

  */
}
getClock();
// getclock을 실행했지만 단 한번만 실행되므로 페이지를 새로고침할 당시의 시간만 표시됨.
setInterval(getClock, 1000);
//setInterval function은 2가지의 arguement를 가진다. (적용할 function, ms(시간간격))
//호출을 arguement2간격으로 반복하므로 시간이 실시간으로 변경됨.
