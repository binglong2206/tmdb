import React from "react";
import './styles/Row.css'


class Posters extends React.Component {
  render() {
    const {results, lastRef} = this.props;

    return (
      <section>
        <h1>Trending:</h1>
        <div className="container">
          {results && results.map((el, key) => { 
            if (key + 1 === results.length) {
              return (
                <div className='img_container' key={key} ref={lastRef}>
                  <div className='img_details'>
                      <img 
                        className='img_poster'
                        src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
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
                      src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} 
                      alt='poster'/>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}


export default Posters