import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  // Setting a single global store for now, may seperate/refactor if too many
  name: "global",
  initialState: {
    favoriteIds: {}, // Mainly for adding/removing css classes via key indexing
    favoriteList: [],
    results: [],
    page: 1,
    keyword: "",
    tab: 0, // Allow search component to switch tab
    // isFetching: false, // Temporary name, use for loading indicator
    searchHistory: [], // Just misc feature
    error: "",
  },
  // Redux Doc says can mutate directly via createSlice
  reducers: {
    // When new query OR search field empty
    reset: (state, action) => {
      if (state.error) state.error = ""; // Reset error when user retry
      const { results, keyword } = action.payload;
      state.results = results; // obj[]
      state.page = 1;
      state.keyword = keyword;
    },

    // Intersection Observer hits & fetch
    addResults: (state, action) => {
      if (state.error) state.error = ""; // Reset error when user retry
      state.results = [...state.results, ...action.payload];
      state.page++; // Testing mutable state
    },

    // setFetching: (state, action) => {
    //   state.isFetching = action.payload;
    // },

    setTab: (state, action) => {
      if (state.error) state.error = ""; // Reset error when user retry
      state.tab = action.payload;
    },

    setError: (state, action) => {
      state.results = []; // To prevent previous result from showing 
      state.error = action.payload // String msg
    },

    initFavorite: (state) => {
      const localList = JSON.parse(localStorage.getItem("tmdb_favorites"));
      const localIds = JSON.parse(localStorage.getItem("tmdb_favoritesIds"));
      const localSearch = JSON.parse(localStorage.getItem("tmdb_history")); // Will rename initFavorite
      state.searchHistory = localSearch ? localSearch : [];
      state.favoriteList = localList ? localList : []; // Incase user clear localstore
      state.favoriteIds = localIds ? localIds : {};
    },

    addHistory: (state, action) => {
      state.searchHistory = [
        action.payload,
        ...state.searchHistory.slice(0, 4),
      ];
    },

    setFavorite: (state, action) => {
      const media = action.payload; //  For readability

      // Assign to new variables so localStorage can use it
      const updatedList =
        state.favoriteList.map((el) => el.id).indexOf(media.id) >= 0
          ? state.favoriteList.filter((el) => el.id !== media.id)
          : [...state.favoriteList, media];

      // Will refactor, too many loops and abit confusing
      const updatedIds = {};
      for (let el of updatedList) {
        updatedIds[el.id] = 1;
      }

      // Save to localstorage
      localStorage.setItem("tmdb_favorites", JSON.stringify(updatedList));
      localStorage.setItem("tmdb_favoritesIds", JSON.stringify(updatedIds));

      state.favoriteIds = updatedIds;
      state.favoriteList = updatedList;
    },
  },
});

export const {
  setFavorite,
  initFavorite,
  reset,
  addResults,
  setTab,
  // setFetching,
  addHistory,
  setError
} = globalSlice.actions;

export default globalSlice.reducer;
