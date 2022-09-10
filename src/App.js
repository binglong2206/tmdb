import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { addFavorite } from './stores/favorites'

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
  };


  addToFav = (id) => {
    this.props.addFavorite(id);
  }


  render() {
    // console.log(this.state.data);
    // console.log(this.props)
    const { data } = this.state
    const { addFavorite } = this.props

    return (
      <>
        <h1>Movies:</h1>
        <div>{data && data.results.map((el, key) => {
          return (
            <div key={key} idd={el.id} onClick={()=>addFavorite(el.id)}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div>
        {this.props.favorites}
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
    addFavorite: (id) => dispatch(addFavorite(id))
  }
}

export default connect(mapState,mapDispatch)(App)