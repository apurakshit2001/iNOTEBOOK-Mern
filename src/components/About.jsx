import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
import { useLocation } from 'react-router-dom';

const About = () => {
    // const a = useContext(noteContext);
    // const location = useLocation();

    return (
        <div>
            <h1>This is me {a.state.name}. I am a developer. My age is {a.state.age}</h1>
        </div>
    );
};

export default About;

