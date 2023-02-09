import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [listaPokemon, setListaPokemon] = useState([]);


//axios con async/await para usar button
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


  return (
    <div className="App">
      <h1> Pokemon List</h1>
      <button  onClick={cargarPokemons} > Traer gatos</button>
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
