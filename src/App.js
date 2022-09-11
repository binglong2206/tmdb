import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { mapState, mapDispatch } from './stores/maps'
import Gallery from './Gallery'
import SearchField from './SearchField'
import Hero from './Hero'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    console.log('FETCHING...')
    await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(r => r.json())
      .then(data => {
        if (data.success === false) throw new Error('custom error')
        this.props.reset({results: data.results, keyword: ""} )
      })
      .catch(err => console.error(err))
    
    this.props.initFavorite()

  };


  nextPage = async () => {
      try {
        this.setState({loading: true})
        const res = (this.props.keyword === "") ?
            await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${this.props.page+1}`) :
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.props.keyword}&page=${this.props.page + 1}`)
        const data = await res.json()

        if (data.success === false) {
            throw new Error('custom error')
        } else {
          setTimeout(()=>{
            this.props.addResults(data.results).then(()=>this.setState({loading: false}))
          }, 2000)
        }
        } catch(e) {
            console.error("CUSTOM ERROR")
        }
  }



  render() {
    const { favoriteList, setFavorite, favoriteIds, results } = this.props
          
    return (
      <div className='app'> 
        <Hero />
        <h1 style={{color:'white', fontSize: '30px'}}>Tabs</h1>
        <Gallery results={results} nextPage={this.nextPage} loading={this.state.loading} 
          addFavorite={setFavorite} favoritesIds={favoriteIds} />
      </div>
    )
  }
}

export default connect(mapState,mapDispatch)(App)