import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  render(){
    return(
      <div>
        <div onClick={()=>this.setState({activeTab:0})}>Trending</div>
        <div onClick={()=>this.setState({activeTab:1})}>Favorites</div>
      </div>
    )
  }
}


export default Tabs