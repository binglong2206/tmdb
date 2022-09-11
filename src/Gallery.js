import React, { useRef, useCallback } from 'react'
import Posters from './Posters'
import './styles/Row.css'

export default function Gallery({results, nextPage, loading, addFavorite, favoritesIds}) {

  const observer = useRef()

  // New Ref will trigger callback
  const lastRef = useCallback(e => {
    // Disconnect and reconnect to existing element
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      // Callback function when entry intersect
      if (entries[0].isIntersecting) nextPage();
    })

    // Trigger callback when observed
    if (e) observer.current.observe(e)
  }, [nextPage])

  return (
    <>
      <Posters results={results} lastRef={lastRef} />
      {/* <section>
        <h1>Trending:</h1>
        <div className="container">
          {results && results.map((el, key) => { 
            if (key + 1 === results.length) {
              return (
                <div className='img_container' key={key} ref={lastRef}>
                  <div className='img_details'>
                      <img 
                        className='img_poster'
                        src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} 
                        alt='poster'/>
                  </div>
                </div>
              ) 
            } 
            return (
              <div className='img_container' key={key}>
                <div className='img_details'>
                    <img 
                      className='img_poster'
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} 
                      alt='poster'/>
                </div>
              </div>
            )
          })}
        </div>
      </section> */}
      {/* <div>{results && results.map((el, key) => {
          if (key + 1 === results.length) {
            return (
              <div key={key} ref={lastRef} idd={el.id} onClick={()=>addFavorite(el)} className={`${favoritesIds[el.id] && 'favorite'}`}
                style={{'fontSize': '100px'}}
              >
                {el.title ? el.title : el.name} LAST ONE
              </div>
            )
          }
          return (
            <div key={key} idd={el.id} onClick={()=>addFavorite(el)} className={`${favoritesIds[el.id] && 'favorite'}`}
            style={{'fontSize': '100px'}}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div> */}
      {loading && <h1>LOADING</h1>}
    </>
  )
}