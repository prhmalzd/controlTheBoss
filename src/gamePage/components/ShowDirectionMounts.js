import './showDirectionMount.css'

const ShowDirectionMount = ({forTheBossQordinate}) => {

  return (
    <div className="directionShowBox">
      <div>{`Up: ${forTheBossQordinate.top}`}</div>
      <div>{`Right: ${forTheBossQordinate.right}`}</div>
      <div>{`Down: ${forTheBossQordinate.buttom}`}</div>
      <div>{`Left: ${forTheBossQordinate.left}`}</div>
    </div>
  )

}

export default ShowDirectionMount