import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { addFavorite, initFavorite } from './stores/favorites'

class App extends React.Component {
  constructor(props){
    super(props);
    this.one = props.one
    this.state = {
      results: null
    }
  }

  async componentDidMount() {
    console.log('FETCHING...')
    await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac')
      .then(r => r.json())
      .then(data => {
        // console.log(data)
        if (data.success === false) throw new Error('custom error')
        this.setState({results: data})
      })
      .catch(err => console.error(err))
    
    this.props.initFavorite()
  };


  // componentDidUpdate() {
  //   console.log('updating...');
  // }



  render() {
    // console.log(this.state.data)
    // console.log(this.props)
    const { results } = this.state
    const { favorites, addFavorite } = this.props
    console.log('FAVORITE', favorites)

    return (
      <>
        <h1>Movies:</h1>
        <div>{results && results.results.map((el, key) => {
          return (
            <div key={key} idd={el.id} onClick={()=>addFavorite(el)}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div>

        {/* <h1>Favorites:</h1>
        <div>{favorites && favorites.map((el, key) => {
          return (
            <div key={key} onClick={()=>addFavorite(el)}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div> */}
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