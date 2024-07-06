import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Style from '../../Style';

export default Input = ({ label, placeholder, command, setCommand }) => {
    const valueLabel = command[label.toLowerCase()] || '';

    const handleInputChange = (value) => {
        setCommand({
          ...command,
          [label.toLowerCase()]: value, 
        });
    };

    return (
        <View>
            <Text style={[Style.m_T20, Style.m_B20, Style.textBold]}>{label}</Text>
            <TextInput
                value={valueLabel}
                onChangeText={handleInputChange}
                placeholder={placeholder}
                keyboardType="default"
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});