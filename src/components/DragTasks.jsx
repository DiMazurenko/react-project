import { useRef } from 'react';
import styles from './DragTasks.module.css';
import classNames from 'classnames';
import Draggable from 'react-draggable';

const DragTasks = ({ tasks, setTasks }) => {
  const nodeRef = useRef(null);

  const updatePosition = (data, index) => {
    let newArr = [...tasks];
    newArr[index].defaultPosition = { x: data.x, y: data.y };
    setTasks(newArr);
  };

  const deleteTask = (id) => {
    const filteredTaks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTaks);
  };

  return tasks.map((task, index) => {
    return (
      <Draggable
        key={task.id}
        defaultPosition={task.defaultPosition}
        onStop={(_, data) => {
          updatePosition(data, index);
        }}
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
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
  });
};

export default DragTasks;
