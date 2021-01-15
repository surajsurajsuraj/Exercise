import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./data";

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.price;
      if (price >= total) total = price;
      return total;
    }, 0) / 100
  );
};
const Index = () => {
  const products = data;
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart: {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <List products={products} addToCart={addToCart} />
    </>
  );
};

const List = React.memo(({ products, addToCart }) => {
  console.log(products);
  useEffect(() => {
    console.log("list called");
  }, []);

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ product, addToCart }) => {
  console.log(product);
  useEffect(() => {
    console.count("single item called");
  });

  let { name, price } = product;
  price = price / 100;

  return (
    <article className="product">
      <h2>{name}</h2>
      <h4>{price} </h4>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
