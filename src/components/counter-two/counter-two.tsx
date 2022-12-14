import React from 'react';
import { CounterTwoProps } from './counter-two.types';

const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterTwo;
