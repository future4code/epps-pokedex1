import React from "react"
import { useHistory } from "react-router-dom"
import { PokemonCardContainer, PokemonImage } from "../../components/CardContainer/styled"
import { goToHomePage, goToPokedex } from "../../router/Coordinator"

function PokeDetail({ pokemon }) {
    const history = useHistory()

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToPokedex(history)}>Ir para a Pokedex</button>
            </div>
                {pokemon.map(p => (
                    <div key={p}>{p}</div>
                ))}
        </div>
    )

}

export default PokeDetail