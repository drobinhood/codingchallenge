import { useRouter } from "next/router";
import ProductCard from "../../components/productCard";

function Product({ product }) {
  return (
    <div>
      <ProductCard
        key={product.id}
        id={product.id}
        detail="true"
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch products
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { product: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.product}`
  );
  const product = await res.json();

  // Pass post data to the page via props
  return { props: { product } };
}

export default Product;
