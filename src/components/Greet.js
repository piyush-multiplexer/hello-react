export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} {props.sn}
      </h1>
      {props.children}
    </div>
  );
};
