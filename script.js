var xValues = ["United States", "Mexico", "Other", "Canada"];
var yValues = [38.6, 30.8, 8.1, 22.5];
var barColors = ["#1C1C1C", "#BAEDBD", "#95A4FC", "#C6C7F8"];
new Chart("doughnutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Traffic by Location",
    },
    cutoutPercentage: 70,
    Plugins: {
      legend: {
        display: false
      },
    },
  },
});
