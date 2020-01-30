const core = momentum.Core;

setInterval(function() {
  core.updateTime();
  core.render();
  console.log(core);
}, 1000);
