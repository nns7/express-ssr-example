import { FC, useState } from "react";

const Client: FC = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>counter</h1>
      <button onClick={countUp}>count up</button>
      <p>count: {count}</p>
    </>
  );
};

export default Client;
