import React from 'react'
import Navbar from '../components/Navbar'
import HomeButton from '../components/HomeButton/HomeButton'
import Play from '../img/play.svg'
import Lamp from '../img/lamp.svg'


const Home = () => {
  return (
    <section className='heroSect'>
        <Navbar/>
        <div className='text-wrapper'>
            <p className='heroHeader' >Smart AI for Seamless Customer Support</p>
            <p className='heroTitle'>Revolutionize Your Customer Service Approach by Leveraging Advanced AI Solutions, Providing Seamless, Personalized Support That Not Only Enhances Efficiency but Also Builds Stronger, More Engaged Customer Relationships</p>
            <div style={{
              display:'flex',
              gap:'10px',
              marginTop:'20px'
              }}>
              <HomeButton type='filled' > <img src={Lamp} alt="" /> Get Started</HomeButton>
              <HomeButton type='empty'> <img src={Play} alt="" /> Watch VIdeo</HomeButton>
            </div>
        </div>
    </section>
  )
}

export default Home
