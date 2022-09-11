import React from "react";
import { connect } from "react-redux"
import { mapState, mapDispatch } from './stores/maps'
import './styles/Posters.css'


class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0
    }
  }


  render() {
    const {results, favoriteList, setFavorite, lastRef} = this.props; // Connected from redux
    const { tab } = this.state

    return (
      <section className='posters'>
        <div style={{fontSize: '56px', fontWeight:'bold'}} onClick={()=>this.setState({tab: 0})}>Trending</div>
        <div style={{fontSize: '56px', fontWeight:'bold'}} onClick={()=>this.setState({tab: 1})}>Favorite</div>

        <div className="posters-wrap">
          {tab === 0 && results && results.map((el, key) => { 
            if (key + 1 === results.length) {
              return (
                // className={`${favoritesIds[el.id] && 'favorite'}
                <div className='img_container' key={key} ref={lastRef} >
                  <div className='img_details' onClick={()=>setFavorite(el)}>
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
                <div className='img_details' onClick={()=>setFavorite(el)}>
                    <img 
                      className='img_poster'
                      src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                      alt='poster'/>
                    <h1>Movie Title</h1>
                </div>
              </div>
            )
          })}

          {tab === 1 && favoriteList && favoriteList.map((el, key) => { 
            if (key + 1 === favoriteList.length) {
              return (
                // className={`${favoritesIds[el.id] && 'favorite'}
                <div className='img_container' key={key} ref={lastRef} onClick={()=>console.log('wokring')} >
                  <div className='img_details' onClick={()=>setFavorite(el)}>
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
                <div className='img_details' onClick={()=>setFavorite(el)}>
                    <img 
                      className='img_poster'
                      src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                      alt='poster'/>
                    <h1>Movie Title</h1>
                </div>
              </div>
            )
          })}

          {/* {results && results.map((el, key) => { 
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
          })} */}



          
        </div>
      </section>
    )
  }
}


export default connect(mapState,mapDispatch)(Gallery)