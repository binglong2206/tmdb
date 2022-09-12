import { setFavorite, initFavorite, reset, addResults, switchTab, setFetching } from './global'

// Using one global store for now
export const mapState = (state) => {
    return {
      favoriteList: state.global.favoriteList,
      favoriteIds: state.global.favoriteIds,
      results: state.global.results,
      page: state.global.page,
      keyword: state.global.keyword,
      tab: state.global.tab,
      fetching: state.fetching
    }
  }
  
export const mapDispatch = (dispatch) => {
    return {
      setFavorite: (payload) => dispatch(setFavorite(payload)),
      initFavorite: () => dispatch(initFavorite()),
      reset: (results)=> dispatch(reset(results)),
      addResults: (results) => dispatch(addResults(results)),
      switchTab: (payload) => dispatch(switchTab(payload)),
      setFetching: () => dispatch(setFetching())
    }
  }
  