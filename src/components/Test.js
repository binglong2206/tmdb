import React from 'react'
import '../styles/NavBar.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render(){
    return(
      <section className='main-section'>
    
      </section>
      
    )
  }
}


export default connect(mapState, mapDispatch)(NavBar);
