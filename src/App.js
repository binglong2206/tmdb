import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { addFavorite, initFavorite } from './stores/favorites'

class App extends React.Component {
  constructor(props){
    super(props);
    this.one = props.one
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    console.log('fetching...')
    await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac')
      .then(r => r.json())
      .then(data => this.setState({data: data}))
      .catch(err => console.error(err))
    
    this.props.initFavorite()
  };


  // componentDidUpdate() {
  //   console.log('updating...');
  //   this.props.initFavorite()
  // }



  render() {
    console.log(this.state.data);
    console.log(this.props)
    const { data } = this.state
    const { favorites, addFavorite } = this.props

    return (
      <>
        <h1>Movies:</h1>
        <div>{data && data.results.map((el, key) => {
          return (
            <div key={key} idd={el.id} onClick={()=>addFavorite(el)}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div>

        <h1>Favorites:</h1>
        <div>{favorites && favorites.map((el, key) => {
          return (
            <div key={key} onClick={()=>addFavorite(el)}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    favorites: state.favorites.list
  }
}

const mapDispatch = (dispatch) => {
  return {
    addFavorite: (obj) => dispatch(addFavorite(obj)),
    initFavorite: () => dispatch(initFavorite())
  }
}

export default connect(mapState,mapDispatch)(App)