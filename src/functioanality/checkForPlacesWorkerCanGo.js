



export const checkForPlacesWorkerCanGo = (places, id, forTheBossQordinate) => {
  
  // checking for going outside of board

  const wa = document.getElementById('wa')
  if(wa)
{  if (wa.offsetTop <=30) {places[0].top = 0; places[0].left=0}
  if (wa.offsetTop >=630) {places[2].top = 0; places[2].left = 0}
  if (wa.offsetLeft <=30) {places[3].top = 0; places[3].left=0}
  if (wa.offsetLeft >=630) {places[1].top = 0; places[1].left=0}}


  const wb = document.getElementById('wb')
  if (wb)
{  if (wb.offsetTop <=30) {places[2].top = 0; places[2].left = 0}
  if(wb.offsetTop >=630) {places[0].top = 0; places[0].left = 0}
  if (wb.offsetLeft <=30) {places[1].top = 0; places[1].left=0}
  if (wb.offsetLeft >=630) {places[3].top = 0; places[3].left=0}}


  const ba = document.getElementById('ba')
  if(ba)
{  if (ba.offsetTop <=30 && (forTheBossQordinate.top+1) % 2 === 0) {places[0].top = 0; places[0].left=0}
  if (ba.offsetTop >=630 && (forTheBossQordinate.buttom+1) % 2 === 0) {places[2].top = 0; places[2].left = 0}
  if (ba.offsetLeft <=30 && (forTheBossQordinate.right+1) % 2 === 0) {places[3].top = 0; places[3].left=0}
  if (ba.offsetLeft >=630 && (forTheBossQordinate.left+1) % 2 === 0) {places[1].top = 0; places[1].left=0}}


  const bb = document.getElementById('bb')
  if(bb)
{  if (bb.offsetTop <=30 && (forTheBossQordinate.buttom+1) % 2 === 0) {places[2].top = 0; places[2].left=0}
  if (bb.offsetTop >=630 && (forTheBossQordinate.top+1) % 2 === 0) {places[0].top = 0; places[0].left = 0}
  if (bb.offsetLeft <=30 && (forTheBossQordinate.left+1) % 2 === 0) {places[1].top = 0; places[1].left=0}
  if (bb.offsetLeft >=630 && (forTheBossQordinate.right+1) % 2 === 0) {places[3].top = 0; places[3].left=0}}

  const ga = document.getElementById('ga')
  if(ga)
{  if (ga.offsetTop <=30 && (forTheBossQordinate.top+1) % 3 === 0) {places[0].top = 0; places[0].left=0}
  if (ga.offsetTop >=630 && (forTheBossQordinate.buttom+1) % 3 === 0) {places[2].top = 0; places[2].left = 0}
  if (ga.offsetLeft <=30 && (forTheBossQordinate.right+1) % 3 === 0) {places[3].top = 0; places[3].left=0}
  if (ga.offsetLeft >=630 && (forTheBossQordinate.left+1) % 3 === 0) {places[1].top = 0; places[1].left=0}}

  const gb = document.getElementById('gb')
  if(gb)
{  if (gb.offsetTop <=30 && (forTheBossQordinate.buttom+1) % 3 === 0) {places[2].top = 0; places[2].left=0}
  if (gb.offsetTop >=630 && (forTheBossQordinate.top+1) % 3 === 0) {places[0].top = 0; places[0].left = 0}
  if (gb.offsetLeft <=30 && (forTheBossQordinate.left+1) % 3 === 0) {places[1].top = 0; places[1].left=0}
  if (gb.offsetLeft >=630 && (forTheBossQordinate.right+1) % 3 === 0) {places[3].top = 0; places[3].left=0}}

  const pa = document.getElementById('pa')
  if(pa)
{  if (pa.offsetTop <=30 && (forTheBossQordinate.top+1) % 4 === 0) {places[0].top = 0; places[0].left=0}
  if (pa.offsetTop >=630 && (forTheBossQordinate.buttom+1) % 4 === 0) {places[2].top = 0; places[2].left = 0}
  if (pa.offsetLeft <=30 && (forTheBossQordinate.right+1) % 4 === 0) {places[3].top = 0; places[3].left=0}
  if (pa.offsetLeft >=630 && (forTheBossQordinate.left+1) % 4 === 0) {places[1].top = 0; places[1].left=0}}

  const pb = document.getElementById('pb')
  if(pb)
{  if (pb.offsetTop <=30 && (forTheBossQordinate.buttom+1) % 4 === 0) {places[2].top = 0; places[2].left=0}
  if (pb.offsetTop >=630 && (forTheBossQordinate.top+1) % 4 === 0) {places[0].top = 0; places[0].left = 0}
  if (pb.offsetLeft <=30 && (forTheBossQordinate.left+1) % 4 === 0) {places[1].top = 0; places[1].left=0}
  if (pb.offsetLeft >=630 && (forTheBossQordinate.right+1) % 4 === 0) {places[3].top = 0; places[3].left=0}}



  //checking for not dissturbing eacthpther


  const movablePaces = places.map((place) => {
    if( place.top < 639 && place.left < 639 && place.top > 7 && place.left > 7) {
      return place
    }

  })
  return movablePaces
}