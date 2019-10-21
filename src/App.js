import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
const APP_ID = "209a86bd";
const APP_KEY = "340bdf6aa96a98e94f1522187042e096";
// const exampleReq = 
// `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

// const [counter, setCounter] = useState(0);
const [recipes, setRecipes] = useState([]); // objects
const [search, setSearch] = useState(''); //string //initial
const [query, setQuery] = useState('chicken'); //default search - chicken

useEffect(() => {
getRecipes();
}, [query]); //runs only once if nothing added in array, (runs when counter's value changes if counter is added in array [counter])

const getRecipes = async () => {
  const response = 
  await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

const updateSearch = (event) => {
  setSearch(event.target.value);
  // console.log(search);
}

const getSearch = (event) => {
event.preventDefault();
setQuery(search);
setSearch('');
}

  return(
    <div className="App">
      <form className="search-form" onSubmit = {getSearch}>
        <input 
            className="search-bar" 
            type="tesxt"
            value={search} 
            onChange = {updateSearch}
            />
        <button 
          className="search-button" 
          type="submit">
            Search
          </button>
        {/* <h1  onClick={()=>{ setCounter(counter + 1)}} >{counter}</h1> */}
      </form> 

     <div className="recipes">
     {recipes.map((recipe , index) => (
        <Recipe 
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        key = {index}
        />
      ))}
     </div>

    </div>
  )
}

export default App;
