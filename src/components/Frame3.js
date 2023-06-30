import React from 'react';
import './Frame3.css'
import img1 from './Frame3 media/img-1.png'
import img2 from './Frame3 media/img-2.png'
import sm1 from './Frame3 media/sm1.png'
import sm2 from './Frame3 media/sm2.png'
import cir from './Frame3 media/circle.png'

const Frame3 = () => {
  return (
    <div className='frame3'>
      <div className="text-3">
        <p className='heading-text-3'>Learn how to launch a successful podcast</p>
        <p className="details">
          Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <button className='btn'><p>Sign Up Now</p> </button>
      </div>
      <div className="imgs">
        <img src={img1} alt="" id='img1' />
        <img src={img2} alt="" id='img2' />
        <div>
        <img src={sm1} alt="" id='sm1' />
        <img src={sm2} alt="" id='sm2' />
        </div>
      </div>

    </div>
  );
}

export default Frame3;
