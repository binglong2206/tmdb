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
    const {results, favoriteList, setFavorite, lastRef} = this.props; // Connected from redux
    const { tab } = this.state

    return (
      <section className='posters'>
        <div style={{fontSize: '56px', fontWeight:'bold'}} onClick={()=>this.setState({tab: 0})}>Trending</div>
        <div style={{fontSize: '56px', fontWeight:'bold', position: 'relative'}} onClick={()=>this.setState({tab: 1})}>
          <div>yo</div>
          <div style={{position: 'absolute', bottom:'33px', width: '450px', backgroundColor:'red'}}>MODAL</div>
        </div>

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