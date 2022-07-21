import React from "react";

const List = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        const { id, name, time, image } = task;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
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
