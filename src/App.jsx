import { useEffect, useState } from 'react';

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
    <>
      <InputForm
        setInputTask={setInputTask}
        inputTask={inputTask}
        setTasks={setTasks}
      />
      <DragTasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
