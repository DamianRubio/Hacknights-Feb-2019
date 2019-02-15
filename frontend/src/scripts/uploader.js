export class Uploader {

	constructor(form_id) {
		this.form = document.getElementById(form_id);
		this.file_input = this.form.querySelector('input[type="file"]');
		this.file_input.onchange = () => this.upload();

	}

	upload(){
		this.form.submit();
	}
}