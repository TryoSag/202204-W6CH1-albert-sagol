import { useDispatch } from "react-redux";
import { markAsDoneActionCreator } from "../../redux/features/listSlice";
import { removeItemThunk } from "../../redux/thunks/toDoThunks";

const ToDoListItem = ({ toDoListItem: { id, name, done } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Id: {id}</p>
      <p>{name}</p>
      <p>Done: {done ? "Yes" : "No"}</p>
      <button onClick={() => dispatch(removeItemThunk(id))}>Delete</button>
      <button onClick={() => dispatch(markAsDoneActionCreator(id))}>
        Done
      </button>
    </>
  );
};

export default ToDoListItem;
