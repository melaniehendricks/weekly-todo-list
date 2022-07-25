import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [tasks, setTasks] = useState(data);

  const removeTask = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <h3>{tasks.length} tasks this week</h3>
      {tasks.map((task) => {
        const { id, name, time, image, source } = task;
        return (
          <article key={id} className="task">
            <a href={source}>
              <img src={image} alt={name} />
            </a>
            <div>
              <h4> {name}</h4>
              <p>{time}</p>
              <button onClick={() => removeTask(id)}>Completed</button>
            </div>
          </article>
        );
      })}
      <button className="clearAll" onClick={() => setTasks([])}>
        All Completed
      </button>
    </>
  );
};

export default List;
