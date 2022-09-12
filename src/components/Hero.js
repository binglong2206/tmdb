import React from "react";
import SearchField from './SearchField'
import '../styles/Hero.css'


class Hero extends React.Component {
  render() {
    return (
      <section className='hero' 
        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/as4jvr6PF7Wfs0RyUl5bOJcB3yt.jpg)`
      }}>
        <SearchField />
        <div className='fade'/>
      </section>
    )
  }
}


export default Hero