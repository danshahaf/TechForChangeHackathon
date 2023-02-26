from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

API_KEY = 'AIzaSyD1DM35uilo5qo8lVW5qMsM5zxjGSJHQv0'


app = Flask(__name__)
CORS(app)
app.debug = True


@app.route('/')
def index():
    return jsonify({'message': 'Hello, world!'})


@app.route('/get-upcoming-elections', methods = ['POST'])
def get_upcoming_elections():
    address = str(request.get_json()['addressinput'])
    api_url = f'https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyD1DM35uilo5qo8lVW5qMsM5zxjGSJHQv0&address={address}'
    response = requests.get(api_url)
    json_data = response.json()
    return jsonify({'message': json_data})


@app.route('/get-election-polls', methods = ['POST'])
def get_election_polls():
    passed_params = request.get_json()
    address = passed_params[1]
    electionID = passed_params[0]
    API_KEY = 'AIzaSyD1DM35uilo5qo8lVW5qMsM5zxjGSJHQv0'
    api_url = f'https://www.googleapis.com/civicinfo/v2/voterinfo?key={API_KEY}&address={address}&electionId={electionID}'
    response = requests.get(api_url)
    json_data = response.json()
    return jsonify(json_data)


if __name__ == '__main__':
    app.run()
