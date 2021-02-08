import React from "react"
import { useHistory } from "react-router-dom"
import { goToPokeDetail } from "../../router/Coordinator"
import { PokemonCardContainer, PokemonImage } from "./styled"

const CardContainer = () => {
    const history = useHistory()

    return (
    <PokemonCardContainer>
    <PokemonImage alt="pikachu" src="https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"/>
    <button>Adicionar a Pokedex</button>
    <button onClick={() => goToPokeDetail(history)}>Ver Detalhes</button>
    </PokemonCardContainer>
    )
}

export default CardContainer