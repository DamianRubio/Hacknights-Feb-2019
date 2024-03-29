import PiePainter from './pie_painter.js';

export default class WordCountPainter extends PiePainter {

	constructor(container) {
		super(container);
		this.title = 'Word Count';
	}


	compute_info(content){
		return Object.entries(
			content.word_count
		).map(e => {
			return {
				'name': e[0],
				'y': e[1]
			};
		});
	}

}