import './mainmenu.css'


const MainMenu = ({changePage}) => {

  const onClickPlayButton = () => {
    changePage('gamePage')
  }
  const onClickHintButton = () => {
    changePage('hintPage')
  }
  return (
    <div className="mainMenu">
      <h1 className="logo">Control the Boss</h1>
      <button className="playButton" onClick={onClickPlayButton}>شروع بازی</button>
      <button className="playButton" onClick={onClickHintButton}>آموزش</button>
    </div>
  )
}

export default MainMenu