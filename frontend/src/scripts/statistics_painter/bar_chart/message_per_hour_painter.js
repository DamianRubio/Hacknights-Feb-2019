import BarPainter from './bar_painter.js';

export default class MessagePerHourPainter extends BarPainter {

	constructor(container) {
		super(container);
		this.title = 'Message Per Hour';
	}

	paint(content){
		this.categories = Object.keys(content.msg_per_hour);
		super.paint(content);
	}
	
	compute_info(content){
		return {
			name: 'Message per Hour',
			data: Object.values(content.msg_per_hour)
		};

	}

}