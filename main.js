function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  console.log(today);


  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};

  document.getElementById('clock') .innerHTML =
  h + ":" + m + ":" + s;



}

startTime();
setInterval(startTime, 1000);
