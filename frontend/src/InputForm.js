import React, { useState } from 'react';

const InputForm = ({ handlePrediction }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const features = input.split(',').map((value) => parseFloat(value.trim()));
    console.log(features.length);
    if (features.length !== 60) {
      alert('Please enter exactly 60 comma-separated values.');
      return;
    }
    handlePrediction(features);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-24 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <label htmlFor="sonar-input" className="block text-lg font-semibold mb-2 text-gray-800">
        Enter 60 values (comma-separated):
      </label>
      <textarea
        id="sonar-input"
        value={input}
        onChange={handleChange}
        rows={5}
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Input 1, Input 2, ..., Input 60"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;
