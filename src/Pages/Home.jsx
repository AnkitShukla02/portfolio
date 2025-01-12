import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import HeroSection from '../Components/HeroSection'
import Marquee from 'react-fast-marquee'
import SectionHeading from '../Components/SectionHeading'
import '../assets/Styles/Global.css'
import '../assets/Styles/Home.css'
import FeatureCard from '../Components/FeatureCard'
import ProjectCard from '../Components/ProjectCard'
import PrimaryBtn from '../Components/Common/PrimaryBtn'

const Home = () => {
  return (
    <>
 
        <HeroSection/>
        <Marquee className='homeMarquee py-5 flex gap-10'>
          <span>Lorem, ipsum dolor</span>
          <span>Lorem, ipsum dolor</span>
          <span>Lorem, ipsum dolor</span>
          <span>Lorem, ipsum dolor</span>
          <span>Lorem, ipsum dolor</span>
        </Marquee>

        <section className="feature sectionPadding">
          <div className="container">
            <SectionHeading/>
            <div className="main-feature mt-10">
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
            </div>
          </div>
        </section>

        <section className="projects sectionPadding">
          <div className="container">
            <SectionHeading/>
            <div className="mainProject mt-14">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
            <PrimaryBtn/>
          </div>
        </section>
    </>
  )
}

export default Home