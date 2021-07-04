import React, { useEffect, useGlobal, useState } from "reactn";
import { useRouter } from "next/router";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import NavCategories from "./navCategories";
import Cart from "./cart";

export default function Nav() {
  const router = useRouter();
  const [showCart, setShowCart] = useGlobal("showCart");
  const [cart, setCart] = useGlobal("cart");
  const [cartTimer, setCartTimer] = useState(false);

  // start timer when product added to cart
  useEffect(() => {
    if (cart.length !== 0) {
      setCartTimer(true);
    }
  }, [cart]);

  // stop timer after 3 seconds
  useEffect(() => {
    if (cartTimer == true) {
      const timer = setTimeout(() => {
        setCartTimer(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cartTimer]);

  return (
    <nav className="navigation">
      <div className="nav-start">
        <Link href="/" className="brand" passHref>
          <a>
            <b>
              MY <i>FAKE</i> STORE
            </b>
          </a>
        </Link>
      </div>
      <div className="nav-middle">
        <NavCategories />
      </div>
      <div className="nav-end" onMouseLeave={() => setShowCart(false)}>
        <Link href="#" className="nav-search-link" passHref>
          <span className="nav-icon">
            <CgSearch />
          </span>
        </Link>
        <Link href="/cart" className="nav-cart-link" passHref>
          <span className="nav-icon" onMouseEnter={() => setShowCart(true)}>
            <CgShoppingCart />
          </span>
        </Link>
        {(showCart || cartTimer) && router.asPath !== "/cart" ? <Cart /> : ""}
      </div>
    </nav>
  );
}
