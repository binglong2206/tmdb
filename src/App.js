import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { mapState, mapDispatch } from './stores/maps'
import Gallery from './Gallery'
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
        this.props.newSearch(data.results)
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
    const { favoriteList, setFavorite, favoriteIds, results } = this.props

    return (
      <>
      {/* <button onClick={()=>{console.log(this.props.page,this.props.results)}}>Show Redux</button> */}
      <h1>Favorites:</h1>
        <div>{favoriteList && favoriteList.map((el, key) => {
          return (
            <span key={key} onClick={()=>setFavorite(el)}>
              {el.title ? el.title : el.name}
            </span>
          )
        })}</div>
      
      <SearchField results={results} setResults={(obj)=>this.setState(obj)} />

        <h1>Movies:</h1>
        <Gallery results={results} nextPage={this.nextPage} loading={this.state.loading} addFavorite={setFavorite} favoritesIds={favoriteIds} />
      </>
    )
  }
}

export default connect(mapState,mapDispatch)(App)