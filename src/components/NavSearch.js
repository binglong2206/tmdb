import React from "react";
import "../styles/NavBar.css";
import { connect } from "react-redux";
import { mapState, mapDispatch } from "../stores/maps";

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchText: "",
    };
  }

  searchListener = () => {
    if (this.state.search) return null;

    const setSearch = () => this.setState({ search: true });
    return setSearch;
  };

  newSearch = async (keyword) => {
    try {
      console.log("SEARCHING...");
      const res =
        keyword === ""
          ? await fetch(
              `https://api.themoviedb.org/3/trending/all/day?api_key=9570742c201707db7194bcae2c955bac`
            )
          : await fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=9570742c201707db7194bcae2c955bac&query=${keyword}`
            );
      const data = await res.json();

      if (data.success === false) {
        throw new Error("custom error");
      } else {
        this.props.reset({ results: data.results, keyword: keyword });
      }
    } catch (e) {
      console.error("CUSTOM ERROR");
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
    this.setState({ searchText: e.target.value }, this.debouncedSearch()); // Dont set param here
  };

  clearSearch = () => {
    this.setState({ searchText: "" }, this.debouncedSearch());
  };

  render() {
    const { search } = this.state;

    return (
      <>
        <div className="nav-container">
          <nav>
            <div className={`desktop-nav ${search && "hide"}`}>
              <div>LOGO</div>
              <div>Data Provided By TMDB</div>
            </div>
          </nav>

          {/** Set SearchContainer absolute FOR NOW, easier to manage anaimation. */}
          <div
            className={`search-container ${!search && "hide"}`}
            onClick={this.searchListener()}
          >
            <div className="link-search" />
            <div className="search-bar">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search for your favorite movies"
                  value={this.state.searchText} onChange={this.handleChange}
                />
              </div>
            </div>
            <div
              className="link-close"
              onClick={() => this.setState({ search: false })}
            />

            <div className="quick-links">
              <h2>Trending keyword</h2>
              <div className="links-container">
                <div onClick={() => this.setState({ search: false })}>
                  keyword1
                </div>
                <div onClick={() => this.setState({ search: false })}>
                  keyword2
                </div>
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