import { createElement as e } from '../modules/VDom.js';

import { Loading } from './Loading.js';

export const App = (state, dispatch) => {
  const element = e(
    'main',
    { class: 'App' },
    Loading(state, dispatch),
    Loading(state, dispatch),
    Loading(state, dispatch),
  );

  return element;
};
