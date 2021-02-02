import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ parentIndices, setIndexOfCalElementsParent, setNumber }) => {
  const cartElements: JSX.Element[] = [];
  const [cart, setCart] = useState([
    {
      courseCode: "no",
      courseName: "no",
      hasRecitation: false,
      instructors: [],
      location: "no",
      regNo: "no",
      sectionCode: "no",
      status: "no",
      time: {},
      type: "no",
      isRecitation: false,
    },
  ]);
  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("Cart") || "[]");
    console.log("in cart");
    console.log(cart);
    setCart(cartFromStorage);
  }, [cart]);

  if (Array.isArray(cart)) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].courseCode !== "no") {
        cartElements.push(
          <CartItem
            courseName={cart[i].courseName}
            courseCode={cart[i].courseCode}
            regNo={cart[i].regNo}
            // type={cart[i].type}
            // instructors={cart[i].instructors || []}
            time={cart[i].time || {}}
            status={cart[i].status}
            index={i}
            setter={setIndexOfCalElementsParent}
            setterTwo={setNumber}
            indices={parentIndices}
            isRecitation={cart[i].isRecitation}
          />
        );
      }
    }
  }
  console.log("cart");
  console.log(cart);
  console.log(cart.length);

  const style = {
    width: "500px",
    height: "60px",
    marginTop: "10px",
    borderRadius: "10px",
    color: "white",
    backgroundColor: "#54008c",
    padding: "5px",
  };

  return (
    <div>
      <div className={"col"}>
        <div style={style}>
          <div>
            <strong>Cart</strong>
          </div>
          <div> Remember to check if your course has a required recitation</div>
        </div>

        {cartElements}
      </div>
    </div>
  );
};

export default Cart;
