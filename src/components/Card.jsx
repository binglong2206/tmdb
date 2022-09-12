import React from "react";
import '../styles/Card.css'
import {BsBookmarkPlus} from 'react-icons/bs'

export default class Card extends React.Component {

  render() {
    const {title, release, lang, rating, source, mapKey} = this.props

    return (
      <div className="poster-card" mapKey={mapKey}>
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
        <div className='badge'>
          <BsBookmarkPlus color='blue' />
        </div>
      </div>
    );
  }
}
