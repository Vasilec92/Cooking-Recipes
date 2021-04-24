import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

import "./App.css";

function App() {
  const APP_ID = "c819f189";
  const APP_KEY = "e5672f8ce4b5a176085048714ebf09b0";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  console.log(recipes);

  return (
    <div className="App">
      <h1 className="card-title">Everyday Cooking Recipes</h1>
      <form className="searchbox" onSubmit={submitHandler}>
        <input
          type="search"
          onChange={handleSearch}
          value={search}
          placeholder="Search"
        />
        <button type="submit" value="search">
          &nbsp;
        </button>
      </form>
      {recipes.map((recipe, idx) => (
        <Recipe
          key={idx}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
          totalTime={recipe.recipe.totalTime}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
        />
      ))}
    </div>
  );
}

export default App;
