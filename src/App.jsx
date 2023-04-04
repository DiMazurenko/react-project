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
        x: 500,
        y: -500,
      },
    };

    setTasks((tasks) => [...tasks, newTask]);
    setInputTask('');
  };

  const deleteTask = (id) => {
    const filteredTaks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTaks);
  };

  const updatePosition = (data, index) => {
    let newArr = [...tasks];
    newArr[index].defaultPosition = { x: data.x, y: data.y };
    setTasks(newArr);
  };

  const keyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      createNewTask();
    }
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
          onKeyPress={(e) => keyPress(e)}
          value={inputTask}
          className={classNames(styles.input)}
        />
        <button onClick={createNewTask} className={classNames(styles.button)}>
          ENTER
        </button>
      </div>
      {tasks.map((task, index) => {
        return (
          <Draggable
            key={task.id}
            defaultPosition={task.defaultPosition}
            onStop={(_, data) => {
              updatePosition(data, index);
            }}
          >
            <div
              className={classNames(styles.task)}
              style={{ backgroundColor: task.color }}
            >
              {`${task.name}`}
              <button
                onClick={() => deleteTask(task.id)}
                className={classNames(styles.task__button_close)}
              >
                x
              </button>
            </div>
          </Draggable>
        );
      })}
    </>
  );
}

export default App;
