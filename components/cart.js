import React, { useGlobal, useState } from "reactn";
import ProductCard from '../components/productCard';

export default function Cart() {
  const [cart, setCart] = useGlobal("cart");
  const [products, setProducts] = useGlobal("products");
  const [showDecision, setShowDecision] = useState(false);

  console.log("PRODUCTS", products)

  const items = cart.map(id => {
    const product = products.find(x => x.id == id)
    return (
      <ProductCard
        key={product.id}
        detail="true"
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    )
  })

  return (
    <div className="nav-cart" onMouseLeave={() => { showDecision ? setShowDecision(false) : "" }}>
      {cart.length !== 0 || cart == undefined ? (
        <button onClick={() => setShowDecision(true)}>Clear Cart</button>
      ) : (
        ""
      )}
      {/* Check to make sure user really want's to clear their cart of all the great fake stuff! */}
      {showDecision ? (
        <>
          <button onClick={() => { setShowDecision(false); setCart([]) }}>Yes</button>
          <button onClick={() => setShowDecision(false)}>No</button>
        </>
      ) : (
        ""
      )}
      <div>{cart}</div>
    </div>
  );
}
