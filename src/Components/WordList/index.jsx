import React from 'react'

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from 'react';


import { findWords } from '../../Store/Reducers/words';

import Word from '../Word';

function WordList() {

    const dispatch = useDispatch();

    const search = useSelector(state => state.search);

    const words = useSelector(state => {
        const regexp = new RegExp(state.search, 'i');
        console.log('state',state)
        return {
            words: state.words
        }
    });

    useEffect(() => {
        console.log("Search", search)
        dispatch(findWords(search));
    }, [search, dispatch]);

  return (
    <div >
    {console.log("palavras", words)}
   
    {words.words ?

        (words.words.map((word, index) => (

            <Word word={word} key={index} />


        ))) : (<>Não encontrado</>)

        }
</div>
  )
}

export default WordList
