import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    let calculatedAge = yearsDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="calculator">
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate" className="label">Enter your birth date:</label>
      <input
        type="date"
        id="birthDate"
        className="input-field"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge} className="button">Calculate Age</button>
      {age !== null && <p className="result">Your age is {age} years.</p>}
    </div>
  );
  
};

const App = () => {
  return (
    <div>
      <AgeCalculator />
    </div>
  );
};

export default App;
