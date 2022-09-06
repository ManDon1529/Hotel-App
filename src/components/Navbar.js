import React,{useState} from 'react'
import '../App.css'
function Navbar() {

    const [showLinks,setShowLinks]= useState(false)
  return (
    <div className='Navbar'>
        <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden": ""}>
        <a href="/home">Home</a>
        <a href="feb">Feedback</a>
        <a href="">About us</a>
        <a href="">Contact</a>
        </div>
        <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
        </div>
        <div className='rightSide'>
        <input type="text"  placeholder='Search...'/>
        <button>Search</button>
        </div>
    </div>
  )
}

export default Navbar