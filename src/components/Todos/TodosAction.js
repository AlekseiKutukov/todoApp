import Button from '../UI/Button';
import styles from './TodosAction.module.css';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

function TodosAction({ resetTodos, deleteComletedTodos, comletedTodosExist }) {
  return (
    <div className="styles.todosActionContainer">
      <Button onClick={resetTodos} title="Сбросить задачи">
        <RiRefreshLine className={styles.todoIcon} />
      </Button>
      <Button
        onClick={deleteComletedTodos}
        title="Очистить выполненные задачи"
        disable={!comletedTodosExist}
      >
        <RiDeleteBin2Line className={styles.todoIcon} />
      </Button>
    </div>
  );
}
export default TodosAction;
