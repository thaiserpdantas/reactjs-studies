import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css'
import api from './services/api'

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response)
        });
    }, []);

    function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, `Novo projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        // react fragment
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;