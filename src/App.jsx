import React,{ useState} from "react";

function App() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <button onClick={() => setCount(count +1)}>Increment</button>
      <p>Count = {count}</p>
      <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
  );
}

export function Button() {
  return <button>Bouton</button>;
}
export default App;