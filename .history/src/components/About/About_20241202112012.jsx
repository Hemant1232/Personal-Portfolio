import React from 'react'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='w-40'>
      <h2 className='text-4xl'>About Me</h2>
      <img src= "https://i.ibb.co/k89WFzY/about-us-pic.png" alt=''/>
    
        <div>

        <div>
            <p>I am eager to pursue a dynamic career in IT, leveraging my software development and UX design skills in challenging and innovative projects</p>
            <a href="#linkofresume"></a>
        </div>

        <div>
            <div>
                <div>
                    <h3>Development</h3>
                    <span>90%</span>
                </div>
                <div> Bar Chart</div>
            </div>
            <div>
                <div>
                    <h3>Programming</h3>
                    <span>90%</span>
                </div>
                <div> Bar Chart</div>
            </div>
            <div>
                <div>
                    <h3>hitesh</h3>
                    <span>90%</span>
                </div>
                <div> Bar Chart</div>
            </div>
        </div>

        </div>

        <AboutBox/>
    
    </section>
  )
}

export default About
