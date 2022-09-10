import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { addFavorite, initFavorite } from './stores/favorites'
import Test from './Gallery'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      visible: false,
      results: null,
      loading: false
    }
  }

  async componentDidMount() {
    console.log('FETCHING...')
    await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac')
      .then(r => r.json())
      .then(data => {
        if (data.success === false) throw new Error('custom error')
        this.setState({results: data.results})
      })
      .catch(err => console.error(err))
    
    this.props.initFavorite()

  };


  nextPage = async () => {
    console.log('FETCHING...')
    this.setState({loading: true})
    await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac&page=${this.state.page + 1}`)
      .then(r => r.json())
      .then(data => {
        // console.log(data)
        if (data.success === false) throw new Error('custom error')
        setTimeout(()=>{
          this.setState((state) => ({results: [...state.results, ...data.results], page: state.page + 1}))
        }, 2000)
      }).then(()=>this.setState({loading: false}))
      .catch(err => console.error(err))

  }

  render() {
    const { results } = this.state
    const { favorites, addFavorite, favoritesIds } = this.props

    return (
      <>
        <h1>Movies:</h1>
        <Test results={results} nextPage={this.nextPage} loading={this.state.loading} addFavorite={addFavorite} favoritesIds={favoritesIds} />

        <h1>Favorites:</h1>
        <div>{favorites && favorites.map((el, key) => {
          return (
            <div key={key} onClick={()=>addFavorite(el)}>
              {el.title ? el.title : el.name}
            </div>
          )
        })}</div>
        <button onClick={this.nextPage}>next page</button>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    favorites: state.favorites.list,
    favoritesIds: state.favorites.ids
  }
}

const mapDispatch = (dispatch) => {
  return {
    addFavorite: (obj) => dispatch(addFavorite(obj)),
    initFavorite: () => dispatch(initFavorite())
  }
}

export default connect(mapState,mapDispatch)(App)