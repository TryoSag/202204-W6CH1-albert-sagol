import { createSlice } from "@reduxjs/toolkit";

const sliceToDo = createSlice({
  name: "toDos",
  inicialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],

    toogleToDo: (toDos, action) =>
      toDos.map((toDo) =>
        toDo.id !== action.payload.id
          ? { ...toDo }
          : { ...toDo, done: !toDo.done }
      ),

    deleteToDo: (toDos, action) =>
      toDos.filter((toDo) => toDo.id !== action.payload.id),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  toogleToDo: toogleToDosActionCreator,
  deleteToDo: deleteToDoActionCreator,
} = sliceToDo.actions;

export default sliceToDo.reducer;
