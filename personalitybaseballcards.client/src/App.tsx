import { useEffect, useState } from 'react';
import './App.css';

interface LoveLanguage {
    name: string;
    description: string;
}

function App() {
    const [loveLanguages, setLoveLanguages] = useState<LoveLanguage[]>();

    useEffect(() => {
        populateLoveLanguages();
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
    return (
        <div>
            <h1 id="tabelLabel">Love Languages</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {loveLanguagesContents}
        </div>
    );

    async function populateLoveLanguages() {
        const response = await fetch('api/loveLanguages');
        const data = await response.json();
        setLoveLanguages(data);
    }
}

export default App;