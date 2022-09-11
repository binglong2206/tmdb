import React from "react";

export default class SearchField extends React.Component {
    constructor(props) {
        super(props)
        // this.results = this.props.results
        // this.setResults = this.props.setResults
        this.state = {
            search: ""
        }
    }

    startSearch = async(keyword) => {
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
    debouncedSearch = this.debounce((e)=>{
        this.startSearch(this.state.search); 
        console.log(this.state.search)
     }
    )

    handleChange = (e) => {
        this.setState({search: e.target.value}, this.debouncedSearch(e)) // Dont set param here
    }

    


    render() {
        return (
            <>
                <input value={this.state.search} onChange={this.handleChange} />
            </>
        )
    }

}