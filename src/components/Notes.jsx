import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const { notes } = useContext(noteContext);  

    return (
        <div>
            <h1>Your Notes...</h1>
                {notes.map((note, index) => (
                    <NoteItem key={note.id} note={note} index={index + 1} />  
                ))}
        </div>
    );
};

export default Notes;
