import React from 'react'
import '../styles/NavBar.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";
import NavSearch from './NavSearch';
import Card from './Card';

class Gallery extends React.Component {
  render(){
    const { results } = this.props;

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
            {[1,2,3,4,5,6,6,6,6,6].map((el, key) => 
              <Card mapKey={key} title={'The Dark Knight Rises'} 
                release={2018} lang={'EN'} rating={9.5}
                source={'https://image.tmdb.org/t/p/w200/wquJChp0NpoqthYdE3YjXNNxvVC.jpg'}
                />
            )}
          </div>
        </div>
        
      </section>
      </>
      
    )
  }
}


export default connect(mapState, mapDispatch)(Gallery);
