import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Link from "next/link";

export default function NavCategories() {
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const json = await res.json();
        setCategories(json);
        setLoaded(true);
      } catch (err) {
        console.log("oh gosh, looks like ", err);
      }
    }

    fetchCategories();
  }, []);

  const categoryList = categories.map((category) => {
    return <Link key={category} href={`/category/${category}`} passHref><a>{category}</a></Link>;
  });

  return <>{categoryList}</>;
}
