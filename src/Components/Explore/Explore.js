import React from 'react'
import './Explore.css'
function Explore() {
  return (
    <div className='explore'>
        <div className='explore-content'>
            <div className='explore-image'>
                <img src='./logo192.png' alt='Hero' />
            </div>
            <div className='explore-text'>
                <h1 style={{ color: 'DodgerBlue' }}>Start Exploring</h1>
                <p>At CodersCompass, we understand the challenges faced by students in keeping track of competitive programming contests across various platforms. That's why we've developed a robust and adaptable web scraping solution tailored exclusively for competitive programming aficionados like you. Our platform is designed to extract pivotal data, statistics, and problem sets from leading competitive programming platforms, making it easier for you to stay updated and engaged with the latest contests.</p> 
            </div>
        </div>
    </div>
  )
}

export default Explore