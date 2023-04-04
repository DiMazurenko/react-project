import { useEffect, useState } from 'react';
import styles from './App.module.css';
import classNames from 'classnames';
import InputForm from './components/InputForm';
import DragTasks from './components/DragTasks';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={classNames(styles.wrapper)}>
      <InputForm
        setInputTask={setInputTask}
        inputTask={inputTask}
        setTasks={setTasks}
      />
      <DragTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
