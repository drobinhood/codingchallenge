import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import NavCategories from "./navCategories";

export default function Nav() {
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
         <NavCategories/> 
      </div>
      <div className="nav-end">
          
        <Link href="/cart" className="nav-cart" passHref>
          <span className="nav-icon">
            <CgSearch />
          </span>
        </Link>
        <Link href="/cart" className="nav-cart" passHref>
          <span className="nav-icon">
            <CgShoppingCart />
          </span>
        </Link>
      </div>
    </nav>
  );
}
