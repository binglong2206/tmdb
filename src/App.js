import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"



class App extends React.Component {
  constructor(props){
    super(props);
    this.one = props.one
    // this.state = {
    //   data: {}
    // }
  }

  // async componentDidMount() {
  //   await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac')
  //     .then(r => r.json())
  //     .then(data => this.setState({data: data}))
  //     .catch(err => console.error(err))
  // };



  render() {
    return (
      <>
        <h1>Movies: {this.props.test}</h1>
        {/* <div>{this.state.data.total_results}</div> */}

      </>
    )
  }
}

function mapStateToProps(state){
  return {
    test: state.test
  }
}


export default connect(mapStateToProps,{})(App)