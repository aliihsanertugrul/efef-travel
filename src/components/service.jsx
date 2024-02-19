import React from 'react'
import serviceData from "./service.json"

const Service = () => {
  return (
    <section className="service_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2>Our <span>Services</span></h2>
      </div>
      <div className="row g-4">
        {serviceData.map((service)=>(

        <div className="col-sm-6 col-md-4" key={service.id}>
          <div className="box h-100">
            <div className="img-box">
            <i className={`fa-solid ${service.icon} fa-3x`}></i>
            </div>
            <div className="detail-box">
              <h5>
                {service.title}
              </h5>
              <p>
                {service.text}
              </p>
            </div>
          </div>
        </div>
        ))}
          
        </div>
      </div>
  </section>
  )
}

export default Service
