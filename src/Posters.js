import React from "react";
import { connect } from "react-redux"
import { mapState, mapDispatch } from './stores/maps'
import './styles/Posters.css'


class Gallery extends React.Component {
  render() {
    const {results, lastRef, tab} = this.props; // Connected from redux

    return (
      <section className='posters'>
        {/* <div style={{fontSize: '56px', fontWeight:'bold'}}>Trending:</div> */}
        <div className="posters-wrap">
          {results && results.map((el, key) => { 
            if (key + 1 === results.length) {
              return (
                // className={`${favoritesIds[el.id] && 'favorite'}
                <div className='img_container' key={key} ref={lastRef} >
                  <div className='img_details'>
                      <img 
                        className='img_poster'
                        src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                        alt='poster'/>
                  </div>
                  <h1>Movie Title</h1>
                </div>
              ) 
            } 
            return (
              <div className='img_container' key={key}>
                <div className='img_details'>
                    <img 
                      className='img_poster'
                      src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                      alt='poster'/>
                    <h1>Movie Title</h1>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}


export default connect(mapState,mapDispatch)(Gallery)