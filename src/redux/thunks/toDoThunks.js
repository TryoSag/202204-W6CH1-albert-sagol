import axios from "axios";
import {
  loadListActionCreator,
  removeItemActionCreator,
} from "../features/listSlice";

export const loadListThunk = () => async (dispatch) => {
  const toDos = await axios.get("https://to-do-list-api.onrender.com/todo/");

  dispatch(loadListActionCreator(toDos));
};

export const removeItemThunk = (id) => async (dispatch) => {
  await axios.delete("https://to-do-list-api.onrender.com/todo/");

  dispatch(removeItemActionCreator(id));
};
