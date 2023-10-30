

export const movingBossFunction = (direction, amount,workersPlacement, waq, wbq, baq, bbq, gaq, gbq, paq, pbq) => {
  const allQorBeforeMove = [
    {
      top: waq[0],
      left: waq[1]
    },
    {
      top: wbq[0],
      left: wbq[1]
    },
    {
      top: baq[0],
      left: baq[1]
    },
    {
      top: bbq[0],
      left: bbq[1]
    },
    {
      top: gaq[0],
      left: gaq[1]
    },
    {
      top: gbq[0],
      left: gbq[1]
    },
    {
      top: paq[0],
      left: paq[1]
    },
    {
      top: pbq[0],
      left: pbq[1]
    }
  ]
  let newWAQ = waq
  let newWBQ = wbq
  let newBBQ = bbq
  let newBAQ = baq
  let newGAQ = gaq
  let newGBQ = gbq
  let newPAQ = paq
  let newPBQ = pbq

  //checking qordinates before move
  
  if(direction === 'top') {

    newWAQ = [waq[0]-50,waq[1]]
    newWBQ = [wbq[0]+50, wbq[1]]
    
    if(amount && amount % 2 === 0) {
      newBAQ = [baq[0]-50,baq[1]]
      newBBQ = [bbq[0]+50, bbq[1]]
    }

    if(amount && amount % 3 ===0) {
      newGAQ = [gaq[0]-50,gaq[1]]
      newGBQ = [gbq[0]+50,gbq[1]]
    }
    
    if(amount && amount % 4 ===0) {
      newPAQ = [paq[0]-50,paq[1]]
      newPBQ = [pbq[0]+50,pbq[1]]
    }
    
    allQorBeforeMove.map ((qor) => {
      if(qor.top === waq[0]-50 && qor.left === waq[1]) newWAQ = [waq[0],waq[1]]
      if(qor.top === wbq[0]+50 && qor.left === wbq[1]) newWBQ = [wbq[0],wbq[1]]
      if(qor.top === baq[0]-50 && qor.left === baq[1]) newBAQ = [baq[0],baq[1]]
      if(qor.top === bbq[0]+50 && qor.left === bbq[1]) newBBQ = [bbq[0],bbq[1]]
      if(qor.top === gaq[0]-50 && qor.left === gaq[1]) newGAQ = [gaq[0],gaq[1]]
      if(qor.top === gbq[0]+50 && qor.left === gbq[1]) newGBQ = [gbq[0],gbq[1]]
      if(qor.top === paq[0]-50 && qor.left === paq[1]) newPAQ = [paq[0],paq[1]]
      if(qor.top === pbq[0]+50 && qor.left === pbq[1]) newPBQ = [pbq[0],pbq[1]]
    })
      
  }
  if(direction === 'right') {

    newWAQ = [waq[0], waq[1]-50]
    newWBQ = [wbq[0], wbq[1]+50]
    
    if(amount && amount % 2 === 0) {
      newBAQ = [baq[0],baq[1]-50]
      newBBQ = [bbq[0], bbq[1]+50]
    }
    
    if(amount && amount % 3 ===0) {
      newGAQ = [gaq[0],gaq[1]-50]
      newGBQ = [gbq[0],gbq[1]+50]
    }
    
    if(amount && amount % 4 ===0) {
      newPAQ = [paq[0],paq[1]-50]
      newPBQ = [pbq[0],pbq[1]+50]
    }
    
    allQorBeforeMove.map ((qor) => {
      if(qor.top === waq[0] && qor.left === waq[1]-50) newWAQ = [waq[0],waq[1]]
      if(qor.top === wbq[0] && qor.left === wbq[1]+50) newWBQ = [wbq[0],wbq[1]]
      if(qor.top === baq[0] && qor.left === baq[1]-50) newBAQ = [baq[0],baq[1]]
      if(qor.top === bbq[0] && qor.left === bbq[1]+50) newBBQ = [bbq[0],bbq[1]]
      if(qor.top === gaq[0] && qor.left === gaq[1]-50) newGAQ = [gaq[0],gaq[1]]
      if(qor.top === gbq[0] && qor.left === gbq[1]+50) newGBQ = [gbq[0],gbq[1]]
      if(qor.top === paq[0] && qor.left === paq[1]-50) newPAQ = [paq[0],paq[1]]
      if(qor.top === pbq[0] && qor.left === pbq[1]+50) newPBQ = [pbq[0],pbq[1]]
    })
  }
  if(direction === 'buttom') {

    newWAQ = [waq[0]+50, waq[1]]
    newWBQ = [wbq[0]-50, wbq[1]]
    
    if(amount && amount % 2 === 0) {
      newBAQ = [baq[0]+50,baq[1]]
      newBBQ = [bbq[0]-50, bbq[1]]
    }

    if(amount && amount % 3 ===0) {
      newGAQ = [gaq[0]+50,gaq[1]]
      newGBQ = [gbq[0]-50,gbq[1]]
      }
      
      if(amount && amount % 4 ===0) {
        newPAQ = [paq[0]+50,paq[1]]
        newPBQ = [pbq[0]-50,pbq[1]]
      }
      
      allQorBeforeMove.map ((qor) => {
        if(qor.top === waq[0]+50 && qor.left === waq[1]) newWAQ = [waq[0],waq[1]]
        if(qor.top === wbq[0]-50 && qor.left === wbq[1]) newWBQ = [wbq[0],wbq[1]]
        if(qor.top === baq[0]+50 && qor.left === baq[1]) newBAQ = [baq[0],baq[1]]
        if(qor.top === bbq[0]-50 && qor.left === bbq[1]) newBBQ = [bbq[0],bbq[1]]
        if(qor.top === gaq[0]+50 && qor.left === gaq[1]) newGAQ = [gaq[0],gaq[1]]
        if(qor.top === gbq[0]-50 && qor.left === gbq[1]) newGBQ = [gbq[0],gbq[1]]
        if(qor.top === paq[0]+50 && qor.left === paq[1]) newPAQ = [paq[0],paq[1]]
        if(qor.top === pbq[0]-50 && qor.left === pbq[1]) newPBQ = [pbq[0],pbq[1]]
      })
  }
  if(direction === 'left') {
    
    newWAQ = [waq[0], waq[1]+50]
    newWBQ = [wbq[0], wbq[1]-50]
    
    if(amount && amount % 2 === 0) {
      newBAQ = [baq[0],baq[1]+50]
      newBBQ = [bbq[0], bbq[1]-50]
    }
    
    if(amount && amount % 3 ===0) {
      newGAQ = [gaq[0],gaq[1]+50]
      newGBQ = [gbq[0],gbq[1]-50]
    }
    
    if(amount && amount % 4 ===0) {
      newPAQ = [paq[0],paq[1]+50]
      newPBQ = [pbq[0],pbq[1]-50]
    }
    
    allQorBeforeMove.map ((qor) => {
      if(qor.top === waq[0] && qor.left === waq[1]+50) newWAQ = [waq[0],waq[1]]
      if(qor.top === wbq[0] && qor.left === wbq[1]-50) newWBQ = [wbq[0],wbq[1]]
      if(qor.top === baq[0] && qor.left === baq[1]+50) newBAQ = [baq[0],baq[1]]
      if(qor.top === bbq[0] && qor.left === bbq[1]-50) newBBQ = [bbq[0],bbq[1]]
      if(qor.top === gaq[0] && qor.left === gaq[1]+50) newGAQ = [gaq[0],gaq[1]]
      if(qor.top === gbq[0] && qor.left === gbq[1]-50) newGBQ = [gbq[0],gbq[1]]
      if(qor.top === paq[0] && qor.left === paq[1]+50) newPAQ = [paq[0],paq[1]]
      if(qor.top === pbq[0] && qor.left === pbq[1]-50) newPBQ = [pbq[0],pbq[1]]
    })
  }

  //checking qordinates that maybe match after moving pieces

  if (
    (newPBQ[0] === newPAQ[0] && newPBQ[1] === newPAQ[1]) ||
    (newPBQ[0] === newGBQ[0] && newPBQ[1] === newGBQ[1]) ||
    (newPBQ[0] === newGAQ[0] && newPBQ[1] === newGAQ[1]) ||
    (newPBQ[0] === newBBQ[0] && newPBQ[1] === newBBQ[1]) ||
    (newPBQ[0] === newBAQ[0] && newPBQ[1] === newBAQ[1]) ||
    (newPBQ[0] === newWBQ[0] && newPBQ[1] === newWBQ[1]) ||
    (newPBQ[0] === newWAQ[0] && newPBQ[1] === newWAQ[1])
    ) newPBQ = [pbq[0],pbq[1]]

  if (
    (newPAQ[0] === newGBQ[0] && newPAQ[1] === newGBQ[1]) ||
    (newPAQ[0] === newGAQ[0] && newPAQ[1] === newGAQ[1]) ||
    (newPAQ[0] === newBBQ[0] && newPAQ[1] === newBBQ[1]) ||
    (newPAQ[0] === newBAQ[0] && newPAQ[1] === newBAQ[1]) ||
    (newPAQ[0] === newWBQ[0] && newPAQ[1] === newWBQ[1]) ||
    (newPAQ[0] === newWAQ[0] && newPAQ[1] === newWAQ[1])
    ) newPAQ = [paq[0],paq[1]]

  if (
    (newGBQ[0] === newGAQ[0] && newGBQ[1] === newGAQ[1]) ||
    (newGBQ[0] === newBBQ[0] && newGBQ[1] === newBBQ[1]) ||
    (newGBQ[0] === newBAQ[0] && newGBQ[1] === newBAQ[1]) ||
    (newGBQ[0] === newWBQ[0] && newGBQ[1] === newWBQ[1]) ||
    (newGBQ[0] === newWAQ[0] && newGBQ[1] === newWAQ[1])
    ) newGBQ = [gbq[0],gbq[1]]

  if (
    (newGAQ[0] === newBBQ[0] && newGAQ[1] === newBBQ[1]) ||
    (newGAQ[0] === newBAQ[0] && newGAQ[1] === newBAQ[1]) ||
    (newGAQ[0] === newWBQ[0] && newGAQ[1] === newWBQ[1]) ||
    (newGAQ[0] === newWAQ[0] && newGAQ[1] === newWAQ[1])
    ) newGAQ = [gaq[0],gaq[1]]

  if (
    (newBBQ[0] === newBAQ[0] && newBBQ[1] === newBAQ[1]) ||
    (newBBQ[0] === newWBQ[0] && newBBQ[1] === newWBQ[1]) ||
    (newBBQ[0] === newWAQ[0] && newBBQ[1] === newWAQ[1])
    ) newBBQ = [bbq[0],bbq[1]]

  if (
    (newBAQ[0] === newWBQ[0] && newBAQ[1] === newWBQ[1]) ||
    (newBAQ[0] === newWAQ[0] && newBAQ[1] === newWAQ[1])
    ) newBAQ = [baq[0],baq[1]]


  if(newWBQ[0] === newWAQ[0] && newWBQ[1] === newWAQ[1]) newWBQ = [wbq[0],wbq[1]]
  

  //checking boss and assisstant qordinates with workers

  workersPlacement.map((obj) => {
    if(newPBQ[0] === obj.top-7 && newPBQ[1] === obj.left-7) newPBQ=[pbq[0],pbq[1]]
    if(newPAQ[0] === obj.top-7 && newPAQ[1] === obj.left-7) newPAQ=[paq[0],paq[1]]
    if(newGBQ[0] === obj.top-7 && newGBQ[1] === obj.left-7) newGBQ=[gbq[0],gbq[1]]
    if(newGAQ[0] === obj.top-7 && newGAQ[1] === obj.left-7) newGAQ=[gaq[0],gaq[1]]
    if(newBBQ[0] === obj.top-7 && newBBQ[1] === obj.left-7) newBBQ=[bbq[0],bbq[1]]
    if(newBAQ[0] === obj.top-7 && newBAQ[1] === obj.left-7) newBAQ=[baq[0],baq[1]]
    if(newWBQ[0] === obj.top-7 && newWBQ[1] === obj.left-7) newWBQ=[wbq[0],wbq[1]]
    if(newWAQ[0] === obj.top-7 && newWAQ[1] === obj.left-7) newWAQ=[waq[0],waq[1]]
  })

  return {newWAQ,newWBQ, newBAQ, newBBQ , newGAQ, newGBQ, newPAQ, newPBQ}
}