from flask import Flask, flash, request, redirect, url_for, abort
from io import BytesIO
from parser import parse_file


app = Flask(__name__)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in set(['txt'])


@app.route('/', methods=['POST'])
def result():
    # check if the post request has the file part
    if 'file' not in request.files:
        return abort(400)

    file = request.files['file']

    if file and allowed_file(file.filename):
        for message in parse_file(BytesIO(file.read())):
            print(f'               {message}')
    else:
        return abort(400)
