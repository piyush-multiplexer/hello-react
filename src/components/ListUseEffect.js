import { useState, useTransition } from "react";
import NAMES from "./MOCK_DATA.json";

export const ListUseEffect = () => {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (evt) => {
    setInputValue(evt.target.value);
    startTransition(() => setQuery(evt.target.value));
  };
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler}></input>
      {isPending && <p>"Updating List.."</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
};
