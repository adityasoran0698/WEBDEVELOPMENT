import React, { useState } from "react";

const Tasks = ({ data ,deletetask}) => {
  // one piece of state: which task index is crossed out (null = none)
  const [crossed, setCrossed] = useState([]);

  return (
    <>
      {data.map((task, idx) => (
        <div key={idx} className="task-item">
          <span id="checkbox">
          <input
            type="checkbox"
            onChange={() => {
              if (crossed[idx] === idx) {
                setCrossed(null);
              } else {
                setCrossed(idx);
  
              }
              
            }}
            id="check"

          />
          </span>
          <span
            style={{
              textDecoration: crossed === idx ? "line-through" : "none",
            }}
          >
            {task}
          </span>

          <button type="button"onClick={() => deletetask(idx)} id="cross">X</button>
        </div>
      ))}
    </>
  );
};

export default Tasks;
