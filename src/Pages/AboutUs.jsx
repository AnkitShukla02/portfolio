import React from 'react'
import InnerBanner from '../Components/Common/InnerBanner'
import SectionHeading from '../Components/SectionHeading'
import PrimaryBtn from '../Components/Common/PrimaryBtn'
import Aboutimg from '../assets/Images/aboutimage.png'

const AboutUs = () => {
  return (
    <>
      <InnerBanner />
      <section className='aboutSection sectionPadding'>
        <div className="container">
          <div className="main-about flex items-center">
            <div className="aboutContent w-2/4 flex flex-col gap-5 items-start">
              <SectionHeading />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, veniam! Deserunt, esse numquam corporis ipsum, sunt incidunt error eum tempore obcaecati ipsam quidem quas commodi ducimus, quisquam inventore sed natus asperiores minima. Temporibus atque facere, nobis commodi distinctio eum repellat optio assumenda, dolor doloribus sed ipsa saepe. Incidunt est, voluptatem nulla dolor adipisci iure quos! Deserunt et saepe doloremque totam facere, earum eligendi omnis officia nesciunt, quod aperiam numquam, neque accusamus quae iste ex. Nemo, perspiciatis? Explicabo sint laborum distinctio adipisci animi dolorem cupiditate amet nesciunt nostrum, corporis soluta, unde iure reprehenderit, debitis repellendus error? Illo laboriosam ratione voluptatum in!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse laudantium aliquam molestias illo quisquam minima cum hic fuga repudiandae provident mollitia odit laborum, rem perspiciatis. Earum sunt magni cum.</p>
              <PrimaryBtn />
            </div>
            
            <div className="aboutImage w-2/4">
              <img src={Aboutimg} alt="About Us Image"/>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default AboutUs