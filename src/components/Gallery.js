import React from "react";
import { connect } from "react-redux"
import { mapState, mapDispatch } from '../stores/maps'
import Poster from "./Poster";
import '../styles/Gallery.css'


class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0,
      show: null
    }
  }


  render() {
    const {results, favoriteList, setFavorite, lastRef, tab, setTab} = this.props; // Connected from redux

    return (
      <section className='posters' style={{margin: 'auto', paddingTop:'300px'}}>
        <div style={{fontSize: '56px', fontWeight:'bold', position: 'relative'}} onClick={()=>setTab(1)}>favorite</div>

        <div className="posters-wrap">
          {tab === 0 && results && results.map((el, key) => 
            <div key={key}>
              <Poster el={el} mapKey={key} lastRef={lastRef} setFavorite={setFavorite} length={results.length} />
            </div>
            )}

          {tab === 1 && favoriteList && favoriteList.map((el, key) => 
            <div key={key}>
              <Poster el={el} mapKey={key} setFavorite={setFavorite} />
            </div>          
            )}
        </div>

      </section>
    )
  }
}


export default connect(mapState,mapDispatch)(Gallery)