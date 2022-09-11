import React, { useRef, useCallback } from 'react'
import Posters from './Posters'

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
      <Posters results={results} lastRef={lastRef} /> {/**DONT NAME IT REF*/}
      {loading && <h1>LOADING</h1>}
    </>
  )
}