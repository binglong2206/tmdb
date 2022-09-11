import React from "react";
import { mapState, mapDispatch } from './stores/maps'
import { connect } from 'react-redux'


class SearchField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    newSearch = async(keyword) => {
        console.log('SEARCHING...')
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&include_adult=false`)
          .then(r => r.json())
          .then(data => {
            if (data.success === false) throw new Error('custom error')
            this.props.setResults({results: data.results})
          })
          .catch(err => console.error(err))
      }


    // Higher order function
    debounce = (cb) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(cb, 1000)
        }
    }

    // State here will be updated
    debouncedSearch = this.debounce(()=>{
        this.newSearch(this.state.searchText); 
        console.log(this.state.searchText)
     }
    )

    // Set state and callback to init debounce
    handleChange = (e) => {
        this.setState({searchText: e.target.value}, this.debouncedSearch()) // Dont set param here
    }


    render() {
        return (
            <>
                <input value={this.state.searchText} onChange={this.handleChange} />
            </>
        )
    }

}

  export default connect(mapState,mapDispatch)(SearchField)