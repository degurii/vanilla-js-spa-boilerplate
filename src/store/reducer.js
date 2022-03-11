export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_AND_OPTION = 'SET_PRODUCT_AND_OPTION';

// products: [{id} : Product]
const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.payload],
      };
    }
    case SET_PRODUCT_AND_OPTION: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
