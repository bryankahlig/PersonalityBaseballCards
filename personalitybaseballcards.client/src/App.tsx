import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card.tsx';

interface LoveLanguage {
    name: string;
    description: string;
}

interface Peronality {
    code: string;
    name: string;
    description: string;
}

function App() {
    const [loveLanguages, setLoveLanguages] = useState<LoveLanguage[]>();
    const [personalities, setPersonalityTypes] = useState<Peronality[]>();

    useEffect(() => {
        populateLoveLanguages();
        populatePersonalityTypes();
    }, []);

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
            <div>
                <Card img="https://via.placeholder.com/150" name="John Doe" personalityCode="INTJ" loveLanguage="Gifts" />
            </div>
            <h1 id="tabelLabel">Love Languages</h1>
            {loveLanguagesContents}
            <h1 id="tabelLabel">Personality Types</h1>
            {personalityTypesContents}
        </div>
    );

    async function populateLoveLanguages() {
        const response = await fetch('api/loveLanguages');
        const data = await response.json();
        setLoveLanguages(data);
    }

    async function populatePersonalityTypes() {
        const response = await fetch('api/personality');
        const data = await response.json();
        setPersonalityTypes(data);
    }
}

export default App;