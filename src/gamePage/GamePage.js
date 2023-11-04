import Board from "./components/Board"
import Worker from "./components/Worker"
import PlacesCanGo from "./components/PlacesCanGo"
import { useState } from "react"
import { workersInformation } from "./infos/infos"
import Boss from './components/Boss'
import { checkForPlacesWorkerCanGo } from "./functioanality/checkForPlacesWorkerCanGo"
import ShowDirectionMount from "./components/ShowDirectionMounts"


const GamePage = ({changePage}) => {
  const [placesCanGo, setPlacesCanGo] = useState([])
  const [workersPlacement, setWorkerPlacement] = useState(workersInformation)
  const [workerThatClicked, setWorkerThatClicked] = useState()
  const [forTheBossQordinate, setForTheBossQordinate] = useState({top:0,right:0,buttom:0,left:0})

  const showPlacesWorkerCanGoTo = (places, id) => {
    const movablePaces = checkForPlacesWorkerCanGo(places, id, forTheBossQordinate)
    setWorkerThatClicked(id)
    setPlacesCanGo(movablePaces)
  }

  const moveTheWorker = (newPlaceQordinate) => {
    const newLeft = newPlaceQordinate[0].left
    const newTop = newPlaceQordinate[0].top
    const newWorkerPlacement = workersPlacement.map((worker) => {
      if(workerThatClicked === worker.id) {
        const yDistance = worker.top - newTop
        const xDistance = worker.left - newLeft
        if (yDistance === 50) setForTheBossQordinate({top: forTheBossQordinate.top+1,right:0,buttom:0,left:0})
        if (yDistance === -50) setForTheBossQordinate({top:0,right:0,buttom:forTheBossQordinate.buttom+1,left:0})
        if (xDistance === 50) setForTheBossQordinate({top:0,right:forTheBossQordinate.right+1,buttom:0,left:0})
        if (xDistance === -50) setForTheBossQordinate({top:0,right:0,buttom:0,left:forTheBossQordinate.left+1})
        return {id: worker.id, top: newTop, left: newLeft}
      }
      else return worker
    })
    setWorkerPlacement(newWorkerPlacement)
    setPlacesCanGo([])
  }

  const onBoardClicked = () => {
    setPlacesCanGo([])
  }

  const changePageToMenu = () => {
    changePage('mainMenu')
  }

  return (
    <div>
      <Board onBoardClicked={onBoardClicked}/>
      {
      workersPlacement.map((element) => {
        return <Worker key={element.id} id={element.id} top={element.top} left={element.left} showPlacesWorkerCanGoTo={showPlacesWorkerCanGoTo} workersPlacement={workersPlacement}/>
      })
      }
      {placesCanGo.map((place, i) => {
        if(!!place) {
          return <PlacesCanGo key={i} top={place.top} left={place.left} moveTheWorker={moveTheWorker}/>
        }
      })}
      <Boss forTheBossQordinate={forTheBossQordinate} workersPlacement={workersPlacement}/>
      <ShowDirectionMount forTheBossQordinate={forTheBossQordinate}/>
      <button className="nextButton menuBttuon" onClick={changePageToMenu}>منو</button>
    </div>)
}

export default GamePage
