import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis repellat neque aliquid veritatis atque recusandae, quo ab perspiciatis! Incidunt veritatis nostrum expedita ea ducimus dignissimos temporibus nihil impedit nulla.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum, ipsum enim eius excepturi commodi ea dignissimos voluptates ipsa vitae laboriosam. Accusantium nam aliquam magnam, rerum vel atque quisquam ducimus.</p>
        </div>
    </div>
  )
}

export default About