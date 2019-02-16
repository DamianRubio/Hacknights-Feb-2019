import PiePainter from './pie_painter.js';

export default class MessageCountPainter extends PiePainter {

	constructor(container, content) {
		super(container, content);
		this.title = 'Message Count';
	}


	compute_info(content){
		let total_msgs = Object.values(
			content.msg_count
		).reduce((c, e) => e + c);

		return Object.entries(
			content.msg_count
		).map(e => {
			return {
				'name': e[0],
				'y': (e[1] / total_msgs) * 100
			};
		});
	}

}