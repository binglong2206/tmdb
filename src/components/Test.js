import React from 'react'
import '../styles/NavBar.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render(){
    return(
      <section className='main-section'>
        <div className='main-container'>
          <div className='main-wrapper'>
            <div className='main-title'>
              <h1>title</h1>
            </div>

            <div className='main-tabs'>
              <button className='tab-btn'>tab1</button>
              <button className='tab-btn'>tab1</button>
              <button className='tab-btn'>tab1</button>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}


export default connect(mapState, mapDispatch)(NavBar);
