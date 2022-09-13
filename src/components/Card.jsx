import React from "react";
import '../styles/Card.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";
import {BsBookmarkPlusFill, BsBookmarkDash, BsBookmarkPlus} from 'react-icons/bs'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    }
  }

  hoverIn = () => {this.setState({isHover: true})}
  hoverOut = () => {this.setState({isHover: false})}


  render() {
    const {title, release, lang, rating, source, editFavorite, favoriteIds, el, setFavorite} = this.props


    return (
      <div className="poster-card" 
        onMouseOver={this.hoverIn} onMouseLeave={this.hoverOut}
        >
            <div className="poster-banner">
              <img
                src={source}
                alt={title + " poster"}
              />
          </div>

        <div className="titles">
          <h3 className="poster-title">{title}</h3>
          <div>{rating}</div>
        </div>

        <div className="info">

          <div className="rating">
            <div>Release Date: {release ? release : 'TBA'}</div>
          </div>
          <div>{lang}</div>
        </div>
        {this.state.isHover &&  
        <div className='badge badge-fadeIn' onClick={()=>setFavorite(el)}>
          <BsBookmarkPlusFill size='50px' color='#8B0000' />
        </div>}

        {favoriteIds[el.id] &&
        <div className='badge badge-fadeIn' onClick={()=>setFavorite(el)}>
        <BsBookmarkPlusFill size='50px' color='green' />
      </div>
        }
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Card);
