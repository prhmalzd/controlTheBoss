import { useState } from 'react'
import './worker.css'


const Worker = ({id, top, left, showPlacesWorkerCanGoTo, workersPlacement}) => {
  const [wow, setWow] = useState(0)

  const onClick = (event) => {
    const topQordinate = event.target.offsetTop
    const leftQordinate = event.target.offsetLeft

    const placesCanGo = [
      {top: topQordinate-50 , left: leftQordinate},
      {top: topQordinate, left: leftQordinate + 50},
      {top: topQordinate + 50, left: leftQordinate},
      {top: topQordinate, left: leftQordinate - 50}
    ]
    showPlacesWorkerCanGoTo(placesCanGo, id)
  }

  return (
    <div
      onClick={onClick}
      className={'worker'}
      style={{top: top+'px', left: left+'px'}}>
    </div>
  )
}

export default Worker
