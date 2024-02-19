import React, { useState } from 'react'
import travel from "./travelAdvice.json"

const Portfolio = () => {

    const [data, setData] = useState(travel)
    const [active, setActive] = useState("all")

    const filteredImage = (cat) => { 
        if(cat === "all"){
            
            setData(travel)
            setActive(cat)
        } 
        else if( cat === "historical"){
            
            const filteredHistorical = travel.filter((item)=>item.category==="historical")
            setData(filteredHistorical)
            setActive(cat)
        }
        else if( cat === "natural"){
            
            const filteredNatural = travel.filter((item)=>item.category==="natural")
            setData(filteredNatural)
            setActive(cat)
        }
        else if( cat === "entertainment"){
            
            const filteredEntertainment = travel.filter((item)=>item.category==="entertainment")
            setData(filteredEntertainment)
            setActive(cat)
        }
     }

  return (
    <section className="portfolio_section pb-5">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
            Our Tours in Istanbul
        </h2>
      </div>
      <div className="carousel-wrap ">
        <div className="filter_box">
          <nav className="owl-filter-bar">
            <a href="javascript:void(0)" className={`item ${active==="all"?"active":""}`} onClick={()=>filteredImage("all")}>All</a>
            <a href="javascript:void(0)" className={`item ${active==="historical"?"active":""}`} onClick={()=>filteredImage("historical")}>HISTORICAL</a>
            <a href="javascript:void(0)" className={`item ${active==="natural"?"active":""}`} onClick={()=>filteredImage("natural")}>NATURAL
            </a>
            <a href="javascript:void(0)" className={`item ${active==="entertainment"?"active":""}`} onClick={()=>filteredImage("entertainment")}>ENTERTAINMENT </a>
          </nav>
        </div>
      </div>
    </div>
    <div className="owl-carousel portfolio_carousel container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {data.map((item)=>(
      <div className="item col" key={item.id}>
        <div className="box">
          <div className="img-box">
            <img src={item.image} alt="" />
            <div className="btn_overlay">
              <a href={`https://www.google.com/search?q=${item.title}`} target='_blank' rel="noreferrer">
                {item.title}
              </a>
            </div>
          </div>
        </div>
      </div>
        ))}
        </div>
    </div>
  </section>
  )
}

export default Portfolio
