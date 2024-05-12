import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card.tsx';
import DataEntry from './components/DataEntry.tsx';

interface LoveLanguage {
    name: string;
    description: string;
}

interface Personality {
    code: string;
    name: string;
    description: string;
}

function App() {
    const [loveLanguages, setLoveLanguages] = useState<LoveLanguage[]>();
    const [personalities, setPersonalityTypes] = useState<Personality[]>();
    const [errors, setErrors] = useState<string[]>();

    useEffect(() => {
        void populateLoveLanguages();
        void populatePersonalityTypes();
    }, []);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const loveLanguagesContents = loveLanguages === undefined
        ? <p><em>Loading... What what???? Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
                : <table className="table table-striped" aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loveLanguages.map(loveLanguage =>
                            <tr key={loveLanguage.name}>
                                <td>{loveLanguage.name}</td>
                                <td>{loveLanguage.description}</td>
                            </tr>
                        )}
                    </tbody>
        </table>;

    const personalityTypesContents = personalities === undefined
        ? <p><em>Loading... What what???? Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {personalities.map(personality =>
                        <tr key={personality.code}>
                            <td>{personality.code}</td>
                            <td>{personality.name}</td>
                            <td>{personality.description}</td>
                        </tr>
                    )}
                </tbody>
              </table>

    return (
        <div>
            <h1 id="tabelLabel">Personality Baseball Cards</h1>
            <div>
                <DataEntry />
            </div>
            <div>
                <Card img="https://via.placeholder.com/150" name="John Doe" personalityCode="INTJ" loveLanguage="Gifts" personalityDescription="blahblahblah" />
            </div>
            <h1 id="tabelLabel">Love Languages</h1>
            {loveLanguagesContents}
            <h1 id="tabelLabel">Personality Types</h1>
            {personalityTypesContents}
        </div>
    );

    async function populateLoveLanguages() {
        await fetch('api/loveLanguages')
            .then(response => response.json())
            .then(data => { setLoveLanguages(data) })
            .catch(err => { setErrors([err]) });
    }

    async function populatePersonalityTypes() {
        await fetch('api/personality')
            .then(response => response.json())
            .then(data => { setPersonalityTypes(data) })
            .catch (err => { setErrors([err]) });
    }
}

export default App;