$(document).ready(function () {
  var timeData = [],
    leakageCurrentData = [],
    voltageData = [];
  var data = {
    labels: timeData,
    datasets: [
      {
        fill: false,
        label: 'Leakage Current',
        yAxisID: 'leakageCurrent',
        borderColor: "rgba(255, 204, 0, 1)",
        pointBoarderColor: "rgba(255, 204, 0, 1)",
        backgroundColor: "rgba(255, 204, 0, 0.4)",
        pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
        pointHoverBorderColor: "rgba(255, 204, 0, 1)",
        data: leakageCurrentData
      },
      {
        fill: false,
        label: 'Voltage',
        yAxisID: 'voltage',
        borderColor: "rgba(24, 120, 240, 1)",
        pointBoarderColor: "rgba(24, 120, 240, 1)",
        backgroundColor: "rgba(24, 120, 240, 0.4)",
        pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
        pointHoverBorderColor: "rgba(24, 120, 240, 1)",
        data: voltageData
      }
    ]
  }

  var basicOption = {
    title: {
      display: true,
      text: 'Leakage Current & Voltage Real-time Data',
      fontSize: 36
    },
    scales: {
      yAxes: [{
        id: 'leakageCurrent',
        type: 'linear',
        scaleLabel: {
          labelString: 'Leakage Current',
          display: true
        },
        position: 'left',
      }, {
          id: 'voltage',
          type: 'linear',
          scaleLabel: {
            labelString: 'Voltage',
            display: true
          },
          position: 'right'
        }]
    }
  }

  //Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");
  var optionsNoAnimation = { animation: false }
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: basicOption
  });
  console.log('wss://' + location.host);
  var ws = new WebSocket('wss://' + location.host);
  ws.onopen = function () {
    console.log('Successfully connect WebSocket');
  }
  ws.onmessage = function (message) {
    console.log('receive message' + message.data);
    try {
      var obj = JSON.parse(message.data);
      if(!obj.time || !obj.leakageCurrent) {
        return;
      }
      timeData.push(obj.time);
      leakageCurrentData.push(obj.leakageCurrent);
      // only keep no more than 50 points in the line chart
      const maxLen = 50;
      var len = timeData.length;
      if (len > maxLen) {
        timeData.shift();
        leakageCurrentData.shift();
      }

      if (obj.voltage) {
        voltageData.push(obj.voltage);
      }
      if (voltageData.length > maxLen) {
        voltageData.shift();
      }

      myLineChart.update();
    } catch (err) {
      console.error(err);
    }
  }
});
