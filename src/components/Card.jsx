import React from 'react'
import slugify from 'slugify'

const Card = ({item, time}) => {

  let slug = slugify(item.title,{lower:true})
  return (
    //npm install slugify to remove capital letter and space for the dynamic classes
    <div className= {`card ${slug}` }>
      <div className="cardContent">
      <div className="activity">
        <h2>{item.title}</h2>
        <img src="/images/icon-ellipsis.svg" alt="" />
      </div>

      <div className="activity-info">
        <h2>{item.timeframes[time].current} Hrs</h2>
        <p>Last {time === "daily" ? "Day" : time === "weekly" ?  "Week"  : "Month"} - {item.timeframes[time].previous} hrs </p>
      </div>
      </div>

        
      
    </div>
  )
}

export default Card
