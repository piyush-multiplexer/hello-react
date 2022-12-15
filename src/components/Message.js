import { useState } from "react";
import "./myStyles.css";

export const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <div>
      <h1 className="primary">{message}</h1>
      <button onClick={() => setMessage("Thank you for subsc.")}>
        Subscribe
      </button>
    </div>
  );
};
