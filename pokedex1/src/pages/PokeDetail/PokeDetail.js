import React from "react"
import { useHistory } from "react-router-dom"
import { goToHomePage, goToPokedex } from "../../router/Coordinator"

 const PokeDetail = () => {
     const history = useHistory()

    return(
        <div>
            <div>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToPokedex(history)}>Ir para a Pokedex</button>
            </div>
            <p>Detalhes do Pokemon à ser escolhido</p>
        </div>
    )

 }

 export default PokeDetail