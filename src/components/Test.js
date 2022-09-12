import React from 'react'
import '../styles/Test.css'
import { mapState, mapDispatch } from "../stores/maps";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render(){
    return(
      <nav className="nav">
        <div className="dropdown-wrapper">
          <select>
            <option>released year</option>
          </select>
          <select>
            <option>types</option>
          </select>
        </div>

        <div className="tabs">
          <div>movies</div>
          <div>tv shows</div>
          <div>favorites</div>
        </div>
        
      </nav>
    )
  }
}


export default connect(mapState, mapDispatch)(NavBar);
