'use strict';

window.momentum = window.momentum || {};

// Quotes

momentum.WeatherCtrl = {
  apiKey: '926458919a73df77645df1c77ef9fa5c',
  apiUrl: `https://api.openweathermap.org/data/2.5/weather?units=metric`,
  fetchWeather: (lat, lon) => {
    const URL = `${momentum.WeatherCtrl.apiUrl}&appid=${momentum.WeatherCtrl.apiKey}&lat=${lat}&lon=${lon}`;
    fetch(URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        momentum.Core.setWeather(json);
      });
  },
};
