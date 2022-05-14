import degux from './modules/stateManager.js';
import router from './modules/router.js';

import reducer from './store/reducer.js';
import { qs } from './utils/dom.js';

import ProductList from './pages/ProductList.js';
import ProductDetail from './pages/ProductDetail.js';
import Cart from './pages/Cart.js';
import NotFound from './pages/NotFound.js';

const store = degux.createStore(reducer);

let CurrentPage = ProductList;

const render = () => {
  window.requestAnimationFrame(() => {
    const $root = qs('.App');
    $root.innerHTML = '';
    $root.appendChild(CurrentPage(store.getState(), store.dispatch));
  });
};

const setPage = (Page) => () => {
  CurrentPage = Page;
  render();
};
router
  .addRoute('/web/', setPage(ProductList))
  .addRoute('/web/products/:productId', setPage(ProductDetail))
  .addRoute('/web/cart', setPage(Cart))
  .setNotFound(setPage(NotFound))
  .start();

store.subscribe(render);
