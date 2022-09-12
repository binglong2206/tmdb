import React from "react";

export default class Card extends React.Component {

  render() {
    const {title, release, lang, rating, source} = this.props

    return (
      <div class="poster-card">
          <figure class="poster-banner">
            <img
              src={source}
              alt={title + " poster"}
            />
          </figure>

        <div class="titles">
          <h3 class="poster-title">{title}</h3>
          <div>{release}</div>
        </div>

        <div class="info">
         
        </div>
      </div>
    );
  }
}
