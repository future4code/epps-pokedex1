import React from "react"
import { useHistory } from "react-router-dom"
import { goToHomePage } from "../../router/Coordinator"

const Pokedex = () => {
    const history = useHistory()

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar para lista de pokemóns</button>
                <h1>Pokedex</h1>
            </div>
            <p>Aqui estarão os pokemóns que foram selecionados na Home Page.</p>
        </div>
    )

}

export default Pokedex