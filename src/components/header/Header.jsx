import React from 'react'
import './Header.scss'
import { logo } from '../../assets'
const Header = () => {
  return (
    <>
      <div className='head'>
        <div className='container'>
          <div className='Header'>
            <div className='Logo'>
              <img src={logo} alt="" />
            </div>
            <ul>
              <li>Maktab haqida</li>
              <li>Stipendiyalar</li>
              <li>Narxlar</li>
              <li>Qabuk Jarayoni</li>
              <li>Bog'lanish</li>
              <li>Portal</li>
            </ul>
            <div className='buttons'>
              <button className='button1'>+998 93 596 05 06</button>
              <button className='button2'>Ru</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header