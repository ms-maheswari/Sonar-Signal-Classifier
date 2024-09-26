import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import pickle

# Load the dataset
data = pd.read_csv('sonardata.csv', header=None)

# Split features and labels
X = data.iloc[:, :-1]
y = data.iloc[:, -1]

# Convert labels from 'R' (Rock) and 'M' (Mine) to 0 and 1
y = y.map({'R': 0, 'M': 1})

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the logistic regression model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Save the model
with open('sonar_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

print("Model trained and saved as 'sonar_model.pkl'")
