import { useEffect } from "react";
import React, { useGlobal, useState } from "reactn";
import Product from "../components/product";
import Link from "next/link";

// TODO fix styling for UX
// buttons should be closer to icon, easier to access.

export default function Cart() {
  const [cart, setCart] = useGlobal("cart");
  const [products] = useGlobal("products");
  const [showDecision, setShowDecision] = useState(false);
  const [cartTotal] = useGlobal("cartTotal");

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
    <div
      className="nav-cart"
      onMouseLeave={() => {
        showDecision ? setShowDecision(false) : "";
      }}
    >
      {cart.length !== 0 ? (
        <button className="small" onClick={() => setShowDecision(true)}>
          Clear Cart
        </button>
      ) : (
        ""
      )}
      {/* Check to make sure user really want's to clear their cart of all the great fake stuff! */}
      {showDecision ? (
        <>
          <button
            className="small confirm"
            onClick={() => {
              setShowDecision(false);
              setCart([]);
            }}
          >
            Yes
          </button>
          <button
            className="small reject"
            onClick={() => setShowDecision(false)}
          >
            No
          </button>
        </>
      ) : (
        ""
      )}
      <p>
        <b>Cart total:</b> ${cartTotal}
      </p>
      <div className="items-container">{items}</div>
      {cart.length !== 0 ? (
        <Link href="/checkout" passHref>
          <button>Checkout!</button>
        </Link>
      ) : (
        ""
      )}
      <Link href="/cart" passHref>
        <button>View Cart</button>
      </Link>
    </div>
  );
}
