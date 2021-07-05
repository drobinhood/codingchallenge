import ProductCard from "../components/productCard";

// Returns a list of product cards
// Requires a array of product objects

export default function ProductList(props) {
  const preSorted =
    props.sort !== "None"
      ? props.products
          .sort((a, b) => {
            return a.price - b.price;
          })
          .map((product) => {
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
          })
      : [];
  const sorted = props.sort == "High" ? preSorted.reverse() : preSorted;
  const standard = props.products.map((product) => {
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
  return props.sort !== "None" ? sorted : standard;
}
