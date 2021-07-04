import Head from "next/head";
import styles from "../styles/all.module.css";
import React, { useGlobal} from "reactn";
import ProductCard from "../components/productCard";

export default function Home() {
  const [products, setProducts] = useGlobal("products");

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
          <p>
            Take a look at all our great <i>fake</i> products!
          </p>

          <div className={styles.grid}>
            {productList.length != 0 ? (
              productList
            ) : (
              <p>...loading some really nice fake products</p>
            )}
          </div>
        </main>

        <footer className={styles.footer}>
          <p>Powered by The Internet and people like you!</p>
        </footer>
      </div>
    </>
  );
}
