import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{tasks.length} tasks this week</h3>
        <List tasks={tasks} />
        <button onClick={() => setTasks([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
