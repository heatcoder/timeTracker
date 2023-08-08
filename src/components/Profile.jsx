import React from 'react'

const Profile = ({time, setTime}) => {

    let interval = ["daily", "weekly", "monthly"]

    console.log(time)


   
  return (
    <div className='profile'>
      <div className="profileInfo">
        <img className='avatar' src="./public/images/image-jeremy.png" alt="" />
        <div className='profileTitle'>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
        </div>
       
      </div>
      <div className="intervalList">
    {   interval.map((item, i)=>{
        return <div onClick={()=>setTime(item.toLocaleLowerCase())} className = {`interValItem ${time === item.toLocaleLowerCase() ? "active":""}`} key={i} >{item} </div>
    })}
       </div>
    </div>
  )
}

export default Profile
