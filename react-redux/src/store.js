import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// redux 적용
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// redux-toolkit - createAction 적용
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// redux-toolkit - createReducer 적용
const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    });
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
