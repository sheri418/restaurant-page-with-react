import React from 'react'
import Navbar from './Navbar';
// import About from './About';
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from 'react-icons/fi';
import BannerImage from "../Assets/home-banner-image.png";
function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        
        <div className="home-banner-container">
          <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="Banner Background"/>
          </div>
          <div className="home-text-section">
            <h1 className='primary-heading'>
              Welcome to our website
              </h1>
            <p>Your Favorite Food Deliver Hot & Fresh</p>
            <button className='secondary-button'>
              Order Now <FiArrowRight/>
            </button>
          </div>

          <div className='home-image-container'>
            <img src={BannerImage} alt="" />

          </div>
        </div>


    </div>
  )
}

export default Home;