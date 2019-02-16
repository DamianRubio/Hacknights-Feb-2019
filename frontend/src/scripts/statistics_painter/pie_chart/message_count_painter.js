import PiePainter from './pie_painter.js';

export default class MessageCountPainter extends PiePainter {

	constructor(container) {
		super(container);
		this.title = 'Message Count';
	}

	compute_info(content){
		return Object.entries(
			content.msg_count
		).map(e => {
			return {
				'name': e[0],
				'y': e[1]
			};
		});
	}

}