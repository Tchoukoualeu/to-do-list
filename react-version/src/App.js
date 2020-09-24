import React, { useState } from 'react';
import './App.css';
import Task from './components/task';

const Dummy = [
  {
    done: false,
    task: 'Clean your room'
  },
  {
    done: true,
    task: 'Clean your teeth'
  },
  {
    done: false,
    task: 'Make a wish sdf sdf sdf sdf '
  },
  {
    done: false,
    task: 'Clean your room'
  },

]


const App = () => {
  const [tasks, setTasks] = useState(Dummy);

  // crossout a task from the list
  const crossOut = (e) => {
    // copy the content of the list
    let data = [...tasks];

    // create a new empty array
    let newData = [];

    // Look for the element and cross it out if it is crossed out or uncross it if it is crossed out
    for(let i = 0; i < data.length; i++){
      if(i === e){
        newData.push({done: !data[i].done, task: data[i].task})
      }else{
        newData.push({done: data[i].done, task: data[i].task})
      }
    }
   
    // Update the list
    setTasks(newData);
  }

  // Delete a task from the list
  const close = (e) => {
    // copy the list of tasks
    let data = [...tasks];

    // Remove the elment clicked
    data.splice(e, 1);

    // Update the list
    setTasks(data);
  }

  return (
    <div className="App">
      <div className="out animated zoomInUp">
        <div className="container">
          <h1>To-Do List</h1>
          <div className="put">
            {tasks.map((item, index) => (
              <Task {...item} key={index} crossOut={crossOut.bind(this, index)} close={close.bind(this, index)} />
            ))}
          </div>
          <textarea placeholder="What do you need to do?" className="text"></textarea>
        </div>
      </div>
      <footer>
        Designed and Coded by Tchoukoualeu
      </footer>
    </div>
  );
}

export default App;
