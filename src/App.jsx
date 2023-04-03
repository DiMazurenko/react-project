import { useEffect, useState } from 'react';
import styles from './App.module.css';
import classNames from 'classnames';
import { v4 } from 'uuid';
import randomColor from 'randomcolor';
import Draggable from 'react-draggable';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createNewTask = () => {
    if (inputTask.trim() === '') {
      alert('enter something');
      return;
    }

    const newTask = {
      id: v4(),
      name: inputTask,
      color: randomColor({
        luminosity: 'light',
      }),
      defaultPosition: {
        x: -100,
        y: -100,
      },
    };

    setTasks((tasks) => [...tasks, newTask]);
    setInputTask('');
  };

  return (
    <>
      <div className={classNames(styles.wrapper)}>
        <input
          type="text"
          placeholder="Enter something..."
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
          value={inputTask}
          className={classNames(styles.input)}
        />
        <button onClick={createNewTask} className={classNames(styles.button)}>
          ENTER
        </button>
      </div>
      {tasks.map((task, i) => {
        return (
          <div>
            <Draggable></Draggable>
          </div>
        );
      })}
    </>
  );
}

export default App;
