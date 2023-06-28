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
        <div className="flex-auto w-64">
            <input
                className='rounded-md border-none outline-none h-8 w-2/5 px-2 mt-1'
                placeholder="Type the word you are looking for ..."
                value={search}
                onChange={evento => dispatch(changeSearch(evento.target.value))}
            />
        </div>
    )
}

export default Search
