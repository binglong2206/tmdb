import React from 'react'
import '../styles/NavBar.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render(){
    return(
      <section class="gallery">
        <div class="container">
          <div class="main-wrapper">
            <div class="titles">
              <p class="subtitle">TMDB</p>
              <h2 class="h2 title">Trending Movies:</h2>
            </div>
            <div class="tabs">
                <button class="tabs-btn">Movies</button>
                {/* <button class="tabs-btn">TV Shows</button> */}
                <button class="tabs-btn">Favorites</button>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}


export default connect(mapState, mapDispatch)(NavBar);
