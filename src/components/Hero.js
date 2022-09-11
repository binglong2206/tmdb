import React from "react";
import SearchField from './SearchField'
import '../styles/Hero.css'


class Hero extends React.Component {
  render() {
    return (
      <section className='hero' 
        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/Yrpb32j3eMpMVX7ND3TnOkHnbl.jpg)`
      }}>
        <SearchField />
        <div className='fade'/>
      </section>
    )
  }
}


export default Hero