import React from "react";
 
const PokeDetails = ({
    name,
    image,
    id,
    type,
    visible,
    setVisible,
    heightpok,
    weightpok,
    pokstat1,
    pokstat2,
    pokstat3,
    pokstat4,
    pokstat5,
    pokstat6,
    posbs1,
    posbs2,
    posbs3,
    posbs4,
    posbs5,
    posbs6,
    mythical,
    legendary
}) => {
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
    shadow: 'bg-gray-900',
    unknown: 'bg-gray-500',
      };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex  items-center justify-center">
  <div className={` p-4 rounded-2xl shadow-lg h-[42vh] w-[50vw] flex flex-col ${typeColors[type.toLowerCase()]}`}>
    <button className="self-end texl-4xl font-bold mr-3 hover:text-white hover:bg-red-700 px-2 py-1 bg-slate-700/20 rounded-full" onClick={() => setVisible(false)}>X</button>
    <div className="flex flex-grow items-center">
      <div className="flex flex-col items-center w-1/3">
        <img src={image} alt="" className=" px-10 py-2" />
        <h1 className="text-2xl text-black font-semibold">#{id} {name.toUpperCase()}</h1>
      </div>
      <div className="w-2/3 grid grid-cols-2 gap-4 text-lg">
        <p><b>Height</b> : <b>{heightpok * 10} cm.</b></p>
        <p><b>Weight</b> : <b>{weightpok * 0.1} kg</b></p>
        <p><b>{pokstat1}</b> : <b>{posbs1}</b></p>
        <p><b>{pokstat2}</b> : <b>{posbs2}</b></p>
        <p><b>{pokstat3}</b> : <b>{posbs3}</b></p>
        <p><b>{pokstat4}</b> : <b>{posbs4}</b></p>
        <p><b>{pokstat5}</b> : <b>{posbs5}</b></p>
        <p><b>{pokstat6}</b> : <b>{posbs6}</b></p>
      </div>
    </div>
  </div>
</div>
    );
};
 
export default PokeDetails;