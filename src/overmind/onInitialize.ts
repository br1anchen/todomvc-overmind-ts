import { OnInitialize } from './';

const onInitialize: OnInitialize = ({ actions, effects }) => {
  effects.router.initialize({
    '/': actions.showAllPage,
    '/active': actions.showActivePage,
    '/completed': actions.showCompletedPage,
  });
};

export default onInitialize;
