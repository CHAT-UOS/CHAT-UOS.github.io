const API_key = "9fa330785512d77b509af2fad1bd30bc";
//openweathermap 사이트와 상호작용할 수 있는 API

function onGeo0k(position) {
  //위치정보를 number로 변환
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  //location, weather정보를 알려주는 url을 value로 받는 url variable생성
  fetch(url)
    //url로 정보요청
    .then((Response) => Response.json())
    .then((data) => {
      //관련한 추가정보 -> wetube
      const nation = document.querySelector("#weather .nation");
      const city = document.querySelector("#weather .city");
      const weatherIcon = document.querySelector("#weather i");
      const temperature = document.querySelector("#weather .temperature");
      const weather = data.weather[0].main;

      nation.innerText = data.sys.country;
      city.innerText = data.name;
      console.log(weather);

      temperature.innerText = `${data.main.temp}°C`;
      if (weather === "Sand") {
        weatherIcon.classList.add("fas", "fa-head-side-mask");
      } else if (weather === "Clear") {
        weatherIcon.classList.add("fas", "fa-sun");
      } else if (weather === "Clouds") {
        weatherIcon.classList.add("fas", "fa-cloud");
      }
      //데이터를 얻을때마다 주기적으로 정리할 것
    });
}
function onGeoError() {
  alert("Can't find you, No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError);
/*
naviagtor에서 위치정보를 제공하게 한다. 
getCurrentPosition(): 2개의 argument를 필요로 한다. 
  argument1: 정상적으로 함수가 실행될 때의 명령
  argument2: 중간에 에러가 발생할 때의 명령

*/
