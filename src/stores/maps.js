import {
  setFavorite,
  initFavorite,
  reset,
  addResults,
  setTab,
  // setFetching,
  addHistory,
  setError,
} from "./global";

// Using one global store for now, can refactor into more efficient/specific maps once submit MVP
export const mapState = (state) => {
  return {
    favoriteList: state.global.favoriteList,
    favoriteIds: state.global.favoriteIds,
    results: state.global.results,
    page: state.global.page,
    keyword: state.global.keyword,
    tab: state.global.tab,
    // isFetching: state.global.isFetching,
    searchHistory: state.global.searchHistory,
    error: state.global.error,
  };
};

export const mapDispatch = (dispatch) => {
  return {
    setFavorite: (payload) => dispatch(setFavorite(payload)),
    initFavorite: () => dispatch(initFavorite()),
    reset: (results) => dispatch(reset(results)),
    addResults: (results) => dispatch(addResults(results)),
    setTab: (payload) => dispatch(setTab(payload)),
    // setFetching: (boolean) => dispatch(setFetching(boolean)),
    addHistory: (value) => dispatch(addHistory(value)),
    setError: (payload) => dispatch(setError(payload)),
  };
};
