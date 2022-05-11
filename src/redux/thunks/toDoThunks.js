import axios from "axios";
import {
  loadListActionCreator,
  markAsDoneActionCreator,
  removeItemActionCreator,
} from "../features/listSlice";

export const loadListThunk = () => async (dispatch) => {
  const { data: toDos } = await axios.get(
    "https://to-do-list-api.onrender.com/todo/"
  );

  dispatch(loadListActionCreator(toDos));
};

export const removeItemThunk = (id) => async (dispatch) => {
  await axios.delete(`https://to-do-list-api.onrender.com/todo/${id}`);

  dispatch(removeItemActionCreator(id));
};

export const toggleItemDoneThunk =
  ({ id, name, done }) =>
  async (dispatch) => {
    await axios.put(`https://to-do-list-api.onrender.com/todo/${id}`, {
      id,
      name,
      done: !done,
    });

    dispatch(markAsDoneActionCreator(id));
  };
