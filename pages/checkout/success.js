import Link from "next/link";
import styles from "../../styles/all.module.css";

// TODO add completed order details to this page.

export default function Success() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.success}>
          <h1>Success</h1>
          <h2>Congrats! Your order was received.</h2>
          <p>
            Since our store is fake we will rush to make sure not to ship your
            products out right away. So, you might be waiting a while. But, I
            have a solution. You can head back to the fake store and buy some
            more nice stuff.
          </p>
          <Link href="/" passHref>
            <button>Keep Shopping!</button>
          </Link>
        </div>
      </main>
    </>
  );
}
