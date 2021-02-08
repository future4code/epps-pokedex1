import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokeDetail from "../pages/PokeDetail/PokeDetail";
import Pokedex from "../pages/Pokedex/Pokedex";

const Router = () => {

    return (
        <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
        <HomePage />
        </Route>
        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>
        <Route exact path={"/poke-detail"}>
          <PokeDetail />
        </Route>
        <Route>
          <div>Erro 404 - Página não encontrada :(</div>
        </Route>
      </Switch>
    </BrowserRouter>
    )

}

export default Router