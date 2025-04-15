import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export const reducer = combineReducers({
  movies: movieReducer,
});
