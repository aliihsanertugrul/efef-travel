import React, { useState } from 'react'
import { Collapse, Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  const [showNav,setShowNav]= useState(false)

  return (
      <>
        <header className="header_section">
      <div className="header_top">
        <div className="container-fluid header_top_container">
          <Link className="navbar-brand " to="/"> 
              <Image src='/Images/EFEF-logo.jpg' width="50px"/>
          </Link>
          <div className="contact_nav">
            <a href="https://maps.app.goo.gl/GNPj6gzkDM5tJnyF6" target='_blank' rel="noreferrer">
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>
                Call : +90 530 580  39 39
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                reservation@efefluxurytravel.com
              </span>
            </a>
          </div>
          {/* <div className="social_box">
            <a href="">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div> */}
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand navbar_brand_mobile" to="/"> 
            <Image src='/Images/EFEF-logo.jpg' width="50px"/>
             </Link>

            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={`${showNav?"true":"false"}`} aria-label="Toggle navigation"  onClick={()=>showNav?setShowNav(false):setShowNav(true)} sel>
              <span className=""></span>
            </button>

            <Collapse in={showNav} dimension="height" className={` navbar-collapse ${showNav?"show":""}  `} id="navbarSupportedContent" >
              <ul className="navbar-nav d-lg-flex align-items-center justify-content-center gap-1">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={()=>setShowNav(false)}>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service" onClick={()=>setShowNav(false)}>Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={()=>setShowNav(false)}> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio" onClick={()=>setShowNav(false)}>Our Tours</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={()=>setShowNav(false)}>Contact Us</Link>
                </li>
                {/* <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form> */}
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </header>
      </>
  )
}

export default Header
