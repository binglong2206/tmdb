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
      <div className="nav-container">
        <nav>
          <div className={`desktop-nav ${search && 'hide'}`}>
            <div>LOGO</div>
            <div className='link-search' onClick={()=>this.setState({search:true})} />
            <div>Data Provided By TMDB</div>
          </div>
        </nav>

        <div className={`search-container ${!search && 'hide'}`} onClick={()=>this.setState({search:true})}>
          <div className="link-search" />
          <div className="search-bar">
            <div className="input-container">
              <input type="text" placeholder="Search for your favorite movies" />
            </div>
          </div>
          <div className="link-close" onClick={()=>this.setState({search:false})} />

          <div className="quick-links">
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
