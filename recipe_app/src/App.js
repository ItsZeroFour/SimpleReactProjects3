import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "61610e4c";
  const APP_KEY = "a0f2eb6ab8e2afcfb32a9db4b1c2aee6";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //*   // Use Effect будет сробатывать тогда,
  //*   // Когда мы будем нажимать на counter
  // }, [counter]);

  useEffect(() => {
    getRecipes();
  }, [query]);

  // Returns a list of all recipes.
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    // Очищаем инпут, когда кнопка нажата
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-from">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
