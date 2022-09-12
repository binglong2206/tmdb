import React from "react";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false
    }
  }


  render() {


const {search} = this.state

    return (
      <> 
      <div class="nav-container">
        <nav>
          <div class={`desktop-nav ${search && 'hide'}`}>
            <div>LOGO</div>
            <div className='link-search' onClick={()=>this.setState({search:true})} />
            <div>Data Provided By TMDB</div>
          </div>
        </nav>

      </div>
    <div class={`overlay ${search && 'show'}`} onClick={()=>this.setState({search:false})}></div>
    </>
    );
  }
}

export default NavBar;
