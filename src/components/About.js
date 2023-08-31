//sub components for homepage

import React from 'react'

function About() {
  return (
    <section id="about-section">
      <div className="about-description">
     <h4>Little lemon</h4>
     <h5>Chicago</h5>
     <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
      </div>
       <div className='about-image'>
         <img src="/images/Mario and Adrian A.jpg" alt="about-images"  className="imageA"  />
         <img src="/images/restaurant chef B.jpg" alt="about-images"  className="imageB" />
       </div>
    </section>
  )
}

export default About
