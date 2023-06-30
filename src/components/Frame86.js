import React from 'react'
import './Frame86.css'
import profile from './Frame86 media/Lolla 1.png'
import star from './Frame86 media/star.png'
import arrow from './Frame86 media/Arrow.png'


const Frame86 = () => {
  // let length=document.querySelector('.container')
  // let width = length.clientWidth;
  const prev = () => {
    // length.scrollLeft = length.scrollLeft - width;
  }
  const next = () => {
    // length.scrollLeft = length.scrollLeft + width;
  }

  return (
    <div className='frame86'>
      <p className="heading86">
        Review from Customers
      </p>
      <p className="text86">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
      </p>
      <div className="carousel">
        <img src={arrow} alt="" id='left' onClick={prev} /><img src={arrow} alt="" id='right' onClick={next} />

        <div className="container">
          <div className="card86">
            <div className="profile">
              <img src={profile} alt="" />
              <div className="profiledetails">
                <p className="name">Lolla Smith</p>
                <p className="company">Microsoft</p>
                <div className="review"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
              </div>

            </div>
            <p className="comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>
          <div className="card86">
            <div className="profile">
              <img src={profile} alt="" />
              <div className="profiledetails">
                <p className="name">Lolla Smith</p>
                <p className="company">Microsoft</p>
                <div className="review"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
              </div>

            </div>
            <p className="comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>
          <div className="card86">
            <div className="profile">
              <img src={profile} alt="" />
              <div className="profiledetails">
                <p className="name">Lolla Smith</p>
                <p className="company">Microsoft</p>
                <div className="review"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
              </div>

            </div>
            <p className="comment">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Frame86
