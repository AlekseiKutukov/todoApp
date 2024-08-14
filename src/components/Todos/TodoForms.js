import { useState } from 'react';
import styles from './TodoForms.module.css';

const TodoForms = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.TodoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Введите новую задачу"
        ></input>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
export default TodoForms;
