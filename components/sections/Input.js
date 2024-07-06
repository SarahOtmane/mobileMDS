import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Style from '../../Style';
import { Path, Svg } from 'react-native-svg';

export default Input = ({ label, placeholder, command, setCommand, recherche }) => {
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
            {recherche==='true' &&
                <Svg style={styles.recherche} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M11.2252 18.4798C13.28 18.4798 15.2507 17.6635 16.7037 16.2105C18.1566 14.7575 18.9729 12.7869 18.9729 10.7321C18.9729 8.67725 18.1566 6.70659 16.7037 5.25362C15.2507 3.80065 13.28 2.98438 11.2252 2.98438C9.17041 2.98438 7.19976 3.80065 5.74679 5.25362C4.29381 6.70659 3.47754 8.67725 3.47754 10.7321C3.47754 12.7869 4.29381 14.7575 5.74679 16.2105C7.19976 17.6635 9.17041 18.4798 11.2252 18.4798Z" stroke="#999999" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M20.5224 21.0146L16.5781 17.0703" stroke="#999999" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>                
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#121212',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 25,
        marginRight : 20
    },
    recherche:{
        position: 'absolute',
        top: 70,
        right: 40,
    }
});