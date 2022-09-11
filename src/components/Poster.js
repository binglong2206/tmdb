import React from "react";

export default class Poster extends React.Component {
  render() {
    const {lastRef, setFavorite, el, mapKey, length } = this.props

    if (!lastRef) { // Meaning rendering for Favorite Tab, no need ref
      return (
        <div className='img_container'>
          <div className='img_details' onClick={()=>setFavorite(el)}>
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
        <div className='img_container' ref={lastRef} >
          <div className='img_details' onClick={()=>setFavorite(el)}>
              <img 
                className='img_poster'
                src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                alt='poster'/>
          </div>
          <h1>Movie Title</h1>
        </div>
      ) 
    } else return (
      <div className='img_container'>
        <div className='img_details' onClick={()=>setFavorite(el)}>
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


