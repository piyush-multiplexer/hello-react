export const NameList = () => {
  const names = ["bruce", "clark", "diana"];
  const heading = {
    color: "blue",
  };
  return (
    <div>
      {names.map((name) => {
        return (
          <h4 style={heading} key={name}>
            {name}
          </h4>
        );
      })}
    </div>
  );
};
