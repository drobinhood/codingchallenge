import Image from "next/image";
import Link from "next/link";
import React, { useGlobal } from "reactn";

export default function Product(props) {
  const [cart, setCart] = useGlobal("cart");

  return (
    <>
      {props.detail ? <h1>{props.title}</h1> : ""}
      <div className="product-card">
        <div className="product-card-image-container">
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="product-card-content">
          {props.detail ? "" : <p>{props.title}</p>}
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
        <button
          onClick={() => {
            // add id to cart
            cart.push(props.id.toString())
            // make it unique
            let cartSet = new Set(cart);
            setCart([...cartSet]);
          }}
        >
          Add to Cart
        </button>
        {!props.detail || props.id == undefined ? (
          <Link
            href={{
              pathname: "/product/[product]",
              query: { product: props.id },
            }}
          >
            <button>View More</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
