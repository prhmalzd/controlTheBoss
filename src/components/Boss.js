import { useEffect, useState } from 'react'
import './boss.css'
import { movingBossFunction } from '../functioanality/movingBossFunction'


const Boss = ({forTheBossQordinate}) => {
  const [waq, setWAQ] = useState([30,330])
  const [wbq, setWBQ] = useState([80,330])
  const [baq, setBAQ] = useState([130,330])
  const [bbq, setBBQ] = useState([180,330])
  const [gaq, setGAQ] = useState([230,330])
  const [gbq, setGBQ] = useState([280,330])
  const [paq, setPAQ] = useState([330,330])
  const [pbq, setPBQ] = useState([380,330])
  
  useEffect(() => {
    Object.keys(forTheBossQordinate).forEach((direction) => {
      if (forTheBossQordinate[direction] >=1) moveTheGodDamnBoss(direction, forTheBossQordinate[direction])
    })
  }, [forTheBossQordinate])

  const moveTheGodDamnBoss = (direction, amount) => {

    const newqordinateforBnA = movingBossFunction(direction, amount,  waq, wbq,baq, bbq, gaq, gbq, paq, pbq)

    setWAQ([newqordinateforBnA.newWAQ[0], newqordinateforBnA.newWAQ[1]])
    setWBQ([newqordinateforBnA.newWBQ[0], newqordinateforBnA.newWBQ[1]])

    if(newqordinateforBnA.newBAQ) setBAQ([newqordinateforBnA.newBAQ[0], newqordinateforBnA.newBAQ[1]])
    if(newqordinateforBnA.newBBQ) setBBQ([newqordinateforBnA.newBBQ[0], newqordinateforBnA.newBBQ[1]])

    if(newqordinateforBnA.newGAQ) setGAQ([newqordinateforBnA.newGAQ[0], newqordinateforBnA.newGAQ[1]])
    if(newqordinateforBnA.newGBQ) setGBQ([newqordinateforBnA.newGBQ[0], newqordinateforBnA.newGBQ[1]])

    if(newqordinateforBnA.newPAQ) setPAQ([newqordinateforBnA.newPAQ[0], newqordinateforBnA.newPAQ[1]])
    if(newqordinateforBnA.newPBQ) setPBQ([newqordinateforBnA.newPBQ[0], newqordinateforBnA.newPBQ[1]])
  }

  return(
    <div>
    <div id='wa' className="anb wa" style={{top:waq[0]+'px', left:waq[1]+'px'}}></div>
    <div id='wb' className="anb wb" style={{top:wbq[0]+'px', left:wbq[1]+'px'}}></div>
    <div id='ba' className="anb ba" style={{top:baq[0]+'px', left:baq[1]+'px'}}></div>
    <div id='bb' className="anb bb" style={{top:bbq[0]+'px', left:bbq[1]+'px'}}></div>
    <div id='ga' className="anb ga" style={{top:gaq[0]+'px', left:gaq[1]+'px'}}></div>
    <div id='gb' className="anb gb" style={{top:gbq[0]+'px', left:gbq[1]+'px'}}></div>
    <div id='pa' className="anb pa" style={{top:paq[0]+'px', left:paq[1]+'px'}}></div>
    <div id='pb' className="anb pb" style={{top:pbq[0]+'px', left:pbq[1]+'px'}}></div>
    </div>
  )

}

export default Boss