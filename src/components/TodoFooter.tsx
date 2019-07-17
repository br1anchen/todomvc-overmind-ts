import React from 'react';
import classNames from 'classnames';

import Utils from '../Utils';
import { TodoFilter } from '../overmind/state';

interface Props {
  completedCount: number;
  onClearCompleted: () => void;
  filter: TodoFilter;
  activeCount: number;
}

const TodoFooter = ({
  completedCount,
  onClearCompleted,
  filter,
  activeCount,
}: Props) => {
  const activeTodoWord = Utils.pluralize(activeCount, 'item');

  const clearButton = completedCount > 0 && (
    <button className="clear-completed" onClick={onClearCompleted}>
      Clear completed
    </button>
  );

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <a href="/" className={classNames({ selected: filter === 'all' })}>
            All
          </a>
        </li>{' '}
        <li>
          <a
            href="/active"
            className={classNames({ selected: filter === 'active' })}
          >
            Active
          </a>
        </li>{' '}
        <li>
          <a
            href="/completed"
            className={classNames({ selected: filter === 'completed' })}
          >
            Completed
          </a>
        </li>
      </ul>
      {clearButton}
    </footer>
  );
};

export default TodoFooter;
