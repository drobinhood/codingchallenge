import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json);
        setLoaded(true);
      } catch (err) {
        console.log("oh gosh, looks like ", err);
      }
    }

    fetchCategories();
  }, []);

  const productList = products.map((product) => {
    return (
      <ProductCard
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
    <>
      <div className={styles.container}>
        <Head>
          <title>My Fake Store</title>
          <meta name="description" content="Fake Store" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="#">my fake store!</a>
          </h1>
          <p>Take a look at all our great <i>fake</i> products!</p>

          <div className={styles.grid}>{productList}</div>
        </main>

        <footer className={styles.footer}>
          <p>Powered by The Internet and people like you!</p>
        </footer>
      </div>
    </>
  );
}
