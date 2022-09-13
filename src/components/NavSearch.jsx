import React from "react";
import "../styles/NavSearch.css";
import { connect } from "react-redux";
import { mapState, mapDispatch } from "../stores/maps";

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchText: "",
      navScroll: false
    };
  }

  animateNav = () => {
    if (window.scrollY >= 90) {
      this.setState({navScroll: true})
    } else this.setState({navScroll: false});
  }


  componentDidMount() {
    window.addEventListener('scroll', this.animateNav )
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.animateNav)
  }


  searchListener = () => {
    if (this.state.search) return null;

    const setSearch = () => this.setState({ search: true });
    return setSearch;
  };

  newSearch = async (keyword) => {
    if (this.props.tab !== 0) this.props.setTab(0)

    if (keyword !== "") {
      localStorage.setItem('tmdb_history', JSON.stringify([keyword, ...this.props.searchHistory.slice(0,4)]))
      this.props.addHistory(keyword)
    }

    try {
      const res =
        keyword === ""
          ? await fetch(
              `https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac`
            )
          : await fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=9570742c201707db7194bcae2c955bac&query=${keyword}`
            );

     
      const data = await res.json();
      console.log(data)
      
      if (data.success === false) { throw new Error("Something went wrong")} 
      this.props.reset({ results: data.results, keyword: keyword });
      if (this.state.search) this.setState({search:false})
      if (data.results.length === 0) this.props.setError('empty')

      
    } catch (e) {
      this.props.setError('err')
      this.setState({search: false})
    }
  };

  // Higher order function
  debounce = (cb) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(cb, 1000);
    };
  };

  // State here will be updated
  debouncedSearch = this.debounce(() => {
    this.newSearch(this.state.searchText);
  });

  // Set state and callback to init debounce
  handleChange = (e) => {
    // this.props.setFetching(true) // Better user experience if loading starts here than fetch
    this.setState({ searchText: e.target.value }, this.debouncedSearch()); // Dont set param here
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({search: false});
  }

  displayHistory = () => {
    // Data is stored reverse chrono and limit to 5
    const history = this.props.searchHistory

    if (history.length === 0) return [];

    return history.map((el, key) => 
      <div key={key} onClick={()=>{
        this.setState({searchText:el, search: false})
        // this.props.setFetching(true)
        this.newSearch(el) // Trigger fetch here cus' setState wont
      }}>{el}</div>
    )
  
  }

  resetSearch = () => {
    this.setState({ search: false, searchText: "" });
    // this.props.setFetching(true)
    this.newSearch("")
  }



  render() {
    // const { isFetching } = this.props
    const { search, searchText, navScroll } = this.state;

    return (
      <>
        <div className={`main-nav nav-container fadeIn ${navScroll && 'nav-scroll'}`}>
          {/** Set SearchContainer absolute FOR NOW, easier to manage animation. */}
          <div
            className={`search-container ${!search && "hide"} ${navScroll && 'nav-scroll'}`}
            onClick={this.searchListener()}
          >
            <div className="search-icon" />
            <div className="search-bar">
              <div className="input-container">
                <form onSubmit={(e)=> {
                  e.preventDefault();
                  this.setState({search: false})
                }}>
                  <input
                    type="text"
                    placeholder="Search movies"
                    value={this.state.searchText} onChange={this.handleChange}
                  />
                </form>
              </div>
            </div>
            <div
              className={`close-icon ${searchText === "" && 'hide-close'}`}
              onClick={this.resetSearch}
            />

            <div className="history-wrapper">
              <h2>Search History: </h2>
              <div className="links-container">
                {this.displayHistory()}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`overlay ${search && "show"}`}
          onClick={() => this.setState({ search: false })}
        ></div>
      </>
    );
  }
}

export default connect(mapState, mapDispatch)(NavSearch);
