import React from 'react'
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <div className='Landingpage'>
      <div className='LandingPage-1'>
        <img className='LandingPage-img' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
      </div>
      <div className='LandingPage-2'>
        <div>
          <h1 className='LandingPage-h1'>10x Team 04</h1>
          <Link to="/Postview"><button className='LandingPage-button'>enter</button></Link>
        </div>
      </div>
    </div>
  )
}
