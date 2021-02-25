var contrSum = 230;

var contrAv = 120;

var contrDoneProc = 50;

var contrDone = 115;

var contrDay = 305;

var contrStart = "01.01.2021";

var contrEnd = "24.12.2021";

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