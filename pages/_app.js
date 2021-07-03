import "../styles/globals.css";
import Nav from "../components/nav";
import React, { setGlobal, useGlobal, useEffect } from "reactn";

setGlobal({
  cart: [],
  showCart: false,
  products: [],
});

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = await res.json();

  return allProducts;
}

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useGlobal("products");
  useEffect(() => {
    const allProducts = getProducts();
    setProducts(allProducts);
  }, []);
  return (
    <>
    {console.log(products)}
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
