import styles from './App.module.css';
import classNames from 'classnames';

function App() {
  return (
    <>
      <div className={classNames(styles.wrapper)}>
        <input
          type="text"
          placeholder="Enter something..."
          className={classNames(styles.input)}
        />
        <button className={classNames(styles.button)}>ENTER</button>
      </div>
    </>
  );
}

export default App;
