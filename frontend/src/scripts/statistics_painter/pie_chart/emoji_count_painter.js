import PiePainter from './pie_painter.js';

export default class EmojiCountPainter extends PiePainter {

	constructor(container) {
		super(container);
		this.title = 'Emoji Count';
	}

	compute_info(content){
		return Object.entries(
			content.emoji_count
		).map(e => {
			return {
				'name': e[0],
				'y': e[1]
			};
		});
	}

}