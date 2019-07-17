import { Derive } from 'overmind';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoFilter = 'all' | 'active' | 'completed';

export type State = {
  editingTodoId?: Todo['id'];
  filter: TodoFilter;
  todos: Todo[];
  filteredTodos: Derive<State, Todo[]>;
  activeTodoCount: Derive<State, number>;
};

export const state: State = {
  filter: 'all',
  todos: [],
  filteredTodos: ({ todos, filter }) => {
    return todos.filter(t => {
      switch (filter) {
        case 'active':
          return !t.completed;
        case 'completed':
          return t.completed;
        default:
          return true;
      }
    });
  },
  activeTodoCount: ({ todos }) => {
    return todos.filter(t => !t.completed).length;
  },
};
