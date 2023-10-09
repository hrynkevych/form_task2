import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [storageValue, setStorageValue] = useState('');
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    const num23Value = localStorage.getItem('num23');
    if (num23Value) {
      setStorageValue(num23Value);
      setIsEven(parseInt(num23Value) % 2 === 0);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') return;

    localStorage.setItem('num23', value);
    setStorageValue(value);
    setIsEven(parseInt(value) % 2 === 0);
    setValue('');
  };

  const handleClear = () => {
    localStorage.removeItem('num23');
    setStorageValue('');
    setIsEven(false);
    setValue('');
  };

  return (
    <div className="App">
      <h1 className="title">Local Storage Example</h1>

      {storageValue && (
        <p
          className={isEven ? 'even' : 'odd'}
        >
          The stored value is: {storageValue}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="textField">Enter a number:</label>
        <input
          type="number"
          id="textField"
          min="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" disabled={value.trim() === ''}>Set</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default App;