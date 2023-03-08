import "./styles.css";

import React, { useState } from "react";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <div>~COUNTER~</div>
      <p>{count}</p>
      <div>
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <input
          className="input"
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button
            className="buttonInput"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Amount
          </button>
          <button className="buttonInput" onClick={() => dispatch(resetAll())}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
