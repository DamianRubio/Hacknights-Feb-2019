import Painter from '../painter.js';
import Highcharts from 'highcharts';

export default class PiePainter extends Painter {
	constructor(container) {
		super(container);
	}

	paint(content) {
		var card = super.paint();
		card.classList.add('col-md-6');
		this.paintChart(card, content);
	}

	paintChart(container, content) {

		Highcharts.chart(container, {
			exporting: {
				enabled: false
			},
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
			title: {
				text: this.title
			},
			tooltip: {
				pointFormat: '{point.y}'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: true
				}
			},
			series: [{
				data: this.compute_info(content)
			}]
		});
	}

}