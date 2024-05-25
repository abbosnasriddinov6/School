import React from 'react'
import './Home.scss'
import Header from '../../components/header/Header'
import Section3 from '../../components/section3/Section3'
import Section4 from '../../components/section4/Section4'
const Home = () => {
  return (
    <div>
      <Header />
      <div className='Section1'>
        <div className="container">
          <div className='background'>
            <div className='lesson'>
              <div className="lesson1">
                <h1>Drasni kichik "yumordan" boshlayman</h1>
              </div>
            </div>
            <button className='button3'>Ariza topshirish</button>
          </div>
        </div>
      </div>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Home