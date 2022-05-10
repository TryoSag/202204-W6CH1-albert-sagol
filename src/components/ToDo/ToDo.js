import { useDispatch } from "react-redux";
import { toogleToDosActionCreator } from "../../redux/slice/sliceToDo";

const ToDo = ({ id, name, done }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>{`${id} - ${name}`}</h2>
      <span onClick={dispatch(toogleToDosActionCreator(id))}>
        {done ? "O" : "X"}
      </span>
    </li>
  );
};
export default ToDo;
