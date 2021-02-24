var contrPir27 = 78;

var osvPir27 = 1700;

var osvPirProc27 = 45;

var contrPir32 = 53;

var osvPir32 = 42;

var lboPir27 = 2100;

document.getElementById("back").onclick = function() {
  window.location.href = 'index.html';
}

document.getElementById("obj1").onclick = function() {
	window.location.href = 'object1.html';
}

document.getElementById("contrPir27").innerHTML = contrPir27 + "%";

document.getElementById("osvPir27").innerHTML = osvPir27;

document.getElementById("contrPir32").innerHTML = contrPir32 + "%";

document.getElementById("osvPir32").innerHTML = osvPir32 + "%"; 

document.getElementById("lboPir27").innerHTML = lboPir27 + '<br><span class="typeP2"> млн.рублей</span>'; 

document.getElementById("lineContr27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + contrPir27 + "%, lightgrey " + contrPir27 + "%)";

document.getElementById("osvPirProc27").innerHTML = osvPirProc27 + "%";

document.getElementById("lineOsv27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + osvPirProc27 + "%, lightgrey " + osvPirProc27 + "%)";

document.getElementById("lineContr32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + contrPir32 + "%, lightgrey " + contrPir32 + "%)";

document.getElementById("lineOsv32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + osvPir32 + "%, lightgrey " + osvPir32 + "%)";