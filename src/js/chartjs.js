import { Chart, Ticks, Title } from 'chart.js/auto';

const series = [
    { x:"charte 1", y: parseInt(document.querySelector('.range-1').value) },
    { x:"charte 2", y: parseInt(document.querySelector('.range-2').value) + 10 },
    { x:"charte 3", y: parseInt(document.querySelector('.range-3').value) - 12 }
]

let configurations = {
  type: "line",
  data: {
    datasets: [
        {
            label: "Valeurs des chartes",
            data: series,
            borderColor: 'rgba(75, 192, 192, 1)',
        }
    ]
  },
  options: {
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
            title: {
                display: false,
            },
            grid: {
                display: false,
            },
            ticks: {
                beginAtZero: true,
                display: false,
            }
        },
        x: {
            title: {
                display: false,
            },
            grid: {
                display: false,
            },
            ticks: {
                beginAtZero: true,
                display: false,
            }
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Allignez les points.',
            color: 'white',
            font: {
                size: 24,
                weight: 'bold',
                family: 'perfect-dos',
            },
        },
        legend: {
            display: false,
        }
    }
  }
};

const contexte = document.querySelector('#chart1').getContext("2d");
let graphique = new Chart(contexte, configurations);

function checkReponse() {
    if (graphique.data.datasets[0].data[0].y === graphique.data.datasets[0].data[1].y &&
        graphique.data.datasets[0].data[1].y === graphique.data.datasets[0].data[2].y) {
        document.querySelector('.range-1').disabled = true;
        document.querySelector('.range-2').disabled = true;
        document.querySelector('.range-3').disabled = true;
        graphique.options.plugins.title.text = "Réussi.";
        graphique.data.datasets[0].borderColor = 'rgba(0, 255, 0, 1)';
        graphique.update();
    }
}

document.querySelector('.range-1').addEventListener('input', function() {
    checkReponse();
    graphique.data.datasets[0].data[0].y = parseInt(this.value);
    graphique.update();
});

document.querySelector('.range-2').addEventListener('input', function() {
    checkReponse();
    graphique.data.datasets[0].data[1].y = parseInt(this.value) + 10;
    graphique.update();
});

document.querySelector('.range-3').addEventListener('input', function() {
    checkReponse();
    graphique.data.datasets[0].data[2].y = parseInt(this.value) - 12;
    graphique.update();
});