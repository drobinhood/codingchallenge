import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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

          <div className={styles.grid}>
          </div>
        </main>

        <footer className={styles.footer}>
          <p
          >
            Powered by The Internet
          </p>
        </footer>
      </div>
    </>
  );
}
