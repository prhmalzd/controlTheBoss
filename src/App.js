import GamePage from "./gamePage/GamePage"
import HintPage from './hintPage/HintPage'
import { useState } from "react"
import MainMenu from './menuPage/MainMenu'
import LevelsPage from "./gamePage/LevelsPage"

const App = () => {
const [page, setPage] = useState('mainMenu')

const changePage = (namePage) => {
  setPage(namePage)
}
  return (
    <div>
      {page === 'mainMenu' && <MainMenu changePage={changePage}/>}
      {page === 'hintPage' && <HintPage changePage={changePage}/>}
      {page === 'gamePage' && <div className="gnhContainer"><GamePage changePage={changePage}/><LevelsPage/></div>}
    </div>
    )

}

export default App