import React, { useState } from 'react';
import axios from 'axios';
import PrimeFinder from './PrimeFinder';


function NumberGenerator() {
  axios.get('http://localhost.9876/numbers/e')

  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });
  const [inputChar, setInputChar] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setInputChar(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      let response;
      if (inputChar === 'p') {
          <PrimeFinder/ >
      } else if (inputChar === 'f') {
       response = { data: { numbers: [55, 89, 144, 233, 377, 610, 987, 1597, 4181, 6765] } };;
      } else if (inputChar === 'e') {
         response = { data: { numbers: [...Array(58).keys()].filter(num => num % 2 === 0) } };;
      } else if (inputChar === 'r') {
        response = { data: { numbers: [2, 19, 25, 7, 4, 24, 17, 27, 30, 21, 14, 10, 23] } };;
      } else {
        setError('Invalid character input');
        return;
      }

      if (response && response.data && response.data.numbers) {
        setNumbers(response.data.numbers);
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div >
      <h1>Number Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter character :
          <input type="text" value={inputChar} onChange={handleChange} />
        </label>
        <button type="submit">Generate Numbers</button>
      </form>

      {error && <p>Error: {error}</p>}

      {numbers.length > 0 && (
        <div>
          <h2>Generated Numbers:</h2>
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NumberGenerator;