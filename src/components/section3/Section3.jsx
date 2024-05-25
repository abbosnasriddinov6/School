import React from 'react'
import './Section3.scss'
import { car } from '../../assets'
const Section3 = () => {
  return (
    <>
      <div className='Section3'>
        <div className='container'>
          <div className="section3">
            <div className='leftside'>
              <h1>Maktab haqida</h1>
              <p>Maktabimiz zamonaviy o'qitish texnikasi, amaliy o'rganish tajribasi va tarbiyaviy muhitni o'z ichiga olgan holda ta'limga innovatsion yondashuvni ta'minlashga qaratilgan. Rahimov School o‘quvchilarga o‘z imkoniyatlarini to‘liq ochib berish va har tomonlama barkamol shaxs bo‘lib yetishishlariga yordam beradi.</p>
              <h2>Chuqurlashtirilgan fanlar:</h2>
              <div className='h3lar'>
                <div className='english'>
                  <h3>Ingliz tili</h3>
                </div>
                <div className='math'>
                  <h3>Matematika</h3>
                </div>
              </div>
              <h2>Taʼlim tili:</h2>
              <div className='h3ozi'>
                <h3>Boshlangʻich sinfda: o'zbek va rus tillarida</h3>
              </div>
              <div className='div'>
                <h4>*5-sinfdan faqat oʻzbek tilida</h4>
              </div>
            </div>
            <div className='rightside'>
              <img src={car} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="beautiful">
            <div className="beaty">
              <div className="word">
               <img src="" alt="topolmadim" />
                <h1>Maktabimizda farzandingizning psixologik, aqliy va jismoniy rivojlanishi uchun barcha shart-sharoitlar mavjud</h1>
              </div>
              <div className="backround"></div>
              <div className="bbutton">
                <button>Batafsil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3