var contrSum = 230;

var contrAv = 120;

var contrDoneProc = 50;

var contrDone = 115;

var contrDay = 305;

var contrStart = "01.01.2021";

var contrEnd = "24.12.2021";

var kt1Day = 23;

var kt1Start = 3;

var kt2Day = 27;

var kt2Start = 20;

var kt3Day = 20;

var kt3Start = 40;

var kt4Day = 19;

var kt4Start = 55;

var kt5Day = 11;

var kt5Start = 75;

var kt6Day = 9;

var kt6Start = 90;

document.getElementById("back").onclick = function() {
  window.location.href = 'gkpir.html';
}

var time = new Date();

var start = new Date(2021, 0, 1);

let a = Math.round((time-start)/86400000);

let b = a/3.95;

let c= b+7;

let nowTime = document.getElementById('now');

nowTime.style.marginLeft = b+'%';

let nowDate = document.getElementById('nowDate');

nowDate.style.marginLeft = c+'%';

let d = time.getDate();
let m = time.getMonth()+1;
let y = time.getFullYear();
let fullDate = d+'.'+m+'.'+y;

nowDate.innerHTML = fullDate;

document.getElementById("contrSum").innerHTML = contrSum + '<span class="typeP"> млн. рублей</span>';

document.getElementById("contrAv").innerHTML = contrAv + '<span class="typeP"> млн. рублей</span>';

document.getElementById("contrDoneProc").innerHTML = contrDoneProc + "%";

document.getElementById("contrDone").innerHTML = contrDone + '<span class="typeP"> млн. рублей</span>';

document.getElementById("contrDoneLine").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + contrDoneProc + "%, lightgrey " + contrDoneProc + "%)";

document.getElementById("contrDay").innerHTML = contrDay + '<span class="typeP"> дней</span>';

document.getElementById("contrStart").innerHTML = contrStart;

document.getElementById("contrEnd").innerHTML = contrEnd;

document.querySelector(".kt1").style.width = kt1Day + "%";

document.querySelector(".kt1").style.marginLeft = kt1Start + "%";

document.querySelector(".kt2").style.width = kt2Day + "%";

document.querySelector(".kt2").style.marginLeft = kt2Start + "%";

document.querySelector(".kt3").style.width = kt3Day + "%";

document.querySelector(".kt3").style.marginLeft = kt3Start + "%";

document.querySelector(".kt4").style.width = kt4Day + "%";

document.querySelector(".kt4").style.marginLeft = kt4Start + "%";

document.querySelector(".kt5").style.width = kt5Day + "%";

document.querySelector(".kt5").style.marginLeft = kt5Start + "%";

document.querySelector(".kt6").style.width = kt6Day + "%";

document.querySelector(".kt6").style.marginLeft = kt6Start + "%";