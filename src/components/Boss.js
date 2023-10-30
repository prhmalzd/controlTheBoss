import { useEffect, useState } from 'react'
import './boss.css'
import { movingBossFunction } from '../functioanality/movingBossFunction'


const Boss = ({forTheBossQordinate , workersPlacement}) => {
  const [waq, setWAQ] = useState([180,330])
  const [wbq, setWBQ] = useState([])
  const [baq, setBAQ] = useState([])
  const [bbq, setBBQ] = useState([])
  const [gaq, setGAQ] = useState([])
  const [gbq, setGBQ] = useState([])
  const [paq, setPAQ] = useState([])
  const [pbq, setPBQ] = useState([])
  const [showwb,setShowwb] = useState(false)
  const [showba,setShowba] = useState(false)
  const [showbb,setShowbb] = useState(false)
  const [showga,setShowga] = useState(false)
  const [showgb,setShowgb] = useState(false)
  const [showpa,setShowpa] = useState(false)
  const [showpb,setShowpb] = useState(false)
  
  useEffect(() => {
    Object.keys(forTheBossQordinate).forEach((direction) => {
      if (forTheBossQordinate[direction] >=1) moveTheGodDamnBoss(direction, forTheBossQordinate[direction])
    })


  }, [forTheBossQordinate])

  const moveTheGodDamnBoss = (direction, amount) => {

    const newqordinateforBnA = movingBossFunction(direction, amount,workersPlacement,  waq, wbq,baq, bbq, gaq, gbq, paq, pbq)

    setWAQ([newqordinateforBnA.newWAQ[0], newqordinateforBnA.newWAQ[1]])
    setWBQ([newqordinateforBnA.newWBQ[0], newqordinateforBnA.newWBQ[1]])

    if(newqordinateforBnA.newBAQ) setBAQ([newqordinateforBnA.newBAQ[0], newqordinateforBnA.newBAQ[1]])
    if(newqordinateforBnA.newBBQ) setBBQ([newqordinateforBnA.newBBQ[0], newqordinateforBnA.newBBQ[1]])

    if(newqordinateforBnA.newGAQ) setGAQ([newqordinateforBnA.newGAQ[0], newqordinateforBnA.newGAQ[1]])
    if(newqordinateforBnA.newGBQ) setGBQ([newqordinateforBnA.newGBQ[0], newqordinateforBnA.newGBQ[1]])

    if(newqordinateforBnA.newPAQ) setPAQ([newqordinateforBnA.newPAQ[0], newqordinateforBnA.newPAQ[1]])
    if(newqordinateforBnA.newPBQ) setPBQ([newqordinateforBnA.newPBQ[0], newqordinateforBnA.newPBQ[1]])

    if(newqordinateforBnA.newWAQ[0] === 330 && newqordinateforBnA.newWAQ[1] === 480 && !showwb) {
      setShowwb(true)
      setWBQ([30,330])
    }
    if(newqordinateforBnA.newWBQ[0] === 180 && newqordinateforBnA.newWBQ[1] === 480 && !showba) {
      setShowba(true)
      setBAQ([30,330])
    }
    if(newqordinateforBnA.newBAQ[0] === 180 && newqordinateforBnA.newBAQ[1] === 330 && !showbb) {
      setShowbb(true)
      setBBQ([30,330])
    }
    if(newqordinateforBnA.newBBQ[0] === 180 && newqordinateforBnA.newBBQ[1] === 180 && !showga) {
      setShowga(true)
      setGAQ([30,330])
    }
    if(newqordinateforBnA.newGAQ[0] === 330 && newqordinateforBnA.newGAQ[1] === 180 && !showgb) {
      setShowgb(true)
      setGBQ([30,330])
    }
    if(newqordinateforBnA.newGBQ[0] === 480 && newqordinateforBnA.newGBQ[1] === 180 && !showpa) {
      setShowpa(true)
      setPAQ([30,330])
    }
    if(newqordinateforBnA.newPAQ[0] === 480 && newqordinateforBnA.newPAQ[1] === 330 && !showpb) {
      setShowpb(true)
      setPBQ([30,330])
    }

  }
  return(
    <div>
    <div id='wa' className="anb wa" style={{top:waq[0]+'px', left:waq[1]+'px'}}></div>
    {showwb && <div id='wb' className="anb wb" style={{top:wbq[0]+'px', left:wbq[1]+'px'}}></div>}
    {showba && <div id='ba' className="anb ba" style={{top:baq[0]+'px', left:baq[1]+'px'}}></div>}
    {showbb && <div id='bb' className="anb bb" style={{top:bbq[0]+'px', left:bbq[1]+'px'}}></div>}
    {showga && <div id='ga' className="anb ga" style={{top:gaq[0]+'px', left:gaq[1]+'px'}}></div>}
    {showgb && <div id='gb' className="anb gb" style={{top:gbq[0]+'px', left:gbq[1]+'px'}}></div>}
    {showpa && <div id='pa' className="anb pa" style={{top:paq[0]+'px', left:paq[1]+'px'}}></div>}
    {showpb && <div id='pb' className="anb pb" style={{top:pbq[0]+'px', left:pbq[1]+'px'}}></div>}
    </div>
  )

}

export default Boss