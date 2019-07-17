import page from 'page';

import Utils from '../Utils';
import { Todo } from './state';

const NAMESPACE = 'todoMVC-overmind';

export const storeTodos = (todos: Todo[]) => {
  Utils.store(NAMESPACE, todos);
};

// We allow void type which is used to define "no params"
type IParams = {
  [param: string]: string;
} | void;

export const router = {
  initialize(routes: { [url: string]: (params: IParams) => void }) {
    Object.keys(routes).forEach(url => {
      page(url, ({ params }) => routes[url](params));
    });
    page.start();
  },
  open: (url: string) => page.show(url),
};
