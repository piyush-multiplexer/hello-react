import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
};

export const HOCRed = (props) => {
  return (
    <>
      <h2 style={{ backgroundColor: "red" }}>
        <props.cmp />
      </h2>
    </>
  );
};
export const HOCGreen = (props) => {
  return (
    <>
      <h2 style={{ backgroundColor: "green" }}>
        <props.cmp />
      </h2>
    </>
  );
};
