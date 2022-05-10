import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListToDo from "./components/ListToDo/ListToDo";
import toDos from "./data/dataToDo";
import { loadToDosActionCreator } from "./redux/slice/sliceToDo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDosActionCreator(toDos));
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <h1>To Do's</h1>
        <ListToDo />
      </>
    </div>
  );
}

export default App;
