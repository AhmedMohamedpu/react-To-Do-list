// import React, { useState } from "react";

// function Todolist() {
//   const [Tasks, setTasks] = useState(["eat", "sleep", "code"]);
//   const [newTask, setNewTasks] = useState("");

//   function handleInp(e) {
//     setNewTasks(e.target.value);
//   }

//   function addTask() {}
//   function removeTask(i) {}

//   function moveTaskUp(i) {}
//   function moveTaskDown(i) {}

//   return (
//     <div className="to-do-list">
//       <h1>TO-DO list</h1>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           placeholder="Enter Task"
//           onChange={handleInp}
//         />
//         <button className="Addbtn" onClick={addTask}>
//           Add
//         </button>
//       </div>
//       <ol>
//         {Tasks.map((tasks, i) => {
//           <li key={i}>
//             <span className="text">{tasks}</span>
//             <button className="delete" onClick={() => removeTask(i)}>
//               delete
//             </button>
//             <button className="up">Up</button>
//           </li>;
//         })}
//       </ol>
//     </div>
//   );
// }

// export default Todolist;

import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }
  console.log(setNewTask.length);
  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask(""); // Clear input field after adding task
  }

  function removeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO list</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter Task"
          onChange={handleInput}
        />
        <button className="Addbtn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => removeTask(index)}>
              delete
            </button>
            <button className="up" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="down" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
