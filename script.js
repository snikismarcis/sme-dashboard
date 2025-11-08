const ctx1 = document.getElementById('cashFlowChart').getContext('2d');
new Chart(ctx1, {
	type: 'line',
	data: {
		labels: ['Nov 6', 'Nov 8', 'Nov 10', 'Nov 12', 'Nov 14', 'Nov 16', 'Nov 18', 'Nov 20', 'Nov 22', 'Nov 24', 'Nov 26', 'Nov 28', 'Nov 30', 'Dec 2', 'Dec 4'],
		datasets: [{
			label: 'Actual Cash Flow',
			data: [135, 138, 136, 134, 137, 139, 141, 143, 145, 147, 148, 150, 149, null, null],
			borderColor: '#6ec531',
			backgroundColor: 'rgba(110, 197, 49, 0.1)',
			fill: true,
			tension: 0.4,
			borderWidth: 3
		}, {
			label: 'Prediction',
			data: [135, 139, 137, 136, 137, 138, 141, 144, 145, 146, 149, 151, 153, 154, 155],
			borderColor: '#2196f3',
			backgroundColor: 'rgba(33, 150, 243, 0.1)',
			fill: true,
			tension: 0.4,
			borderWidth: 3,
			borderDash: [5, 5]
		}, {
			label: 'Liquidity Buffer',
			data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
			borderColor: '#ff5252',
			backgroundColor: 'rgba(255, 82, 82, 0.1)',
			fill: false,
			borderWidth: 2,
			borderDash: [10, 5],
			pointRadius: 0
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: false,
				min: 90,
				max: 160,
				ticks: {
					callback: function(value) {
						return '$' + value + 'k';
					}
				}
			}
		}
	}
});

const ctx2 = document.getElementById('returnsChart').getContext('2d');
new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		datasets: [{
			label: 'Overnight',
			data: [150, 180, 170, 190, 200, 220],
			backgroundColor: '#6ec531',
		}, {
			label: 'Regular',
			data: [110, 140, 150, 160, 170, 180],
			backgroundColor: '#2196f3',
		}, {
			label: 'Long-term',
			data: [80, 90, 100, 120, 140, 160],
			backgroundColor: '#9c27b0',
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: true,
				position: 'bottom'
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					callback: function(value) {
						return '$' + value;
					}
				}
			},
			x: {
				stacked: false
			}
		}
	}
});

// Savings Allocation
const ctx3El = document.getElementById('savingsAllocationChart');
if (ctx3El) {
	const ctx3 = ctx3El.getContext('2d');
	new Chart(ctx3, {
		type: 'doughnut',
		data: {
			labels: ['Overnight', 'Regular', 'Long-term'],
			datasets: [{
				data: [25000, 15000, 10000],
				backgroundColor: ['#6ec531', '#2196f3', '#9c27b0'],
				hoverOffset: 6,
				borderWidth: 0
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			cutout: '65%',
			plugins: {
				legend: { display: false }
			},
			elements: {
				arc: { borderRadius: 4 }
			}
		}
	});
}

