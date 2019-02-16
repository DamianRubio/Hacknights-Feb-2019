import WordPainter from './word_painter';

export default class MostUsedEmojiPainter extends WordPainter {

	paint(content) {
		this.word = content.most_used_emoji;
		this.title = 'Most used Emoji';
		super.paint(content);
	}

}