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
		var formData = new FormData();
		formData.append('file', this.file_input.files[0]);

		var request = new XMLHttpRequest();
		request.open('post', 'http://localhost:5000/', true);
		request.responseType = 'json';

		request.onload  = () => this.notify_all(request.response);

		request.send(formData);

		//this.notify_all(response);
	}
}