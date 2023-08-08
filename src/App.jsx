import Profile from "./components/Profile"
import data from "../data.json"
import Card from "./components/Card"
import { useState } from "react"

function App() {


const [time, setTime]=useState("daily")

  return (
 <div className="app">
  <Profile time={time} setTime={setTime}  />

  {
data.map((item, index)=>{
return <Card time={time} setTime={setTime} key = {index} item={item}/>
})
}

 </div>
  )
}

export default App
