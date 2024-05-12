import React from 'react';

interface CardProps {
    name: string;
    img: string;
    personalityCode: string;
    loveLanguage: string;
    personalityDescription: string;
}

export default class Card extends React.Component<CardProps> {
  render() {
    return (
        <div className="card">
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <caption>{this.props.name}</caption>
                <tr>
                    <th colSpan={3} className="background-dark">
                        <table>
                            <tr>
                                <td><img src={this.props.img} alt="player" /></td>
                                <td>{this.props.name}</td>
                                <td colSpan={6}>
                                    <div>
                                        <p>Personality: {this.props.personalityCode}</p>
                                        <p>Love Language: {this.props.loveLanguage}</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>{this.props.personalityCode}</p>
                                        <p>{this.props.personalityDescription}</p>
                                    </div>
                                </td>
                                <td>
                                    <p>Strengths</p>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </td>
                                <td>
                                    <p>Weaknesses</p>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </td>
                                <td>
                                    <p>Opportunities</p>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </th>
                </tr>
            </table>
         </div>
    );
  }
}