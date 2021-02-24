var DataGrafPlanPir = [150, 180, 250, 100, 280, 330, 350, 220, 250, 140, 310, 180];

var DataGrafFaktPir = [120, 150, 280, 150, 200, 150, 250, 280];

var DataGrafPlanSmr = [250, 280, 150, 200, 380, 230, 250, 320, 150, 240, 210, 280];

var DataGrafFaktSmr = [180, 250, 180, 250, 270, 180, 230, 280, 140, 200];


var questionForLeader = `<p>Вопрос 1</p>
    <p>Вопрос 2</p>
    <p>Вопрос 3</p>
    <p>Вопрос 4</p>
    <p>Вопрос 5</p>
    <p>Вопрос 6</p>
    <p>Вопрос 7</p>
    <p>Вопрос 8</p>`;

var numberQLead = 9;

var questionForMinistr = `<p>Вопрос для министра 1</p>
    <p>Вопрос для министра 2</p>
    <p>Вопрос для министра 3</p>
    <p>Вопрос для министра 4</p>
    <p>Вопрос для министра 5</p>
    <p>Вопрос для министра 6</p>
    <p>Вопрос для министра 7</p>
    <p>Вопрос для министра 8</p>`

var numberQMin = 8;

var contr27 = 50;

var kassa27 = 2300;

var kassa27Pr = 65;

var osv27 = 3000;

var osv27Pr = 45;

var av27 = 1800;

var av27Pr = 25;

var contr32 = 80;

var kassa32 = 45;

var osv32 = 57;

var av32 = 24;

var totalPir = 17;

var zakPir = 7;

var donePir = 3;

var totalSmr = 25;

var zakSmr = 15;

var doneSmr = 7;

var lbo27 = 6000;

Highcharts.chart('container', {

  title: {
    text: 'План/факт по ГК ПИР'
  },

  yAxis: {
    title: {
      text: ""
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: ''
    }
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    name: 'План',
    data: DataGrafPlanPir
  }, {
    name: 'Факт',
    data: DataGrafFaktPir
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

Highcharts.chart('container2', {

  title: {
    text: 'План/факт по ГК СМР'
  },

  yAxis: {
    title: {
      text: ""
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: ''
    }
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    name: 'План',
    data: DataGrafPlanSmr
  }, {
    name: 'Факт',
    data: DataGrafFaktSmr
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

var modal = document.getElementById('myModal');


var btn1 = document.getElementById("button1");

var btn2 = document.getElementById("button2");

var span = document.getElementsByClassName("close")[0];

var modalName = document.getElementById("modal-name");

var modalBody = document.getElementById("modal-body");

btn1.onclick = function() {
  modal.style.display = "block";
  modalName.innerHTML = "Вопросы для руководителя";
  modalBody.innerHTML = questionForLeader;
}

btn2.onclick = function() {
  modal.style.display = "block";
  modalName.innerHTML = "Вопросы для министра";
  modalBody.innerHTML = questionForMinistr;
}


span.onclick = function() {
  modal.style.display = "none";
  modalName.innerHTML = "";
  modalBody.innerHTML = "";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalName.innerHTML = "";
    modalBody.innerHTML = "";
  }
}

var gkSmr = document.getElementById("gk-smr");

var gkPir = document.getElementById("gk-pir");

gkSmr.onclick = function() {
  window.location.href = 'gksmr.html';
}

gkPir.onclick = function() {
  window.location.href = 'gkpir.html';
}

document.getElementById("numberQLead").innerHTML = numberQLead;

document.getElementById("numberQMin").innerHTML = numberQMin;

document.getElementById("contr27").innerHTML = contr27 + "%";

document.getElementById("lineContr27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + contr27 + "%, lightgrey " + contr27 + "%)";

document.getElementById("kassa27").innerHTML = kassa27;

document.getElementById("kassa27Pr").innerHTML = kassa27Pr + "%";

document.getElementById("lineKassa27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + kassa27Pr + "%, lightgrey " + kassa27Pr + "%)";

document.getElementById("osv27").innerHTML = osv27;

document.getElementById("osv27Pr").innerHTML = osv27Pr + "%";

document.getElementById("lineOsv27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + osv27Pr + "%, lightgrey " + osv27Pr + "%)";

document.getElementById("av27").innerHTML = av27;

document.getElementById("av27Pr").innerHTML = av27Pr + "%";

document.getElementById("lineAv27").style.background = "linear-gradient(to right, rgb(54, 85, 138) " + av27Pr + "%, lightgrey " + av27Pr + "%)";

document.getElementById("contr32").innerHTML = contr32 + "%";

document.getElementById("lineContr32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + contr32 + "%, lightgrey " + contr32 + "%)";

document.getElementById("kassa32").innerHTML = kassa32 + "%";

document.getElementById("lineKassa32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + kassa32 + "%, lightgrey " + kassa32 + "%)";

document.getElementById("osv32").innerHTML = osv32 + "%";

document.getElementById("lineOsv32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + osv32 + "%, lightgrey " + osv32 + "%)";

document.getElementById("av32").innerHTML = av32 + "%";

document.getElementById("lineAv32").style.background = "linear-gradient(to right, rgb(37, 155, 209) " + av32 + "%, lightgrey " + av32 + "%)";

document.getElementById("totalPir").innerHTML = '<br><span class="number2">' + totalPir + '</span>';

document.getElementById("zakPir").innerHTML = '<br><span class="number2">' + zakPir + '</span>';

document.getElementById("donePir").innerHTML = '<br><span class="number2">' + donePir + '</span>';

document.getElementById("totalSmr").innerHTML = '<br><span class="number2">' + totalSmr + '</span>';

document.getElementById("zakSmr").innerHTML = '<br><span class="number2">' + zakSmr + '</span>';

document.getElementById("doneSmr").innerHTML = '<br><span class="number2">' + doneSmr + '</span>';

document.getElementById("lbo27").innerHTML = '<span class="number2">' + lbo27 + '</span><br><span class="typeP">млн. рублей</span>';