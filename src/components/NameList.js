export const NameList = () => {
  const names = ["bruce", "clark", "diana"];
  return (
    <div>
      {names.map((name) => {
        return <h4 key={name}>{name}</h4>;
      })}
    </div>
  );
};
