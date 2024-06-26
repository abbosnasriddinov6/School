import React from 'react'
import './Section13.scss'
import { clock, food } from '../../assets'
const Section13 = () => {
    return (
        <>
            <div className="Section13">
                <div className="container">
                    <div className="section13">
                        <div className="maktab">
                            <div className='vaqtga'>
                                <div className='soat'>
                                    <h1>Maktab vaqtlari</h1>
                                    <img src={clock} alt="" />
                                </div>
                                <div className='gooo'>
                                    <div className='sinflarb1'>
                                        <h2>1-11 sinflar</h2>
                                    </div>
                                    <div className='sinflarb2'>
                                        <p>soat 08:00’dan 17:15’gacha <span>tashkillashtiriladi</span></p>
                                    </div>
                                    <div className='sinflarb3'>
                                        <p>Haftada 5 kun: dushanbadan jumagacha</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rasmga'></div>
                        </div>
                        <div className="maktab">
                            <div className='rasmga1'></div>
                            <div className='vaqtga'>
                                <div className='soat2'>
                                    <img src={food} alt="" />
                                    <h1>Oshxona xizmati</h1>
                                </div>
                                <div className='gooo'>
                                    <div className='sinflarb12'>
                                        <h2>1-11 sinflar</h2>
                                    </div>
                                   <div className="divvv">
                                        <div className='sinflarb31'>
                                            <p>3 mahal - 790 000 so'm</p>
                                            <p>1 mahal - 490 000 so'm</p>
                                        </div>
                                        <div className='sinflarb31'>
                                            <p>Oshxona xizmati uchun to'lov alohida qilinadi</p>
                                            <p>O'quvchilar maktab bufetidan yegulik xarid qilishlari
                                                <span>yoki uydan olib kelishlari ham mumkin.</span></p>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section13