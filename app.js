import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increse = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter App 🧮</h1>
      <h2>{count}</h2>
      <button onClick={increse}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
