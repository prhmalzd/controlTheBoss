import styles from './board.module.css'
import { dots } from '../infos/infos'

const boxes = [...Array(144).keys()]
const OneBox = () => {return <div className= {styles.oneSquareInBoard}></div>}

const Board = ({onBoardClicked}) => {
  const onBoardClick = (event) => {
    onBoardClicked()
  }
  return (<div className={styles.mainBoard} onClick={onBoardClick}>
    {boxes.map((elemnet) => {
      return <OneBox key={elemnet}/>
    })}
    {dots.map((dot) => {
      return <div key={dot.id} className={styles.dot} style={{top:dot.top, left:dot.left}}></div>
    })
    }
  </div>)
}

export default Board
