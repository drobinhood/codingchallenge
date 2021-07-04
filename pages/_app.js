import "../styles/globals.css";
import Nav from "../components/nav";
import React, { setGlobal, useGlobal, useEffect } from "reactn";

setGlobal({
  cart: [],
  cartTotal: 0,
  showCart: false,
  products: [],
  categories: [],
});

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useGlobal("products");
  const [categories, setCategories] = useGlobal("categories");
  const [cart, setCart] = useGlobal("cart");
  const [cartTotal, setCartTotal] = useGlobal("cartTotal");

  useEffect(() => {
    const reducer = (acc, val) => acc + val;

    const total =
      cart.length != 0
        ? cart
            .map((id) => {
              const product = products.find((x) => x.id == id);
              return product.price;
            })
            .reduce(reducer)
        : 0;
    
        setCartTotal(total);
  }, [cart, cartTotal]);

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
