import { useSelector } from "react-redux";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = () => {
  const list = useSelector((state) => state.list);

  return (
    <ul>
      {list.map((listItem) => {
        return (
          <li key={listItem.id}>
            <ToDoListItem toDoListItem={listItem} />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
