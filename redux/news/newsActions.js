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

export const fetchNews = (options) => async (dispatch) => {
  dispatch(fetchRequest());

  const query = options && options.query ? `&q=${options.query}` : "";

  const API_KEY = "e62c0fa66ae343ba948ccbb4b2dbc707";
  const URL =
    "http://newsapi.org/v2/" +
    "top-headlines?" +
    "country=ng" +
    "&apiKey=" +
    API_KEY +
    query;

  try {
    const { data } = await axios.get(URL);

    const news = data.articles
      .filter((article) => article.content)
      .map((article) => ({
        date: article.date,
        urlToImage: article.urlToImage,
        title: article.title,
        description: article.description,
        content: article.content,
      }));

    dispatch(fetchSuccess(news));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
