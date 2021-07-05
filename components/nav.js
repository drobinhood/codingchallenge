import React, { useEffect, useGlobal, useState } from "reactn";
import { useRouter } from "next/router";
import Link from "next/link";
import { CgShoppingCart, CgSearch } from "react-icons/cg";
import NavCategories from "./navCategories";
import Cart from "./cart";

export default function Nav() {
  const router = useRouter();
  const [showCart, setShowCart] = useGlobal("showCart");
  const [cart, setCart] = useGlobal("cart");
  const [cartTimer, setCartTimer] = useState(false);
  const [search, setSearch] = useGlobal("search");

  // start timer when product added to cart
  useEffect(() => {
    if (cart.length !== 0) {
      setCartTimer(true);
    }
  }, [cart]);

  // stop timer after 3 seconds, shows underline for cart icon when product is added
  useEffect(() => {
    if (cartTimer == true) {
      const timer = setTimeout(() => {
        setCartTimer(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cartTimer]);

  return (
    <nav className="navigation" onMouseLeave={() => setShowCart(false)}>
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
          {/* I don't like how close the cart opens to the search, makes it difficult to open search, fix if time available */}
        <span className="nav-icon" onClick={() => setSearch(!search)}>
          <CgSearch />
        </span>
        <Link href="/cart" passHref>
          <span
            className={"nav-icon " + (cartTimer ? " attract" : "")}
            onMouseEnter={() => setShowCart(true)}
          >
            <CgShoppingCart />
          </span>
        </Link>
        <div
          onMouseEnter={() => {
            setShowCart(true);
          }}
        >
        {/* TODO rethink how to restrict cart for /cart  and /checkout paths */}
          {showCart &&
          router.asPath !== "/cart" &&
          router.asPath !== "/checkout" &&
          router.asPath !== "/checkout/success" ? (
            <Cart />
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
