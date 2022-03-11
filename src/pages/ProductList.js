import h from '../modules/ddom.js';
import { SET_PRODUCTS } from '../store/reducer.js';
import { getProducts } from '../apis/products.js';

import ProductItem from '../components/ProductItem.js';
import Loading from '../components/Loading.js';

const ProductList = (state, dispatch) => {
  const { products } = state;

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      console.log(data);
      dispatch({
        type: SET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.error('에러남!!', error);
    }
  };

  if (products.length === 0) {
    fetchProducts();
    return Loading();
  }
  const el = h(
    'div',
    { class: 'ProductListPage' },
    h('h1', null, '상품목록'),
    h(
      'ul',
      null,
      ...products.map((product) =>
        ProductItem(state, dispatch, { ...product }),
      ),
    ),
  );
  return el;
};

export default ProductList;
