import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../contexts/GlobalStateContext"
import { baseUrl } from "../constants/url";

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsList, setPokemonsList] = useState([])
    // const [pokemonsDetails, setPokemonsDetails] = useState([])


const getPokemons = () => {

    const PokeListBase = []

    axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=20" )
        .then((res) => {
            PokeListBase.push(res.data.results);
            console.log(PokeListBase)
        })
        .catch((err) => {
            console.log(err.message);
        })
}

// const getPokemonsDetails = () => {

//     axios
//         .get(`${URL_POKEMONS_DETAILS}${id}`)
//         .then((res) => {
//             setProducts(res.data.id)
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })

const states = { pokemons, pokemonsList }
const setters = { setPokemons, setPokemonsList }
const requests = { getPokemons }

const data = { states, setters, requests }

return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;