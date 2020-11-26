import React, { useState, useEffect } from 'react';
import './App.css';
import Task from './components/task';
import TextInput from './components/textinput';

const Dummy = [
  {
    done: false,
    task: 'Example task'
  },
  {
    done: true,
    task: 'Example completed task'
  },
]

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // If the local Storage has Dummy, use it, if it does not use the introductory information
    setTasks(localStorage.getItem('Dummy') ? JSON.parse(localStorage.getItem('Dummy')) : Dummy)
  }, []);

  // crossout a task from the list
  const crossOut = (e) => {
    // copy the content of the list
    let data = [...tasks];

    // create a new empty array
    let newData = [];

    // Look for the element and cross it out if it is crossed out or uncross it if it is crossed out
    for (let i = 0; i < data.length; i++) {
      if (i === e) {
        newData.push({ done: !data[i].done, task: data[i].task })
      } else {
        newData.push({ done: data[i].done, task: data[i].task })
      }
    }

    // Update the list
    setTasks(newData);

    // Save it to the LocalStorage
    localStorage.setItem('Dummy', JSON.stringify(newData));
  }

  // Delete a task from the list
  const deleteTask = (e) => {
    // copy the list of tasks
    let newData = [...tasks];

    // Remove the elment clicked
    newData.splice(e, 1);

    // Update the list
    setTasks(newData);

    // Save it to the LocalStorage
    localStorage.setItem('Dummy', JSON.stringify(newData));
  }

  // hadnling the text typed by the user
  const [value, setValue] = useState();

  // When the user press the Enter button, add what he typed to the list of task
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Add the new task
      let data = [...tasks, { done: false, task: value }];

      // Update the list of tasks
      setTasks(data);

      // Clean the value of 'value'
      setValue('');

      // Save it to the LocalStorage
      localStorage.setItem('Dummy', JSON.stringify(data));
    }
  }

  return (
    <div className="App">
      <div className="out animated zoomInUp">
        <div className="container">
          <h1>To-Do List</h1>
          <div className="put">
            {tasks.map((item, index) => (
              <Task
                {...item}
                key={index}
                crossOut={crossOut.bind(this, index)}
                deleteTask={deleteTask.bind(this, index)}
              />
            ))}
          </div>
          <TextInput value={value} handleChange={(e) => setValue(e.target.value)} handleKeyPress={handleKeyPress} />
        </div>
      </div>
      <footer>
        Designed and Coded by Tchoukoualeu
      </footer>
    </div>
  );
}

export default App;
