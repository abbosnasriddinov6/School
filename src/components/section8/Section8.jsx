import React from 'react'
import './Section8.scss'
import { acceptance, blog, clock, food, money, teacher } from '../../assets'
const Section8 = () => {
    return (
        <>
            <div className='Section8'>
                <div className="container">
                    <div className="section8">
                        <div className='cardlarb1'>
                            <div className='clock'>
                                <h1>Maktab vaqtlari</h1>
                                <img src={clock} alt="" />
                            </div>
                            <div className='food'>
                                <img src={food} alt="" />
                                <h1>Oshxona xizmati</h1>
                            </div>
                        </div>
                        <div className='cardlarb2'>
                            <h1>Maktabimiz </h1>
                            <h1>haqida</h1>
                        </div>
                        <div className='cardlarb3'>
                            <h1>Narxlar</h1>
                            <img src={money} alt="" />
                            <h1>Stipendiyalar</h1>
                        </div>
                        <div className='cardlarb4'>
                            <h1>O'qituvchilar</h1>
                            <img src={teacher} alt="" />
                        </div>
                        <div className='cardlarb5'>
                            <h1>Qabul jarayoni</h1>
                            <img src={acceptance} alt="" />

                        </div>
                        <div className='cardlarb6'>
                            <h1>Blog</h1>
                            <img src={blog} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section8