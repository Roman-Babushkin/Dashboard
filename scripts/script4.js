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