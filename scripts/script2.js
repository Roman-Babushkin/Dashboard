var contrPir27 = 78;

var osvPir27 = 1700;

var osvPirProc27 = 45;

var contrPir32 = 53;

var osvPir32 = 42;

var lboPir27 = 2100;

let massiveColorPir = {
  1: [0, 1, 1, 1, 1, 1],
  2: [0, 0, 2, 3, 4, 4],
  3: [0, 0, 1, 3, 3, 4],
  4: [0, 1, 2, 3, 3, 4],
  5: [0, 3, 3, 4, 4, 4],
  6: [0, 0, 2, 2, 4, 4],
  7: [0, 0, 2, 4, 4, 4]
}

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

function colors() {
  for (h = 1; h < 8; h++) {
    exp = "obj" + h;
    x = document.getElementById(`${exp}`);
    for (i = 1; i < 7; i++) {
      el = "kt" + i
      col = x.querySelector(`.${el}`);
      ob = massiveColorPir[h];
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