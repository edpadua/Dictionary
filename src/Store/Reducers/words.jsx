import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import wordsService from '../../services/words';


const initialState = [];

export const findWords = createAsyncThunk(
    'words/find',
    wordsService.find
  )
  
  const wordsSlice = createSlice({
    name: 'words',
    initialState: [],
    extraReducers: builder => {
      builder
      .addCase(
        findWords.fulfilled,
        (state, { payload }) => {
          console.log('words loaded!');
          return payload;
        }
      )
      .addCase(
        findWords.pending,
        (state, { payload }) => {
          console.log('load words');
        }
      )
      .addCase(
        findWords.rejected,
        (state, { payload }) => {
          console.log('busca de palavras rejeitada!');
        }
      )
    }
  });




export default wordsSlice.reducer;