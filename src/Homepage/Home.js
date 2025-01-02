import React from 'react'
import NavBar from '../NavBar/NavBar'
import Cararasol from '../Carousal/Carousal'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import WatchListCards from '../Card/WatchListCards'
import Login from '../Login/Login'
import ComingSoonCarasol from '../ComingSoon/ComingSoon'
const Home = () => {
  return (  
      <div>
          <NavBar />
          <Cararasol />
      <Card />
      <ComingSoonCarasol/>
          <Footer/>
    </div>
  )
}

export default Home