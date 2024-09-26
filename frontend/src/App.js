import { useState } from "react";
import InputForm from "./InputForm";
import ResultDisplay from "./ResultDisplay";
import './index.css';

function App() {
  const [result, setResult] = useState("");

  const handlePrediction = async (features) => {
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.prediction);  // Update the result state with prediction
      console.log("Prediction received:", data.prediction);

    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="mt-24 container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Sonar Signal Classifier</h1>
      <InputForm handlePrediction={handlePrediction} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
