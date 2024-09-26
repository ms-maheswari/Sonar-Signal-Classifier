from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
try:
    model = pickle.load(open('sonar_model.pkl', 'rb'))
except Exception as e:
    print(f"Error loading model: {e}")

# Home route
@app.route('/')
def home():
    return "Welcome to the Sonar Signal Classifier API!"

# Route for predicting the sonar signal (rock or mine)
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print(f"Received data: {data}")  # Log the incoming data
        
        if 'features' not in data:
            return jsonify({'error': 'No features provided.'}), 400
        
        features = data['features']
        print(f"Received features: {features}")  # Log the features

        if not isinstance(features, list) or len(features) != 60:
            return jsonify({'error': 'Features must be a list of 60 numerical values.'}), 400

        input_features = np.array(features).reshape(1, -1)
        prediction = model.predict(input_features)[0]
        label = "Mine" if prediction == 1 else "Rock"
        
        return jsonify({'prediction': label})

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

# Start the Flask server
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
