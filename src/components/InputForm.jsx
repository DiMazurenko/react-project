import styles from './InputForm.module.css';
import classNames from 'classnames';

import { v4 } from 'uuid';
import randomColor from 'randomcolor';

const InputForm = ({ setInputTask, inputTask, setTasks }) => {
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

  const keyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      createNewTask();
    }
  };

  return (
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
  );
};

export default InputForm;
