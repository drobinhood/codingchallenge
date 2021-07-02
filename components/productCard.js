import Image from "next/image";
import Link from "next/link";

export default function Product(props) {
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
        {props.id !== undefined ? (
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
