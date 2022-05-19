import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [pokemons, setPokemons] = useState([]);
  
  //in simpliest form, useEffect is a func that triggers when the component has finished loading/rendering
  //      first param an anon callback func, second an array of what we want to keep track of optionally
  useEffect(() => {
    axiosPokemons()
  }, [])
  //empty bracket tells it to run once


  //axios
  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    // when you have a promise always have a .then and .catch
    // .then(response => console.log(response)) can see that axios wraps everything in its own .data object
    .then(response => {
      console.log(response.data.results)
      setPokemons(response.data.results)
    })
    .catch(err => console.log(err))
  }
  
  
  
  return (
    <div className="App">
      <button onClick={axiosPokemons}>Fetch All the Pokemanz, but axios style</button>
      <h1>Pokemon</h1>
      <select>
        {
          pokemons.map ((poke, idx) => {
            return(
              <option key={idx}>{poke.name}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default App;
