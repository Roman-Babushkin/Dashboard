var contrSum = 1800;

var contrAv = 500;

var contrDoneProc = 30;

var contrDone = 540;

var contrDay = 503;

var contrStart = "01.01.2021";

var contrEnd = "18.05.2022";

var kt1 = 56;

var kt2 = 45;

var kt3 = 87;

var kt4 = 92;

var kt5 = 15;

var kt6 = 48;

var kt7 = 73;

document.getElementById("back").onclick = function() {
  window.location.href = 'gksmr.html';
}

document.getElementById("contrSum").innerHTML = contrSum + '<span class="typeP"> млн. рублей</span>';

document.getElementById("contrAv").innerHTML = contrAv + '<span class="typeP"> млн. рублей</span>';

document.getElementById("contrDoneProc").innerHTML = contrDoneProc + "%";

document.getElementById("contrDone").innerHTML = contrDone + '<span class="typeP"> млн. рублей</span>';

document.getElementById("contrDoneLine").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + contrDoneProc + "%, lightgrey " + contrDoneProc + "%)";

document.getElementById("contrDay").innerHTML = contrDay + '<span class="typeP"> дней</span>';

document.getElementById("contrStart").innerHTML = contrStart;

document.getElementById("contrEnd").innerHTML = contrEnd;

document.getElementById("kt1").innerHTML = kt1 + "%";

document.getElementById("kt2").innerHTML = kt2 + "%";

document.getElementById("kt3").innerHTML = kt3 + "%";

document.getElementById("kt4").innerHTML = kt4 + "%";

document.getElementById("kt5").innerHTML = kt5 + "%";

document.getElementById("kt6").innerHTML = kt6 + "%";

document.getElementById("kt7").innerHTML = kt7 + "%";

document.getElementById("kt1Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt1 + "%, white " + kt1 + "%)";

document.getElementById("kt2Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt2 + "%, white " + kt2 + "%)";

document.getElementById("kt3Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt3 + "%, white " + kt3 + "%)";

document.getElementById("kt4Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt4 + "%, white " + kt4 + "%)";

document.getElementById("kt5Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt5 + "%, white " + kt5 + "%)";

document.getElementById("kt6Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt6 + "%, white " + kt6 + "%)";

document.getElementById("kt7Line").style.background = "linear-gradient(to right, rgba(37, 155, 209, 0.5) " + kt7 + "%, white " + kt7 + "%)";

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu1');
  if (e.target.id != 'kt_menu1' && e.target.id != 'kt1Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt1Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu2');
  if (e.target.id != 'kt_menu2' && e.target.id != 'kt2Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt2Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu3');
  if (e.target.id != 'kt_menu3' && e.target.id != 'kt3Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt3Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu4');
  if (e.target.id != 'kt_menu4' && e.target.id != 'kt4Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt4Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu5');
  if (e.target.id != 'kt_menu5' && e.target.id != 'kt5Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt5Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu6');
  if (e.target.id != 'kt_menu6' && e.target.id != 'kt6Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt6Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});

document.addEventListener("click", function(e) {
  let m = document.getElementById('kt_menu7');
  if (e.target.id != 'kt_menu7' && e.target.id != 'kt7Line') {
    m.style.display = 'none';
  } else if (e.target.id == 'kt7Line') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});