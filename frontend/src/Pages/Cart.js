import React from "react";
import "./CSS/Cart.css";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [userCart, setUserCart] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:4000/api/usercart/" + user.id)
      .then((res) => res.json())
      .then((data) => {
        setUserCart(data.usercart);
        localStorage.setItem("userCart", JSON.stringify(userCart));
      });
  }, [user.id]);

  const products = userCart.Products;

  // onclick order button
  const order = () => {
    // store userCart in local storage
    localStorage.setItem("userCart", JSON.stringify(userCart));
    fetch("http://localhost:4000/api/order/neworder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // as per order model
        User_id: user.id,
        Products: userCart.Products,
        total_price: products.reduce((acc, product) => {
          return acc + product.Qty * product.Price;
        }, 0),
        date: new Date(),
        Paymentstatus: "Pending",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Order Placed Successfully", "Thank You", "success");
        }
      });
  };

  return (
    <div className="containercart">
      <h1>Cart</h1>
      {products &&
        products.map((product) => (
          <div key={product.Product_no} className="prodcard">
            <h3 className="Cardtitle">{product.Product_name}</h3>
            <h3 className="pricetag">${product.Price * product.Qty}</h3>
            <div className="Dynamic">
              <button
                className="btn btn-primary"
                onClick={() => {
                  product.Qty = product.Qty + 1;
                  userCart.Products = products;
                  localStorage.setItem("userCart", JSON.stringify(userCart));
                  setUserCart(JSON.parse(localStorage.getItem("userCart")));
                }}
              >
                +
              </button>
              <h3 className="qtn">{product.Qty}</h3>
              <button
                className="btn btn-primary"
                onClick={() => {
                  product.Qty = product.Qty - 1;
                  userCart.Products = products;
                  localStorage.setItem("userCart", JSON.stringify(userCart));
                  setUserCart(JSON.parse(localStorage.getItem("userCart")));
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      <div className="totalandorder">
        <h3 className="totalprice">
          Total: $
          {/* Calculate total price as per product.Qty and product.Price and store it in total variable */}
          {products &&
            products.reduce((acc, product) => {
              return acc + product.Qty * product.Price;
            }, 0)}
        </h3>
        <button className="btn btn-primary" onClick={order}>
          <NavLink to="/feedback">Order</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Cart;
