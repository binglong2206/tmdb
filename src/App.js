import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { mapState, mapDispatch } from './stores/maps'
import Observer from './Observer'
import Hero from './components/Hero'
import Gallery from './components/Gallery'


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
      const {page, keyword} = this.props;
      try {
        this.setState({loading: true})
        const res = (this.props.keyword === "") ?
            await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page+1}`) :
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&page=${page+1}`)
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
    return (
      <div className='app'> 
        <Hero />
        <Observer nextPage={this.nextPage}>
          <Gallery />
        </Observer> 
      </div>
    )
  }
}

export default connect(mapState,mapDispatch)(App)