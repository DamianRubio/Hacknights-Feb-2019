from io import BytesIO
from json import dumps

from flask import Flask, abort, request

from parser import parse_file
from statistics import StatsComputation

app = Flask(__name__)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in set(['txt'])

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/', methods=['POST'])
def result():
    # check if the post request has the file part
    if 'file' not in request.files:
        return abort(400)

    file = request.files['file']

    if file and allowed_file(file.filename):
        stats_computation = StatsComputation()
        for message in parse_file(BytesIO(file.read())):
            stats_computation.aggregate_message(message)
        return dumps(stats_computation.get_statistics())
    else:
        return abort(400)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
