import React from "react";
import '../styles/Card.css'
import {BsBookmarkPlusFill, BsBookmarkDash, BsBookmarkPlus} from 'react-icons/bs'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    }
  }

  hoverIn = () => {this.setState({isHover: true})}
  hoverOut = () => {this.setState({isHover: false})}


  render() {
    const {title, release, lang, rating, source, mapKey} = this.props

    return (
      <div className="poster-card" mapKey={mapKey}
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
            <div>Release Date: {release}</div>
          </div>
          <div>{lang}</div>
        </div>
        {this.state.isHover &&  
        
        <div className='badge badge-fadeIn'>
          <BsBookmarkPlusFill size='50px' color='black' />
        </div>}
      </div>
    );
  }
}
