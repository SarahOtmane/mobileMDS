import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import compteStyle from '../../styles/compteStyle';

const Button = ({ text, arrow, bottom, onPress, classStyle }) => {
    const handleSubmit = () => {
        onPress();
    };

    return (
        <TouchableOpacity
            style={[styles.button, 
                bottom ? styles.bottomPosition : null,
                text==='Précédent' ? styles.precedentPosition : null,
                classStyle === '' ? null : styles[classStyle]
            ]}
            onPress={handleSubmit}
        >
            <Text style={[styles.buttonText,
                text==='Précédent' ? styles.precedentPositionText : null
            ]}>{text}</Text>
            {arrow && (
                <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.2896 11.9958C18.5701 12.2743 18.5701 12.7257 18.2896 13.0042L12.7541 18.5L11.7384 17.4916L16.766 12.5L11.7384 7.50845L12.7541 6.5L18.2896 11.9958Z"
                        fill="#999999"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.9972 13.2131H5.5V11.7869H17.9972V13.2131Z"
                        fill="#999999"
                    />
                </Svg>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0E1422',
        borderRadius: 10,
        width: 350,
        paddingVertical: 20,
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        marginRight: 10,
    },
    bottomPosition: {
        position: 'absolute',
        top: 500,
    },
    precedentPosition: {
        position: 'absolute',
        top: 430,
        backgroundColor: '#fff',
    },
    precedentPositionText: {
        color: '#000'
    },
    seConnecterButton: {
        marginTop: 260,
        marginHorizontal: 30,
        width: 330
    }
});

export default Button;
