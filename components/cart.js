import React, { useGlobal, useState } from "reactn";

export default function Cart() {
  const [cart, setCart] = useGlobal("cart");
  const [showDecision, setShowDecision] = useState(false);

  return (
    <div className="nav-cart" onMouseLeave={() => {showDecision ? setShowDecision(false) : ""}}>
      {cart.length !== 0 || cart == undefined ? (
        <button onClick={() => setShowDecision(true)}>Clear Cart</button>
      ) : (
        ""
      )}
      {showDecision ? (
        <>
          <button onClick={() => {setShowDecision(false); setCart([])}}>Yes</button>
          <button onClick={() => setShowDecision(false)}>No</button>
        </>
      ) : (
        ""
      )}
      <div>{cart}</div>
    </div>
  );
}
