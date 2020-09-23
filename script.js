var sound = false;
var audio = document.getElementById("audio");
var barra = document.getElementById("volumen");
function play() {

    if (!sound) {
      audio.play();
      sound = true;
    } else {
      audio.pause();
      sound = false;
    }
  }

  barra.addEventListener("mousemove",function(ev){
  var v = document.getElementById("audio");
  v.volume = ev.target.value;

});
