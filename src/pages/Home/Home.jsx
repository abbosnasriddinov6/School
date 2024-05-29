import React from 'react'
import './Home.scss'
import Header from '../../components/header/Header'
import Section3 from '../../components/section3/Section3'
import Section4 from '../../components/section4/Section4'
import Section7 from '../../components/section7/Section7'
import Section8 from '../../components/section8/Section8'
import Section12 from '../../components/section12/Section12'
import Section13 from '../../components/section13/Section13'
<<<<<<< HEAD
import Qabul from '../../components/qabuljarayoni/Qabul'
import Stipendiya2 from '../../components/stipendiay2/Stipendiya2'
import Infra from '../../components/infratuzilma/Infra'
=======
import SFooter from "../../components/footer/SFooter.jsx";


>>>>>>> 515ed4e636941c41aa147b5ef5677bc900e81013
const Home = () => {
  return (
    <div>
      <Header />
      <div className='Section1'>
        <div className="div">
          <div className="container">
            <div className='background'>
              <h1>Farzandingiz iste’dodini <span>kashf qilamiz</span></h1>
              <h4>Birinchi kundanoq farzandingizning iste’dodi qaysi yo’nalishdaligini tekshiramiz: <span>kreativ, analitik yoki ishbilarmon</span></h4>
              <div className='blar'>
                <button className='ariza'>Ariza topshirish</button>
                <button className='batafsil'>Batafsil</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Section3/>
      <Section8/>
      <Section12/>
      <Section4 />
      <Section7/>
      <Section13/>
<<<<<<< HEAD
      <Qabul/>
      <Stipendiya2/>
      <Infra/>
=======
        <SFooter/>
>>>>>>> 515ed4e636941c41aa147b5ef5677bc900e81013
    </div>
  )
}

export default Home