import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
        <div className="card">
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <caption>{this.props.name}</caption>
                <tr>
                    <th colSpan="3" className="background-dark">
                        <table>
                            <tr>
                                <td><img src={this.props.img} alt="player" /></td>
                                <td>{this.props.name}</td>
                                <td>
                                    <div>
                                        <p>Personality: {this.props.personalityCode}</p>
                                        <p>Love Language: {this.props.loveLanguage}</p>
                                    </div>
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