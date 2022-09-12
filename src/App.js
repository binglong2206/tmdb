import React from 'react'
import "./styles/App.css"
import { connect } from "react-redux"
import { mapState, mapDispatch } from './stores/maps'
import Observer from './Observer'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Nav from './components/NavSearch'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    // Init data from localStorage
    this.props.initFavorite()
    
    console.log('MOUNT FETCH...')
    await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac`)
      .then(r => r.json())
      .then(data => {
        if (data.success === false) throw new Error('custom error')
        this.props.reset({results: data.results, keyword: ""} )
      })
      .catch(err => console.error(err))
  };

  nextPage = async () => {
      const {page, keyword} = this.props;
      try {
        const res = (this.props.keyword === "") ?
            await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac&page=${page+1}`) :
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9570742c201707db7194bcae2c955bac&query=${keyword}&page=${page+1}`)
        const data = await res.json()

        if (data.success === false) {
            throw new Error('custom error')
        } else {
          setTimeout(()=>{
            this.props.addResults(data.results)
          }, 2000)
        }
        } catch(e) {
            console.error("CUSTOM ERROR")
        }
  }


  render() {          
    return (
      <div className='app'> 
        <Nav />
        {/* <Hero /> */}
        <Observer nextPage={this.nextPage}>
          <Gallery />
        </Observer> 
      </div>
    )
  }
}

export default connect(mapState,mapDispatch)(App)