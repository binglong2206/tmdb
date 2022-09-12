import React from "react";
import SearchField from './SearchField'
import '../styles/Hero.css'
import bg from '../styles/images/bg.jpg'


class Hero extends React.Component {
  render() {
    return (
      <section className='hero' 
        style={{
        backgroundImage: `url(${bg})`,
        marginBottom: '-275px'
      }}>
        <div className='fade'/>
      </section>
    )
  }
}


export default Hero