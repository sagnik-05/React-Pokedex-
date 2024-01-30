//import './App.css';
import { useEffect, useState } from "react";
import Pokecard from "./Components/Pokecard";
import Search from "./Components/Search";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [search, setSearch] = useState("");
  const getAllPokemons = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const createPokemon = async (result) => {
      if(!search){
        setSearch("")
      }
      let pokemonData = [];
      for (let i = 0; i < result.length; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${result[i].name}`
        );
        const data = await res.json();
        pokemonData = [...pokemonData, data];
      }
      setAllPokemons(pokemonData);
      setNextUrl(data.next);
      
    };
    
    createPokemon(data.results);
  };

  useEffect(() => {
    getAllPokemons(nextUrl);
  }, []);
  return (
    <div className=" mx-20 my-8 flex justify-center flex-col">
      <Search input={search}
            setInput={setSearch}
            fetchData={() => getAllPokemons(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${nextUrl}`)}
      />
      <div className="grid grid-cols-4 gap-4">
        {allPokemons.map((pokemon, index) => (
          <Pokecard
            id={pokemon.id}
            key={index}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            height={pokemon.height}
            weight={pokemon.weight}
            stat1={pokemon.stats[0].stat.name}
            stat2={pokemon.stats[1].stat.name}
            stat3={pokemon.stats[2].stat.name}
            stat4={pokemon.stats[3].stat.name}
            stat5={pokemon.stats[4].stat.name}
            stat6={pokemon.stats[5].stat.name}
            bs1={pokemon.stats[0].base_stat}
            bs2={pokemon.stats[1].base_stat}
            bs3={pokemon.stats[2].base_stat}
            bs4={pokemon.stats[3].base_stat}
            bs5={pokemon.stats[4].base_stat}
            bs6={pokemon.stats[5].base_stat}
            isMythical={pokemon.is_mythical}
            isLegendary={pokemon.is_legendary}
            
          />
          
        ))}
        
      </div>
      <div className="flex items-center justify-center">

        <button onClick={() => getAllPokemons(nextUrl)} className="bg-gradient-to-r from-blue-500 to-red-500 text-white mt-4 px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
          More Pokemons
        </button>
      </div>
    </div>
  );
}

export default App;