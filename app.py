from flask import Flask, render_template, request, jsonify
from services.gemini_api import get_routes_from_gemini

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message', '')
    routes = get_routes_from_gemini(user_input)
    return jsonify({"routes": routes})

if __name__ == '__main__':
    app.run(debug=True)
