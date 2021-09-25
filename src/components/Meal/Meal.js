import React from "react";

const Meal = (props) => {
  // console.log(props);
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strCategory,
    strMeal,
    strMealThumb,
  } = props.meal;
  return (
    <div className="col-lg-4">
      <div className="card mx-auto mb-2" style={{ width: "18rem" }}>
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">Category: {strCategory}</p>
          <p className="card-text">
            <small>
              <span className="fw-bold">Ingredients:</span> {strIngredient1},
              {strIngredient2},{strIngredient3},{strIngredient4},
              {strIngredient5},{strIngredient6},{strIngredient7},
              {strIngredient8},{strIngredient9}, etc...
            </small>
          </p>
          <button
            onClick={() => props.addToCart(props.meal)}
            className="btn btn-success"
          >
            <i class="fas fa-hamburger"></i> Order Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
