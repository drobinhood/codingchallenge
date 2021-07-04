import Image from "next/image";
import { useGlobal } from "reactn";

export default function Product(props) {
  const [cart, setCart] = useGlobal("cart");
  return (
    <>
      <div className="product">
        <button
          onClick={() => {
            var tempCart = cart
            const indexToRemove = tempCart.indexOf(props.id.toString())
            tempCart.splice(indexToRemove,1)
            setCart([...tempCart])
          }}
        >
          x
        </button>
        <p className="product-title">{props.title}</p>
        <div className="product-image-container">
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="product-price">
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
}
