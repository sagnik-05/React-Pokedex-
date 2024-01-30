import React, { useState } from "react";
import PokeDetails from "./PokeDetails";

function Pokecard({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
  isMythical,
  isLegendary,
}) {
  const [show, setShow] = useState(false);
  const typeColors = {
    grass: 'bg-green-300',
    fire: 'bg-orange-300',
    water: 'bg-blue-300',
    normal: 'bg-gray-200',
    bug: 'bg-lime-300',
    poison: 'bg-purple-300',
    electric: 'bg-yellow-300',
    ground: 'bg-amber-300',
    fairy: 'bg-pink-300',
    fighting: 'bg-red-300',
    psychic: 'bg-indigo-300',
    flying: 'bg-sky-300',
    rock: 'bg-neutral-400',
    ghost: 'bg-violet-300',
    ice: 'bg-cyan-300',
    dragon: 'bg-fuchsia-300',
    dark: 'bg-violet-700',
    steel: 'bg-gray-300',
    shadow: 'bg-black',
    unknown: 'bg-gray-500',
    // Add more types as needed
  };
  return (
    <div className= {`flex flex-col items-center rounded-xl justify-center border-2 h-[45vh] w-[40vh] p-4  shadow-lg ${typeColors[type.toLowerCase()]}`} >
    <div className=" text-2xl mt-4 font-semibold  bg-slate-700/10 px-3 py-1 rounded-full">
      <small>#{id}</small>
    </div>
    <img src={image} alt={name} className="h-[25vh] w-[27vh] px-2 py-3"/>
    <div className="flex flex-col w-[80%] justify-center items-center "> 
      <h3 className="text-2xl text-black font-semibold">{name.toUpperCase()}</h3>
      <small className="text-black font-medium text-base">Type : {type}</small>
      <button className=" bg-slate-900/20 hover:bg-slate-900/40 text-white font-semibold p-2 rounded mt-1 mb-2" onClick={() => setShow(!show)}>
        {show === true ? "X" : "Poke Info"}
      </button>
      {show === true ? (
        <PokeDetails
          name = {name}
          id = {id}
          type = {type}
          image = {image}
          visible = {show}
          setVisible = {setShow}
          weightpok={weight}
          heightpok={height}
          pokstat1={stat1}
          pokstat2={stat2}
          pokstat3={stat3}
          pokstat4={stat4}
          pokstat5={stat5}
          pokstat6={stat6}
          posbs1={bs1}
          posbs2={bs2}
          posbs3={bs3}
          posbs4={bs4}
          posbs5={bs5}
          posbs6={bs6}
          mythic = {isMythical}
          legendary = {isLegendary}
        />
      ) : (
        <></>
      )}
    </div>
  </div>
  );
}

export default Pokecard;
