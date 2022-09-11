import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { addFavorite, initFavorite } from './stores/global'
import Test from './Gallery'
import SearchField from './SearchField'


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
    await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
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
    await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${this.state.page + 1}`)
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
    const { favoriteList, addFavorite, favoriteIds } = this.props

    return (
      <>
      <h1>Favorites:</h1>
        <div>{favoriteList && favoriteList.map((el, key) => {
          return (
            <span key={key} onClick={()=>addFavorite(el)}>
              {el.title ? el.title : el.name}
            </span>
          )
        })}</div>
      
      <SearchField results={results} setResults={(obj)=>this.setState(obj)} />

        <h1>Movies:</h1>
        <Test results={results} nextPage={this.nextPage} loading={this.state.loading} addFavorite={addFavorite} favoritesIds={favoriteIds} />

        
        <button onClick={this.nextPage}>next page</button>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    favoriteList: state.global.favoriteList,
    favoriteIds: state.global.favoriteIds
  }
}

const mapDispatch = (dispatch) => {
  return {
    addFavorite: (obj) => dispatch(addFavorite(obj)),
    initFavorite: () => dispatch(initFavorite())
  }
}

export default connect(mapState,mapDispatch)(App)