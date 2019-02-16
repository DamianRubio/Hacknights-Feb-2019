import MessageCountPainter from './message_count_painter';


export default class StatisticsPainter {

	constructor(container_id) {
		this.container = document.getElementById(container_id);

		this.painters = [
			new MessageCountPainter(this.container)
		];
	}

	update(content) {
		this.painters.forEach(p => p.paint(content));
	}
}