import { useRouter } from "next/router";
import ProductCard from "../../components/productCard";
import styles from "../../styles/all.module.css";

export default function Category({ category }) {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>{query.category}</h1>
          <div>
            {category.map((category) => {
              return (
                <ProductCard
                  key={category.id}
                  id={category.id}
                  image={category.image}
                  title={category.title}
                  description={category.description}
                  price={category.price}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

// gets called at build time
export async function getStaticPaths() {
  // fetch slugs for categories
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  // TODO add filter by price to category page

  // Get the paths we want to pre-render based on categories
  const paths = categories.map((category) => ({
    params: { category: category.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get data for category page
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const category = await res.json();

  // Pass post data to the page via props
  return { props: { category } };
}
