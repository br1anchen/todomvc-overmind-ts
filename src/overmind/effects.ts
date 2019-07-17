import Utils from '../Utils';
import { Todo } from './state';

const NAMESPACE = 'todoMVC-overmind';

export const storeTodos = (todos: Todo[]) => {
  Utils.store(NAMESPACE, todos);
};
