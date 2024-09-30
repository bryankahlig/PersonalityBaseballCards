import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';

export default class DataEntry extends React.Component {
    render() {
        return (
            <div className="dataentry-container">
                <form>
                    <div ><label>Name:</label>
                        <div><input type="text" value="John Doe" id="name"/></div></div>
                    <div ><label>Personality:</label>
                        <div ><input type="text" value="INTJ" /></div></div>
                    <div ><label>Love Language:</label>
                        <div><input type="text" value="Gifts" /></div></div>
                    <button type="submit">Set</button>
                </form>
            </div>
        );
    }
}
