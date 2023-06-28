import React from 'react'

import { AiOutlineSound } from "react-icons/ai"

function Word({ word }) {

    function playAudio(audioUrl) {
        let audio = new Audio(audioUrl);
        console.log("play",audioUrl)
        audio.play();
    }

    return (
        <div className="pb-5">
            <div>
                <h2 className="capitalize font-bold text-2xl">{word.word}</h2>
            </div>
            <div>
                {word.meanings.map((meaning, index) => <>
                    <h3 className='text-sky-600 font-bold'>Meaning: </h3>
                    <p>{meaning.partOfSpeech}</p>
                    <h3 className='text-sky-600 font-bold'>Deinition: </h3>
                    {
                        meaning.definitions.map((definition, index2) => <>
                            {console.log("definition a", definition)}

                            <p>- {definition.definition}</p>
                        </>

                        )
                    }
                </>)}
                <h3 className='text-sky-600 font-bold'>Phonetics: </h3>
             
                {word.phonetics.map((phonetic, index3) => <>
                    {phonetic.audio != '' ?
                        (<div className='flex'>
                            <p>- {phonetic.text}</p>
                            <button className='flex-none'
                                onClick={() => {
                                    playAudio(phonetic.audio);
                                }}
                            >
                                <AiOutlineSound size="26px" />

                            </button>

                        </div>

                        ) : (<></>)
                    }

                </>)}
            </div>
        </div>

    )
}

export default Word
