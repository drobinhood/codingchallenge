import React, { useGlobal, useState, useEffect } from "reactn";
import Product from "../components/product";
import styles from "../styles/all.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

// TODO form validation
// TODO find dynamic way to pull and list form values from formState

export default function Checkout() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push("/checkout/success");
    setCart([]);
  };
  const watchAllFields = watch();

  const [cart, setCart] = useGlobal("cart");
  const [checkoutFlow, setCheckoutFlow] = useState(0);
  const [cartTotal] = useGlobal("cartTotal");
  const [products] = useGlobal("products");

  useEffect(() => {}, [cartTotal]);

  const items = cart.map((id) => {
    const product = products.find((x) => x.id == id);
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    );
  });

  const itemsConfirm = cart.map((id) => {
    const product = products.find((x) => x.id == id);
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        remove={false}
      />
    );
  });

  const review = (
    <div>
      <h2>Review Cart</h2>
      <div className={styles.grid}>{items}</div>
      <p>Total: ${cartTotal}</p>
      <button
        onClick={() => {
          setCheckoutFlow(checkoutFlow + 1);
        }}
      >
        Proceed to billing
      </button>
    </div>
  );

  const payment = (
    <>
      <div className="checkout-form">
        <h2>Payment</h2>
        <label>
          Name on Card:
          <input
            {...register("card-name", { required: true })}
            type="text"
            defaultValue="Bob Lob Law"
          ></input>
        </label>
        <label>
          Card Number:
          <input
            {...register("card-number", { required: true })}
            type="text"
            defaultValue="1234 1234 1234 1234"
          ></input>
        </label>
        <label>
          Expiration:
          <input
            {...register("card-expiration", { required: true })}
            type="date"
            value="9999-12-31"
          ></input>
        </label>
        <button
          onClick={() => {
            setCheckoutFlow(checkoutFlow + 1);
          }}
        >
          Proceed to Shipping
        </button>
      </div>
    </>
  );

  const billing = (
    <>
      <h2>Billing/Shipping</h2>
      <div className="checkout-form">
        <label>
          First name
          <input
            {...register("billing-firstname", { required: true })}
            type="text"
            defaultValue="Bob"
          ></input>
        </label>
        <label>
          Middle name
          <input
            {...register("billing-middlename", { required: true })}
            type="text"
            defaultValue="Lob"
          ></input>
        </label>
        <label>
          Last name
          <input
            {...register("billing-lastname", { required: true })}
            type="text"
            defaultValue="Law"
          ></input>
        </label>
        <label>
          Billing Address
          <input
            {...register("billing-address", { required: true })}
            type="textarea"
            defaultValue="1640 Riverside Drive; Hill Valley, CA; USA"
          ></input>
        </label>
        <label>
          Shipping Address
          <input
            {...register("shipping-address", { required: true })}
            type="textarea"
            defaultValue="84 Rainey Street, Arlen, Texas"
          ></input>
        </label>
      </div>
      <button
        onClick={() => {
          setCheckoutFlow(checkoutFlow + 1);
        }}
      >
        Proceed to Order Confirmation
      </button>
    </>
  );

  const confirmation = (
    <>
      <h2>Order Confirmation</h2>
      <p>
        <b>Name: </b>
        {watchAllFields["billing-firstname"] + " "}
        {watchAllFields["billing-middlename"] + " "}
        {watchAllFields["billing-lastname"]}
      </p>
      <p>
        <b>Payment:</b> {watchAllFields["card-name"]} :{" "}
        {watchAllFields["card-expiration"]}
      </p>
      <p>
        <b>Billing Address: </b>
        {watchAllFields["billing-address"]}
      </p>
      <p>
        <b>Shipping Address: </b>
        {watchAllFields["shipping-address"]}
      </p>
      <div className={styles.grid}>{itemsConfirm}</div>
      <p>
        <b>Order Total: </b>${cartTotal}
      </p>
      <input type="submit" />
    </>
  );

  const stage = [review, payment, billing, confirmation];

  return (
    <>
      <main className={styles.main}>
        <div className={styles.checkoutGrid}>
          <div className="checkout-navigation">
            <div
              className={
                (checkoutFlow > 0 ? "active" : "disabled") +
                " " +
                (checkoutFlow == 0 ? "current" : "")
              }
              onClick={() => {
                setCheckoutFlow(0);
              }}
            >
              1. Review
            </div>
            <div
              className={
                (checkoutFlow > 1 ? "active" : "disabled") +
                " " +
                (checkoutFlow == 1 ? "current" : "")
              }
              onClick={() => {
                setCheckoutFlow(1);
              }}
            >
              2. Payment
            </div>
            <div
              className={
                (checkoutFlow > 2 ? "active" : "disabled") +
                " " +
                (checkoutFlow == 2 ? "current" : "")
              }
              onClick={() => {
                setCheckoutFlow(2);
              }}
            >
              3. Billing/Shipping
            </div>
            <div
              className={
                (checkoutFlow > 3 ? "active" : "disabled") +
                " " +
                (checkoutFlow == 3 ? "current" : "")
              }
              onClick={() => {
                setCheckoutFlow(3);
              }}
            >
              4. Confirmation
            </div>
          </div>
          {/* TODO handle errors */}
          <form onSubmit={handleSubmit(onSubmit)}>{stage[checkoutFlow]}</form>
        </div>
      </main>
    </>
  );
}
