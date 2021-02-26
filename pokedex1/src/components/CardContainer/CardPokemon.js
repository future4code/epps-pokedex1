import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { goToPokeDetail } from "../../router/Coordinator"
import { PokemonCardContainer, PokemonImage } from "./styled"

function CardPokemon(props) {
    const history = useHistory()

    const [pokemonImage, setPokemonImage] = useState("")
    const [changePage, setchangePage] = useState(true);

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
            <div>
                <p>{props.name}</p>
                <PokemonImage src={pokemonImage}></PokemonImage>
                {changePage ?
                <button onClick={props.addAPokedex || setchangePage(!changePage)}> Adicionar a poke </button>
                :
                <button onClick={props.remove || setchangePage(!changePage)}> Remover da poke </button>}
                <button onClick={() => goToPokeDetail(history)}>Ver Detalhes</button>
            </div>
        </PokemonCardContainer>
    )
}

export default CardPokemon 