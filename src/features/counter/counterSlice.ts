import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type CounterState = {
  id: string,
  name: string,
  amount: number,
  increments: number,
  color: string,
}

const countersAdapter = createEntityAdapter<CounterState>();

const counterSlice = createSlice({
  name: 'counters',
  initialState: countersAdapter.getInitialState(),
  reducers: {
    addCounter: countersAdapter.addOne,
    deleteCounter: countersAdapter.removeOne,
    updateCounter: countersAdapter.upsertOne,
    increment: countersAdapter.updateOne,
    reorder(state, action) {
      const { oldIndex, newIndex } = action.payload;
      const idsCopy = [...state.ids];
      const [movedId] = idsCopy.splice(oldIndex, 1);
      idsCopy.splice(newIndex, 0, movedId);
      state.ids = [...idsCopy];
    },
  }
});

export const {
  selectIds: selectCounterIds,
  selectById: selectCounterById
} = countersAdapter.getSelectors<RootState>(state => state.counters);

export const {
  addCounter,
  deleteCounter,
  updateCounter,
  increment,
  reorder,
} = counterSlice.actions;


export default counterSlice.reducer;
