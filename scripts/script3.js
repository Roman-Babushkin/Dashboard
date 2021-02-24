var contrSmr27 = 65;

var osvSmr27 = 2100;

var osvSmrProc27 = 55;

var contrSmr32 = 58;

var osvSmr32 = 37;

var lboSmr27 = 3500;

document.getElementById("back").onclick = function() {
  window.location.href = 'index.html';
}

document.getElementById("contrSmr27").innerHTML = contrSmr27 + "%";

document.getElementById("osvSmr27").innerHTML = osvSmr27;

document.getElementById("contrSmr32").innerHTML = contrSmr32 + "%";

document.getElementById("osvSmr32").innerHTML = osvSmr32 + "%"; 

document.getElementById("lboSmr27").innerHTML = lboSmr27 + '<br><span class="typeP2">млн.рублей</span>'; 

document.getElementById("lineContr27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + contrSmr27 + "%, lightgrey " + contrSmr27 + "%)";

document.getElementById("osvSmrProc27").innerHTML = osvSmrProc27 + "%";

document.getElementById("lineOsv27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + osvSmrProc27 + "%, lightgrey " + osvSmrProc27 + "%)";

document.getElementById("lineContr32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + contrSmr32 + "%, lightgrey " + contrSmr32 + "%)";

document.getElementById("lineOsv32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + osvSmr32 + "%, lightgrey " + osvSmr32 + "%)";