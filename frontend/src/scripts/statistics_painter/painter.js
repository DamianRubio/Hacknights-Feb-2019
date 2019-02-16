import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

export default class Painter {

	constructor(container, content) {
		this.container = container;
		this.content = content;
		Exporting(Highcharts);
	}

	paint() {
		let card = document.createElement('div');
		card.classList.add('card');
		card.classList.add('float-left');
		this.container.appendChild(card);
		return card;
	}

}