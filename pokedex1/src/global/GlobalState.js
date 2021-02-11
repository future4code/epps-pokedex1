import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../contexts/GlobalStateContext"
import { URL_POKEMONS, URL_POKEMONS_DETAILS } from "../constants/url";

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsList, setPokemonsList] = useState([])
    // const [pokemonsDetails, setPokemonsDetails] = useState([])


const getPokemons = () => {
    axios
        .get({URL_POKEMONS})
        .then((res) => {
            setPokemons(res.data.results);
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
const requests = { getPokemons}

const data = { states, setters, requests }

return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;