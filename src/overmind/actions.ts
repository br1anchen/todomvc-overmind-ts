import { Action } from './';
import Utils from '../Utils';
import { Todo } from './state';

type TodoID = Todo['id'];

type TodosActionTransformer<T> = (todos: Todo[], factor: T) => Todo[];
const createTodosAction = <T>(
  transformer: TodosActionTransformer<T>
): Action<T> => ({ state, effects }, factor) => {
  state.todos = transformer(state.todos, factor);

  effects.storeTodos(state.todos);
};

export const addTodo: Action<string> = createTodosAction((todos, title) => {
  return todos.concat({
    id: Utils.uuid(),
    title: title,
    completed: false,
  });
});

export const toggleTodo: Action<TodoID> = createTodosAction(
  (todos, targetId) => {
    return todos.map(t => {
      return t.id !== targetId ? t : { ...t, completed: !t.completed };
    });
  }
);

export const toggleAllTodo: Action<boolean> = createTodosAction(
  (todos, checked) => {
    return todos.map(t => {
      return { ...t, completed: checked };
    });
  }
);

export const removeTodo: Action<TodoID> = createTodosAction(
  (todos, targetId) => {
    return todos.filter(t => {
      return t.id !== targetId;
    });
  }
);

export const clearCompleted: Action = createTodosAction(todos => {
  return todos.filter(t => {
    return !t.completed;
  });
});

export const saveEditingTodo: Action<string> = (
  { state, effects },
  newTitle
) => {
  state.todos = state.todos.map(t => {
    return t.id !== state.editingTodoId ? t : { ...t, title: newTitle };
  });
  state.editingTodoId = undefined;

  effects.storeTodos(state.todos);
};

export const editingTodo: Action<TodoID> = ({ state }, targetId) => {
  state.editingTodoId = targetId;
};

export const cancelEditingTodo: Action = ({ state }) => {
  state.editingTodoId = undefined;
};

export const showAllPage: Action = ({ state }) => {
  state.filter = 'all';
};

export const showActivePage: Action = ({ state }) => {
  state.filter = 'active';
};

export const showCompletedPage: Action = ({ state }) => {
  state.filter = 'completed';
};
