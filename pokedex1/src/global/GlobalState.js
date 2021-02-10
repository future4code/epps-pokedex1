import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../contexts/GlobalStateContext"
import { URL_POKEMONS, URL_POKEMONS_DETAILS } from "../constants/url";

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsDetails, setPokemonsDetails] = useState([])
}

const getPokemons = () => {
    axios
        .get({URL_POKEMONS})
        .then((res) => {
            setProducts(res.data.results);
        })
        .catch((err) => {
            console.log(err.message);
        })
}

const getPokemonsDetails = () => {

    axios
        .get(`${URL_POKEMONS_DETAILS}${id}`)
        .then((res) => {
            setProducts(res.data.id)
        })
        .catch((err) => {
            console.log(err.message)
        })

const states = { pokemons, pokemonsDetails }
const setters = { setPokemons, setPokemonsDetails }
const requests = { getPokemons, getPokemonsDetails}

const data = { states, setters, requests }

return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;