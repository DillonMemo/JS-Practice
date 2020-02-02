const core = momentum.Core;

core.start();

setInterval(function() {
  core.updateTime();
  core.render();
}, 1000);

// 10분 단위로 날씨 업데이트
setInterval(function() {
  core.updateWeather();
  core.render();
}, 1000 * 60 * 10);
