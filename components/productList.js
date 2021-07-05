import ProductCard from "../components/productCard";

export default function ProductList(props) {
  return props.products.map((product) => {
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
}
