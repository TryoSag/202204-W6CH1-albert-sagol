import ToDo from "../ToDo/ToDo";
import { useSelector } from "react-redux";

const ListToDo = () => {
  const toDos = useSelector((state) => state.toDos);

  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} />
      ))}
    </ul>
  );
};
export default ListToDo;
