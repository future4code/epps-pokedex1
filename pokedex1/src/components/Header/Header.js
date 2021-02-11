import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { goToHomePage, goToPokedex } from '../../router/Coordinator';



function Header(props) {
    const history = useHistory()
    const [changePage, setchangePage] = useState(false);
  
    return (
      <div>
        {changePage ? 
        <button onClick={() => goToHomePage(history) || setchangePage(!changePage)}>Voltar </button> 
        : 
        <button onClick={() => goToPokedex(history) || setchangePage(!changePage)}>
        ir pokedexlist</button>}
      </div>
    )
  }
  
  export default Header