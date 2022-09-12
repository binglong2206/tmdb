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

        <div class={`search-container ${!search && 'hide'}`}>
          <div class="link-search"></div>
          <div class="search-bar">
            <div className="input-container">
              <input type="text" placeholder="Search for your favorite movies" />
            </div>
          </div>
          <div class="link-close" onClick={()=>this.setState({search:false})} />

          <div class="quick-links">
            <h2>Trending keyword</h2>
            <div className='links-container'>
              <div onClick={()=>this.setState({search: false})}>keyword1</div>
              <div onClick={()=>this.setState({search: false})}>keyword2</div>
            </div>
          
          </div>
        </div>

      </div>
    <div class={`overlay ${search && 'show'}`} onClick={()=>this.setState({search:false})}></div>
    </>
    );
  }
}

export default NavBar;
