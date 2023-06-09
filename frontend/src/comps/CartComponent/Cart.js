import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import cartContext from "../../context/CartContext/cartContext";
import { toast } from "react-toastify";
function Cart() {
  const cartcon = useContext(cartContext);
  const [cart, setcart] = useState([]);

  const [amount, setamount] = useState(0);
  const navigator = useNavigate();

  function amounting(c) {
    let arr = c;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num += arr[i].price;
    }
    // sessionStorage.setItem('amount',num)
    setamount(num);
  }
  async function getCartData() {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}auth/${sessionStorage.getItem("userID")}/cart`
    );
    const respData = await response.json();
    await setcart(respData.cart);
    await amounting(respData.cart);
  }
  async function deleteItem(id) {
    await cartcon.deleteFromCart(sessionStorage.getItem("userID"), id);
    await getCartData();
    toast.success("Deleted from Cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    getCartData();
  }

  useEffect(() => {
    if (
      sessionStorage.getItem("userID") &&
      sessionStorage.getItem("userID") !== ""
    ) {
      getCartData();
    }
    // eslint-disable-next-line
  }, []);

  // async function getServicesData(id){
  //     const response = await fetch(`${process.env.REACT_APP_BASE_URL}services/${id}`)
  //     const respData = await response.json()
  //     return respData.service
  // }

  function handlePurchase() {
    toast.success("Purchase done!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    cartcon.purchase(sessionStorage.getItem("userID"));
    navigator("/");
  }
  // if(cartcon.cart.length===0){
  //     return (
  //         <div>No items to show</div>
  //     )
  // }
  return (
    <div id="cart-wrapper">
      <div id="cart-container">
        <h3 className="item-c">Items In cart :</h3>
        <div id="all-area">
          <div id="cart-area">
            {cart.length > 0 ? (
              cart.map((ele, index) => {
                return (
                  <div key={index} className="box-c" id="item-card">
                    {/* eslint-disable-next-line*/}
                    <img id="cart-img" src={ele.img} alt="image" />
                    <div className="desc-c">
                        <p className="desc-in-c">{ele.name}</p>

                      <div>
                        <span>₹ {ele.price}</span>
                        <Button
                          className="delete-btn-c"
                          onClick={(e) => {
                            deleteItem(ele.id);
                          }}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-01">
                No items to show
                <br></br>
                <br></br>
                <img
                  width={"200px"}
                  height={"200px"}
                  src={require("../../Assets/shopping-cart.png")}
                  alt="Technician.png"
                />
              </div>
            )}
          </div>
          <div id="amount-area">
            <div id="amount-area-a">
              <h4>Total Amount to be paid</h4>
              <p>₹ {amount} </p>
              <Button onClick={handlePurchase} variant="warning">
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
