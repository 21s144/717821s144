import React from 'react';

function PrimeFinder() {
  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Array to store prime numbers from 2 to 11
  const primeNumbers = [];
  for (let i = 2; i <= 11; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return (
    <div>
      <h2>Prime Numbers from 2 to 11:</h2>
      <ul>
        {primeNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrimeFinder;