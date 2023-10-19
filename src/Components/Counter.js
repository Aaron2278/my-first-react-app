import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">Counter App</h1>
          <div className="my-5">
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Decrement</button>
            <button onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Counter;

