import { setFavorite, initFavorite, newSearch, addResults } from './global'

// Using one global store for now
export const mapState = (state) => {
    return {
      favoriteList: state.global.favoriteList,
      favoriteIds: state.global.favoriteIds,
      results: state.global.results,
      page: state.global.page
    }
  }
  
export const mapDispatch = (dispatch) => {
    return {
      setFavorite: (obj) => dispatch(setFavorite(obj)),
      initFavorite: () => dispatch(initFavorite()),
      newSearch: (arr)=> dispatch(newSearch(arr)),
      addResults: (arr) => dispatch(addResults(arr))
    }
  }
  