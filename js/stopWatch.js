var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var miliSec = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

function count() {
  miliSec++;
  if(miliSec >= 10){
     miliSec = 0;
     seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
      }
     }
    

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." + (miliSec > 9 ? miliSec : "0" + miliSec);

    timer();

}

function timer() {
    t = setTimeout(count, 100);
}


function clear() {
    h1.textContent = "00:00:00.00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    miliSec =0;
}

start.onclick = timer;

stop.onclick = function() {
    clearTimeout(t);
}

reset.onclick = clear;
