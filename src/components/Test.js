import React from 'react'
import '../styles/NavBar.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";
import NavSearch from './NavSearch';
import Card from './Card';

class Gallery extends React.Component {
  render(){
    return(
      <> 
      <NavSearch />
      <section class="gallery">
        <div class="container">
          <div class="main-wrapper">
            <div class="titles">
              <p class="subtitle">TMDB API</p>
              <h2 class="h2 title">Trending Movies:</h2>
            </div>
            <div class="tabs">
                <button class="tabs-btn">Movies</button>
                {/* <button class="tabs-btn">TV Shows</button> */}
                <button class="tabs-btn">Favorites</button>
            </div>
          </div>

          <div className='posters-wrapper'>
            <Card title={'asd'} release={777} lang={'EN'} rating={7} />
          </div>
        </div>
        
      </section>
      </>
      
    )
  }
}


export default connect(mapState, mapDispatch)(Gallery);
