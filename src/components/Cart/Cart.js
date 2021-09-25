import React from "react";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <div>
      <h5>
        <i className="fas fa-cart-arrow-down"></i>
        {cart.length}
      </h5>
      {cart.map((meal) => (
        <>
          <li>{meal.strMeal}</li>
        </>
      ))}
    </div>
  );
};

export default Cart;
