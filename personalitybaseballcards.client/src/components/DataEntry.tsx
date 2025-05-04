import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

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
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Personality</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">INTJ</a></li>
                                    <li><a className="dropdown-item" href="#">INTJ</a></li>
                                    <li><a className="dropdown-item" href="#">INTJ</a></li>
                                    <li><a className="dropdown-item" href="#">INTJ</a></li>
                                </ul>
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
