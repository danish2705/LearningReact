import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCountInc = () => {
    setCount(count + 1);
  };

  const handleCountDec = () => {
    setCount(count - 1);
  };
  return (
    <div className="background">
      <div className="inner">count : {count}</div>
      <button onClick={handleCountInc}>Increment + </button>
      <button onClick={handleCountDec}>Decrement - </button>
    </div>
  );
}

export default App;
