import "../styles/globals.css";
import Nav from "../components/nav";
import React, { setGlobal, useGlobal, useEffect } from "reactn";

setGlobal({
  cart: [],
  showCart: false,
  products: [],
  categories: [],
});

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useGlobal("products");
  const [categories, setCategories] = useGlobal("categories");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const json = await res.json();
        setCategories(json);
      } catch (err) {
        console.log("oh gosh, looks like ", err);
      }
    }

    fetchCategories();
  }, [setCategories]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json);
      } catch (err) {
        console.log("oh gosh, looks like ", err);
      }
    }

    fetchProducts();
  }, [setProducts]);

  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
