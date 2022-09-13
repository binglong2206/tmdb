import React from 'react'
import '../styles/NavBar.css'
import Logo from '../styles/images/blue_short.svg'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";
import NavSearch from './NavSearch';
import Card from './Card';

class Gallery extends React.Component {
  render(){
    const { results, setFavorite, tab, lastRef, setTab, favoriteList } = this.props; // From Observer's hook

    return(
      <> 
      <section class="gallery">
        <div class="container">
          <div class="main-wrapper">
            <div class="titles">
              <p class="subtitle">API Data provided & updated by:</p>
              <img src={Logo} alt='tmdb-logo' />
              {/* <h2 class="h2 title">Trending Now:</h2> */}
            </div>
            <div class="tabs">
                <button class={`tabs-btn ${tab===0 && 'tab-active'}`} onClick={()=>setTab(0)}>Movies</button>
                {/* <button class="tabs-btn">TV Shows</button> */}
                <button class={`tabs-btn ${tab===1 && 'tab-active'}`} onClick={()=>setTab(1)}>Favorites</button>
            </div>
          </div>

          <div className='posters-wrapper'>
            {tab === 0 && results?.map((el, key) => {
              if (key + 1 === results.length) {
                return (
                  <div key={key} ref={lastRef} className='fadeIn'>
                    <Card 
                      title={el.title ? el.title : el.name} 
                      release={el.release_date} 
                      lang={el.original_language.toUpperCase()} 
                      rating={el.vote_average.toFixed(1)}
                      source={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                      el={el}
                      />
                    </div>
                )
              } else return (
                <div key={key} className='fadeIn'>
                    <Card 
                      title={el.title ? el.title : el.name} 
                      release={el.release_date} 
                      lang={el.original_language?.toUpperCase()} 
                      rating={el.vote_average.toFixed(1)}
                      source={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                      el={el}
                      />
                    </div>
              )
              
             })}

            {tab === 1 && favoriteList?.map((el, key) => 
              <div key={key} className='fadeIn'>
                <Card 
                  title={el.title ? el.title : el.name} 
                  release={el.release_date} 
                  lang={el.original_language} 
                  rating={el.vote_average.toFixed(1)}
                  source={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}
                  el={el}
                  editFavorite={()=>setFavorite(el)}                 
                  />
                </div>
            )}
          </div>
        </div>
        
      </section>
      </>
      
    )
  }
}


export default connect(mapState, mapDispatch)(Gallery);