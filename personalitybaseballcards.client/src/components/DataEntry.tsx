import React from 'react';

export default class DataEntry extends React.Component {
    constructor(defaultValue: {}) {
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
                            <div ><input type="text" defaultValue="INTJ" /></div></div>
                        <div className="flex-item"><label>Love Language:</label>
                            <div><input type="text" defaultValue="Gifts" /></div></div>
                    </div>
                    <button type="submit">Set</button>
                </form>
            </div>
        );
    }

}
