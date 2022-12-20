import { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [count, setCount] = useState(0);
  const number = useRef(0);
  const numberRef = useRef("");

  console.log("ref", number);

  useEffect(() => {
    // setCount(count + 1);
    number.current = number.current + 1;
  });

  const submit = () => {
    console.log("refInput", numberRef);
    numberRef.current.style.backgroundColor = "red";
    numberRef.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        ref={numberRef}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      Render times: {number.current}
      <button onClick={submit}>Submit</button>
    </div>
  );
};
