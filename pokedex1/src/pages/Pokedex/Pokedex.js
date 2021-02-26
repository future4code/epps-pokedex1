import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import CardPokemon from "../../components/CardContainer/CardPokemon"
import GlobalStateContext from "../../contexts/GlobalStateContext"
import { goToHomePage } from "../../router/Coordinator"

function Pokedex (props) {
    // const history = useHistory()

    const { states, setters } = useContext(GlobalStateContext);

    const remove = (pokeRemove) => {
      const index = states.pokemonsList.findIndex((i) => i.name === pokeRemove.name);
      let newPokedexList = [...states.pokemonsList];
      if (newPokedexList[index].amount === 1) {
        newPokedexList.splice(index, 1);
      } else {
        newPokedexList[index].amount -= 1;
      }
      setters.setPokemonsList(newPokedexList);
    };
  
  
    const Pokelist = states.pokemonsList && states.pokemonsList.map((poke) => {
      return (
        <CardPokemon
          key={poke.url}
          name={poke.name}
          url={poke.url}
          remove={() => remove(poke)}
        />
      );
    });

    return (
        <div>
            {/* <div>
                <button onClick={() => goToHomePage(history)}>Voltar para lista de pokemóns</button>
                <h1>Pokedex</h1>
            </div>
            <p>Aqui estarão os pokemóns que foram selecionados na Home Page.</p> */}
            {Pokelist}
        </div>
    )

}

export default Pokedex