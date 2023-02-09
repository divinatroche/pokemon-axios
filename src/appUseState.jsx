import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [listaPokemon, setListaPokemon] = useState([]);

  //para axios
  useEffect(() =>{
    const cargarPokemons = async () => {
      try{
        const resultado = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        console.log(resultado)
        setListaPokemon(resultado.data.results)
       }
       catch(error){
         console.log(error)
   
       }
    }
    cargarPokemons()
  }, []) 




  return (
    <div className="App">
      <h1> Pokemon List</h1>
      {
        listaPokemon.map((results)=>(
          <>
            <p>{results.name}</p>
          </>
        ))
      }
    </div>
  );
}

export default App;
