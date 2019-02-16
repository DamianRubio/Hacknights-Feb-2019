import MessageCountPainter from './pie_chart/message_count_painter';
import WordCountPainter from './pie_chart/word_count_painter';

export default class StatisticsPainter {

	constructor(container_id) {
		this.container = document.getElementById(container_id);

		this.painters = [
			new MessageCountPainter(this.container),
			new WordCountPainter(this.container),
		];
	}

	update(content) {
		this.container.innerHTML = '';
		this.painters.forEach(p => p.paint(content));
	}
}