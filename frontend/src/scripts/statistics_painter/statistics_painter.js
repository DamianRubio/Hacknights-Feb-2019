import MessageCountPainter from './pie_chart/message_count_painter';
import WordCountPainter from './pie_chart/word_count_painter';
import EmojiCountPainter from './pie_chart/emoji_count_painter';
import MessagePerHourPainter from './bar_chart/message_per_hour_painter';
import MessagePerWeekDayPainter from './bar_chart/message_per_week_day_painter';

export default class StatisticsPainter {

	constructor(container_id) {
		this.container = document.getElementById(container_id);

		this.painters = [
			new MessageCountPainter(this.container),
			new WordCountPainter(this.container),
			new MessagePerHourPainter(this.container),
			new MessagePerWeekDayPainter(this.container),
			new EmojiCountPainter(this.container),
		];
	}

	update(content) {
		this.container.innerHTML = '';
		this.painters.forEach(p => p.paint(content));
	}
}