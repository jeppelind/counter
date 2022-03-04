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
    updateCounter: countersAdapter.upsertOne,
    increment: countersAdapter.updateOne,
  }
});

export const {
  selectIds: selectCounterIds,
  selectById: selectCounterById
} = countersAdapter.getSelectors<RootState>(state => state.counters);

export const {
  addCounter,
  updateCounter,
  increment,
} = counterSlice.actions;


export default counterSlice.reducer;
