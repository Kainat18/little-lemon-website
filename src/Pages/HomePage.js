//a landing homepage that lays all the components within itself
import React from 'react';
import  Hero from '../components/Hero'
import  Menu from '../components/Menu'
import  Testimonal from '../components/Testimonal'
import  About from '../components/About'

function HomePage() {
  return (
    <>
    <Hero />
    <Menu />
    <Testimonal />
    <About />
    </>
  )
}


export default HomePage
