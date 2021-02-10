import { React, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../router/Coordinator"
import { URL_POKEMONS } from "../../constants/url"
import axios from 'axios'
import CardPokemon from "../../components/CardContainer/CardPokemon";

const HomePage = () => {
    const history = useHistory()

    const [pokeList, setPokeList] = useState([])
    const [pokeData, setPokeData] = useState([])

    const pokeUrl = []

    const getPokemon = () => {
        axios
        .get(URL_POKEMONS)
        .then((response) => {
            setPokeList(response.data.results)
        }).catch ((err) => {
            console.log(err)
        })
    }

    useEffect( () => {
        getPokemon()
    }, [])

    useEffect(() => {
        pokeList.map((pokemon) => {

            axios
            .get(`URL_POKEMONS_DETAILS${pokemon.name}`)
            .then((res) => {
            pokeUrl.push(res.data)
            setPokeData(pokeUrl)
            })
            .catch((err) => {
                console.log(err)
            }) 
        })
    }, [pokeList])

    return (
        <div>
            <button onClick={() => goToPokedex(history)}>Ir para a Pokedex</button>
            {pokeData && pokeData.map ((pokemon) => {
                return(
                <CardPokemon pokemon={pokemon} />
                )
            }
            )}
        </div>
    )

}

export default HomePage