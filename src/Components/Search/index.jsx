import React from 'react'

import { useSelector, useDispatch } from 'react-redux'; 

import { useEffect } from 'react';

import { changeSearch, resetSearch } from "../../Store/Reducers/search"

function Search() {

    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
  
    useEffect(() => {
     
      dispatch(resetSearch()); 
    }, [dispatch])
  

  return (
    <div>
         <input
        placeholder="Digite a palavra"
        value={search}
        onChange={evento => dispatch(changeSearch(evento.target.value))}
      />
    </div>
  )
}

export default Search
