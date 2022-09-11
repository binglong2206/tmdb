import { setFavorite, initFavorite, reset, addResults } from './global'

// Using one global store for now
export const mapState = (state) => {
    return {
      favoriteList: state.global.favoriteList,
      favoriteIds: state.global.favoriteIds,
      results: state.global.results,
      page: state.global.page,
      keyword: state.global.keyword
    }
  }
  
export const mapDispatch = (dispatch) => {
    return {
      setFavorite: (obj) => dispatch(setFavorite(obj)),
      initFavorite: () => dispatch(initFavorite()),
      reset: (arr)=> dispatch(reset(arr)),
      addResults: (arr) => dispatch(addResults(arr))
    }
  }
  