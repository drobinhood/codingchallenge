import { useEffect } from "react";
import React, { useGlobal, useState } from "reactn";
import styles from "../styles/all.module.css";
import Product from "../components/product";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useGlobal("cart");
  const [products] = useGlobal("products");
  const [showDecision, setShowDecision] = useState(false);
  const [cartTotal] = useGlobal("cartTotal");
  const [search, setSearch] = useGlobal("search");

  useEffect(() => {}, [cartTotal]);

  const items = cart.map((id) => {
    const product = products.find((x) => x.id == id);
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    );
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {cart.length !== 0 ? (
          <button onClick={() => setShowDecision(true)}>Clear Cart</button>
        ) : (
          ""
        )}
        {/* Check to make sure user really want's to clear their cart of all the great fake stuff! */}
        {showDecision ? (
          <>
            <button
              onClick={() => {
                setShowDecision(false);
                setCart([]);
              }}
            >
              Yes
            </button>
            <button onClick={() => setShowDecision(false)}>No</button>
          </>
        ) : (
          ""
        )}
        {cart.length !== 0 ? (
          <>
            <p>Cart total: ${cartTotal}</p>
            <div className={styles.grid}>{items}</div>
            <Link href="/checkout" passHref>
              <button>Proceed To Checkout</button>
            </Link>
          </>
        ) : (
          <>
            <h2>Looks like your cart is empty!</h2>
            <p>Try added something to it!</p>
            <button onClick={() => {setSearch(true)}}>Search for something to add to your cart!</button>
          </>
        )}
      </main>
    </div>
  );
}
