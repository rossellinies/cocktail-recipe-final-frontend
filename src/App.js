import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipesContext from "./RecipesContext";

import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import Nav from "./Nav";

import useFetch from "./hooks/useFetch";
import useToggle from "./hooks/useToggle";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [loggedin, setLoggedin] = useToggle(true);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");
  const { get, post, del, put } = useFetch("/api/recipes");

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    setLoading(true);
    get("/api/recipes")
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  const addRecipe = (recipe) => {
    post("/api/recipes", recipe).then((data) => {
      setRecipes([data, ...recipes]);
    });
  };

  const deleteRecipe = (recipeId) => {
    console.log("recipeId:", recipeId);
    del(`/api/recipes/${recipeId}`).then(window.location.replace("/"));
  };

  const editRecipe = (updatedRecipe) => {
    console.log(updatedRecipe);
    put(`/api/recipes/${updatedRecipe._id}`, updatedRecipe).then(
      get("/api/recipes").then((data) => {
        setRecipes(data);
      })
    );
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <RecipesContext.Provider value={recipes}>
    <main>
      <BrowserRouter>
        <Nav loggedin={loggedin} setLoggedin={setLoggedin} />
        <Routes>
          <Route
            path="/"
            element={
              <Recipes
                recipes={recipes}
                loggedin={loggedin}
                addRecipe={addRecipe}
              />
            }
          />
          <Route
            path="/:recipeId"
            element={
            <RecipeDetail 
              recipes={recipes} 
              loggedin={loggedin} 
              deleteRecipe={deleteRecipe}
              editRecipe={editRecipe}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
    </RecipesContext.Provider>
  );
}

export default App;
