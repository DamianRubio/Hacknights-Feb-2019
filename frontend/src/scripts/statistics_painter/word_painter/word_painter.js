import Painter from '../painter.js';

export default class WordPainter extends Painter {
	constructor(container) {
		super(container);
	}

	paint() {
		var card = super.paint();
		card.classList.add('col-md-6');
		this.paint_text(card);
	}
	
	paint_text(card) {
		let e1 = document.createElement('div');
		e1.classList.add('card-body');

		let e2 = document.createElement('div');
		e2.classList.add('card-title');

		e2.innerText = this.title;

		let e3 = document.createElement('div');
		e3.classList.add('card-text');
		e3.classList.add('text-center');

		e3.innerText = this.word;

		e1.appendChild(e2);
		e1.appendChild(e3);
		card.appendChild(e1);
	}

}