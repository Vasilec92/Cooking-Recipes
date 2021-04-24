import React from "react";

const Recipe = ({ title, image, calories, totalTime, ingredients, url }) => {
  //console.log(ingredients);
  return (
    <div className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <a className="card-info subtle" href={url}>
            More details
          </a>
          <h2 className="card-subtitle">{title}</h2>
          <p className="card-info subtle"> Ingredients : </p>

          {ingredients &&
            ingredients.map((ingredient, idx) => (
              <p key={idx} className="card-author subtle">
                {ingredient.text}
              </p>
            ))}
        </div>
        <img src={image} alt="" className="card-media" />
      </div>
      <div className="card-shadow"></div>
    </div>
  );
};

export default Recipe;
