import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "./newsTypes";

const initialState = {
  error: "",
  loading: false,
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_FAILURE:
      return {
        error: action.payload.error,
        loading: false,
        news: [],
      };
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        error: "",
        loading: false,
        news: action.payload.news,
      };

    default:
      return state;
  }
};

export default newsReducer;
