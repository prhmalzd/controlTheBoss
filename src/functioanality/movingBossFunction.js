

export const movingBossFunction = (direction, amount, waq, wbq, baq, bbq, gaq, gbq, paq, pbq) => {
  let newWAQ
  let newWBQ
  let newBBQ
  let newBAQ
  let newGAQ
  let newGBQ
  let newPAQ
  let newPBQ

    
  if(direction === 'top') {
    newWAQ = [waq[0]-50, waq[1]]
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
  }

  return {newWAQ,newWBQ, newBAQ, newBBQ , newGAQ, newGBQ, newPAQ, newPBQ}
}