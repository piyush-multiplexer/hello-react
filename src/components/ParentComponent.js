import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Greet Parent ${childName}`);
  };
  return <ChildComponent greetHandler={greetParent} />;
};
