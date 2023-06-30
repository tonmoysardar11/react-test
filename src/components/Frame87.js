import React from 'react'
import './Frame87.css'
import bg from './Frame87 Media/Polygon 2.png'
import btn from './Frame87 Media/btn.png'

const Frame87 = () => {
    return (
        <div className='frame87'>
            <img src={bg} alt="" id='bg' />
            <div className="content">
                <p className="heading87">
                    We have what you’re looking for
                </p>
                <p className="text87">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a
                </p>
                <button className='btn'><p>Get Started Now</p> </button>
                <footer>
                    <hr />
                    <div className="footerarea">
                        <p className="footertext">All Right Reserved @Copyright 2023</p>
                        <div className="footerright">
                            <div className="footermenu">
                                <p>Terms of Services</p>
                                <p>Privacy Policy</p>
                                <p>Product</p>
                            </div>
                            <div className="footerbtn">
                                <img src={btn} alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        </div>
    )
}

export default Frame87
