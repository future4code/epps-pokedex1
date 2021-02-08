import React from "react"
import { useHistory } from "react-router-dom";
import CardContainer from "../../components/CardContainer/CardContainer"
import { goToPokedex } from "../../router/Coordinator"

const HomePage = () => {
    const history = useHistory()

    return (
        <div>
            <div>
                <button onClick={() => goToPokedex(history)}>Ir para Pokedex</button>
                <h1>Lista de Pokemóns</h1>
            </div>
            <p>Aqui estarão todos os pokemóns em cards, 20 no total.</p>
            <CardContainer />
        </div>
    )

}

export default HomePage