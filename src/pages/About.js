import React from 'react'
import Header from '../components/Header';
import History from '../components/History';
import Target from '../components/Target';
import Target2 from '../components/Target2';
import Footer from '../components/Footer';


const About = () => {
  return (
    <>
      <Header Title='Home' />
        <Target />
        <Target2 />
        <History />
      <Footer />
    </>
  )
}

export default About