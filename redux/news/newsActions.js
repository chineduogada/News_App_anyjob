import axios from "axios";
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "./newsTypes";

const fetchFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: { error },
});
const fetchRequest = () => ({ type: FETCH_NEWS_REQUEST });
const fetchSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNews = () => async (dispatch) => {
  dispatch(fetchRequest());

  const API_KEY = "e62c0fa66ae343ba948ccbb4b2dbc707";
  const URL = `http://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`;

  try {
    const { data } = await axios.get(URL);
    dispatch(fetchSuccess(data.articles));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
