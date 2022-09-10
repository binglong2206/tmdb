import React from 'react'
import "./styles/App.css"



class App extends React.Component {
  constructor(props){
    super(props);
    this.one = props.one
  }

  componentDidUpdate() {
    console.log('render!')
  }

  render() {

    return (
      <div>
      </div>
    )
  }
}



export default App