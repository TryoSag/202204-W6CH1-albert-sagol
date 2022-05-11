import { useDispatch } from "react-redux";
import {
  removeItemThunk,
  toggleItemDoneThunk,
} from "../../redux/thunks/toDoThunks";

const ToDoListItem = ({ toDoListItem, toDoListItem: { id, name, done } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Id: {id}</p>
      <p>{name}</p>
      <p>Done: {done ? "Yes" : "No"}</p>
      <button onClick={() => dispatch(removeItemThunk(id))}>Delete</button>
      <button onClick={() => dispatch(toggleItemDoneThunk(toDoListItem))}>
        Done
      </button>
    </>
  );
};

export default ToDoListItem;
