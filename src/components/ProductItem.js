import h from '../modules/ddom.js';
import router from '../modules/router.js';

const ProductItem = (state, dispatch, { id, imageUrl, name, price }) => {
  const onClickHandler = (evt) => {
    router.navigate(`/web/products/${id}`);
  };
  const el = h(
    'li',
    {
      class: 'Product',
      on: {
        click: onClickHandler,
      },
    },
    h('img', { src: imageUrl }),
    h(
      'div',
      { class: 'Product__info' },
      h('div', null, name),
      h('div', null, `${price}원~`),
    ),
  );
  return el;
};

export default ProductItem;
