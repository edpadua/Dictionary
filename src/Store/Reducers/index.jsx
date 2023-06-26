import { configureStore } from '@reduxjs/toolkit';
import wordsSlice from "./words";
import searchSlice from './search';


const store = configureStore({
  reducer: {
   
    books: wordsSlice,
    search: searchSlice,
  }
});

export default store;