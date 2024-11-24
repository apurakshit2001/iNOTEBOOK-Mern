import React from 'react';

const NoteItem = (props) => {
    const { note, index } = props; // Removed `key` from props

    return (
        <div className="card my-3">
            <div className="card-header">
                <strong className='mx-2'>Note {index}:</strong> {note.title}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">{note.description}</footer>
                </blockquote>
                <div className="icons d-flex float-end">
                <i class="fa-regular fa-pen-to-square mx-3"></i>
                <i class="fa-regular fa-trash-can  mx-3"></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
