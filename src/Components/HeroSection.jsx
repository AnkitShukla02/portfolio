import React from 'react'
import '../assets/Styles/Home.css'
import HeroImage from '../assets/Images/banner-01.png'
import { LuFacebook } from 'react-icons/lu'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const HeroSection = () => {
  return (
        <section className='heroSection'>
            <div className="container">
                <div className="mainHeroSection flex gap-14">
                    <div className="heroSectionContent w-2/4 mt-14">
                        <span className='tagline'>Welcome to my world</span>
                        <h1 className='my-4'> <div>Hi, I’m <span className='nameStyle'>Ankit Shukla</span></div> 

                        <div> a <span>Professional Coder.</span> </div>
                        </h1>
                        <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <div className="socialMedia mt-10">
                            <span>Find With me</span>
                            <ul className='flex gap-6 mt-4'>
                                <li>
                                    <a href="#"><LuFacebook /></a>
                                </li>
                                <li>
                                    <a href="#"><FaInstagram /></a>
                                </li>
                                <li>
                                    <a href="#"><FaLinkedinIn /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="heroSectionImage w-2/4 flex justify-end">
                        <img src={HeroImage} alt="image" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HeroSection