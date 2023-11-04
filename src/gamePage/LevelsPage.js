import { useState } from 'react'
import '../hintPage/hintPage.css'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import image7 from './images/7.png'
import image8 from './images/8.png'
import image9 from './images/9.png'

const LevelsPage = ({changePage}) => {
  const [levelPageNumber, setlevelPageNumber] = useState(1)

  const changelevelPageNumberF = () => {
    const nextPage = levelPageNumber +1
    setlevelPageNumber(nextPage)
  }
  const changelevelPageNumberB = () => {
    const nextPage = levelPageNumber -1
    setlevelPageNumber(nextPage)
  }

  return (
  <div className ='hintPageBox'>
    {
      levelPageNumber === 1 &&
      <div className='level'>
        <img src={image1} alt='level1'/>
        <p>هدف این مرحله. شما باید مهره معاون سفید رو برسونین به جای مشخص شده</p>
      </div>
    }
    {
      levelPageNumber === 2 &&
      <div className='level'>
        <img src={image2} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره رییس سفید رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 3 &&
      <div className='level'>
        <img src={image3} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره معاون مشکی رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 4 &&
      <div className='level'>
        <img src={image4} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره رییس مشکی رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 5 &&
      <div className='level'>
        <img src={image5} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره معاون سبز رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 6 &&
      <div className='level'>
        <img src={image6} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره رییس سبز رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 7 &&
      <div className='level'>
        <img src={image7} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره معاون آبی رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 8 &&
      <div className='level'>
        <img src={image8} alt='level1'/>
        <p>هدف این مرحله. شما فقط باید مهره رییس آبی رو برسونین به جای مشخص شده</p>
      </div>
    }
        {
      levelPageNumber === 9 &&
      <div className='level'>
        <img src={image9} alt='level1'/>
        <p>آخرین مرحله. شما باید کارمندهارو برسونین به جای مشخص شده درحالی که بقیه مهره ها هم سر جاهاشون باشن</p>
      </div>
    }
    <div>
    {(levelPageNumber > 1)&& <button className='nextButton' onClick={changelevelPageNumberB}>قبلی</button>}
    {levelPageNumber < 9 && <button className='nextButton' onClick={changelevelPageNumberF}>بعدی</button>}
    </div>
  </div>
  )

}

export default LevelsPage