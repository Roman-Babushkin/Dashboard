var contrSmr27 = 65;

var osvSmr27 = 2100;

var osvSmrProc27 = 55;

var contrSmr32 = 58;

var osvSmr32 = 37;

var lboSmr27 = 3500;

let massiveColorSmr = {
  1: [0, 1, 1, 1, 1, 1],
  2: [0, 1, 2, 3, 3, 4],
  3: [0, 1, 1, 2, 2, 4],
  4: [0, 1, 3, 4, 4, 4],
  5: [0, 2, 2, 3, 3, 4],
  6: [0, 1, 1, 1, 4, 4],
  7: [0, 0, 0, 4, 4, 4]
}

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

function colors() {
  for (h = 1; h < 8; h++) {
    exp = "obj" + h;
    x = document.getElementById(`${exp}`);
    for (i = 1; i < 8; i++) {
      el = "kt" + i
      col = x.querySelector(`.${el}`);
      ob = massiveColorSmr[h];
      if (ob[i - 1] === 0) {
        col.style.background = "white";
      } else if (ob[i - 1] === 1) {
        col.style.background = "rgb(54, 85, 138)";
      } else if (ob[i - 1] === 2) {
        col.style.background = "rgb(37, 155, 209)";
      } else if (ob[i - 1] === 3) {
        col.style.background = "rgba(37, 155, 209, 0.2)";
      } else {
        col.style.background = "lightgrey";
      }
    }
  }
}

colors();