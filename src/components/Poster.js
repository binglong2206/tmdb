import React from "react";

export default class Poster extends React.Component {
  render() {
    const {lastRef, setFavorite, el, mapKey, length } = this.props

    if (!lastRef) { // No ref means rendering for favorites
      return (
        <div className='img-container'>
          <div className='img-details' onClick={()=>setFavorite(el)}>
              <img 
                className='img_poster'
                src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                alt='poster'/>
              <h1>Movie Title</h1>
          </div>
        </div>
      )
    }

    if (mapKey + 1 === length) {
      return (
        <div className='img-container' ref={lastRef} >
          <div className='img-details' onClick={()=>setFavorite(el)}>
              <img 
                className='img-poster'
                src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                alt='poster'/>
          </div>
          <h1>Movie Title</h1>
        </div>
      ) 
    } else return (
      <div className='img-container'>
        <div className='img-details' onClick={()=>setFavorite(el)}>
            <img 
              className='img_poster'
              src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
              alt='poster'/>
            <h1>Movie Title</h1>
        </div>
      </div>
    )
  }
}


