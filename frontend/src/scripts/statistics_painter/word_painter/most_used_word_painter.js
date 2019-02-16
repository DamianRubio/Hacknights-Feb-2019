import WordPainter from './word_painter';

export default class MostUsedWordPainter extends WordPainter {

	paint(content) {
		this.word = content.most_used_word;
		this.title = 'Most used Word';
		super.paint(content);
	}

}