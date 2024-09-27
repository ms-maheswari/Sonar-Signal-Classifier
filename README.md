# Sonar Signal Classifier

## Overview

The **Sonar Signal Classifier** is a machine learning application designed to classify sonar signals as either "rock" or "mine." This classification can be crucial for applications in fields like maritime safety, underwater exploration, and military operations.

## Purpose

The goal of the project is to use sonar signal data to distinguish between two types of objects underwater: rocks and mines. This classification can be essential in various industries where sonar technology is utilized.

## Components

### Frontend (React)

- The user interface is built using **React**, allowing users to input sonar signal features for classification.
- Users can enter sonar signal data through a form. The project accepts a single input in a comma-separated format.
- The frontend sends the input data to the backend via an API call to retrieve predictions from the machine learning model.

### Backend (Flask)

- The backend is developed using **Flask**, a lightweight web framework for Python, which handles incoming requests from the frontend and processes prediction requests.
- When the frontend sends the sonar features, the Flask app uses the trained machine learning model to classify the input as "rock" or "mine" and returns the result to the frontend.

### User Interaction

- The user fills out a form with the sonar signal data.
- Upon submission, the data is validated and sent to the backend.
- The backend processes the data and returns the classification result.
- The frontend displays the prediction to the user, indicating whether the input data corresponds to a rock or a mine.

## Workflow

1. **Input**: The user provides sonar signal features through a text area where they can enter values separated by commas.

2. **Processing**:
   - The frontend collects these values, splits them into an array of numbers, and sends them as a JSON object to the backend API endpoint (`/predict`).

3. **Prediction**:
   - The Flask backend receives the input features, processes them with the machine learning model, and generates a prediction.
   - The prediction result (either "rock" or "mine") is sent back to the frontend.
   
4. **Output**:
   - The frontend receives the prediction and displays the result to the user, enhancing the overall user experience.

## Technologies Used

- **Frontend**:
  - **React**: For building the user interface.
  - **Tailwind CSS**: For styling the components and ensuring a responsive design.

- **Backend**:
  - **Flask**: For creating the API and handling requests.
  - **Machine Learning Libraries**: Depending on the implementation, libraries such as `scikit-learn` or `TensorFlow` may be used for model training and prediction.

## Potential Improvements

- **User Experience**:
  - Improve the UI by adding visual indicators or animations for when predictions are being processed.
  - Provide more user guidance or error messages when inputs are invalid.

- **Model Accuracy**:
  - Experiment with different machine learning algorithms to improve classification accuracy.
  - Train the model with more diverse data for better generalization.

- **Deployment**:
  - Ensure smooth deployment for both frontend and backend so users can access the application online.

## Output Screenshot

![result](client/src/output.png)

## Steps to View Output

### Prerequisites

- **Node.js**: Required for running the React frontend.
- **Python**: Required for running the Flask backend.

### Step 1: Set Up the Backend

1. **Navigate to the Backend Directory**:
  ```bash
  cd server
  ```

2. **Install Required Libraries:**
  ```bash
  pip install flask scikit-learn 
  ```

3.**Run the Flask Backend:**
  ```bash
  python app.py
  ```

### Step 2: Set Up the Frontend

1. **Navigate to the Frontend Directory:**
  ```bash
  cd client
  ```

2. **Install Required Packages:**
  ```bash
  npm install
  ```

3.**Run the React Frontend:**
  ```bash
  npm start
  ```

### Step 3: View the Output

- Open Your Browser: Navigate to http://localhost:3000.

- Input Data: Enter sonar signal values in the text area (comma-separated).

- Submit the Form: Click the "Submit" button.

- View the Prediction: The result will be displayed, indicating whether the input data corresponds to a rock or a mine.