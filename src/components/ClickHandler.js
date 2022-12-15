export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log("btn clicked", count, event);
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(evt) => clickHandler(evt, 5)}>Click</button>
    </div>
  );
};
