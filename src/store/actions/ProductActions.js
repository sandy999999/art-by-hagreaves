import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_TYPE,
  ORDER_PRODUCTS_BY_PRICE
} from "./ActionTypes";

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
      .then((res) => res.json())
      .then((data) => data.products)
    )
    .then((data) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data
      });
    });
};

export const filterProductsSize = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items: size === "" ?
        products :
        products.filter((x) => x.sized === size),
    },
  });
};

export const filterProductsType = (products, form) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_TYPE,
    payload: {
      form: form,
      items: form === "" ?
        products :
        products.filter((y) => y.type === form),
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice" ?
      a.price > b.price ?
      1 :
      -1 :
      a.price < b.price ?
      1 :
      -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};

export const filterProductsPrice = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) => 
      sort === "lowestprice" ?
      a.price > b.price ?
      1 :
      -1 :
      a.price < b.price ?
      1 :
      -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};