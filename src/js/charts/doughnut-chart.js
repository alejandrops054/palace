
// Disable automatic style injection
Chart.platform.disableCSSInjection = true;

var ctx = document.getElementById('chart');
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [21, 79],
			backgroundColor: [
				'rgba(102, 163, 236, 1)',
				'rgba(231, 236, 242, 1)'
			],
			borderColor: [
                'rgba(0, 175, 159, 0)',
				'rgba(44, 50, 72, 0)'
            ],
            hoverBorderColor: [
            	'rgba(0, 175, 159, 0.5)',
				'rgba(44, 50, 72, 0.5)'
            ],
            borderWidth: 0,
            weight: 25
		}]
	},
	options: {
		tooltips: {
			mode: 'point'
		}
	}
});