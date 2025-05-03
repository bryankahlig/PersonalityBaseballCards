import React from 'react';
import PulldownMenu from './PulldownMenu';

export default class DataEntry extends React.Component {
    constructor(defaultValue: object) {
        super(defaultValue);
    }
    render() {
        return (
            <div className="dataentry-container">
                <form>
                    <div className="flex-container">
                        <div className="flex-item"><label>Name:</label>
                            <div><input type="text" defaultValue="John Doe" id="name" /></div></div>
                        <div className="flex-item"><label>Personality:</label>
                            <div>
                                <PulldownMenu options={["INTJ", "INFP", "ENTP", "ESFJ"]} onSelect={(option) => console.log(option)} buttonText="Select Personality" />
                            </div>
                        </div>
                        <div className="flex-item"><label>Love Language:</label>
                            <div><input type="text" defaultValue="Gifts" /></div>
                        </div>
                    </div>
                    <button type="submit">Set</button>
                </form>
            </div>
        );
    }

}
