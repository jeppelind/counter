import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import { saveStateMiddleware } from './middleware';

const rootReducer = combineReducers({ counters: counterSlice });

const storedData = localStorage.getItem('counters');
const preloadedState = (storedData) ? JSON.parse(storedData) : undefined;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveStateMiddleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
