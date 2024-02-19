import React from 'react'
import imgAbout from "./img/aboutImg.jpg"


const About = () => {
  return (
    <section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>Welcome to <span>EFEF Luxury Travel</span></h2>
            </div>
            <p>
            Situated in close proximity to Istanbul Airport, our esteemed company specializes in VIP transportation. Boasting a fleet of luxurious vehicles and skilled chauffeurs, we ensure a refined travel experience. Elevate your journey with our exclusive services, providing unparalleled comfort, style, and reliability for our valued clientele.
            </p>
            {/* <a href="">
              Read More
            </a> */}
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="img-box">
            <img src={imgAbout} alt="about" className='aboutImg' />
          </div>
        </div>
      </div>
      
    </div>
  </section>

  )
}

export default About
