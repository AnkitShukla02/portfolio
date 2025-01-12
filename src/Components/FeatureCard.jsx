import React from 'react'
import '../assets/Styles/Global.css'
import '../assets/Styles/Home.css'
import '../assets/Styles/Card.css'
import { IoIosMenu } from 'react-icons/io'
const FeatureCard = () => {
  return (
    <div className="featureItems flex flex-col gap-4">
        <div className="icon">
        <IoIosMenu />
        </div>
        <h4>Business Stratagy</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, voluptatem nesciunt</p>
    </div>
  )
}

export default FeatureCard