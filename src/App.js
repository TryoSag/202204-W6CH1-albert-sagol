import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./modules/Form/Form";
import ToDoList from "./modules/ToDoList/ToDoList";
import { loadListActionCreator } from "./redux/features/listSlice";
import toDoListData from "./utils/toDoListData";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListActionCreator(toDoListData));
  }, [dispatch]);

  return (
    <>
      <Form />
      <ToDoList />
    </>
  );
}

export default App;
