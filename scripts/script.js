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
    data: [150, 180, 250, 100, 280, 330, 350, 220, 250, 140, 310, 180]
  }, {
    name: 'Факт',
    data: [120, 150, 280, 150, 200, 150, 250, 280]
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
    data: [250, 280, 150, 200, 380, 230, 250, 320, 150, 240, 210, 280]
  }, {
    name: 'Факт',
    data: [180, 250, 180, 250, 270, 180, 230, 280, 140, 200]
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
  modalBody.innerHTML = `<p>Вопрос 1</p>
    <p>Вопрос 2</p>
    <p>Вопрос 3</p>
    <p>Вопрос 4</p>
    <p>Вопрос 5</p>
    <p>Вопрос 6</p>
    <p>Вопрос 7</p>
    <p>Вопрос 8</p>`;
}

btn2.onclick = function() {
  modal.style.display = "block";
  modalName.innerHTML = "Вопросы для министра";
  modalBody.innerHTML = `<p>Вопрос для министра 1</p>
    <p>Вопрос для министра 2</p>
    <p>Вопрос для министра 3</p>
    <p>Вопрос для министра 4</p>
    <p>Вопрос для министра 5</p>
    <p>Вопрос для министра 6</p>
    <p>Вопрос для министра 7</p>
    <p>Вопрос для министра 8</p>`
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