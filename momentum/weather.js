const weather = document.querySelector('.js-weather');

const API_KEY = '926458919a73df77645df1c77ef9fa5c';
const COORDS = 'coords';

// API를 이용하여 날씨 정보 가져오기
function getWeather(lat, lon) {
  debugger;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  )
    .then(function(response) {
      // 데이터가 처리중이라 확실히 리턴 해주어야 함.
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function handleGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };

  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('현재 위치를 가져오지 못했습니다.');
}

// 좌표요청
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
