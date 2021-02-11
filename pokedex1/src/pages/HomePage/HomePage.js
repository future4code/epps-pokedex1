import { React, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { goToPokeDetail, goToPokedex } from "../../router/Coordinator"
import axios from 'axios'
import CardPokemon from "../../components/CardContainer/CardPokemon";

const HomePage = () => {
    const history = useHistory()

    const [pokemon, setPokemon] = useState([])

    const getPokemon = () => {
        const pokemonList = []

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(res => {
                pokemonList.push(res.data.results)
                setPokemon(pokemonList)

            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const PokeList = (
    pokemon.map((poke) => {
            return (
                <CardPokemon
                    key={poke.url}
                    name={poke.name}
                    url={poke.url}
                /> 
            )
        }
    ))

    return(
        <div>
            <button onClick={() => goToPokedex(history)}>Ir para a Pokedex</button>
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToPokeDetail(history)}>Ver Detalhes</button>
            <div>
            {PokeList}
            </div>
        </div>
    )

}

export default HomePage