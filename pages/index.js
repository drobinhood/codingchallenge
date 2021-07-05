import Head from "next/head";
import styles from "../styles/all.module.css";
import React, { useGlobal, useState, useEffect, useMemo } from "reactn";
import ProductList from "../components/productList";

export default function Home() {
  const [products, setProducts] = useGlobal("products");
  const [categories, setCategories] = useGlobal("categories");
  const [productList, setProductList] = useState([]);
  const [filterCategory, setFilterCategory] = useState("--");
  const [filterPriceRange, setFilterPriceRange] = useState(0);
  const [sort, setSort] = useState("None");
  const priceRanges = useMemo(
    () => [
      ["--", "--"],
      [0, 25],
      [25, 50],
      [50, 100],
      [100, 250],
      [250, 100000000],
    ],
    []
  );

  const localProducts = useMemo(() => products, [products]);

  useEffect(() => {
    const priceStart = priceRanges[filterPriceRange][0];
    const priceEnd = priceRanges[filterPriceRange][1];
    const filteredProducts = localProducts.filter((product) => {
      if (
        ((product.price >= priceStart && product.price <= priceEnd) ||
          priceStart == "--") &&
        (filterCategory == product.category || filterCategory == "--")
      ) {
        return product;
      }
    });

    setProductList(filteredProducts);
  }, [localProducts, filterPriceRange, filterCategory, priceRanges, sort]);

  const displayProductList = <ProductList products={productList} sort={sort} />;

  const categoryOptions = categories.map((category) => {
    return (
      <option value={category} key={category}>
        {category}
      </option>
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

          <div>
            <select
              onChange={(e) => setFilterPriceRange(e.currentTarget.value)}
            >
              <option value={0} default>
                -- Filter by Price --
              </option>
              <option value={1}>$0-25</option>
              <option value={2}>$25-50</option>
              <option value={3}>$50-100</option>
              <option value={4}>$100-250</option>
              <option value={5}>$250+</option>
            </select>
            <select onChange={(e) => setFilterCategory(e.currentTarget.value)}>
              <option value="--" default>
                -- Filter by Category --
              </option>
              {categoryOptions}
            </select>
          </div>

          {filterCategory || filterPriceRange !== "" ? (
            <p>
              I&lsquo;m looking for something from{" "}
              {priceRanges[filterPriceRange][0] +
                " to " +
                priceRanges[filterPriceRange][1]}{" "}
              in {filterCategory}
            </p>
          ) : (
            ""
          )}

          <div className="sort-by-price">
            <p>Sort by Price:</p>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option default value="None">
                -- sort by price --
              </option>
              <option value="High">High to Low</option>
              <option value="Low">Low to High</option>
            </select>
          </div>

          <div className={styles.grid}>{displayProductList}</div>
        </main>

        <footer className={styles.footer}>
          <p>Powered by The Internet and people like you!</p>
        </footer>
      </div>
    </>
  );
}
