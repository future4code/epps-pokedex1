import React, { useContext, useEffect, useState } from "react"

import CardPokemon from "../../components/CardContainer/CardPokemon";
import GlobalStateContext from "../../contexts/GlobalStateContext";

function HomePage (props) {
    // const history = useHistory()

    const { states, requests, setters } = useContext(GlobalStateContext);


    // const [pokemon, setPokemon] = useState([])

    // const getPokemon = () => {
    //     const pokemonList = []

    //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    //         .then(res => {
    //             pokemonList.push(res.data.results)
    //             setPokemon(pokemonList)

    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }

    useEffect(() => {
        requests.getPokemons()
    },[requests])

    /*const addAPokedex = (newPoke) => {
        const index = states.pokemonsList.findIndex((i) => i.name === newPoke.name);
        let newPokedexList = [...states.pokemonsList];
    
        if (index === -1) {
          newPokedexList.push({ ...newPoke, amount: 1 });
          alert(`${newPoke.name} foi para a pokedex`);
        }
        else {
          alert(`${newPoke.name} já está na pokedex`);
        }
        setters.setPokemonsList(newPokedexList)
      } */

    const Pokelist = states.pokemons &&
    states.pokemons.map((poke) => {
            return (
                <CardPokemon
                    key={poke.url}
                    name={poke.name}
                    url={poke.url}
                   // addAPokedex={() => addAPokedex(poke)}
                /> 
            )
        }
    )

    return(
        <div> 
        {Pokelist}      
        </div>
    )

}

export default HomePage