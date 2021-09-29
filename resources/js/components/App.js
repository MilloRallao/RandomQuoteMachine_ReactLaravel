import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Contenedor from './contenedor'

function App() {
    const [phrase, setPhrase] = useState("");
    const [author, setAuthor] = useState("");

    const handleClick = () => {
        axios.get('http://localhost:8000/api/quote')
            .then(response => {
                setPhrase(response.data.quote)
                setAuthor(response.data.author)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/quote')
            .then(response => {
                setPhrase(response.data.quote)
                setAuthor(response.data.author)
            })
    }, [])

    return (
        <Contenedor frase={phrase} autor={author} handleClick={handleClick} />
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}