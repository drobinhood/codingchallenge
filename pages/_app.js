import "../styles/globals.css";
import Nav from "../components/nav";
import React, { setGlobal, useGlobal, useEffect } from "reactn";

setGlobal({
  cart: [],
  showCart: false,
});

function MyApp({ Component, pageProps }) {
  return <>
  <Nav/>
  <Component {...pageProps} />
  </>
}

export default MyApp;
