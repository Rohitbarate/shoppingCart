import { createReducer } from "@reduxjs/toolkit";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/actionType";

initialItems = [];

const itemReducer = createReducer(initialItems, (builder) => {
  builder
    .addCase(ADD_ITEM, (state, action) => {
      state.push(action.payload);
    })
    .addCase(REMOVE_ITEM, (state, action) => {
      return state.filter((item, i) => item.id !== action.payload.id);
    });
});

export default itemReducer;

