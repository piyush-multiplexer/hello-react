import { useState } from "react";
import NAMES from "./MOCK_DATA.json";

export const ListUseEffect = () => {
  const [query, setQuery] = useState("");
  const changeHandler = (evt) => {
    setQuery(evt.target.value);
  };
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div>
      <input type="text" value={query} onChange={changeHandler}></input>
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
};
