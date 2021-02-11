import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { goToPokeDetail } from "../../router/Coordinator"
import { PokemonCardContainer, PokemonImage } from "./styled"

function CardPokemon(props) {
    const history = useHistory()

    const [pokemonImage, setPokemonImage] = useState("")

    useEffect(() => {

            axios.get(`https://pokeapi.co/api/v2/pokemon/${props.url}`)
                .then(res => {
                    setPokemonImage(res.data.sprites.front_default)
                    console.log(setPokemonImage)
                }).catch(err => {
                    console.log(err)
                })
    }, [])
    return (
        <PokemonCardContainer>
            <img src={pokemonImage}></img>
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToPokeDetail(history)}>Ver Detalhes</button>
        </PokemonCardContainer>
    )
}

export default CardPokemon 