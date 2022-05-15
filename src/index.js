import { createStore } from './modules/stateManager.js';

import { reducer } from './store/reducer.js';

import { App } from './components/App.js';

const store = createStore(reducer);

export const dispatchEffect = (action) => store.dispatch(action);

const render = () => {
  window.requestAnimationFrame(() => {
    const $root = document.querySelector('.App');
    $root.innerHTML = '';
    $root.appendChild(App(store.getState(), store.dispatch));
  });
};

store.subscribe(render);
render();
