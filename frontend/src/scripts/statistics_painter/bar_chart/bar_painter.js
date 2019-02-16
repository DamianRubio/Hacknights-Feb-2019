import Painter from '../painter.js';
import Highcharts from 'highcharts';

export default class BarPainter extends Painter {
	constructor(container) {
		super(container);
	}

	paint(content) {
		var card = super.paint();
		card.classList.add('col-md-12');
		this.paintChart(card, content);
	}

	paintChart(container, content) {

		Highcharts.chart(container, {
			exporting: {
				enabled: false
			},
			chart: {
				type: 'line'
			},
			title: {
				text: this.title
			},
			xAxis: {
				categories: this.categories
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true
					},
					enableMouseTracking: false
				}
			},
			series: [
				this.compute_info(content)
			]
		});
	}

}