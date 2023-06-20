import React from 'react';
import styles from './Counter.module.scss';

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = React.useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={inc}>+</button>
    </>
  );
};

export default Counter;
