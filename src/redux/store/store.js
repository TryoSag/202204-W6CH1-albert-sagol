import { configureStore } from "@reduxjs/toolkit";
import sliceToDoReducer from "../slice/sliceToDo";

const store = configureStore({ reducer: { toDos: sliceToDoReducer } });
export default store;
