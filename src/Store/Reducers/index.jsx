import { configureStore } from '@reduxjs/toolkit';
import wordsSlice from "./words";
import searchSlice from './search';


const store = configureStore({
  reducer: {
   
    words: wordsSlice,
    search: searchSlice,
  }
});

export default store;