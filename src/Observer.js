import React, { useRef, useCallback } from 'react'

export default function Observer({nextPage, children}) {

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
      {React.cloneElement(children, {lastRef: lastRef, test:123})} {/**DONT NAME PROP "ref", clone to pass props*/}
    </>
  )
}