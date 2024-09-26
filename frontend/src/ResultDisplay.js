import React from 'react';


const ResultDisplay = ({ result }) => {

  let displayText;

  if (result === "Mine") {
    
    displayText = "Mine";
  } else {
    
    displayText = "Rock";
  }

  return (
    <div className="mt-4 text-center">
      {result && (
        <>
        
          <p className="text-lg font-semibold">
            Result: <span className={`font-bold ${result === "Mine" ? "text-red-500" : "text-green-500"}`}>
              {displayText}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ResultDisplay;
