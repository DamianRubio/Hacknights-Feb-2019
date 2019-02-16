import BarPainter from './bar_painter.js';

export default class MessagePerWeekDayPainter extends BarPainter {

	constructor(container) {
		super(container);
		this.title = 'Message Per Week Day';
	}

	paint(content){
		this.categories = Object.keys(content.msg_per_week_day);
		super.paint(content);
	}
	
	compute_info(content){
		return {
			name: 'Message per Week Day',
			data: Object.values(content.msg_per_week_day)
		};
	}
}