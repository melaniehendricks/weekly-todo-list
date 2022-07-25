import React from "react";

const List = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        const { id, name, time, image, source } = task;
        return (
          <article key={id} className="person">
            <a href={source}>
              <img src={image} alt={name} />
            </a>
            <div>
              <h4> {name}</h4>
              <p>{time}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
