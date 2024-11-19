import React, { useState } from 'react'


import './App.css'

function App() {
  
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');
  
    const calculateBMI = () => {
      if (weight && height) {
        const heightInMeters = height / 100; // converting cm to meters
        const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(calculatedBMI);
  
        // Determine BMI category
        if (calculatedBMI < 18.5) {
          setMessage('Underweight');
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
          setMessage('Normal weight');
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
          setMessage('Overweight');
        } else {
          setMessage('Obesity');
        }
      }
    };
  
    const clearFields = () => {
      setWeight('');
      setHeight('');
      setBmi(null);
      setMessage('');
    };
  
    return (
      <div className="container">
        <h2 className="title">BMI CALCULATOR</h2>
        <div className="inputContainer">
          <h4>WEIGHT (kg):</h4>
          <input type="number"value={weight} onChange={(e) => setWeight(e.target.value)} className="input"/>
        </div>
        <div className="inputContainer">
          <h4>HEIGHT (cm):</h4>
          <input type="number"value={height}onChange={(e) => setHeight(e.target.value)} className="input"
          />
        </div>
        <div className="buttonContainer">
          <button onClick={calculateBMI} className="button">Calculate BMI</button>
          <button onClick={clearFields} className="clearButton">Clear</button>
        </div>
        {bmi && (
          <div className="result">
            <h3>Your BMI: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    );
  }
  
  
  

export default App
