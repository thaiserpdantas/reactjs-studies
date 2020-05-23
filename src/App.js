import React, { useState } from 'react';
import Header from './components/Header'
import './App.css'
import backgroundImage from './assets/background.jpg'

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);

    function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, `Novo projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        // react fragment
        <>
            <Header title="Projects" />

            <img width={300} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;