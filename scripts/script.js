var lbo27 = 5023;
var contr27 = 77;
var kassa27 = 645;
var kassa27Pr = 12.8;
var osv27 = 741;
var osv27Pr = 14.8;
var av27 = 2153;
var av27Pr = 42.9;
var contr32 = 65;
var kassa32 = 55;
var osv32 = 32;
var av32 = 64;
var totalPir = 20;
var zakPir = 8;
var donePir = 5;
var totalSmr = 32;
var zakSmr = 18;
var doneSmr = 9;
var DataGrafPlanPir = [0, 0, 0, 0, 0, 0, 28.32, 0, 33.82, 1.16, 0, 36.7];
var DataGrafPlanSmr = [0, 0, 0, 2.95, 41.1, 3.74, 4, 4.27, 4, 4.8, 3.2, 31.94];
var DataGrafPlanPirNak = [0, 0, 0, 0, 0, 0, 28.32, 28.32, 62.14, 63.3, 63.3, 100];
var DataGrafPlanSmrNak = [0, 0, 0, 2.95, 44.05, 47.79, 51.79, 56.06, 60.06, 64.86, 68.06, 100];
var bankY = 5;
var bankR = 5;
var numberQLead = 7;
var numberQMin = 7;




var DataGrafFaktPir = [];

var DataGrafFaktPirNak = [];

var DataGrafFaktSmr = [];

var DataGrafFaktSmrNak = [];


var bankGarantY = `<p>Объект 1</p>
    <p>Объект 2</p>
    <p>Объект 3</p>
    <p>Объект 4</p>
    <p>Объект 5</p>`;

var bankGarantR = `<p>Объект 1</p>
    <p>Объект 2</p>
    <p>Объект 3</p>
    <p>Объект 4</p>
    <p>Объект 5</p>`;

var questionForLeader = `<p>Вопрос 1</p>
    <p>Вопрос 2</p>
    <p>Вопрос 3</p>
    <p>Вопрос 4</p>
    <p>Вопрос 5</p>
    <p>Вопрос 6</p>
    <p>Вопрос 7</p>
    <p>Вопрос 8</p>`;

var questionForMinistr = `<p>Вопрос для министра 1</p>
    <p>Вопрос для министра 2</p>
    <p>Вопрос для министра 3</p>
    <p>Вопрос для министра 4</p>
    <p>Вопрос для министра 5</p>
    <p>Вопрос для министра 6</p>
    <p>Вопрос для министра 7</p>
    <p>Вопрос для министра 8</p>`

var lboInclude = `<p>Объект 1: 1300 млн. рублей</p>
<p>Объект 2: 800 млн. рублей</p>
<p>Объект 3: 300 млн.рублей</p>
<p>Объект 4: 1000 млн. рублей</p>
<p>Объект 5: 1200 млн. рублей</p>
<p>Объект 6: 500 млн. рублей</p>
<p>Объект 7: 250 млн. рублей</p>
<p>Объект 8: 1150 млн. рублей</p>
`

//Отсюда начинается код, наверху только исходные данные

var btn3 = document.getElementById("nakopPir");

var btn4 = document.getElementById("normalPir");

var btn5 = document.getElementById("nakopSmr");

var btn6 = document.getElementById("normalSmr");

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

btn3.onclick = function() {

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
}

btn4.onclick = function() {

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
      data: DataGrafPlanPirNak
    }, {
      name: 'Факт',
      data: DataGrafFaktPirNak
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
}

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

btn5.onclick = function() {
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
}

btn6.onclick = function() {
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
      data: DataGrafPlanSmrNak
    }, {
      name: 'Факт',
      data: DataGrafFaktSmrNak
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
}

var modal = document.getElementById('myModal');

var btn1 = document.getElementById("button1");

var btn2 = document.getElementById("button2");

var span = document.getElementsByClassName("close")[0];

var modalName = document.getElementById("modal-name");

var modalBody = document.getElementById("modal-body");

var bankGarButY = document.getElementById("bankY");

var bankGarButR = document.getElementById("bankR");

var lbo27Btn = document.getElementById("lbo27");

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

bankGarButY.onclick = function() {
  modal.style.display = "block";
  modalName.innerHTML = "Банковская гарантия (осталось менее 30 дней)";
  modalBody.innerHTML = bankGarantY;
}

bankGarButR.onclick = function() {
  modal.style.display = "block";
  modalName.innerHTML = "Банковская гарантия (осталось менее 15 дней)";
  modalBody.innerHTML = bankGarantR;
}

lbo27Btn.onclick = function() {
  modal.style.display = "block";
  modalName.innerHTML = "Состав лимитов бюджетных обязательств 27";
  modalBody.innerHTML = lboInclude;
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

document.getElementById("bankY").innerHTML = bankY;

document.getElementById("bankR").innerHTML = bankR;

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
