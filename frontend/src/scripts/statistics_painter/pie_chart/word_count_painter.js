import PiePainter from './pie_painter.js';

export default class WordCountPainter extends PiePainter {

	constructor(container, content) {
		super(container, content);
		this.title = 'Word Count';
	}


	compute_info(content){
		let total_words = Object.values(
			content.word_count
		).reduce((c, e) => e + c);

		return Object.entries(
			content.word_count
		).map(e => {
			return {
				'name': e[0],
				'y': (e[1] / total_words) * 100
			};
		});
	}

}