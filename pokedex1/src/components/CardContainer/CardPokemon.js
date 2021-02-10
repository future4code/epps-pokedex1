import React from "react"
import { useHistory } from "react-router-dom"
import { goToPokeDetail } from "../../router/Coordinator"
import { PokemonCardContainer, PokemonImage } from "./styled"

const CardPokemon = (props) => {
    const history = useHistory()

    return (
    <PokemonCardContainer>
    <img alt={pokemon.name} src={pokemon.sprites.front_default}></img>
    <button>Adicionar a Pokedex</button>
    <button onClick={() => goToPokeDetail(history)}>Ver Detalhes</button>
    </PokemonCardContainer>
    )
}

export default CardPokemon 