import React, { useState } from 'react';
import noteContext from './NoteContext';

const NoteState = (props) => {
    const [notes, setNotes] = useState(
        [
            {
              "_id": "673f4a0a23a9c31d59a4b840",
              "user": "673ee042fccaa420a42add21",
              "title": "My Title",
              "description": "How many roads must a man walk down, before you call him a man?",
              "tag": "quotation",
              "date": "2024-11-21T14:56:10.193Z",
              "__v": 0
            },
            {
              "_id": "673f51589346cce3a56cc763",
              "user": "673ee042fccaa420a42add21",
              "title": "My Title Updated! Blowin’ in the Wind",
              "description": "How many roads must a man walk down, before you call him a man? Yes, ’n’ how many seas must a white dove sail, Before she sleeps in the sand? Yes, ’n’ how many times must the cannonballs fly, Before they’re forever banned? The answer, my friend, is blowin’ in the wind. The answer is blowin’ in the wind",
              "tag": "Lyrics",
              "date": "2024-11-21T15:27:20.436Z",
              "__v": 0
            }
          ]
    );

    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
