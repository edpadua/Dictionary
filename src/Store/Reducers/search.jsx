import { createSlice } from '@reduxjs/toolkit';


const initialState = '';


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      changeSearch: (state, { payload }) => { console.log("muda busca",state);
      return payload;},
      resetSearch: () => initialState,
    }
  });
  
  export const { changeSearch, resetSearch } = searchSlice.actions;
  
  export default searchSlice.reducer;