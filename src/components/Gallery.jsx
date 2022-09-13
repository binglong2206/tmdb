import React from 'react'
import '../styles/Gallery.css'
import Logo from '../styles/images/blue_short.svg'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";
import Card from './Card';

class Gallery extends React.Component {
  render(){
    // lastRef is from Observer's hook
    const { results, setFavorite, tab, lastRef, setTab, favoriteList, error } = this.props; 

    return(
      <> 
      <section className="gallery">
        <div className="container">
          <div className="main-wrapper">
            <div className="titles">
              <p className="subtitle">API Data provided & updated by:</p>
              <img src={Logo} alt='tmdb-logo' className='tmdb-logo' />
              {/* <h2 className="h2 title">Trending Now:</h2> */}
            </div>
            <div className="tabs">
                <button className={`tabs-btn ${tab===0 && 'tab-active'}`} onClick={()=>setTab(0)}>Movies</button>
                {/* <button className="tabs-btn">TV Shows</button> */}
                <button className={`tabs-btn ${tab===1 && 'tab-active'}`} onClick={()=>setTab(1)}>Favorites</button>
            </div>
          </div>

          <div className='posters-wrapper'>
            {error === 'empty' && 
              <h1 style={{color: 'white'}}>
                Nothing was found. Please try another keyword.
              </h1>
            }
            
            {/** Bit ugly, will refactor */}
            {(error && error !== 'empty') &&
              <h1 style={{color: 'white'}}>
                Something went wrong. Please try again later.
              </h1>
            }
            
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
