import { createSlice } from "@reduxjs/toolkit";

const sliceToDo = createSlice({
  name: "toDos",
  inicialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],

    toogleToDos: (toDos, action) =>
      toDos.map((toDo) =>
        toDo.id !== action.payload.id
          ? { ...toDo }
          : { ...toDo, done: !toDo.done }
      ),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  toogleToDos: toogleToDosActionCreator,
} = sliceToDo.actions;

export default sliceToDo.reducer;
