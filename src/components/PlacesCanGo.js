const PlacesCanGo = ({top, left, moveTheWorker}) => {

  const onClickPlacesCanGo = (event) => {
    const placeQordinate = [{top: event.target.offsetTop, left: event.target.offsetLeft}]
    moveTheWorker(placeQordinate)
  }

  return (
    <div className="placesCanGo" style={{top: top + 'px', left: left + 'px'}} onClick = {onClickPlacesCanGo}>

    </div>
  )
}

export default PlacesCanGo