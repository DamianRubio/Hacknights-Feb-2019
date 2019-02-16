export default class Uploader {

	constructor(form_id) {
		this.initialize_form(form_id);

		this.subscriptors = [];
	}

	initialize_form(form_id) {
		this.form = document.getElementById(form_id);
		this.file_input = this.form.querySelector('input[type="file"]');
		this.file_input.onchange = () => this.upload();
	}

	subscribe(subscriptor) {
		this.subscriptors.push(subscriptor);
	}

	notify_all(content) {
		this.subscriptors.forEach(subscriptor => {
			subscriptor.update(content);
		});

	}

	upload() {
		//this.form.submit();

		let response = {
			'msg_count': {
				'jorge': 200,
				'damian': 350,
				'nicolas': 150,
				'sergio': 50
			},
			'word_count': {
				'jorge': 450,
				'damian': 490,
				'nicolas': 900,
				'sergio': 300
			},
			'most_used_word': 'francisco',
			'most_used_emoji': '🧠',
			'emoji_count': {
				'jorge': 30,
				'damian': 90,
				'nicolas': 0,
				'sergio': 3
			},
			'msg_per_hour': {
				'0': 15,
				'1': 15,
				'2': 15,
				'3': 15,
				'4': 15,
				'6': 15,
				'7': 15,
				'8': 15,
				'9': 15,
				'10': 15,
				'11': 15,
				'12': 15,
				'13': 15,
				'14': 15,
				'15': 15,
				'16': 15,
				'17': 15,
				'18': 15,
				'19': 15,
				'20': 15,
				'21': 15,
				'22': 15,
				'23': 15
			},
			'msg_per_week_day': {
				'0': 190,
				'1': 150,
				'2': 190,
				'3': 190,
				'4': 156,
				'6': 180
			}
		};

		this.notify_all(response);
	}
}