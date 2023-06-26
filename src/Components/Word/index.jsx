import React from 'react'

function Word({ word }) {
    return (<>
        <div>
            <h2>{word.word}</h2>
        </div>
        <div>
        {word.meanings.map((meaning, index) => <>
            <p>Significado: {meaning.partOfSpeech}</p>
        </>)}
        </div>
    </>

    )
}

export default Word
