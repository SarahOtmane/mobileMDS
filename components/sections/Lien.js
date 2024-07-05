import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Path, Svg, SvgXml } from 'react-native-svg';

const Lien = ({ svg, text }) => {
    return (
        <TouchableOpacity>
            <View>
                <SvgXml xml={svg} width="16" height="17" />
                <Text>{text}</Text>
            </View>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fillRule="evenodd" clipRule="evenodd" d="M14.9137 11.4673C15.163 11.7443 15.1651 12.1958 14.9184 12.4757L10.0506 18L9.14809 16.9967L13.5693 11.9793L9.10205 7.01366L9.99526 6L14.9137 11.4673Z" fill="#999999"/>
            </Svg>
        </TouchableOpacity>
    );
};


export default Lien;
