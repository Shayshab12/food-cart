import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayMeals, setDisplayMeals] = useState([]);
  useEffect(() => {
    fetch("./meals.JSON")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        setDisplayMeals(data.meals);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        searchText ? `${searchText}` : `a`
      }`
    )
      .then((res) => res.json())
      .then((data) => setDisplayMeals(data.meals));
  };
  const addToCart = (meals) => {
    const newMealCart = [...cart, meals];
    setCart(newMealCart);
  };
  return (
    <>
      <form className="d-flex mx-auto my-2 w-50">
        <input
          onChange={handleSearch}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </form>

      <div className="row mx-5">
        <div className="col-md-9 border-end">
          <div className="row">
            {displayMeals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} addToCart={addToCart}></Meal>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <h3>Selected Items</h3>
          <hr />
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Meals;
